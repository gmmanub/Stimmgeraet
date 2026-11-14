// =================== Abspielen: Aufnahmen und geladene Mitschnitte, Balken läuft im Blatt mit (Roadmap A4) ===================
// Quellen: jede Aufnahme (Rohklang der Takterkennung) und jeder Abschnitt eines geladenen Mitschnitts, je mit Blattzeit t0 des ersten Samples.
// Uhr: die gemeinsame Taktquelle js/uhr.js (UHR): Blattzeit = Startzeit + (AudioContext-Zeit − Start − Ausgabe-Latenz) × Tempo. Tempo bleibt 1, bis die Zeitdehnung kommt (Loop/Langsamer: nächster Schritt).
const PL={loop:null,src:[],on:false,ctx:null,gain:null,nodes:[],startCtx:0,startT:0,pos:null,end:null,raf:0,follow:true,userT:0,rate:1,progScroll:0,hint:false};
function plAddJob(job){ if(!job||!job.n) return; PL.src.push({t0:job.t0,sr:job.sr,n:job.n,chunks:job.chunks,buf:null}); PL.src.sort((a,b)=>a.t0-b.t0); }
// Geladener Mitschnitt: Abschnitte aus der WAV (Int16) mit ihrer Blattzeit
function plFromCap(){ PL.src=PL.src.filter(s=>!s.cap); if(!CAP.n) return; const segs=(CAP.segs||[]).filter(x=>x&&x.ctxStart!=null&&x.offset!=null&&x.wavStart!=null).sort((a,b)=>a.wavStart-b.wavStart);
  segs.forEach((seg,k)=>{ const a=Math.round(seg.wavStart*CAP.sr), b=k+1<segs.length?Math.round(segs[k+1].wavStart*CAP.sr):CAP.n; if(b-a<CAP.sr*0.2) return;
    PL.src.push({cap:1,t0:seg.ctxStart+seg.offset,sr:CAP.sr,n:b-a,a,buf:null}); });
  PL.src.sort((x,y)=>x.t0-y.t0); }
function plSamples(s){ const x=new Float32Array(s.n); if(s.pcm){ for(let i=0;i<s.n;i++) x[i]=s.pcm[i]/32768; return x; } if(s.cap){ let o=0, i=0; for(const c of CAP.chunks){ const L=c.length; if(o+L>s.a){ const from=Math.max(0,s.a-o), to=Math.min(L,s.a+s.n-o); for(let j=from;j<to;j++) x[i++]=c[j]/32768; } o+=L; if(o>=s.a+s.n) break; } }
  else { let o=0; for(const c of s.chunks){ x.set(c.subarray(0,Math.min(c.length,s.n-o)),o); o+=c.length; if(o>=s.n) break; } } return x; }
// Zeitleiste: alle Quellen in einem Puffer (Lücken = Stille). Blattzeit = T0 + Pufferzeit. Bei 100 % unverfälscht abgespielt, Loop nahtlos über loopStart/loopEnd.
function plTL(){ const sig=PL.src.map(x=>x.t0.toFixed(3)+':'+x.n+':'+x.sr).join(','); if(PL.tl&&PL.tl.sig===sig) return PL.tl;
  const sr=PL.src[0].sr, T0=PL.src[0].t0, n=Math.ceil((plEndT()-T0)*sr)+1, d=new Float32Array(n);
  PL.src.forEach(x=>{ let y=plSamples(x); if(x.sr!==sr){ const r=x.sr/sr, m=Math.floor(y.length/r), z=new Float32Array(m); for(let i=0;i<m;i++){ const q=i*r, k=Math.floor(q), f=q-k; z[i]=y[k]*(1-f)+(y[k+1]||0)*f; } y=z; }
    const o=Math.max(0,Math.round((x.t0-T0)*sr)); d.set(y.subarray(0,Math.max(0,Math.min(y.length,n-o))),o); });
  PL.tl={sig,sr,T0,data:d,buf:null}; return PL.tl; }
