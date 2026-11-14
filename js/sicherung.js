// =================== Metronom ===================
function metCfg(){ return S.met=Object.assign({bpm:80,sig:4,und:false,on:false,cnt:true,vol:0.8},S.met||{}); }
const MET={ctx:null,running:false,timer:0,n:0,t0:0,step:0.75,beats:4,und:false,prev:null,flashT:[]};
// kind: 0 = Eins, 1 = Schlag, 2 = Und, 3 = schwacher Schlag (6/8)
function metClick(ctx,t,kind,vol){
  const f=[4000,3200,3200,3200][kind], a=[1,0.6,0.26,0.4][kind]*vol, d=[0.055,0.045,0.03,0.04][kind];
  const o=ctx.createOscillator(), g=ctx.createGain(); o.type='sine'; o.frequency.value=f;
  g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(a,t+0.002); g.gain.exponentialRampToValueAtTime(0.0005,t+d);
  o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t+d+0.02);
}
function metFlash(ctx,t,kind){
  if(kind===2) return;
  const ms=Math.max(0,(t-ctx.currentTime)*1000);
  MET.flashT.push(setTimeout(()=>{const b=$('#cmet'); b.classList.remove('b0','b1'); void b.offsetWidth; b.classList.add(kind===0?'b0':'b1');},ms));
  if(MET.flashT.length>40) MET.flashT.splice(0,20);
}
// Startet das Metronom; t0 = Zeit der ersten Eins (Audiozeit)
function metStart(ctx,t0){
  metStop(); const c=metCfg();
  MET.ctx=ctx; MET.t0=t0; MET.n=0; MET.beats=+c.sig; MET.und=c.und&&c.sig!=6;
  MET.step=60/c.bpm/(MET.und?2:1); MET.running=true;
  const tick=()=>{
    if(!MET.running||ctx.state==='closed') return;
    const until=ctx.currentTime+0.15;
    while(true){
      const t=MET.t0+MET.n*MET.step; if(t>until) break;
      let kind;
      if(MET.und){const b=Math.floor(MET.n/2); kind=MET.n%2?2:(b%MET.beats===0?0:1);}
      else {const b=MET.n%MET.beats; kind=b===0?0:(MET.beats===6?(b===3?1:3):1);}
      if(t>=ctx.currentTime-0.01){ metClick(ctx,t,kind,c.vol); metFlash(ctx,t,kind); }
      MET.n++;
    }
  };
  tick(); MET.timer=setInterval(tick,25);
}
function metStop(){ MET.running=false; clearInterval(MET.timer); MET.flashT.forEach(clearTimeout); MET.flashT=[]; }
function metBeatLen(){const c=metCfg(); return 60/c.bpm;}
// Probehören (ohne Aufnahme)
function metPreview(on){
  if(MET.prev){ metStop(); try{MET.prev.close();}catch(e){} MET.prev=null; }
  if(on){ try{ MET.prev=new (window.AudioContext||window.webkitAudioContext)(); MET.prev.resume(); metStart(MET.prev,MET.prev.currentTime+0.12);}catch(e){MET.prev=null;} }
  metUI();
}
// Latenz Lautsprecher → Mikro aus einem Einzähl-Klick messen (Sekunden) oder null
function metMeasure(tc){
  const ctx=CH.ctx, A=CH.raw; if(!ctx||!A) return null;
  const B=CH.RB; A.getFloatTimeDomainData(B);
  const sr=ctx.sampleRate, Tend=ctx.currentTime, N=B.length, w=48;
  const idx=t=>Math.round(N-1-(Tend-t)*sr);
  const i0=Math.max(1,idx(tc-0.2)), i1=Math.min(N-1,idx(tc+0.45)); if(i1-i0<sr*0.3) return null;
  const env=new Float32Array(i1-i0); let acc=0;
  for(let i=i0;i<i1;i++){const d=B[i]-B[i-1]; acc+=d*d; if(i-w>=i0){const e=B[i-w]-B[i-w-1]; acc-=e*e;} env[i-i0]=Math.max(0,acc);}
  const kTc=idx(tc)-i0; let fl=0,nf=0; for(let k=w;k<kTc;k++){fl+=env[k];nf++;} fl=nf?fl/nf:0;
  let mx=0; for(let k=Math.max(kTc,0);k<env.length;k++) if(env[k]>mx) mx=env[k];
  if(mx<1e-7||mx<fl*20) return null;
  const thr=Math.max(fl*6,mx*0.25);
  for(let k=Math.max(kTc,w);k<env.length;k++) if(env[k]>thr){ const L=(i0+k-w/2-(N-1))/sr+Tend-tc; return (L>0.005&&L<0.4)?L:null; }
  return null;
}
function metUI(){
  const c=metCfg();
  $('#cmet').classList.toggle('on',!!c.on);
  $('#cmet').setAttribute('aria-pressed',!!c.on);
  $('#mOn').setAttribute('aria-pressed',!!c.on);
  $('#mUnd').setAttribute('aria-pressed',!!c.und&&c.sig!=6); $('#mUnd').disabled=c.sig==6;
  $('#mCnt').setAttribute('aria-pressed',!!c.cnt);
  $('#mBpm').textContent=c.bpm; $('#mRange').value=c.bpm; $('#mVol').value=Math.round(c.vol*100);
  setSeg('#mSig',String(c.sig));
  $('#mPrev').textContent=MET.prev?'Stopp':'Probehören';
  $('#mPrev').classList.toggle('on',!!MET.prev);
  const cb=$('#cmBpm'); if(cb){ cb.textContent=c.bpm; $('#cmOn').textContent=c.on?'an':'aus'; $('#cmOn').setAttribute('aria-pressed',!!c.on); }
}
// Ist das Metronom aus, folgt es still dem erkannten Tempo (Manu: dann steht dort schon das Tempo des Stücks, umstellen nur bei Bedarf)
function metFollowGrid(){ const c=metCfg(), g=CH.grids[0]; if(c.on||!g) return; const b=Math.round(g.bpm||60*g.beats/g.bar); if(b>=30&&b<=240){ c.bpm=b; if([2,3,4,6].includes(g.beats)) c.sig=g.beats; save(); metUI(); } }
function metSet(k,v){ const c=metCfg(); c[k]=v; save(); metUI(); if(MET.prev) metPreview(true); }
function metBpm(v){ metSet('bpm',clamp(Math.round(v),30,240)); }

