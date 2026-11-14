// =================== „Auf alle ähnlichen“: Takte am Klang vergleichen (Klangbild je Schlag), Vorschlag statt Automatik ===================
function barFeat(k){ const B=sheetBars(), bb=B[k]; if(!bb) return null; const nb=bb.g.beats, len=(bb.b-bb.a)/nb, F=Array.from({length:nb},()=>null);
  const L=(CH.beatCh||[]).filter(x=>x.t>=bb.a-len*0.3&&x.t<bb.b-len*0.3);
  if(L.length){ L.forEach(x=>{ const j=clamp(Math.round((x.t-bb.a)/len),0,nb-1); if(!F[j]) F[j]=x.c.slice(); }); return {F,src:'klang'}; }
  // ohne Klangbild (Zupfen): Tonklassen der Töne je Schlag
  bb.ev.forEach(e=>{ const j=clamp(Math.floor((e.t-bb.a)/len+0.1),0,nb-1); F[j]=F[j]||new Array(12).fill(0); if(e.type==='note') F[j][e.m%12]+=1; else QUAL[e.qi||0].iv.forEach(i=>F[j][(e.r+i)%12]+=0.5); }); return {F,src:'töne'}; }
function cosv(a,b){ let x=0,y=0,z=0; for(let i=0;i<12;i++){ x+=a[i]*b[i]; y+=a[i]*a[i]; z+=b[i]*b[i]; } return y&&z?x/Math.sqrt(y*z):0; }
function simStart(){ if(!CLIP.items||!CLIP.bars) return 0; const B=sheetBars(); if(!B.length) return 0; const nb=B[0].g.beats;
  const s0=Math.round(CLIP.anchor/nb), nBar=Math.max(1,Math.floor(Math.max(...CLIP.items.map(i=>i.off))/nb)+1);
  const beatsOf=p=>{ const out=[]; for(let q=0;q<nBar*nb;q++){ const pp=p+q, k=Math.floor(pp/nb), j=pp-k*nb, f=barFeat(k); out.push(f&&f.F[Math.floor(j)]); } return out; };
  const src=beatsOf(s0*nb); const C=[];
  for(let p=0;p+nBar*nb<=B.length*nb;p+=nb/2){ if(Math.abs(p-s0*nb)<nBar*nb) continue; const cb=beatsOf(p); let sum=0,n=0;
    src.forEach((a,i)=>{ if(a&&cb[i]){ sum+=cosv(a,cb[i]); n++; } }); if(n>=Math.max(2,src.filter(Boolean).length*0.7)) C.push({pos:p,sc:sum/n}); }
  C.sort((a,b)=>b.sc-a.sc); const pick=[];
  C.forEach(c=>{ if(c.sc<0.9) return; if(pick.some(x=>Math.abs(x.pos-c.pos)<nBar*nb)) return; pick.push({pos:c.pos,sc:c.sc,on:true,len:nBar*nb}); });
  pick.sort((a,b)=>a.pos-b.pos); ED.prop=pick.length?pick:null; ED.tgt=null; CH.stripKey=''; propUI(); return pick.length; }