function plTLBuf(tl){ if(!tl.buf){ const b=PL.ctx.createBuffer(1,tl.data.length,tl.sr); b.copyToChannel(tl.data,0); tl.buf=b; } return tl.buf; }
// Zeitdehnung ohne Tonhöhenänderung: Signalsmith Stretch (MIT, lib/signalsmith-stretch.js, siehe LIZENZEN.md) – erst geladen, wenn das Tempo ≠ 100 % ist
async function plStretch(tl){ if(!PL.ss){ const m=await import('../lib/signalsmith-stretch.js'); PL.ss=await m.default(PL.ctx); PL.ss.connect(PL.gain); }
  if(PL.ss.tlSig!==tl.sig){ PL.ss.dropBuffers(); await PL.ss.addBuffers([plResample(tl.data,tl.sr,PL.ctx.sampleRate)]); PL.ss.tlSig=tl.sig; } return PL.ss; }
// Die Zeitdehnung erwartet die Abtastrate des Browsers (sonst klingt es z. B. bei 48 kHz-Aufnahme und 44,1 kHz-Ausgabe 8 % zu tief)
function plResample(x,from,to){ if(Math.abs(from-to)<1) return x; const r=from/to, m=Math.floor(x.length/r), y=new Float32Array(m); for(let i=0;i<m;i++){ const q=i*r, k=Math.floor(q), f=q-k; y[i]=x[k]*(1-f)+(x[k+1]||0)*f; } return y; }
function plNow(){ if(!PL.on||!PL.ctx) return PL.pos; return UHR.jetzt(PL.looping&&PL.loop); }
function plEndT(){ let e=0; PL.src.forEach(s=>e=Math.max(e,s.t0+s.n/s.sr)); return e; }
function plFirstT(){ const s=PL.src[0]; if(!s) return 0; const e0=CH.ev.length?CH.ev[0].t:s.t0; return Math.max(s.t0,Math.min(e0-0.4,s.t0+s.n/s.sr)); }
// Start: markierte Takte → erster markierter; sonst die Stelle, an der zuletzt gestoppt wurde; sonst der Anfang
function plStartT(){ if(CH.sel.size){ let m=1e9; CH.sel.forEach(e=>m=Math.min(m,e.t)); const B=sheetBars(), bb=B.find(b=>m>=b.a-1e-3&&m<b.b); return bb&&CH.selBars.size?bb.a:m; }
  if(PL.pos!=null&&PL.pos<plEndT()-0.2) return PL.pos; return plFirstT(); }
function plUI(){ ['#cplayb','#cedPlay'].forEach(id=>{ const b=$(id); if(!b) return; b.classList.toggle('on',PL.on); b.setAttribute('aria-pressed',PL.on?'true':'false'); 
  const p=Math.round((PL.rate||1)*100); b.innerHTML=(PL.on?'<svg viewBox="0 0 24 24"><path d="M8 5.5v13M16 5.5v13" stroke-width="3"/></svg>':'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg>')+(p!==100?'<span class="plbadge">'+fmtNum(p)+'</span>':'');
  b.setAttribute('aria-label',(PL.on?tx('play.pause'):tx('play.knopf'))+(p!==100?' · '+tx('tempo.prozent',{p:fmtNum(p)}):'')); }); }