// =================== Version ===================
let NEWVER=null, NEWVER_X=false;
async function checkVersion(manual){
  const info=$('#verInfo'); if(info) info.textContent='Diese App: '+APP_VERSION;
  try{
    const r=await fetch(location.pathname+'?v='+Date.now(),{cache:'no-store'}); const txt=await r.text();
    const m=new RegExp('const APP_'+'VERSION=\'([^\']+)\'').exec(txt);
    if(m&&m[1]!==APP_VERSION&&!m[1].startsWith('__')){ NEWVER=m[1]; if(!NEWVER_X||manual) $('#newver').classList.add('on'); if(info) info.textContent='Diese App: '+APP_VERSION+' · neu verfügbar: '+m[1]; }
    else if(manual&&info) info.textContent='Diese App: '+APP_VERSION+' · das ist die neueste Version.';
  }catch(e){ if(manual&&info) info.textContent='Diese App: '+APP_VERSION+' · Prüfung gerade nicht möglich (offline?).'; }
}
$('#newverGo').addEventListener('click',()=>location.replace(location.pathname+'?v='+Date.now()));
$('#newverX').addEventListener('click',()=>{ $('#newver').classList.remove('on'); NEWVER_X=true; });
// =================== Datensicherung: eine Datei mit Einstellungen und Gelerntem ===================
function bakCount(){ return (LEARN?LEARN.length:0)+(typeof NLEARN!=='undefined'&&NLEARN?NLEARN.length:0); }
function bakUI(){ const el=$('#bakInfo'); if(!el) return; const b=S.bak||{}; const n=bakCount()-(b.n||0);
  el.textContent=b.t?`Letzte Sicherung: ${new Date(b.t).toLocaleString('de-DE',{dateStyle:'short',timeStyle:'short'})} · seitdem ${Math.max(0,n)} neue Korrekturen`:`Noch keine Sicherung · ${bakCount()} gelernte Korrekturen`; }