function propTxt(){ const nb=(sheetBars()[0]||{g:{beats:4}}).g.beats; return ED.prop.filter(x=>x.on).map(x=>{ const a=x.pos/nb+1, b=(x.pos+x.len)/nb; return (Number.isInteger(a)?a:Math.floor(a)+'½')+(x.len>nb?'–'+(Number.isInteger(b)?b:Math.floor(b)+'½'):''); }).join(', '); }
function propUI(){ const on=!!ED.prop; $('#cedbar').classList.toggle('prop',on); if(on){ const n=ED.prop.filter(x=>x.on).length; $('#cedPropTxt').textContent=n?n+' ähnliche: Takt '+propTxt():'Nichts gewählt'; } edUI(); }
$('#cedSim').addEventListener('click',()=>{ ED.tgt=null; const n=simStart(); if(!n){ cMsg('Keine ähnlichen Stellen gefunden'); edUI(); } });
$('#cedPropOk').addEventListener('click',()=>{ const L=(ED.prop||[]).filter(x=>x.on); ED.prop=null; let n=0; L.forEach(x=>{ if(placePos('paste',x.pos)) n++; }); propUI(); CH.stripKey=''; cMsg(n?'Auf '+n+' ähnliche Stellen übernommen · Rückgängig oben':'Nichts übernommen'); });
$('#cedPropX').addEventListener('click',()=>{ ED.prop=null; propUI(); CH.stripKey=''; cMsg('Abgebrochen'); });
// Akkord fürs ganze Stück: im großen Griffbild auf den Namen tippen
$('#cbig').addEventListener('click',e=>{ const b=e.target.closest('#cbigName'); if(!b) return; const c=pieceChords().find(x=>x.k===CH.bigK); if(!c) return;
  const ev=CH.ev.find(x=>x.type!=='note'&&evName(x)===c.name&&(x.f||[]).join(',')===c.fk)||c.e; ED.global={name:c.name,fk:c.fk}; openEdit(ev); });
// Bearbeiten
// Doppeltipp auf eine leere Stelle = Zoom zurücksetzen; deshalb trägt ein einzelner Tipp auf eine leere Stelle erst nach 0,3 s etwas ein.
const TAP={timer:0,last:0,noTapUntil:0,lt:0};
function emptyTap(act){ const now=performance.now();
  if(TAP.timer){ clearTimeout(TAP.timer); TAP.timer=0; zoomReset(); return; }
  TAP.last=now; TAP.timer=setTimeout(()=>{ TAP.timer=0; if(act) act(); },450); }
// Doppeltipp per Berührung (schneller und zuverlässiger als der Klick des Browsers), überall im Blatt, auch zwischen den Zeilen
$('#cbody').addEventListener('touchstart',e=>{ if(e.touches.length===1){ const t=e.touches[0]; TAP.sx=t.clientX; TAP.sy=t.clientY; TAP.st=performance.now(); } else TAP.st=0; },{passive:true});
$('#cbody').addEventListener('touchend',e=>{ if(e.touches.length||!TAP.st||CH.pinching||DR.active) return; const t=e.changedTouches[0], now=performance.now();
  if(Math.hypot(t.clientX-TAP.sx,t.clientY-TAP.sy)>12||now-TAP.st>350||!inSheetView()||!e.target.closest('#cstrip')||e.target.closest('[data-i]')){ TAP.lt=0; return; }
  if(TAP.lt&&now-TAP.lt<400&&Math.hypot(t.clientX-TAP.lx,t.clientY-TAP.ly)<45){ TAP.lt=0; clearTimeout(TAP.timer); TAP.timer=0; TAP.noTapUntil=now+450; e.preventDefault(); zoomReset(); return; }
  TAP.lt=now; TAP.lx=t.clientX; TAP.ly=t.clientY; },{passive:false});
