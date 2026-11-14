// =================== Bearbeiten ===================
const ED={ev:null};
const POWER=r=>{const rf=(r-4+12)%12; return rf<=7?[rf,rf+2,rf+2,-1,-1,-1]:[-1,(r-9+12)%12,(r-9+12)%12+2,(r-9+12)%12+2,-1,-1];};
function evFrets(e){ const L=evVoicings(e); if(e.type==='chord'&&e.bass==null&&S.voi){ const id=S.voi[e.r+'|'+QUAL[e.qi].id]; const v=id&&L.find(x=>x.id===id); if(v) return v.f; } return L[0].f; }
function evVoicings(e){ if(e.type==='power') return [{f:POWER(e.r),b:0,id:'p'}]; return e.bass!=null&&e.bass!==e.r?slashVoicings(e.r,e.qi,e.bass):voicings(e.r,e.qi); }
// Griffe mit anderem Basston (D/F♯ = 2x0232, G/B = x20003, C/E = 032010): passende vorhandene Griffe, sonst Basston auf E-, A- oder D-Saite setzen
function slashVoicings(r,qi,b){ const base=voicings(r,qi), out=[], seen=new Set(), add=f=>{ const id=f.join(); if(seen.has(id)) return; seen.add(id); out.push({f,b:0,id}); };
  const low=f=>{ for(let s=0;s<6;s++) if(f[s]>=0) return (OPEN_STR[s]+f[s])%12; return null; };
  base.forEach(v=>{ if(low(v.f)===b) add(v.f.slice()); });
  base.slice(0,3).forEach(v=>{ for(let s=0;s<3;s++){ const fb=((b-OPEN_STR[s])%12+12)%12; if(fb>5) continue;
    const f=v.f.slice(); for(let k=0;k<s;k++) f[k]=-1; f[s]=fb; if(s+1<6&&f[s+1]>=0&&Math.abs(f[s+1]-fb)>4) continue; add(f); break; } });
  if(!out.length) base.forEach(v=>add(v.f.slice()));
  return out; }