async function plPlay(t,end){ if(!PL.src.length) return cMsg('Nichts zum Abspielen · erst aufnehmen oder einen Mitschnitt laden'), false;
  plStop(true); if(t==null) t=plStartT(); const E=plEndT(); if(t>=E-0.05) t=plFirstT();
  if(!PL.ctx||PL.ctx.state==='closed'){ try{ PL.ctx=UHR.audio(); if(!PL.ctx) throw 0; PL.gain=PL.ctx.createGain(); PL.gain.connect(PL.ctx.destination); }catch(e){ PL.ctx=null; return cMsg('Abspielen geht in diesem Browser nicht'), false; } }
  try{ await PL.ctx.resume(); }catch(e){}
  const c=PL.ctx, tl=plTL(), rate=PL.rate||1, L=PL.loop&&t>=PL.loop.a-1e-3&&t<PL.loop.e?PL.loop:null; let now; PL.gain.gain.cancelScheduledValues(0); PL.gain.gain.value=1;
  if(Math.abs(rate-1)<1e-3){ now=c.currentTime+0.06; const n=c.createBufferSource(); n.buffer=plTLBuf(tl); n.connect(PL.gain); if(L){ n.loop=true; n.loopStart=L.a-tl.T0; n.loopEnd=L.e-tl.T0; } try{ n.start(now,Math.max(0,t-tl.T0)); }catch(e){} PL.nodes.push(n); }
  else { let ss=null; try{ ss=await plStretch(tl); }catch(e){ ss=null; } if(!ss){ PL.rate=1; plUI(); cMsg(tx('tempo.fehler')); return plPlay(t,end); }
    let lat=0; try{ lat=Number(ss.latency&&ss.latency()); }catch(e){} if(!isFinite(lat)||lat<0) lat=0.1; now=c.currentTime+Math.max(0.12,lat+0.06); ss.schedule({output:now,active:true,input:Math.max(0,t-tl.T0),rate,semitones:0,loopStart:L?L.a-tl.T0:0,loopEnd:L?L.e-tl.T0:0}); PL.ssOn=true; }
  PL.looping=!!L;
  PL.startCtx=now; PL.startT=t; UHR.setze(t,now,rate); PL.end=L?null:(end!=null?end:null); PL.on=true; PL.follow=true; plUI();
  if(CH.mic&&!PL.hint){ PL.hint=true; cMsg('Abspielen läuft · der Lautsprecher kommt ins Mikro'); }
  cancelAnimationFrame(PL.raf); const tick=()=>{ if(!PL.on) return; const tn=plNow(); if((PL.end!=null&&tn>=PL.end)||(!PL.looping&&tn>=E+0.05)){ plStop(); if(PL.end==null) PL.pos=null; return; } plDraw(tn); PL.raf=requestAnimationFrame(tick); }; PL.raf=requestAnimationFrame(tick);
  return true; }
function plStop(keep){ const was=PL.on; if(was) PL.pos=plNow(); PL.nodes.forEach(n=>{ try{ n.stop(); }catch(e){} try{ n.disconnect(); }catch(e){} }); PL.nodes=[]; if(PL.ss&&PL.ssOn){ try{ PL.ss.schedule({active:false}); }catch(e){} PL.ssOn=false; } PL.on=false; UHR.halt(); PL.looping=false; cancelAnimationFrame(PL.raf);
  if(!keep){ plUI(); plDraw(null); if(was&&PL.pos!=null){ const B=sheetBars(), k=B.findIndex(b=>PL.pos>=b.a-1e-3&&PL.pos<b.b); if(k>=0&&!VOX.active) cMsg('Pause · Takt '+(k+1)); } } }
function plSelRange(){ if(!CH.sel.size) return null; const B=sheetBars(); let m0=1e9,m1=-1e9; CH.sel.forEach(x=>{ m0=Math.min(m0,x.t); m1=Math.max(m1,x.t); });
  const k0=B.findIndex(b=>m0>=b.a-1e-3&&m0<b.b), k1=B.findIndex(b=>m1>=b.a-1e-3&&m1<b.b); if(k0<0) return null;
  return {a:B[k0].a,e:(B[k1<0?k0:k1]).b,txt:k1>k0?(k0+1)+' bis '+(k1+1):String(k0+1)}; }
function plToggle(){ if(PL.on){ plStop(); return; }
  // Markierte Takte gewinnen gegen einen alten Loop (Manu 14.11.): der Loop wandert auf die Markierung
  if(PL.loop){ const r=plSelRange(); if(r&&(Math.abs(r.a-PL.loop.a)>1e-3||Math.abs(r.e-PL.loop.e)>1e-3)){ PL.loop={a:r.a,e:r.e,txt:r.txt}; cMsg('Loop Takt '+r.txt); plPlay(r.a,r.e); return; } } if(!S.plHelp&&PL.src.length){ S.plHelp=1; save(); cMsg('Abspielen · Tipp: Taktnummer antippen springt dorthin'); } if(PL.loop){ const p=PL.pos; plPlay(p!=null&&p>=PL.loop.a&&p<PL.loop.e?p:PL.loop.a,PL.loop.e); return; } plPlay(); }