async function bakSave(){
  const data={app:'gitarre',format:1,version:APP_VERSION,date:new Date().toISOString(),store:{}};
  [KEY,LKEY,NKEY].forEach(k=>{ const v=localStorage.getItem(k); if(v!=null) data.store[k]=v; });
  const d0=new Date(), z=n=>String(n).padStart(2,'0'), name=`gitarre-sicherung-${d0.getFullYear()}${z(d0.getMonth()+1)}${z(d0.getDate())}-${z(d0.getHours())}${z(d0.getMinutes())}.json`;
  const blob=new Blob([JSON.stringify(data)],{type:'application/json'}), file=new File([blob],name,{type:'application/json'});
  let ok=false;
  try{ if(navigator.canShare&&navigator.canShare({files:[file]})){ await navigator.share({files:[file],title:'Gitarre: Sicherung'}); ok=true; } }catch(e){ if(e&&e.name==='AbortError') return; }
  if(!ok){ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1000); }
  S.bak={t:Date.now(),n:bakCount()}; save(); bakUI(); }
$('#bakSave').addEventListener('click',bakSave);
$('#bakLoad').addEventListener('click',()=>$('#bakFile').click());
$('#bakFile').addEventListener('change',async e=>{ const f=e.target.files&&e.target.files[0]; e.target.value=''; if(!f) return;
  try{ const d=JSON.parse(await f.text()); if(d.app!=='gitarre'||!d.store) throw new Error('keine Sicherung dieser App');
    const when=d.date?new Date(d.date).toLocaleString('de-DE',{dateStyle:'short',timeStyle:'short'}):'?';
    if(!confirm(`Sicherung vom ${when} laden? Die Einstellungen und das Gelernte auf diesem Gerät werden ersetzt.`)) return;
    Object.entries(d.store).forEach(([k,v])=>{ if([KEY,LKEY,NKEY].includes(k)) localStorage.setItem(k,v); });
    location.replace(location.pathname+'?v='+Date.now()); }
  catch(err){ alert('Sicherung konnte nicht geladen werden: '+(err.message||err)); } });
// Erinnerung: nach 15 neuen Korrekturen seit der letzten Sicherung (höchstens einmal am Tag)
function bakRemind(){ const b=S.bak||{}; const n=bakCount()-(b.n||0); if(n<15) return; const today=new Date().toDateString(); if(S.bakAsked===today) return;
  S.bakAsked=today; save(); bpBanner(`${n} neue Korrekturen seit der letzten Sicherung – Einstellungen → Datensicherung`,6000); }
$('#verCheck').addEventListener('click',()=>checkVersion(true));
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='visible') checkVersion(false); });
setInterval(()=>checkVersion(false),60*1000);
setTimeout(()=>checkVersion(false),1500);