function keyParts(k){const [t,r,q]=k.split('|');return {type:t,r:+r,qi:q===''?null:+q};}
function evName(e){const p=labelParts(e);return p.root+p.suf;}
// Ähnlich klingende Akkorde aus dem gespeicherten Klangbild
function similar(e){
  const cn=e.cn; if(!cn) return [];
  const L=[]; for(const t of TPL){let d=0; for(let k=0;k<12;k++) d+=cn[k]*t.v[k]; L.push({r:t.r,qi:t.qi,sc:d*QUAL[t.qi].p});}
  // Akkorde mit genau denselben Tönen (z. B. Esus4 = Asus2) zuerst
  const pcs=(r,qi)=>QUAL[qi].iv.map(i=>(r+i)%12).sort((a,b)=>a-b).join();
  const mine=e.type==='chord'?pcs(e.r,e.qi):null;
  L.forEach(x=>{ if(mine&&pcs(x.r,x.qi)===mine) x.sc+=1; });
  L.sort((a,b)=>b.sc-a.sc);
  return L.filter(x=>!(e.type==='chord'&&x.r===e.r&&x.qi===e.qi)).slice(0,5);
}
// Namensvorliebe: gleiche Töne, anderer Name (Esus4 = Asus2, Em7 = G6 …). Einmal umbenannt gilt immer.
const pcsKey=(r,qi)=>QUAL[qi].iv.map(k=>(r+k)%12).sort((a,b)=>a-b).join(',');
function preferName(c){ if(!c||c.type!=='chord'||c.qi==null) return c; const p=(S.alias||{})[pcsKey(c.r,c.qi)]; if(p&&(p.r!==c.r||p.qi!==c.qi)){ c.r=p.r; c.qi=p.qi; c.key='chord|'+p.r+'|'+p.qi; if(c.bass===c.r) c.bass=null; } return c; }
function setEv(e,r,qi,type){
  if(type==='chord'&&e.type==='chord'&&e.qi!=null&&qi!=null&&pcsKey(e.r,e.qi)===pcsKey(r,qi)&&(e.r!==r||e.qi!==qi)){ S.alias=Object.assign({},S.alias||{},{[pcsKey(r,qi)]:{r,qi}}); save(); }
  snap();
  e.type=type; e.r=r; e.qi=type==='chord'?qi:null; e.key=type+'|'+r+'|'+(type==='chord'?qi:''); if(type!=='chord'||e.bass===r) e.bass=null;
  e.f=evFrets(e); e.vi=0; e.edited=true; learnFrom(e);
  const E=CH.eng; if(E&&lastChordEv()===e){ E.cur={type,r,qi:e.qi,key:e.key,sc:1}; E.cand=null; E.vIdx=0; E.vLock=true; }
}
// keep: beim Durchklicken/Einfügen bleibt das Feld an seinem Platz, nur die Auswahl wandert
function openEdit(e,keep){ if(!e) return; if(e.chk){ const w=e.chkWhy; delete e.chk; delete e.chkWhy; chkUI(); cMsg('Angeschaut'+(w?' · Hinweis war: '+w:'')); } const was=$('#esheet').classList.contains('on'); ED.ev=e; closeEPops(); renderEdit(); $('#esheet').classList.add('on'); root.classList.add('ced'); closeCPops(); ED.open=!(keep&&was); CH.stripKey=''; renderStrip(); requestAnimationFrame(()=>edPlace(ED.open)); }
function closeEdit(){ const A=$('#edArrow'); if(A) A.style.display='none'; ED.side=null; if(ED.global&&ED.ev){ const g=ED.global, x=ED.ev; ED.global=null; const L=CH.ev.filter(y=>y!==x&&y.type!=='note'&&evName(y)===g.name);
  if(L.length&&(evName(x)!==g.name||(x.f||[]).join(',')!==g.fk)){ snap(); L.forEach(y=>{ y.type=x.type; y.r=x.r; y.qi=x.qi; y.bass=x.bass; y.key=x.key; y.f=(x.f||[]).slice(); y.edited=true; }); cMsg(g.name+' → '+evName(x)+' im ganzen Stück ('+(L.length+1)+'×)'); } } ED.global=null; ED.ev=null; $('#esheet').classList.remove('on'); root.classList.remove('ced'); CH.stripKey=''; CH.key=''; }
const SNAME=['tiefe E','A-Saite','D-Saite','G-Saite','B-Saite','hohe e'], SSHORT=['E','A','D','G','B','e'];
const sName=(i,short)=>{ const n=(short?SSHORT:SNAME)[i]; return S.notation==='H'?n.replace('B','H'):n; };
const ARTN={pick:'• Anschlag',slide:'/ Slide',h:'h Hammer-on',p:'p Pull-off'}, GRIDN={'8':'1/8','16':'1/16','12':'Triole'};
function noteName2(m){return rootName(((m%12)+12)%12)+(Math.floor(m/12)-1);}
// Stelle im Takt als Zählzeit: 2, 2+ (Achtel), 2e / 2a (Sechzehntel), 2⅓ / 2⅔ (Triolen)
function countLabel(t){
  const bars=sheetBars(); const k=bars.findIndex(bb=>t>=bb.a-1e-3&&t<bb.b-1e-3); if(k<0) return null;
  const bb=bars[k], beats=bb.g.beats, fr=(t-bb.a)/(bb.b-bb.a)*beats; let beat=Math.floor(fr+1e-3), rem=fr-beat;
  const subs=[[0,''],[0.25,'e'],[1/3,'⅓'],[0.5,'+'],[2/3,'⅔'],[0.75,'a'],[1,'']]; let best=subs[0],bd=9;
  subs.forEach(x=>{ const d=Math.abs(rem-x[0]); if(d<bd){bd=d;best=x;} });
  if(best[0]===1) beat++; const bar=k+1;
  if(beat>=beats) return 'Takt '+(bar+1)+' · 1';
  return 'Takt '+bar+' · '+(bd>0.05?'≈ ':'')+(beat+1)+best[1]; }