function plSeek(t){ if(PL.loop&&(t<PL.loop.a-1e-3||t>=PL.loop.e)){ PL.loop=null; cMsg('Loop aus'); } if(PL.on) plPlay(t,PL.end!=null&&t<PL.end?PL.end:null); else PL.pos=t; }
function plReset(){ plStop(); PL.loop=null; PL.src=[]; PL.tl=null; PL.pos=null; plDraw(null); }
// Ton leiser, solange zugehört wird (damit die Spracherkennung Manu versteht)
function plDuck(on){ if(!PL.ctx||!PL.gain) return; const g=PL.gain.gain, n=PL.ctx.currentTime; g.cancelScheduledValues(n); g.setTargetAtTime(on?0.2:1,n,0.08); }
// Balken: Rechteck im Blatt (pointer-events aus), beim Pausieren gedämpft an der Stoppstelle; Blatt scrollt mit
function plDraw(t){ const svg=$('#cstrip svg'); let r=svg&&svg.querySelector('#plHead'); if(t==null||!inSheetView()||!svg||!SHEET.geo.length){ if(r) r.remove(); return; }
  const g=SHEET.geo.find(q=>t>=q.a-1e-3&&t<q.b)||null; if(!g){ if(r) r.remove(); return; }
  if(!r){ r=document.createElementNS('http://www.w3.org/2000/svg','rect'); r.id='plHead'; r.setAttribute('pointer-events','none'); r.setAttribute('rx','1.5'); svg.appendChild(r); }
  const f=clamp((t-g.a)/Math.max(1e-6,g.b-g.a),0,1); let x=g.x0+f*g.w;
  // letzter Schlag: sanft über den Rand zur „1“ des nächsten Takts gleiten (Manu 14.11.: „softer“) (gleiche Zeile), sonst springt der Balken um die Randbreite
  { const nbt=(SHEET.geo.nb||4), f0=1-Math.min(2,nbt/2)/nbt; if(f>f0){ const nx=SHEET.geo.find(q=>Math.abs(q.a-g.b)<1e-3&&q.y0===g.y0); if(nx){ const gap=nx.x0-(g.x0+g.w), u=(f-f0)/(1-f0); x+=gap*u*u*(3-2*u); } } } // weich: Geschwindigkeit steigt und fällt sanft (smoothstep) r.setAttribute('x',(x-1.5).toFixed(1)); r.setAttribute('y',g.y0+6); r.setAttribute('width',3); r.setAttribute('height',Math.max(10,g.y1-g.y0-10));
  r.setAttribute('x',(x-1.5).toFixed(1)); r.setAttribute('y',g.y0+6); r.setAttribute('width',3); r.setAttribute('height',Math.max(10,g.y1-g.y0-10));
  r.setAttribute('fill','var(--acc)'); r.setAttribute('opacity','.9');
  if(!PL.on) return; if(!PL.follow&&performance.now()-PL.userT>3000) PL.follow=true; if(!PL.follow) return;
  const sc=$('#cbody'), rr=svg.getBoundingClientRect(), k=rr.width/Math.max(1,SHEET.w), y0=rr.top+g.y0*k, y1=rr.top+g.y1*k, br=sc.getBoundingClientRect();
  if(y0<br.top+8||y1>br.bottom-br.height*0.3){ PL.progScroll=performance.now(); sc.scrollTop+=y0-(br.top+br.height*0.18); }
  const st=$('#cstrip'); if(st.scrollWidth>st.clientWidth+2){ const sx=rr.left+x*k, sr=st.getBoundingClientRect(); if(sx<sr.left+20||sx>sr.right-40){ CH.progScroll=true; st.scrollLeft+=sx-(sr.left+sr.width*0.3); } } }