$('#cstrip').addEventListener('click',e=>{ if(DR.justDragged||performance.now()<TAP.noTapUntil) return; if(CH.edm&&!CH.mic){ editTap(e); return; } const h=e.target.closest('[data-i]'); if(h){ openEdit(CH.ev[+h.dataset.i]); return; }
  // Tippen knapp neben einen Ton/Akkord: den nächstgelegenen öffnen (dicke Finger)
  { const svg=e.target.ownerSVGElement||e.target.closest('svg'); if(svg&&!CH.mic){ const r=svg.getBoundingClientRect(), k=svg.viewBox.baseVal.width/r.width, px=(e.clientX-r.left)*k, py=(e.clientY-r.top)*k, SC=LAY.str*(inSheetView()?sheetZ():1);
    let best=null,bd=1e9; svg.querySelectorAll('[data-i]').forEach(h=>{ const b=h.getBBox();
      const dx=Math.max(0,Math.abs(px-(b.x+b.width/2))-b.width/2), dy=Math.max(0,Math.abs(py-(b.y+b.height/2))-b.height/2), d=Math.hypot(dx,dy); if(d<bd){bd=d;best=h;} });
    if(best&&bd<SC*1.2){ openEdit(CH.ev[+best.dataset.i]); return; } } }
  // Tippen in die Akkordzeile über dem Tab: dort einen Akkord eintragen (Art danach wählen); liegt dort schon einer, wird er geöffnet statt ein zweiter darübergelegt
  const cl=e.target.closest('[data-clane]');
  if(cl&&!CH.mic){ const svg=cl.ownerSVGElement, r=svg.getBoundingClientRect(), x=(e.clientX-r.left)*(svg.viewBox.baseVal.width/r.width); let t;
    if(cl.dataset.bar!=null){ const bb=sheetBars()[+cl.dataset.bar]; if(!bb) return; t=bb.a+clamp((x-+cl.dataset.x0)/+cl.dataset.w,0,0.999)*(bb.b-bb.a); }
    else t=Math.max(0,(x-40)/LAY.px);
    t=snapT(t,2); const ex=CH.ev.find(y=>y.type!=='note'&&Math.abs(y.t-t)<0.03); if(ex){ openEdit(ex); return; }
    emptyTap(()=>{ snap(); const pv=bpChordAt(t)||{r:7,qi:0};
      const ev={t,type:'chord',r:pv.r,qi:pv.qi??0,key:'chord|'+pv.r+'|'+(pv.qi??0),orig:null,bass:null,cn:null,pf:null,edited:true,added:true}; ev.f=evFrets(ev);
      CH.ev.push(ev); CH.ev.sort((a,b)=>a.t-b.t); CH.stripKey=''; openEdit(ev); }); return; }
  // Tippen auf eine leere Stelle einer Saite: dort einen Ton eintragen (Bund danach wählen)
  const st=e.target.closest('[data-str]'); if(!st||CH.mic){ if(!CH.mic) emptyTap(null); return; }
  const svg=st.ownerSVGElement, r=svg.getBoundingClientRect(), x=(e.clientX-r.left)*(svg.viewBox.baseVal.width/r.width);
  let t;
  if(st.dataset.bar!=null){ const bb=sheetBars()[+st.dataset.bar]; if(!bb) return; t=bb.a+clamp((x-+st.dataset.x0)/+st.dataset.w,0,0.999)*(bb.b-bb.a); t=snapT(t,gridDiv()); }
  else { t=Math.max(0,(x-40)/LAY.px); t=snapT(t,gridDiv()); }
  const s=+st.dataset.str;
  emptyTap(()=>{ snap(); const ev={t,type:'note',s,f:0,m:OPEN_M[s],key:'note|'+OPEN_M[s],art:'pick',edited:true,added:true};
    CH.ev.push(ev); CH.ev.sort((a,b)=>a.t-b.t); openEdit(ev); }); });
$('#cname').addEventListener('click',()=>{ const x=lastChordEv(); if(x) openEdit(x); });
$('#eclose').addEventListener('click',closeEdit);
// Felder öffnen ihr Auswahlfenster; nach einer Wahl schließt es wieder
document.querySelectorAll('#esheet .ef[data-p]').forEach(b=>b.addEventListener('click',()=>{ const p=$('#'+b.dataset.p), on=!p.classList.contains('on'); closeEPops(); if(!on) return;
  p.classList.add('on'); b.classList.add('open'); $('#epDim').classList.add('on');
  // immer gleich: waagrecht mittig, Unterkante auf Höhe der Unterkante des angetippten Felds (oben nie aus dem Bild)
  const r=b.getBoundingClientRect(), h=p.offsetHeight; p.style.top=Math.max(8,r.bottom-h)+'px'; }));