// =================== Lernen ===================
const LKEY='gitarre-lernen';
let LEARN=[]; try{LEARN=JSON.parse(localStorage.getItem(LKEY)||'[]');}catch(e){LEARN=[];}
function saveLearn(){ if(LEARN.length>150) LEARN.splice(0,LEARN.length-150); try{localStorage.setItem(LKEY,JSON.stringify(LEARN));}catch(e){} if(CH.eng) CH.eng.learn=LEARN; lrnUI(); }
function lrnUI(){ const n=LEARN.length, k=(typeof NLEARN!=='undefined'?NLEARN.length:0); const el=$('#lrnInfo'); if(el) el.textContent=(n||k)?`${n} Akkord- und ${k} Ton-Korrektur${k===1?'':'en'} gemerkt. Hört die App etwas, das sie schon einmal genauso falsch gelesen hat, übernimmt sie deine Korrektur.`:'Noch nichts gelernt. Korrigierst du Akkorde oder Töne im Tab, merkt sich die App das.'; }
// Korrektur eines Ereignisses als Klangbeispiel merken (oder vergessen, wenn wieder wie erkannt)
function learnFrom(e){
  if(!e.orig||!e.cn||!e.pf) return;
  const i=LEARN.findIndex(x=>x.id===e.lid);
  if(e.key===e.orig){ if(i>=0){LEARN.splice(i,1); saveLearn();} return; }
  const x={id:e.lid||(e.lid='l'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)),from:e.orig,to:{type:e.type,r:e.r,qi:e.qi},
    cn:e.cn.map(v=>+v.toFixed(4)),pf:e.pf.map(v=>+v.toFixed(4)),d:Date.now(),src:e.beat?'beat':undefined};
  if(i>=0) LEARN[i]=x; else LEARN.push(x);
  saveLearn();
}
// Ton-Lernen: „erkannt X (nach Y, beim Akkord Z, ähnlicher Klang) → richtig ist W“ bzw. „→ kein Ton“
const NKEY='gitarre-lernen-toene';
var NLEARN=[]; try{NLEARN=JSON.parse(localStorage.getItem(NKEY)||'[]');}catch(e){NLEARN=[];}
function saveNLearn(){ if(NLEARN.length>300) NLEARN.splice(0,NLEARN.length-300); try{localStorage.setItem(NKEY,JSON.stringify(NLEARN));}catch(e){} lrnUI(); }
function cosv(a,b){ let d=0,na=0,nb=0; for(let i=0;i<a.length;i++){d+=a[i]*b[i];na+=a[i]*a[i];nb+=b[i]*b[i];} return d/Math.sqrt(na*nb||1); }
function learnNote(e,kind){
  if(!e||e.added||e.origM==null||!e.pf) return;
  const i=NLEARN.findIndex(x=>x.id===e.lid);
  if(kind==='map'&&e.m===e.origM){ if(i>=0){NLEARN.splice(i,1); saveNLearn();} return; }
  const x={id:e.lid||(e.lid='n'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)),kind,from:e.origM,to:kind==='map'?e.m:null,
    chord:e.chordKey||null,int:e.prevM!=null?e.origM-e.prevM:null,pf:e.pf.map(v=>+v.toFixed(3)),d:Date.now(),
    eng:e.bp?'bp':undefined,s:e.s,f:e.f,art:e.art||'pick'};
  if(i>=0) NLEARN[i]=x; else NLEARN.push(x); saveNLearn();
}
// Saite, Bund und Spieltechnik einer schon gemerkten Korrektur nachziehen (z. B. erst Ton, dann Slide gewählt)
function lessonSync(e){ if(!e||!e.lid) return; const L=NLEARN.find(y=>y.id===e.lid); if(!L) return; L.s=e.s; L.f=e.f; L.art=e.art||'pick'; saveNLearn(); }
// Neue Ton-Erkennung: Saite je Ton (und Akkord) merken, wenn Manu einen Ton auf eine andere Saite legt
function learnString(e){ if(!e||!e.bp) return; S.strPref=Object.assign({},S.strPref||{},{[e.m+'|'+(e.chordKey||'')]:e.s,[e.m+'|*']:e.s}); save(); }
// Passendes Beispiel für einen frisch erkannten Ton
function noteLesson(m,chordKey,prevM,pf,eng){
  let best=null,bs=0; eng=eng||'old';
  for(const x of NLEARN){ if(x.from!==m||x.chord!==chordKey||(x.eng||'old')!==eng) continue;
    const sim=cosv(pf,x.pf), intOk=x.int!=null&&prevM!=null&&x.int===m-prevM;
    const sc=sim+(intOk?0.1:0); if((intOk&&sim>=0.8)||sim>=0.92){ if(sc>bs){bs=sc;best=x;} } }
  return best;
}
$('#lrnClear').addEventListener('click',()=>{ if(!LEARN.length&&!NLEARN.length) return; if(confirmLearnClear()){LEARN=[]; NLEARN=[]; saveLearn(); saveNLearn();} });
let lrnArm=0; function confirmLearnClear(){ const b=$('#lrnClear span'); if(Date.now()-lrnArm<3000){b.textContent='Alle gelernten Korrekturen vergessen'; return true;} lrnArm=Date.now(); b.textContent='Nochmal tippen zum Bestätigen'; setTimeout(()=>{b.textContent='Alle gelernten Korrekturen vergessen';},3000); return false; }
lrnUI();