// Selbst scrollen/zoomen: Mitscrollen kurz aussetzen (3 s ohne Berührung, dann folgt es wieder)
['touchstart','wheel'].forEach(ev=>$('#cbody').addEventListener(ev,()=>{ if(PL.on){ PL.follow=false; PL.userT=performance.now(); } },{passive:true}));
$('#cbody').addEventListener('scroll',()=>{ if(PL.on&&performance.now()-PL.progScroll>250){ PL.follow=false; PL.userT=performance.now(); } },{passive:true});
// Während des Abspielens: irgendwo in einen Takt tippen = an den Taktanfang springen. Nichts wird ausgewählt oder bearbeitet (Manu 14.11.).
// Abgefangen vor allen anderen Bearbeitern (Finger: touchstart/touchend, Maus: click). Zwei Finger (Zoomen) und Scrollen bleiben frei.
function plTapJump(cx,cy,tg){ const B=sheetBars(); let k=-1; const bn=tg&&tg.closest&&tg.closest('[data-barno]'); // Taktnummer steht links vom Strich: sie meint ihren eigenen Takt
  if(bn) k=+bn.dataset.barno; else { const t=sheetTimeAt(cx,cy); if(t==null) return; k=B.findIndex(b=>t>=b.a-1e-3&&t<b.b); } if(k<0||!B[k]) return; plSeek(B[k].a); cMsg('Ab Takt '+(k+1)); }
const PLT={x:0,y:0,t:0,on:false};
$('#cstrip').addEventListener('touchstart',e=>{ if(!PL.on||e.touches.length!==1) return; const t=e.touches[0]; PLT.x=t.clientX; PLT.y=t.clientY; PLT.t=performance.now(); PLT.on=true; e.stopPropagation(); },{capture:true,passive:true});
$('#cstrip').addEventListener('touchend',e=>{ if(!PLT.on) return; PLT.on=false; e.stopPropagation(); const t=e.changedTouches[0]; if(!PL.on||e.touches.length) return;
  if(Math.hypot(t.clientX-PLT.x,t.clientY-PLT.y)<12&&performance.now()-PLT.t<600){ if(e.cancelable) e.preventDefault(); plTapJump(t.clientX,t.clientY,e.target); } },{capture:true,passive:false});
$('#cstrip').addEventListener('click',e=>{ if(!PL.on) return; e.stopPropagation(); e.preventDefault(); plTapJump(e.clientX,e.clientY,e.target); },true);
['mousedown','pointerdown'].forEach(ev=>$('#cstrip').addEventListener(ev,e=>{ if(PL.on&&e.pointerType!=='touch') e.stopPropagation(); },true));
{ const b=$('#cplayb'); b.classList.remove('soon'); delete b.dataset.soon; b.setAttribute('aria-pressed','false'); b.addEventListener('click',plToggle); $('#cedPlay').addEventListener('click',plToggle); }
// Tempo und Loop per Finger: Play gedrückt halten → Pop-up (Platzierung wie die Auswahl-Pop-ups). Tempo in Prozent, Tonhöhe bleibt.
function plRatePct(){ return Math.round((PL.rate||1)*100); }
function plSetRate(p){ p=clamp(Math.round(p),25,150); const was=PL.on, at=was?plNow():null; PL.rate=p/100; plUI(); plPopUI(); if(was) plPlay(at,PL.end); return p; }
function plLoopTxt(r){ return r.txt.includes('bis')?tx('tempo.takte.markiert',{b:r.txt}):tx('tempo.takte.einer',{b:r.txt}); }
// Loop-Bereich für den Finger: markierte Takte, sonst der Takt, in dem gerade gespielt wird bzw. gestoppt wurde
function plLoopRange(){ const r=plSelRange(); if(r) return r; const B=sheetBars(), x=PL.on?plNow():PL.pos; const k=x==null?-1:B.findIndex(b=>x>=b.a-1e-3&&x<b.b); return k<0?null:{a:B[k].a,e:B[k].b,txt:String(k+1)}; }
function plPopUI(){ const P=$('#cplPop'); if(!P) return; const p=plRatePct(); $('#cplPct').textContent=tx('tempo.prozent',{p:fmtNum(p)});
  P.querySelectorAll('[data-r]').forEach(b=>{ b.textContent=tx('tempo.prozent',{p:fmtNum(+b.dataset.r)}); b.setAttribute('aria-pressed',+b.dataset.r===p?'true':'false'); });
  const L=$('#cplLoop'), r=PL.loop||plLoopRange(); L.setAttribute('aria-pressed',PL.loop?'true':'false'); L.disabled=!r; L.textContent=PL.loop?tx('tempo.loop.an',{takte:plLoopTxt(PL.loop)}):r?tx('tempo.loop.aus',{takte:plLoopTxt(r)}):tx('tempo.loop.leer');
  $('#cplHint').textContent=p<75?tx('tempo.hinweis.langsam'):''; }