$('#epDim').addEventListener('click',e=>{ e.stopPropagation(); closeEPops(); });
$('#esheet .esh').addEventListener('click',e=>{ if(e.target.closest('.epop button')) setTimeout(closeEPops,0); },true);
$('#eMid').addEventListener('click',()=>showSel());
// Namens-Chip: zwischen Ton und Akkord umschalten (Akkord = der zuletzt davor benutzte, sonst G; Ton = tiefster gegriffener Ton des Akkords)
$('#eChip').addEventListener('click',()=>{ const x=ED.ev; if(!x) return; snap(); closeEPops();
  if(x.type==='note'){ let pv=null; for(let k=CH.ev.indexOf(x)-1;k>=0;k--){ const q=CH.ev[k]; if(q.type==='chord'){ pv=q; break; } } if(!pv) pv=lastChordEv();
    const r=pv&&pv.type==='chord'?pv.r:7, qi=pv&&pv.type==='chord'?pv.qi:0;
    ['m','s','art','origM','prevM','chordKey','bp','learned'].forEach(k=>delete x[k]);
    Object.assign(x,{type:'chord',r,qi,bass:null,key:'chord|'+r+'|'+qi,orig:null,cn:null,pf:null,edited:true}); x.f=evFrets(x); }
  else { const f=(x.f||[]).slice(); let s0=f.findIndex(v=>v>=0); if(s0<0) s0=0; const fr=Math.max(0,f[s0]||0), m=OPEN_M[s0]+fr;
    ['r','qi','bass','orig','cn','pf','vi','voiSet','beat'].forEach(k=>delete x[k]);
    Object.assign(x,{type:'note',m,s:s0,f:fr,key:'note|'+m,art:'pick',edited:true}); }
  renderEdit(); CH.stripKey=''; CH.key=''; });
$('#esheet').addEventListener('click',e=>{if(e.target.id==='esheet') closeEdit();});
$('#eSim').addEventListener('click',e=>{const b=e.target.closest('button'); if(!b||!ED.ev||b.dataset.cur) return; setEv(ED.ev,+b.dataset.r,+b.dataset.q,'chord'); renderEdit(); CH.stripKey=''; CH.key='';});
$('#eRoot').addEventListener('click',e=>{const b=e.target.closest('button'); if(!b||!ED.ev) return; const x=ED.ev; setEv(x,+b.dataset.v,x.type==='chord'?x.qi:0,x.type==='power'?'power':'chord'); renderEdit(); CH.stripKey=''; CH.key='';});
$('#eQual').addEventListener('click',e=>{const b=e.target.closest('button'); if(!b||!ED.ev) return; const x=ED.ev; if(b.dataset.v==='p') setEv(x,x.r,null,'power'); else setEv(x,x.r,+b.dataset.v,'chord'); renderEdit(); CH.stripKey=''; CH.key='';});
$('#eBass').addEventListener('click',e=>{const b=e.target.closest('button'); const x=ED.ev; if(!b||!x||x.type!=='chord') return; snap(); const v=b.dataset.v;
  x.bass=v===''||+v===x.r?null:+v; x.f=evFrets(x); x.edited=true; renderEdit(); CH.stripKey=''; CH.key='';});
$('#eVois').addEventListener('click',e=>{const b=e.target.closest('button'), x=ED.ev; if(!b||!x) return; snap(); const L=evVoicings(x); const i=+b.dataset.i; if(!L[i]) return; x.f=L[i].f; x.edited=true;
  // derselbe Akkord überall im Tab mit diesem Griff (nur wo nicht einzeln anders gewählt)
  if(x.type==='chord'&&x.bass==null) CH.ev.forEach(y=>{ if(y!==x&&y.type==='chord'&&y.r===x.r&&y.qi===x.qi&&y.bass==null&&!y.voiSet) y.f=L[i].f; }); x.voiSet=true;
  if(x.type==='chord'&&L.length>1){(S.voi||(S.voi={}))[x.r+'|'+QUAL[x.qi].id]=L[i].id; save(); if(CH.eng){CH.eng.pref=S.voi; if(lastChordEv()===x){CH.eng.vIdx=i;CH.eng.vLock=true;}}}
  renderEdit(); CH.stripKey=''; CH.key='';});