function closeEPops(){ const d=$('#epDim'); if(d) d.classList.remove('on'); document.querySelectorAll('#esheet .epop.on').forEach(p=>p.classList.remove('on')); document.querySelectorAll('#esheet .ef.open').forEach(b=>b.classList.remove('open')); }
function renderEdit(){
  const e=ED.ev; if(!e) return;
  { const i=CH.ev.indexOf(e); $('#ePrev').disabled=i<=0; $('#eNext').disabled=i<0||i>=CH.ev.length-1; }
  const note=e.type==='note';
  $('#esheet').classList.toggle('note',note);
  const m=Math.floor(e.t/60), sec=Math.floor(e.t%60), pos=(!CH.mic&&countLabel(e.t))||`bei ${m}:${String(sec).padStart(2,'0')}`;
  $('#eWhen').textContent=ED.global?'Akkord · im ganzen Stück':(note?'Ton':'Akkord')+' · '+pos;
  $('#eMid').textContent=note?'♪':'♪';
  if(note){
    $('#eName').textContent=noteName2(e.m); $('#eLrn').textContent=e.learned?'Aus deiner Korrektur gelernt':(e.origM!=null&&e.m!==e.origM?'Korrektur wird gemerkt · erkannt war '+noteName2(e.origM):'');
    $('#eStrB').textContent=sName(e.s); $('#eFretB').textContent='Bund '+e.f;
    $('#eArtB').textContent=ARTN[e.art||'pick']; $('#eGridB').textContent='Raster '+GRIDN[S.grid||'8'];
    $('#eFret').innerHTML=Array.from({length:16},(_,f)=>`<button data-f="${f}" aria-pressed="${f===e.f}">${f}</button>`).join('');
    document.querySelectorAll('#eArt button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.a===(e.art||'pick')));
    document.querySelectorAll('#eGrid button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===(S.grid||'8')));
    $('#eStr').innerHTML=fretOptions(e.m).map(o=>`<button data-s="${o.s}" aria-pressed="${o.s===e.s}">${sName(o.s,true)} · ${o.f}</button>`).join('');
    return;
  }
  $('#eName').textContent=evName(e);
  $('#eLrn').textContent=e.orig&&e.key!==e.orig?'Korrektur wird gemerkt · erkannt war '+evName(Object.assign({},e,keyParts(e.orig))):'';
  const sim=similar(e);
  $('#eSim').innerHTML=`<button aria-pressed="true" data-cur="1">${evName(e)}</button>`+sim.map(x=>`<button data-r="${x.r}" data-q="${x.qi}">${rootName(x.r)}${QUAL[x.qi].id}</button>`).join('');
  const RA=[9,10,11,0,1,2,3,4,5,6,7,8]; // ab A: A, B♭, B, C … A♭ (Manus A-B-C-Logik)
  $('#eRoot').innerHTML=RA.map(r=>`<button data-v="${r}" aria-pressed="${e.r===r}">${rootName(r)}</button>`).join('');
  const qs=QUAL.map((q,i)=>({v:String(i),t:q.id||'Dur'})).concat([{v:'p',t:'5'}]);
  $('#eBass').innerHTML=[{v:'',t:'–'}].concat(RA.map(r=>({v:String(r),t:rootName(r)}))).map(b=>`<button data-v="${b.v}" aria-pressed="${b.v===''?e.bass==null:String(e.bass)===b.v}">${b.t}</button>`).join('');
  $('#eQual').innerHTML=qs.map(q=>`<button data-v="${q.v}" aria-pressed="${e.type==='power'?q.v==='p':String(e.qi)===q.v}">${q.t}</button>`).join('');
  $('#eRootB').innerHTML=`<small>Grundton</small>${rootName(e.r)}`;
  $('#eQualB').innerHTML=`<small>Art</small>${e.type==='power'?'5':(QUAL[e.qi].id||'Dur')}`;
  $('#eBassB').innerHTML=`<small>Bass</small>${e.type==='chord'&&e.bass!=null?'/'+rootName(e.bass):'–'}`;
  const L=evVoicings(e), cur=(e.f||[]).join(), f=e.f||(L[0]||{}).f||[];
  $('#eDiagB').innerHTML=diagramSVG({f,b:(L.find(v=>v.f.join()===f.join())||{b:0}).b})+(L.length>1?`<small class="evn">${Math.max(1,L.findIndex(v=>v.f.join()===cur)+1)}/${L.length}</small>`:'');
  $('#eVois').innerHTML=L.slice(0,8).map((w,i)=>`<button data-i="${i}" aria-pressed="${w.f.join()===cur}" aria-label="Griff ${w.id}">${diagramSVG(w)}</button>`).join('');
}

// =================== Test-Mitschnitt ===================
// Speichert das rohe Mikrofonsignal und den erkannten Tab in EINER WAV-Datei (Zusatzblock „tabj“ mit JSON).
const LOG=[]; // unveränderliches Protokoll der Live-Erkennung
function logEv(e,what){ if(LOG.length<5000) LOG.push(Object.assign({what},e.type==='note'?{t:+e.t.toFixed(3),type:'note',m:e.m,s:e.s,f:e.f,art:e.art||'pick'}:{t:+e.t.toFixed(3),type:e.type,key:e.key,orig:e.orig,learned:!!e.learned})); }
const CAP={on:false,node:null,mute:null,chunks:[],n:0,segs:[],seg:null,sr:48000,max:48000*600};
function capStart(ctx,src){
  if(!S.capture||!src) return;
  CAP.sr=ctx.sampleRate; CAP.max=CAP.sr*600;
  try{
    const node=ctx.createScriptProcessor(4096,1,1), mute=ctx.createGain(); mute.gain.value=0;
    CAP.seg={wavStart:CAP.n/CAP.sr,ctxStart:null,offset:null,met:!!CH.met};
    node.onaudioprocess=e=>{ if(CAP.n>=CAP.max) return; const d=e.inputBuffer.getChannelData(0);
      if(CAP.seg&&CAP.seg.ctxStart==null) CAP.seg.ctxStart=e.playbackTime-d.length/CAP.sr;
      const a=new Int16Array(d.length); for(let i=0;i<d.length;i++){const v=Math.max(-1,Math.min(1,d[i])); a[i]=v<0?v*32768:v*32767;}
      CAP.chunks.push(a); CAP.n+=a.length; };
    src.connect(node); node.connect(mute); mute.connect(ctx.destination);
    CAP.node=node; CAP.mute=mute; CAP.on=true; CAP.segs.push(CAP.seg);
  }catch(e){ CAP.on=false; }
}
function capFrame(ctx){ if(CAP.on&&CAP.seg) CAP.seg.offset=CH.tNow-ctx.currentTime; }
function capStop(){ try{ if(CAP.node){CAP.node.disconnect(); CAP.mute.disconnect();} }catch(e){} CAP.node=null; CAP.mute=null; CAP.on=false; CAP.seg=null; capUI(); }
function capClear(){ CAP.chunks=[]; CAP.n=0; CAP.segs=[]; LOG.length=0; capUI(); }
function capUI(){ const b=$('#cmCapSave'); if(!b) return; const ok=!!S.capture&&CAP.n>0; b.style.display=ok?'':'none'; if(ok) b.textContent=`Test-Mitschnitt speichern (${Math.round(CAP.n/CAP.sr)} s)`; }
function tabJSON(){
  const nm=e=>{const p=labelParts(e);return p.root+p.suf;};
  return {app:'Gitarren-App',when:new Date().toISOString(),a4:S.a4,notation:S.notation,tune:CH.eng?+CH.eng.tune.toFixed(3):0,
    met:metCfg(),segments:CAP.segs,bp:!BPB.fail,play:playMode(),
    note:'events = Stand nach Bearbeitung durch Manu; live = alles, was die App live erkannt hat (unverändert)',
    live:LOG, noteLessons:NLEARN.length, chordLessons:LEARN.length,
    grids:CH.grids.map(g=>({lines:g.lines.map(x=>+x.toFixed(3)),bar:+g.bar.toFixed(3),beats:g.beats,end:g.end==null?null:+g.end.toFixed(3),auto:!!g.auto,bpm:g.bpm?+g.bpm.toFixed(1):null})),
    events:CH.ev.map(e=>e.type==='note'?{t:+e.t.toFixed(3),type:'note',m:e.m,origM:e.origM??null,s:e.s,f:e.f,art:e.art||'pick',edited:!!e.edited,added:!!e.added,learned:!!e.learned,bp:!!e.bp}
      :{t:+e.t.toFixed(3),type:e.type,name:nm(e),key:e.key,orig:e.orig,bass:e.bass??null,f:e.f,learned:!!e.learned,edited:!!e.edited,added:!!e.added,beat:!!e.beat}),
    voice:VOXLOG.slice(),
    session:sessionJSON()};
}
// Sitzung als Lied mit Spuren (Form für „Sessions speichern“ B1 und das geteilte Projekt): Kennungen, Besitzer, Änderungsstand je Spur
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
function sessionJSON(){ if(!CH.song) CH.song={id:uid(),created:new Date().toISOString(),track:{id:uid(),owner:'manu',rev:0}}; CH.song.track.rev++;
  const r3=x=>+x.toFixed(3);
  return {format:'gitarre-session',v:1,song:{id:CH.song.id,title:'',created:CH.song.created,owner:'manu',tempo:gridBpm(),beats:(CH.grids[0]||{}).beats||+metCfg().sig||4,kapo:0,ablauf:S.ablauf||null,ablaufOn:S.ablaufOn!==false,
    grids:CH.grids.map(g=>Object.assign({},g,{lines:g.lines.map(r3)}))},
    tracks:[{id:CH.song.track.id,kind:'gitarre',owner:CH.song.track.owner,rev:CH.song.track.rev,changed:new Date().toISOString(),play:playMode(),
      events:CH.ev.map(e=>{ const o=Object.assign({},e); o.t=r3(e.t); return o; }),onsets:(CH.onsets||[]).map(r3),beatCh:(CH.beatCh||[]).map(x=>({t:r3(x.t),c:x.c.map(v=>+(+v).toFixed(4))})),audio:'wav-data'}]}; }
// Mitschnitt laden (WAV mit Tab-Block): Blatt steht wieder genau so da, ohne neue Erkennung; Klang bleibt für erneutes Speichern
async function capLoad(file){ if(CH.mic) return cMsg('Erst die Aufnahme stoppen');
  try{ const buf=await file.arrayBuffer(), v=new DataView(buf); const tag=o=>String.fromCharCode(v.getUint8(o),v.getUint8(o+1),v.getUint8(o+2),v.getUint8(o+3));
    if(tag(0)!=='RIFF'||tag(8)!=='WAVE') throw new Error('keine WAV-Datei');
    let o=12, sr=48000, pcm=null, js=null;
    while(o+8<=buf.byteLength){ const id=tag(o), len=v.getUint32(o+4,true), d=o+8;
      if(id==='fmt ') sr=v.getUint32(d+4,true); else if(id==='data') pcm=new Int16Array(buf.slice(d,d+len-(len%2))); else if(id==='tabj') js=JSON.parse(new TextDecoder().decode(new Uint8Array(buf,d,len)));
      o=d+len+(len&1); }
    if(!js) throw new Error('kein Tab in der Datei (nur Test-Mitschnitte der App)');
    closeEdit(); setEditMode(false); CH.lastJob=null; let ev, grids, tr=null;
    if(js.session&&js.session.tracks&&js.session.tracks[0]){ const S0=js.session; tr=S0.tracks[0]; ev=tr.events; grids=S0.song.grids||js.grids;
      CH.song={id:S0.song.id,created:S0.song.created,track:{id:tr.id,owner:tr.owner||'manu',rev:tr.rev||0}};
      if(S0.song.ablauf){ S.ablauf=S0.song.ablauf; S.ablaufOn=S0.song.ablaufOn!==false; save(); } }
    else { // ältere Mitschnitte: Akkord aus dem Schlüssel
      ev=(js.events||[]).map(e=>{ if(e.type==='note') return Object.assign({},e,{key:'note|'+e.m}); const k=String(e.key||'').split('|'), r=+k[1], qi=k[2]===''||k[2]==null?null:+k[2];
        return {t:e.t,type:e.type,r,qi:e.type==='chord'?qi:null,key:e.key,orig:e.orig,bass:e.bass,f:e.f,learned:e.learned,edited:e.edited,added:e.added,beat:e.beat}; });
      grids=js.grids; CH.song=null; }
    CH.ev=ev.map(e=>Object.assign({},e)).sort((a,b)=>a.t-b.t); CH.grids=(grids||[]).map(g=>Object.assign({},g,{lines:g.lines.slice(),t:g.t??g.lines[0],bar:g.bar,beats:g.beats,end:g.end}));
    CH.onsets=tr?tr.onsets||[]:[]; CH.beatCh=tr?tr.beatCh||[]:[];
    if(js.play&&!tr) {} if(tr&&tr.play){ S.play=tr.play; save(); playUI(); }
    const tEnd=Math.max(0,...CH.ev.map(e=>e.t),...CH.grids.map(g=>g.end||0)); CH.tNow=tEnd+0.5; CH.tBase=CH.tNow;
    capClear(); if(pcm){ CAP.sr=sr; CAP.chunks=[pcm]; CAP.n=pcm.length; CAP.segs=js.segments||[]; } LOG.length=0; (js.live||[]).forEach(x=>LOG.push(x)); VOXLOG.length=0; (js.voice||[]).forEach(x=>VOXLOG.push(x));
    UNDO.length=0; REDO.length=0; CH.rowPlan=null; CH.view='sheet'; metFollowGrid(); plReset(); plFromCap(); CH.stripKey=''; CH.key=''; CH.listKey=''; CH.bigK=null; undoUI(); capUI(); chordsUI();
    const nT=CH.ev.filter(e=>e.type==='note').length, nA=CH.ev.length-nT; cMsg(`Mitschnitt geladen: ${nA} Akkorde, ${nT} Töne${CH.grids[0]?' · ≈ '+gridBpm()+' BPM':''}`);
  }catch(e){ cMsg('Laden ging nicht: '+(e&&e.message||e)); } }
function capSave(){
  if(!CAP.n) return;
  const json=new TextEncoder().encode(JSON.stringify(tabJSON())), jl=json.length+(json.length&1);
  const dataLen=CAP.n*2, total=44+dataLen+8+jl, buf=new ArrayBuffer(total), v=new DataView(buf); let o=0;
  const str=s=>{for(let i=0;i<s.length;i++) v.setUint8(o++,s.charCodeAt(i));}, u32=x=>{v.setUint32(o,x,true);o+=4;}, u16=x=>{v.setUint16(o,x,true);o+=2;};
  str('RIFF'); u32(total-8); str('WAVE'); str('fmt '); u32(16); u16(1); u16(1); u32(CAP.sr); u32(CAP.sr*2); u16(2); u16(16);
  str('data'); u32(dataLen); for(const c of CAP.chunks){ new Int16Array(buf,o,c.length).set(c); o+=c.length*2; }
  str('tabj'); u32(json.length); new Uint8Array(buf,o,json.length).set(json);
  const blob=new Blob([buf],{type:'audio/wav'}), a=document.createElement('a'), d=new Date();
  a.href=URL.createObjectURL(blob); a.download=`gitarre-mitschnitt-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${String(d.getHours()).padStart(2,'0')}${String(d.getMinutes()).padStart(2,'0')}.wav`;
  document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},4000);
}

// Spielweise: 'strum' = nur Akkorde, 'melody' = Akkorde + Melodie, 'pick' = Zupfen (alle Töne)
function playMode(){ return S.play==='pick'||S.play==='melody'?S.play:'strum'; }
// Mitklingende leere Saite (E, A, D, G), die nur zum aktuellen Akkord gehört – beim Strummen keine Melodie
function ringingChordTone(m,p,c){ if(!p||p.f!==0||p.s>3||!c||c.type!=='chord') return false; return QUAL[c.qi].iv.some(k=>(c.r+k)%12===m%12); }