function plOpenPop(btn){ txApply($('#cplPop')); plPopUI(); toggleCPop('#cplPop',btn); }
$('#cplMinus').addEventListener('click',()=>plSetRate(plRatePct()-5));
$('#cplPlus').addEventListener('click',()=>plSetRate(plRatePct()+5));
$('#cplPop').addEventListener('click',e=>{ const b=e.target.closest('[data-r]'); if(b) plSetRate(+b.dataset.r); });
$('#cplLoop').addEventListener('click',()=>{ if(PL.loop){ PL.loop=null; if(PL.on) plPlay(plNow(),null); } else { const r=plLoopRange(); if(!r) return; PL.loop={a:r.a,e:r.e,txt:r.txt}; if(PL.on) plPlay(plNow()>=r.a&&plNow()<r.e?plNow():r.a,r.e); } plPopUI(); });
// Gedrückt halten (≈ 0,45 s) öffnet das Pop-up, kurzes Tippen bleibt Play/Pause
['#cplayb','#cedPlay'].forEach(id=>{ const b=$(id); let tm=0; b.dataset.lp='';
  b.addEventListener('pointerdown',()=>{ clearTimeout(tm); b.dataset.lp=''; tm=setTimeout(()=>{ b.dataset.lp='1'; if(navigator.vibrate) try{ navigator.vibrate(15); }catch(e){} plOpenPop(id); },450); });
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>b.addEventListener(ev,()=>clearTimeout(tm)));
  b.addEventListener('contextmenu',e=>e.preventDefault());
  b.addEventListener('click',e=>{ if(b.dataset.lp){ b.dataset.lp=''; e.stopImmediatePropagation(); e.preventDefault(); } },true); });
{ const _rs=renderStrip; renderStrip=function(){ _rs.apply(this,arguments); if(PL.on) plDraw(plNow()); }; }
// =================== Zurück-Taste (Android) und Notfall-Sicherung (Manu 14.11.) ===================
// Zurück schließt nur die oberste Ebene (Pop-up → Menü/Fenster → Bearbeiten-Feld → Edit-Modus → Zuhören/Aufnahme/Play → Akkord-Ansicht).
// Chrome überspringt beim Zurück Verlaufseinträge, die ohne Berührung angelegt wurden – deshalb wird der Schutz-Eintrag bei jeder Berührung (neu) gesetzt.
const BK={armed:false};
function bkArm(){ if(BK.armed) return; try{ history.pushState({gitarre:1},''); BK.armed=true; }catch(e){} }
['pointerdown','touchstart','keydown'].forEach(ev=>document.addEventListener(ev,bkArm,{capture:true,passive:true}));
function bkOpen(sel){ const el=$(sel); return el&&el.classList.contains('on')?el:null; }
function bkStep(){
  if(typeof VOX!=='undefined'&&VOX.active){ voxFinish('Abgebrochen'); return true; }
  if(document.querySelector('#chords .cpop.on')){ closeCPops(); return true; }
  if(document.querySelector('#esheet .epop.on')){ closeEPops(); return true; }
  if(bkOpen('#cmenu')){ closeCMenu(); return true; }
  for(const s of ['#hsheet','#msheet','#sheet']){ const el=bkOpen(s); if(el){ el.classList.remove('on'); return true; } }
  if(bkOpen('#esheet')){ closeEdit(); return true; }
  if(typeof ED!=='undefined'&&ED.tgt){ const b=document.querySelector('#cedbar .cedtgt button'); if(b) b.click(); else ED.tgt=null; return true; }
  if(CH.edm){ const d=$('#cedDone'); if(d) d.click(); else setEditMode(false); return true; }
  if(CH.mic){ chordMicOff(); return true; }
  if(PL.on){ plStop(); return true; }
  if(bkOpen('#chords')){ stopChords(); return true; }
  return false; }