// Durchklicken: voriges/nächstes Element (Ton oder Akkord) in zeitlicher Reihenfolge
function editStep(d){ const i=CH.ev.indexOf(ED.ev); const n=CH.ev[i+d]; if(!n) return; openEdit(n,true); }
// Bearbeiten-Feld als Pop-up an der Note: beim Öffnen unter der Note (obere Hälfte) bzw. darüber (untere Hälfte), Pfeil zeigt auf die Note.
// Beim Durchklicken bleibt das Feld stehen; verdeckt es die neue Auswahl, rutscht das Blatt; geht das nicht, wechselt das Feld die Seite.
function edBox(el){ const r=el.getBoundingClientRect(); if(ED.ev&&ED.ev.type!=='note'&&r.height>60){ const h=Math.min(r.height,LAY.lab*sheetZ()*1.8); return {top:r.top,bottom:r.top+h,left:r.left,right:r.right}; } return {top:r.top,bottom:r.bottom,left:r.left,right:r.right}; }
function edPlace(open){ const e=ED.ev; if(!e||!$('#esheet').classList.contains('on')) return; const el=$(`#cstrip [data-i="${CH.ev.indexOf(e)}"]`), F=$('#esheet .esh'), A=$('#edArrow'); if(!el){ A.style.display='none'; return; }
  const st=$('#cstrip'); if(!st.classList.contains('blatt')){ const sr=st.getBoundingClientRect(), q=el.getBoundingClientRect(); if(q.left<sr.left+20||q.right>sr.right-20) st.scrollLeft+=q.left-sr.left-sr.width/2; }
  const vh=innerHeight, h=F.offsetHeight, gap=14, top0=60, bot0=vh-4; let r=edBox(el);
  const fits=(side,r)=>side==='below'?r.bottom+gap+h<=bot0:r.top-gap-h>=4, other=s=>s==='below'?'above':'below', atSide=(side,r)=>side==='below'?r.bottom+gap:r.top-gap-h;
  if(open||!ED.side){ ED.side=(r.top+r.bottom)/2<vh/2?'below':'above'; if(!fits(ED.side,r)&&fits(other(ED.side),r)) ED.side=other(ED.side); ED.top=atSide(ED.side,r); }
  else { const covered=r=>!(r.bottom<ED.top-4||r.top>ED.top+h+4)||r.top<top0||r.bottom>bot0;
    if(covered(r)){ const sc=$('#cbody'), want=ED.side==='below'?ED.top-gap-(r.bottom-r.top):ED.top+h+gap; sc.scrollTop+=r.top-want; r=edBox(el);
      if(covered(r)){ ED.side=other(ED.side); ED.top=atSide(ED.side,r); } } }
  ED.top=clamp(ED.top,4,Math.max(4,vh-h-4)); F.style.top=ED.top+'px';
  const ax=clamp((r.left+r.right)/2,24,innerWidth-24)-8; A.style.display='block'; A.className=ED.side==='below'?'up':'down'; A.style.left=ax+'px'; A.style.top=(ED.side==='below'?ED.top-8:ED.top+h-8)+'px'; }
function showSel(){ edPlace(false); }
$('#ePrev').addEventListener('click',()=>editStep(-1)); $('#eNext').addEventListener('click',()=>editStep(1));
// Nächste Rasterstelle vor/nach t (gleiches Raster wie die Pfeile)
function gridStepT(t,d){ if(!CH.grids.length) return Math.max(0,t+d*0.25); const a=snapT(t,gridDiv()); let b=snapT(a+d*0.02+d*0.0001,gridDiv()); let k=0; while(Math.abs(b-a)<1e-4&&k++<200) b=snapT(a+d*0.01*(k+2),gridDiv()); return Math.max(0,b); }
const insNote=e=>{ const b=e.currentTarget, x=ED.ev; if(!x||x.type!=='note') return; snap(); const d=+b.dataset.d;
  const ev={t:gridStepT(x.t,d),type:'note',s:x.s,f:x.f,m:x.m,key:'note|'+x.m,art:'pick',edited:true,added:true,bp:!!x.bp};
  CH.ev.push(ev); CH.ev.sort((a,b2)=>a.t-b2.t); CH.stripKey=''; openEdit(ev,true); };