window.addEventListener('popstate',()=>{ BK.armed=false; if(bkStep()) return;
  // ganz oben: nur mit Rückfrage die App verlassen, wenn ein Blatt da ist (die Notfall-Sicherung hat es aber gespeichert)
  if((CH.ev.length||PL.src.length)&&!confirm('App verlassen? Das Blatt ist als Notfall-Sicherung gemerkt und lässt sich beim nächsten Öffnen wiederherstellen.')) return;
  NF.save(true); history.back(); });

// Notfall-Sicherung: letzte Sitzung (Blatt + Klang) im Browser (IndexedDB, nur auf diesem Gerät). Beim Öffnen der Akkord-Ansicht: „Letzte Sitzung wiederherstellen?“
const NF={db:null,sig:'',ksig:'',offer:null,
  open(){ if(this.db) return Promise.resolve(this.db); return new Promise((res,rej)=>{ try{ const r=indexedDB.open('gitarre-notfall',1); r.onupgradeneeded=()=>r.result.createObjectStore('kv'); r.onsuccess=()=>{ this.db=r.result; res(this.db); }; r.onerror=()=>rej(r.error); }catch(e){ rej(e); } }); },
  async get(k){ const db=await this.open(); return new Promise(res=>{ const q=db.transaction('kv').objectStore('kv').get(k); q.onsuccess=()=>res(q.result); q.onerror=()=>res(null); }); },
  async put(k,v){ const db=await this.open(); return new Promise(res=>{ const tx=db.transaction('kv','readwrite'); tx.objectStore('kv').put(v,k); tx.oncomplete=()=>res(true); tx.onerror=()=>res(false); }); },
  blattSig(){ const e=CH.ev[CH.ev.length-1]; return CH.ev.length+':'+UNDO.length+':'+REDO.length+':'+CH.grids.length+':'+(e?e.t.toFixed(3)+e.key:'')+':'+JSON.stringify(S.ablauf||'').length+':'+PL.src.length; },
  async save(force){ if(!CH.ev.length&&!PL.src.length) return; // leeres Blatt überschreibt keine Sicherung
    if(this.offer){ this.offer=null; const y=$('#nfYes'); if(y) $('#cbanner').classList.remove('on'); } // neu aufgenommen statt wiederhergestellt: die neue Sitzung wird gesichert
    const sig=this.blattSig(); if(!force&&sig===this.sig) return; this.sig=sig;
    try{ await this.put('blatt',{when:new Date().toISOString(),ev:CH.ev.map(e=>Object.assign({},e)),grids:CH.grids,onsets:CH.onsets||[],beatCh:CH.beatCh||[],ablauf:S.ablauf||null,ablaufOn:S.ablaufOn!==false,tNow:CH.tNow,song:CH.song||null,play:S.play});
      const ks=PL.src.map(s=>s.t0.toFixed(3)+':'+s.n).join(','); if(ks!==this.ksig){ this.ksig=ks; await this.put('klang',{sig:ks,src:PL.src.map(s=>{ const x=plSamples(s), q=new Int16Array(x.length); for(let i=0;i<x.length;i++) q[i]=Math.max(-32768,Math.min(32767,Math.round(x[i]*32767))); return {t0:s.t0,sr:s.sr,pcm:q}; })}); } }catch(e){} },
  async check(){ if(CH.ev.length||CH.mic) return; let b=null; try{ b=await this.get('blatt'); }catch(e){} if(!b||!b.ev||!b.ev.length) return;
    this.offer=b; if(S.nfAuto!==false){ await this.restore(); const bn=$('#cbanner'); if(bn.classList.contains('on')){ const n=document.createElement('button'); n.className='mini'; n.id='nfLeer'; n.textContent='Leer starten'; n.style.marginLeft='6px'; n.onclick=()=>$('#creset').click(); bn.appendChild(n); } return; } // Manu 14.11.: automatisch zurückholen (kein Angebot mehr); „Leer starten“ = Reset
     const nT=b.ev.filter(e=>e.type==='note').length, nA=b.ev.length-nT, d=new Date(b.when), w=d.toLocaleDateString('de-DE',{day:'numeric',month:'numeric'})+' '+d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
    const bn=$('#cbanner'); clearTimeout(BPB.bt); bn.textContent='Letzte Sitzung ('+w+', '+nA+' Akkorde, '+nT+' Töne) '; const y=document.createElement('button'); y.className='mini'; y.id='nfYes'; y.textContent='Wiederherstellen'; const n=document.createElement('button'); n.className='mini'; n.id='nfNo'; n.textContent='Nein'; n.style.marginLeft='6px';
    bn.appendChild(y); bn.appendChild(n); bn.classList.add('on'); y.onclick=()=>this.restore(); n.onclick=()=>{ this.offer=null; bn.classList.remove('on'); }; },
  async restore(){ const b=this.offer; this.offer=null; if(!b) return; let k=null; try{ k=await this.get('klang'); }catch(e){}
    closeEdit(); setEditMode(false); plReset(); CH.ev=b.ev.map(e=>Object.assign({},e)).sort((x,y)=>x.t-y.t); CH.grids=(b.grids||[]).map(g=>Object.assign({},g,{lines:g.lines.slice()})); CH.onsets=b.onsets||[]; CH.beatCh=b.beatCh||[]; CH.song=b.song||null;
    if(b.ablauf){ S.ablauf=b.ablauf; S.ablaufOn=b.ablaufOn; } if(b.play) S.play=b.play; save(); try{ playUI(); }catch(e){}
    const tEnd=Math.max(0,...CH.ev.map(e=>e.t),...CH.grids.map(g=>g.end||0)); CH.tNow=Math.max(b.tNow||0,tEnd+0.5); CH.tBase=CH.tNow;
    if(k&&k.src) k.src.forEach(s=>PL.src.push({t0:s.t0,sr:s.sr,n:s.pcm.length,pcm:s.pcm,buf:null})); PL.src.sort((x,y)=>x.t0-y.t0); this.ksig=k?k.sig:'';
    UNDO.length=0; REDO.length=0; CH.rowPlan=null; CH.view='sheet'; metFollowGrid(); CH.stripKey=''; CH.key=''; CH.listKey=''; CH.bigK=null; undoUI(); chordsUI(); this.sig=this.blattSig();
    cMsg('Letzte Sitzung wiederhergestellt'+(PL.src.length?' · mit Klang':'')); } };
setInterval(()=>NF.save(false),4000);
// Menü ⋯ / Sprache: letzte Sitzung holen (auch wenn der Hinweis in der Statuszeile verdrängt wurde); ersetzt das Blatt nur nach Rückfrage
async function nfRestoreMenu(){ let b=null; try{ b=await NF.get('blatt'); }catch(e){} if(!b||!b.ev||!b.ev.length) return cMsg('Keine gesicherte Sitzung da');
  if(CH.mic) return cMsg('Erst die Aufnahme stoppen'); const same=b.ev.length===CH.ev.length&&NF.sig===NF.blattSig(); if(same) return cMsg('Das ist schon die letzte Sitzung');
  if(CH.ev.length&&!confirm('Aktuelles Blatt durch die letzte Sitzung ersetzen?')) return; NF.offer=b; await NF.restore(); }
$('#cmRestore').addEventListener('click',nfRestoreMenu);
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden') NF.save(true); });