$('#eInsL').addEventListener('click',insNote); $('#eInsR').addEventListener('click',insNote);
function stepEv(d){ const x=ED.ev; if(!x) return; snap(); const g=CH.grids.length?null:0.25;
  if(g) x.t=Math.max(0,x.t+d*g); else { const a=snapT(x.t,gridDiv()); let b=snapT(a+d*0.02+d*0.0001,gridDiv()); let k=0; while(Math.abs(b-a)<1e-4&&k++<200) b=snapT(a+d*0.01*(k+2),gridDiv()); x.t=Math.max(0,b); }
  CH.ev.sort((p,q)=>p.t-q.t); renderEdit(); CH.stripKey=''; }
$('#eLeft').addEventListener('click',()=>stepEv(-1)); $('#eRight').addEventListener('click',()=>stepEv(1));
$('#eGrid').addEventListener('click',e=>{const b=e.target.closest('button'); if(!b) return; S.grid=b.dataset.v; save(); renderEdit();});
$('#eDel').addEventListener('click',()=>{const x=ED.ev; if(!x) return; snap(); if(x.type==='note') learnNote(x,'drop'); const i=CH.ev.indexOf(x);
  // Pro-Schlag-Akkord gelöscht: merken, dass dieser Klang kein eigener Akkordwechsel ist (der vorige Akkord klingt weiter)
  if(x.type==='chord'&&x.beat&&x.cn&&x.pf&&!x.added){ LEARN.push({id:'l'+Date.now().toString(36)+Math.random().toString(36).slice(2,6),from:x.orig||x.key,to:{type:'drop'},cn:x.cn.map(v=>+v.toFixed(4)),pf:x.pf.map(v=>+v.toFixed(4)),d:Date.now(),src:'beat'}); saveLearn(); }
  if(i>=0){ CH.ev.splice(i,1);
    // Der nächste Akkord desselben Anschlags rückt auf den Platz des gelöschten (nicht bei Pro-Schlag-Akkorden: dort klingt der vorige weiter)
    if(x.type!=='note'&&!x.beat) for(let k=i;k<CH.ev.length;k++){const y=CH.ev[k]; if(y.type==='note') continue; if(y.t-x.t<1.0) y.t=x.t; break;} }
  closeEdit();});
$('#eArt').addEventListener('click',e=>{const b=e.target.closest('button'); const x=ED.ev; if(!b||!x) return; snap(); x.art=b.dataset.a;
  // merken: gebundene Spieltechnik je Abstand zum vorigen Ton auf derselben Saite
  if(x.art!=='pick'){ let pv=null; for(let k=CH.ev.indexOf(x)-1;k>=0;k--){const q=CH.ev[k]; if(q.type==='note'){ if(q.s===x.s&&x.t-q.t<1.5) pv=q; break; } }
    if(pv&&pv.m!==x.m){ S.artPref=Object.assign({},S.artPref||{},{[String(x.m-pv.m)]:x.art}); save(); } } x.edited=true; lessonSync(x); renderEdit(); CH.stripKey='';});
$('#eFret').addEventListener('click',e=>{const b=e.target.closest('button'); const x=ED.ev; if(!b||!x) return; snap(); x.f=+b.dataset.f; x.m=OPEN_M[x.s]+x.f; x.key='note|'+x.m; x.edited=true; learnNote(x,'map'); lessonSync(x); renderEdit(); CH.stripKey='';});
$('#eStr').addEventListener('click',e=>{const b=e.target.closest('button'); const x=ED.ev; if(!b||!x) return; snap(); const s=+b.dataset.s; x.s=s; x.f=x.m-OPEN_M[s]; x.edited=true; lessonSync(x); if(x.type==='note') learnString(x); renderEdit(); CH.stripKey='';});
$('#eNoteStep').addEventListener('click',e=>{const b=e.target.closest('button'); const x=ED.ev; if(!b||!x) return; snap(); x.m+=+b.dataset.d; x.key='note|'+x.m; x.edited=true; learnNote(x,'map');
  let f=x.m-OPEN_M[x.s]; if(f<0||f>17){const p=fretOptions(x.m)[0]; if(p){x.s=p.s; f=p.f;}} x.f=f; lessonSync(x); renderEdit(); CH.stripKey='';});
// Metronom-Bedienfeld
const mClose=()=>{$('#msheet').classList.remove('on'); metPreview(false);};
$('#cmet').addEventListener('click',()=>{metUI(); $('#msheet').classList.add('on');});
$('#mclose').addEventListener('click',mClose);
$('#msheet').addEventListener('click',e=>{if(e.target.id==='msheet') mClose();});
$('#mOn').addEventListener('click',()=>metSet('on',!metCfg().on));
$('#mUnd').addEventListener('click',()=>metSet('und',!metCfg().und));
$('#mCnt').addEventListener('click',()=>metSet('cnt',!metCfg().cnt));
document.querySelectorAll('#mSig button').forEach(b=>b.addEventListener('click',()=>metSet('sig',+b.dataset.v)));
$('#mRange').addEventListener('input',e=>metBpm(+e.target.value));
$('#mVol').addEventListener('input',e=>metSet('vol',+e.target.value/100));
$('#mPrev').addEventListener('click',()=>metPreview(!MET.prev));
[['#mMinus',-1],['#mPlus',1]].forEach(([id,d])=>{ // Gedrückthalten wiederholt
  let t1=0,t2=0; const b=$(id), stop=()=>{clearTimeout(t1);clearInterval(t2);};
  b.addEventListener('pointerdown',e=>{e.preventDefault(); metBpm(metCfg().bpm+d); t1=setTimeout(()=>{t2=setInterval(()=>metBpm(metCfg().bpm+d),70);},400);});
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,stop));
});
let mTaps=[];
$('#mTap').addEventListener('pointerdown',()=>{const t=performance.now();
  if(mTaps.length&&t-mTaps[mTaps.length-1]>2000) mTaps=[]; mTaps.push(t); if(mTaps.length>5) mTaps.shift();
  if(mTaps.length>=2) metBpm(60000*(mTaps.length-1)/(mTaps[mTaps.length-1]-mTaps[0]));});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden') metPreview(false);});
// App im Hintergrund: Mikro sofort freigeben (Neustart nur per Knopf)
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&CH.mic) chordMicOff();});
$('#launchChords').addEventListener('click',startChords);
$('#cclose').addEventListener('click',stopChords);

// Reset: Verlauf und angezeigten Akkord leeren (gemerkte Griffe bleiben)
$('#creset').addEventListener('click',()=>{closeEdit(); ALIGN_UNDO=null; CH.lastJob=null; plReset(); NF.offer=null; NF.put('blatt',null).catch(()=>{}); NF.put('klang',null).catch(()=>{}); NF.sig=''; NF.ksig=''; UNDO.length=0; REDO.length=0; if(!CAP.on) capClear(); else {CAP.chunks=[];CAP.n=0;CAP.segs=[CAP.seg];CAP.seg.wavStart=0;CAP.seg.ctxStart=null;LOG.length=0;}const d=CH.tNow; CH.tBase-=d; CH.tNow=0; CH.ev=[]; CH.onsets=[]; CH.beatCh=[]; CH.grids=CH.met?[newGrid(CH.tBase,CH.met.beat*CH.met.beats,CH.met.beats)]:[]; CH.stripKey=''; CH.follow=true; CH.key=''; if(CH.eng){const sr=CH.eng.sr,pref=CH.eng.pref; CH.eng=makeChordEngine(sr); CH.eng.pref=pref; CH.eng.onCommit=onChordCommit; CH.eng.NT.onNote=onNoteDetected; CH.eng.NT.onReplace=onNoteReplaced; CH.eng.learn=LEARN;}});
// Griffbild antippen: nächster Griff, wird für diesen Akkord gemerkt
$('#cdiag').addEventListener('click',()=>{
  if(!CH.eng) return; const r=CH.eng.nextVoicing(); if(!r) return;
  (S.voi||(S.voi={}))[r.key]=r.id; CH.eng.pref=S.voi; save(); CH.key='';
});
window.__chord=()=>CH.eng&&CH.eng.cur?CH.eng.cur.key:null;
window.__ev=()=>CH.ev;

