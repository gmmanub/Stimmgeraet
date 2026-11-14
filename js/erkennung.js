// =================== Akkorderkennung (Stufe 1) ===================
// ==CHORD-CORE-START== (reine Analyse ohne DOM, wird auch im Test genutzt)
const QUAL=[
  {id:'',iv:[0,4,7],p:1},{id:'m',iv:[0,3,7],p:1},
  {id:'7',iv:[0,4,7,10],p:.965},{id:'maj7',iv:[0,4,7,11],p:.92},{id:'m7',iv:[0,3,7,10],p:.9},
  {id:'sus2',iv:[0,2,7],p:.95},{id:'sus4',iv:[0,5,7],p:.95},
  {id:'add9',iv:[0,4,7,2],p:.88}
];
// Muster je Akkord inkl. typischer Obertöne einer Gitarrensaite (Oktaven, Quinte, große Terz)
const TPL=[];
(function(){
  const H=[[0,1.75],[7,0.35],[4,0.15]];
  for(let r=0;r<12;r++) QUAL.forEach((q,qi)=>{
    const v=new Float32Array(12);
    q.iv.forEach(i=>H.forEach(([o,a])=>{v[(r+i+o)%12]+=a;}));
    let n=0; for(const x of v) n+=x*x; n=Math.sqrt(n); for(let k=0;k<12;k++) v[k]/=n;
    TPL.push({r,qi,v});
  });
})();

// Griffe (Standardstimmung), Bünde Saite 6 → 1, -1 = nicht anschlagen. Reihenfolge = Vorrang.
const OPEN_STR=[40,45,50,55,59,64];
const GRIFFE={
  '0|':[[-1,3,2,0,1,0],[-1,3,2,0,1,3],[3,3,2,0,1,0]],
  '2|':[[-1,-1,0,2,3,2]],
  '4|':[[0,2,2,1,0,0]],
  '5|':[[-1,-1,3,2,1,1]],
  '7|':[[3,2,0,0,0,3],[3,2,0,0,3,3],[3,-1,0,0,0,3],[3,-1,0,0,3,3]],
  '9|':[[-1,0,2,2,2,0]],
  '2|m':[[-1,-1,0,2,3,1]],'4|m':[[0,2,2,0,0,0]],'9|m':[[-1,0,2,2,1,0]],
  '0|7':[[-1,3,2,3,1,0]],'2|7':[[-1,-1,0,2,1,2]],'4|7':[[0,2,0,1,0,0],[0,2,2,1,3,0]],'7|7':[[3,2,0,0,0,1]],
  '9|7':[[-1,0,2,0,2,0],[-1,0,2,2,2,3]],'11|7':[[-1,2,1,2,0,2]],
  '0|maj7':[[-1,3,2,0,0,0]],'2|maj7':[[-1,-1,0,2,2,2]],'4|maj7':[[0,2,1,1,0,0]],'5|maj7':[[-1,-1,3,2,1,0]],
  '7|maj7':[[3,-1,0,0,0,2],[3,2,0,0,0,2]],'9|maj7':[[-1,0,2,1,2,0]],
  '2|m7':[[-1,-1,0,2,1,1]],'4|m7':[[0,2,0,0,0,0],[0,2,2,0,3,0],[0,2,0,0,3,0]],'9|m7':[[-1,0,2,0,1,0]],
  '0|sus2':[[-1,3,0,0,3,3]],'2|sus2':[[-1,-1,0,2,3,0]],'9|sus2':[[-1,0,2,2,0,0]],
  '2|sus4':[[-1,-1,0,2,3,3]],'4|sus4':[[0,2,2,2,0,0]],'7|sus4':[[3,3,0,0,1,3]],'9|sus4':[[-1,0,2,2,3,0]],
  '0|add9':[[-1,3,2,0,3,3],[-1,3,2,0,3,0]],'7|add9':[[3,-1,0,2,0,3],[3,2,0,2,0,3]],'5|add9':[[-1,-1,3,2,1,3]],'2|add9':[[-1,5,4,2,3,0]]
};
const SHAPE_E={'':[0,2,2,1,0,0],m:[0,2,2,0,0,0],'7':[0,2,0,1,0,0],maj7:[0,-1,1,1,0,-1],m7:[0,2,0,0,0,0],sus4:[0,2,2,2,0,0],add9:[0,2,2,1,0,2]};
const SHAPE_A={'':[-1,0,2,2,2,0],m:[-1,0,2,2,1,0],'7':[-1,0,2,0,2,0],maj7:[-1,0,2,1,2,0],m7:[-1,0,2,0,1,0],sus2:[-1,0,2,2,0,0],sus4:[-1,0,2,2,3,0],add9:[-1,0,2,4,2,0]};
// Erwartetes Tonhöhenbild eines Griffs (MIDI 40–88) inkl. Obertöne
const PM0=40, PM1=88, PN=PM1-PM0+1;
function griffBild(f){
  const p=new Float32Array(PN);
  f.forEach((b,s)=>{ if(b<0) return; const m=OPEN_STR[s]+b;
    [[0,1],[12,.5],[19,.3],[24,.2]].forEach(([o,a])=>{const j=m+o-PM0; if(j>=0&&j<PN) p[j]+=a;}); });
  let n=0; for(const x of p) n+=x*x; n=Math.sqrt(n)||1; for(let j=0;j<PN;j++) p[j]/=n;
  return p;
}
const VOI_CACHE={};
function voicings(r,qi){
  const q=QUAL[qi].id, key=r+'|'+q;
  if(VOI_CACHE[key]) return VOI_CACHE[key];
  const list=[], seen=new Set();
  const add=(f,b)=>{const id=f.map(x=>x<0?'x':x).join(''); if(seen.has(id)) return; seen.add(id); list.push({f,b,id,p:griffBild(f)});};
  (GRIFFE[key]||[]).forEach(f=>add(f,0));
  const gen=[];
  if(SHAPE_E[q]) gen.push({rf:(r-4+12)%12,sh:SHAPE_E[q]});
  if(SHAPE_A[q]) gen.push({rf:(r-9+12)%12,sh:SHAPE_A[q]});
  gen.sort((a,b)=>a.rf-b.rf).forEach(({rf,sh})=>add(sh.map(v=>v<0?-1:v+rf),rf));
  return VOI_CACHE[key]=list;
}

// ---- Einzeltöne (Läufe): kürzeres Fenster, Neuheit je Halbton ----
// Ein Lauf-Ton = genau ein neu einsetzender Ton, der Rest klingt nur nach. Strumming = mehrere neue Töne gleichzeitig.
function makeNoteTracker(sr){
  const N=8192, LOG=13, binHz=sr/N;
  const win=new Float64Array(N); for(let i=0;i<N;i++) win[i]=0.42-0.5*Math.cos(2*Math.PI*i/(N-1))+0.08*Math.cos(4*Math.PI*i/(N-1));
  const rev=new Uint32Array(N); for(let i=0;i<N;i++){let x=i,y=0;for(let b=0;b<LOG;b++){y=(y<<1)|(x&1);x>>=1;}rev[i]=y;}
  const cs=new Float64Array(N/2), sn=new Float64Array(N/2); for(let i=0;i<N/2;i++){cs[i]=Math.cos(2*Math.PI*i/N);sn[i]=-Math.sin(2*Math.PI*i/N);}
  const re=new Float64Array(N), im=new Float64Array(N);
  const kmin=Math.floor(75/binHz), kmax=Math.ceil(1500/binHz), M=new Float64Array(kmax+2);
  const M0=40, M1=88, NP=M1-M0+1, HL=8;
  const hist=[]; // letzte Salienz-Vektoren
  const T={cand:null,lastNote:-1e9,lastStrum:-1e9,prevNote:null,onNote:null,dbg:null};
  function fft(){ for(let s=1;s<=LOG;s++){const m=1<<s,h=m>>1,st=N/m; for(let k=0;k<N;k+=m) for(let j=0;j<h;j++){
      const wr=cs[j*st],wi=sn[j*st],a=k+j,b=a+h,tr=wr*re[b]-wi*im[b],ti=wr*im[b]+wi*re[b]; re[b]=re[a]-tr;im[b]=im[a]-ti;re[a]+=tr;im[a]+=ti;}} }
  T.process=function(buf,t,a4,tune,onset,chordPcs,voiceM){
    const L=buf.length, off=L-N;
    for(let i=0;i<N;i++){const j=rev[i]; re[j]=(off+i>=0?buf[off+i]:0)*win[i]; im[j]=0;}
    fft();
    let mx=0; for(let k=kmin-1;k<=kmax+1;k++){M[k]=Math.hypot(re[k],im[k]); if(k>=kmin&&k<=kmax&&M[k]>mx) mx=M[k];}
    const P=new Float32Array(NP); if(!mx){hist.push(P); if(hist.length>HL) hist.shift(); return null;}
    const thr=mx*0.01;
    for(let k=kmin;k<=kmax;k++){ const v=M[k]; if(v<thr||v<=M[k-1]||v<M[k+1]) continue;
      const la=Math.log(M[k-1]+1e-12),lv=Math.log(v),lb=Math.log(M[k+1]+1e-12),den=la-2*lv+lb,d=den?0.5*(la-lb)/den:0;
      const m=69+12*Math.log2((k+d)*binHz/a4)-tune, rm=Math.round(m), w=Math.cos(Math.PI*(m-rm)); const j=rm-M0;
      if(j>=0&&j<NP){const a=Math.sqrt(v)*w*w; if(a>P[j]) P[j]=a;} }
    let pm=0; for(const x of P) if(x>pm) pm=x;
    // Vergleich mit 70–230 ms vorher
    const ref=new Float32Array(NP); for(let h=0;h<hist.length-2;h++){const Q=hist[h]; for(let j=0;j<NP;j++) if(Q[j]>ref[j]) ref[j]=Q[j];}
    hist.push(P); if(hist.length>HL) hist.shift();
    if(!pm||hist.length<4) return null;
    // Neuheit unten (Basssaiten, < A3) und oben (Melodie)
    let lo=0,hi=0,best=-1,bs=0; const lows=[];
    for(let j=0;j<NP;j++){ const n=Math.max(0,(P[j]-ref[j])/pm); if(M0+j<57){ lo+=n; if(n>0.3) lows.push(j); } else { hi+=n; if(M0+j>79) continue; if((j>=12&&P[j-12]>=0.7*P[j])||(j>=19&&P[j-19]>=0.9*P[j])) continue; if(M0+j>=72&&((j>=12&&P[j-12]>=0.4*P[j])||(j>=24&&P[j-24]>=0.4*P[j])||(j>=19&&P[j-19]>=0.6*P[j]))) continue; const sc=n*P[j]/pm; if(sc>bs){bs=sc;best=j;} } }
    const loCount=lows.filter(j=>!lows.some(i=>i<j&&[12,19].includes(j-i))).length;
    const res={strum:false,lo,hi};
    T.novHist=(T.novHist||[]); { const nv=new Uint8Array(NP); for(let j=0;j<NP;j++) if((P[j]-ref[j])/pm>0.2&&P[j]>=0.25*pm) nv[j]=1; T.novHist.push(nv); if(T.novHist.length>10) T.novHist.shift(); }
    // Strumming: mehrere tiefe Saiten setzen gleichzeitig neu ein (eine einzelne mitschwingende Leersaite zählt nicht)
    if(loCount>=2&&lo>1.0&&lo>=0.8*hi){ T.lastStrum=t; res.strum=true;
      // Melodie im Strum: ein klar neuer Ton oben, der nicht zum Akkord gehört (z. B. das e beim G), zählt trotzdem
      if(chordPcs&&best>=0&&!chordPcs.includes((M0+best)%12)&&bs>0.15&&P[best]>=0.4*pm){ if(!T.cand||T.cand.j!==best) T.cand={j:best,t0:t,n:0,s:bs,on:true,pk:P[best],inStrum:true}; }
      else { T.cand=null; return res; } }
    // Lauf-Ton: ein klarer neuer Ton oben
    else if((t-T.lastStrum>0.15||(chordPcs&&best>=0&&!chordPcs.includes((M0+best)%12)))&&hi>0.5&&loCount<=1&&best>=0&&bs>0.08&&P[best]>=0.35*pm){
      if(!T.cand||(T.cand.j!==best&&(bs>T.cand.s*1.2||P[T.cand.j]<0.35*pm))) T.cand={j:best,j0:M0+best,t0:t,n:0,s:bs,on:!!onset,pk:P[best]};
    }
    // Griff-Ton (gehört genau zum gegriffenen Akkord, z. B. g4 im G 320033): nur Melodie, wenn er eine Linie fortsetzt
    // oder danach auf ihm gebunden weitergespielt wird (Slide/Hammer/Pull); sonst ist es nur ein erneuter Anschlag des Akkords.
    if(T.pend&&t-T.pend.t>0.7) T.pend=null;
    const out=note=>{ note.pub=true; T.lastPub=note; if(T.onNote) T.onNote(note); res.note=note; };
    // Töne werden kurz zurückgehalten, damit ein Anschlag, der eine Spur tief beginnt und auf den Ton rutscht, korrigiert werden kann
    if(T.hold&&t-T.hold.t>0.42){ out(T.hold); T.hold=null; }
    const publish=note=>{
      // Anschlag eine Spur tief, dann auf den Ton gerutscht (c# → d): kein eigener Ton, nur die Tonhöhe korrigieren
      if(note.art==='slide'&&T.hold&&T.hold.art==='pick'&&Math.abs(note.m-T.hold.m)===1&&note.t-T.hold.t<0.4){ T.hold.m=note.m; T.prevNote=T.hold; T.lastNote=t; return; }
      T.prevNote=note; T.lastNote=t;
      const h=T.hold; T.hold=null;
      if(h){ const a=T.lastPub?T.lastPub.m:null;
        const between=false; // Durchgangston-Regel verworfen: sie löschte auch echte Lauf-Töne (e d c b)
        if(!between) out(h); }
      T.hold=note; };
    const emit=(j,t0,art,from)=>{ const pv=T.prevNote; let m=M0+j;
      // Sprung von ≥ 10 Halbtönen nach oben, und die tiefere Oktave klingt mit → meist ist die tiefere gemeint (d5 statt d4)
      if(j>=12&&((pv&&t0-pv.t<1.2&&m-pv.m>=10&&P[j-12]>=0.2*P[j])||(m>=69&&P[j-12]>=0.25*P[j]))) m-=12;
      if(pv&&pv.m===m&&t0-pv.t<0.35) return;
      const note={t:t0,m,art:art||'pick',from:from??null};
      // Griff-Ton bestätigt sich, wenn es gebunden weitergeht oder schrittweise (≤ 2 Halbtöne) als Linie weiterläuft
      if(T.pend&&(note.art!=='pick'||(Math.abs(note.m-T.pend.m)<=2&&note.m!==T.pend.m&&t0-T.pend.t<0.7))){ publish(T.pend); T.pend=null; }
      if(note.art!=='pick'){}
      else if(voiceM&&voiceM.includes(m)&&!(pv&&t0-pv.t<0.7&&m!==pv.m&&Math.abs(m-pv.m)<=3)){ T.pend=note; return; }
      else T.pend=null;
      publish(note); };
    // Bestätigen: Ton bleibt ~100 ms deutlich hörbar (Durchgangstöne beim Slide fallen heraus)
    if(T.cand){
      const c=T.cand;
      // Slide/Bindung: dem stärksten Nachbarton (±2 Halbtöne) folgen, Durchgangstöne werden nicht bestätigt
      // Slide höchstens 2 Halbtöne vom Anschlag weg verfolgen (3/5), sonst läuft er in klingende Akkordtöne wie das g4 des G
      let g=c.j; for(let j=Math.max(0,c.j-1);j<=Math.min(NP-1,c.j+1);j++) if(M0+j>=57&&P[j]>P[g]*1.15&&Math.abs(M0+j-(c.j0??(M0+c.j)))<=2) g=j;
      if(g!==c.j){
        // Einschwingen: in den ersten ~70 ms einen Halbton daneben → nur die Tonhöhe korrigieren
        if(!c.slid&&t-c.t0<0.075&&Math.abs(g-c.j)===1){ c.j=g; }
        else {
          // angeschlagener Ton, der danach gleitet (3/5): erst den Startton notieren
          if(c.on&&!c.slid&&(c.n>=1||c.pk>=0.5*pm)){ emit(c.j,c.t0,'pick'); if(T.hold&&T.hold.m===M0+c.j) T.hold.keep=true; }
          c.from=c.from??c.j; c.j=g; c.n=0; c.t0=t; c.slid=true; c.on=false; } }
      if(P[c.j]>(c.pk||0)) c.pk=P[c.j];
      if(P[c.j]>=0.35*pm){ c.n++; if(c.n>=3){ T.cand=null;
        const pv=T.pend||T.prevNote, m=M0+c.j;
        // gleicher Ton noch einmal: nur bei echtem neuen Anschlag
        if(pv&&pv.m===m&&(c.t0-pv.t<0.35||!(onset||c.on))){}
        // Slide: ein Halbton-Durchgang direkt davor wird durch den Zielton ersetzt
        else if(pv&&Math.abs(m-pv.m)===1&&c.t0-pv.t<0.15&&T.onReplace){ pv.m=m; T.lastNote=t; if(pv.pub) T.onReplace(pv); }
        else {
          // Spieltechnik: geglitten = Slide; ohne neuen Anschlag = Hammer-on (höher) / Pull-off (tiefer)
          let art='pick';
          if(c.slid) art='slide';
          else if(!c.on&&pv&&c.t0-pv.t<0.7&&pv.m!==m&&Math.abs(m-pv.m)<=5){
            // neu aufgetauchte Zwischentöne = Slide, sonst Hammer-on/Pull-off
            const a=Math.min(pv.m,m)-M0, b=Math.max(pv.m,m)-M0; let mid=false;
            for(const nv of T.novHist) for(let j=a+1;j<b;j++) if(nv[j]) mid=true;
            art=mid?'slide':(m>pv.m?'h':'p'); }
          emit(c.j,c.t0,art,c.slid?(M0+c.from):null); } } }
      else if(t-c.t0>0.25) T.cand=null;
    }
    return res;
  };
  return T;
}

// Ähnlichkeit zu einem gelernten Beispiel: Tonklassen + tiefe Lage (MIDI 40–60, dort unterscheiden sich z. B. Asus2 ohne A-Saite und echtes Esus4)
const LEARN_T=0.86;
function learnSim(cn,pf,x){
  let d=0,na=0,nb=0; for(let k=0;k<12;k++){d+=cn[k]*x.cn[k];na+=cn[k]*cn[k];nb+=x.cn[k]*x.cn[k];}
  const c1=d/Math.sqrt(na*nb||1); d=0;na=0;nb=0;
  for(let j=0;j<=20;j++){d+=pf[j]*x.pf[j];na+=pf[j]*pf[j];nb+=x.pf[j]*x.pf[j];}
  return 0.3*c1+0.7*(d/Math.sqrt(na*nb||1));
}
function makeChordEngine(sr){
  const N=16384, binHz=sr/N, LOG=Math.ceil(Math.log2(N));
  const win=new Float64Array(N); for(let i=0;i<N;i++) win[i]=0.42-0.5*Math.cos(2*Math.PI*i/(N-1))+0.08*Math.cos(4*Math.PI*i/(N-1));
  const rev=new Uint32Array(N); for(let i=0;i<N;i++){let x=i,y=0;for(let b=0;b<LOG;b++){y=(y<<1)|(x&1);x>>=1;}rev[i]=y;}
  const cs=new Float64Array(N/2), sn=new Float64Array(N/2); for(let i=0;i<N/2;i++){cs[i]=Math.cos(2*Math.PI*i/N);sn[i]=-Math.sin(2*Math.PI*i/N);}
  const re=new Float64Array(N), im=new Float64Array(N);
  const kmin=Math.floor(75/binHz), kmax=Math.min(N/2-2,Math.ceil(1500/binHz));
  const M=new Float64Array(kmax+2);
  function fft(){
    for(let s=1;s<=LOG;s++){const m=1<<s,h=m>>1,st=N/m;
      for(let k=0;k<N;k+=m) for(let j=0;j<h;j++){
        const wr=cs[j*st],wi=sn[j*st],a=k+j,b=a+h,tr=wr*re[b]-wi*im[b],ti=wr*im[b]+wi*re[b];
        re[b]=re[a]-tr;im[b]=im[a]-ti;re[a]+=tr;im[a]+=ti;}}
  }
  const E={sr,N,chroma:new Float32Array(12),prof:new Float32Array(PN),pf:new Float32Array(PN),pacc:new Float32Array(PN),
    slowDb:-90,lastOn:-1e9,lastSound:-1e9,cur:null,cand:null,candT:0,
    vIdx:0,vLock:false,pref:{},onCommit:null,learn:[],tune:0,NT:makeNoteTracker(sr)};

  function baseScore(cn,r,qi,bassBonus){
    const t=TPL[r*QUAL.length+qi]; let d=0; for(let k=0;k<12;k++) d+=cn[k]*t.v[k];
    return d*QUAL[qi].p+bassBonus(r,qi);
  }
  // Passt das gehörte Tonhöhenbild zu einem bekannten Griff? (hilft z. B. bei Asus2 gegen Esus4)
  const VW=0.15;
  function fitOf(r,qi){let b=0; for(const v of voicings(r,qi)){const c=cosP(E.pf,v.p); if(c>b) b=c;} return b;}
  function scoreOf(cn,r,qi,bassBonus){return baseScore(cn,r,qi,bassBonus)+VW*fitOf(r,qi);}
  function cosP(a,p){let d=0,n=0;for(let j=0;j<PN;j++){d+=a[j]*p[j];n+=a[j]*a[j];}return n?d/Math.sqrt(n):0;}
  function chooseVoicing(){
    const c=E.cur; if(!c||c.type!=='chord'||E.vLock) return;
    const L=voicings(c.r,c.qi); if(L.length<2){E.vIdx=0;return;}
    const pref=E.pref[c.r+'|'+QUAL[c.qi].id];
    const sc=L.map((v,i)=>cosP(E.pacc,v.p)-0.008*i-(v.b>0?0.03:0)+(pref===v.id?0.03:0));
    let b=0; for(let i=1;i<sc.length;i++) if(sc[i]>sc[b]) b=i;
    if(b!==E.vIdx&&sc[b]>sc[E.vIdx]+0.015) E.vIdx=b;
  }
  function startVoicing(c){
    E.pacc.set(E.pf); E.vLock=false; E.vIdx=0;
    if(c.type!=='chord') return;
    const L=voicings(c.r,c.qi), pref=E.pref[c.r+'|'+QUAL[c.qi].id];
    const i=L.findIndex(v=>v.id===pref); if(i>=0) E.vIdx=i;
    chooseVoicing();
  }

  // buf: die letzten N Samples; dt: Sekunden seit dem letzten Aufruf; t: Zeit in Sekunden
  E.process=function(buf,dt,t,a4){
    const L=buf.length, off=L-N;
    // Pegel aus den letzten ~40 ms (schnell), für Anschlagserkennung
    let e=0; const sh=Math.min(L,2048); for(let i=L-sh;i<L;i++) e+=buf[i]*buf[i];
    const rms=Math.sqrt(e/sh), db=20*Math.log10(rms+1e-9);
    if(db>E.slowDb+6) E.lastOn=t;
    E.slowDb+=(db-E.slowDb)*Math.min(1,dt*2);
    if(rms<0.0035) return;
    E.lastSound=t;
    for(let i=0;i<N;i++){const j=rev[i]; re[j]=(off+i>=0?buf[off+i]:0)*win[i]; im[j]=0;}
    fft();
    let mx=0; for(let k=kmin-1;k<=kmax+1;k++){M[k]=Math.hypot(re[k],im[k]); if(k>=kmin&&k<=kmax&&M[k]>mx) mx=M[k];}
    if(!mx) return;
    const thr=mx*0.0158; // −36 dB
    const c=new Float32Array(12); E.prof.fill(0);
    for(let k=kmin;k<=kmax;k++){
      const v=M[k]; if(v<thr||v<=M[k-1]||v<M[k+1]) continue;
      const la=Math.log(M[k-1]+1e-12),lv=Math.log(v),lb=Math.log(M[k+1]+1e-12),den=la-2*lv+lb, d=den?0.5*(la-lb)/den:0;
      const m=69+12*Math.log2((k+d)*binHz/a4)-E.tune, rm=Math.round(m), w=Math.cos(Math.PI*(m-rm));
      const a=Math.sqrt(v)*w*w; c[((rm%12)+12)%12]+=a;
      const j=rm-PM0; if(j>=0&&j<PN&&a>E.prof[j]) E.prof[j]=a;
    }
    let n=0; for(const x of c) n+=x*x; n=Math.sqrt(n); if(!n) return;
    // Feinstimmung der Gitarre mitlernen (Abweichung starker Spitzen, langsam gemittelt)
    { let sw=0,sd=0; for(let k=kmin;k<=kmax;k++){const v=M[k]; if(v<mx*0.25||v<=M[k-1]||v<M[k+1]) continue;
        const la=Math.log(M[k-1]+1e-12),lv=Math.log(v),lb=Math.log(M[k+1]+1e-12),den=la-2*lv+lb,d=den?0.5*(la-lb)/den:0;
        const m=69+12*Math.log2((k+d)*binHz/a4); const dv=m-Math.round(m)-E.tune; const dd=dv-Math.round(dv); sw+=v; sd+=v*dd; }
      if(sw) E.tune=Math.max(-0.45,Math.min(0.45,E.tune+(sd/sw)*0.03)); }
    const NR=E.NT.process(buf,t,a4,E.tune,t-E.lastOn<0.12,E.cur&&E.cur.type==='chord'?QUAL[E.cur.qi].iv.map(i=>(E.cur.r+i)%12):null,(()=>{const v=E.voicing(); return v?v.v.f.map((b,s)=>b<0?-1:OPEN_STR[s]+b):null;})());
    // Akkordwechsel nur nach Strumming; nach Lauf-Tönen hält der Akkord
    const noteRecent=t-E.NT.lastNote<1.5;
    const fresh=(t-E.NT.lastStrum<0.8)||(t-E.lastOn<0.8&&!noteRecent);
    const al=t-E.lastOn<0.06?0.5:Math.min(1,dt/0.35);
    for(let k=0;k<12;k++) E.chroma[k]+=(c[k]/n-E.chroma[k])*al;
    // Tonhöhenbild aus den Spitzen (für Bass und Griff): schnell (pf) und langsam (pacc)
    let pmx=0; for(let j=0;j<PN;j++) if(E.prof[j]>pmx) pmx=E.prof[j];
    let lowMx=0;
    if(pmx) for(let j=0;j<PN;j++){const v=E.prof[j]/pmx; E.pf[j]+=(v-E.pf[j])*al; E.pacc[j]+=(v-E.pacc[j])*Math.min(1,dt/1.0); if(j<=24&&E.pf[j]>lowMx) lowMx=E.pf[j];}
    // Bass: tiefster deutlich hörbarer Akkordton (Korpusresonanz zählt so nicht mit)
    const bassBonus=(r,qi)=>{
      const iv=QUAL[qi].iv;
      for(let j=0;j<=24;j++){ if(E.pf[j]<0.3*lowMx) continue;
        const pc=(PM0+j)%12, rel=(pc-r+12)%12;
        if(iv.includes(rel)) return rel===0?0.06:0; }
      return 0;
    };
    let cn=new Float32Array(12); n=0; for(const x of E.chroma) n+=x*x; n=Math.sqrt(n)||1; for(let k=0;k<12;k++) cn[k]=E.chroma[k]/n;
    const cands=[];
    for(let r=0;r<12;r++) for(let qi=0;qi<QUAL.length;qi++) cands.push([baseScore(cn,r,qi,bassBonus),r,qi]);
    cands.sort((a,b)=>b[0]-a[0]);
    let br=0,bq=0,bs=-1;
    for(let i=0;i<5;i++){const [s0,r,qi]=cands[i], s=s0+VW*fitOf(r,qi); if(s>bs){bs=s;br=r;bq=qi;}}
    let cmx=0; for(const x of cn) if(x>cmx) cmx=x;
    let strong=0; for(const x of cn) if(x>0.3*cmx) strong++;
    let lab;
    if(strong===1){ let r=0; for(let k=1;k<12;k++) if(cn[k]>cn[r]) r=k; lab={type:'note',r,sc:1}; }
    else {
      if(bs<0.70+VW*0.6){E.cand=null;return;}
      const q=QUAL[bq].id, third=Math.max(cn[(br+3)%12],cn[(br+4)%12])/cmx;
      if((q===''||q==='m')&&third<0.15) lab={type:'power',r:br,sc:bs+(third<0.08?0.05:0)};
      else lab={type:'chord',r:br,qi:bq,sc:bs};
    }
    // Gelernt: Klingt es wie ein korrigiertes Beispiel, das die App genauso falsch gelesen hatte, gilt die Korrektur
    if(lab.type!=='note'&&E.learn.length){
      const k0=lab.type+'|'+lab.r+'|'+(lab.qi??''); let bx=null,bsim=0;
      for(const x of E.learn){ if(x.from!==k0||x.src) continue; const s=learnSim(cn,E.pf,x); if(s>bsim){bsim=s;bx=x;} }
      if(bx&&bsim>=LEARN_T) lab={type:bx.to.type,r:bx.to.r,qi:bx.to.qi,sc:lab.sc,learned:true,raw:k0};
    }
    lab.key=lab.type+'|'+lab.r+'|'+(lab.qi??'');
    const cur=E.cur;
    if(cur&&lab.key===cur.key){E.cand=null; if(cur.type==='chord') chooseVoicing(); return;}
    let curSc=0;
    if(cur&&cur.type!=='note') curSc=scoreOf(cn,cur.r,cur.type==='chord'?cur.qi:0,bassBonus);
    const ok=!cur||(fresh&&lab.sc>curSc+0.04)||(!noteRecent&&lab.type==='chord'&&lab.sc>curSc+0.12);
    if(!ok){E.cand=null; if(cur&&cur.type==='chord') chooseVoicing(); return;}
    if(!E.cand||E.cand.key!==lab.key){E.cand=lab;E.candT=0;}
    E.candT+=dt;
    if(E.candT>=(cur?0.3:0.15)){
      E.cur=E.cand; E.cand=null; startVoicing(E.cur);
      if(E.onCommit) E.onCommit(E.cur);
    }
  };
  E.reset=function(){E.chroma.fill(0);E.pacc.fill(0);E.pf.fill(0);E.cur=null;E.cand=null;E.candT=0;E.lastOn=-1e9;E.lastSound=-1e9;E.slowDb=-90;E.vIdx=0;E.vLock=false;};
  E.voicing=function(){const c=E.cur; if(!c||c.type!=='chord') return null; const L=voicings(c.r,c.qi); return {v:L[Math.min(E.vIdx,L.length-1)],i:E.vIdx,n:L.length};};
  E.nextVoicing=function(){const c=E.cur; if(!c||c.type!=='chord') return null; const L=voicings(c.r,c.qi);
    E.vIdx=(E.vIdx+1)%L.length; E.vLock=true; return {key:c.r+'|'+QUAL[c.qi].id,id:L[E.vIdx].id};};
  return E;
}
// ==CHORD-CORE-END==

const ROOTS=['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'];
function rootName(pc){let n=ROOTS[pc];if(S.notation==='H'){if(n==='B')n='H';else if(n==='B♭')n='B';}return n;}

function diagramSVG(v){
  const frets=v.f, barre=v.b;
  const played=frets.filter(f=>f>0), maxF=Math.max(...played,1);
  const base=maxF<=4?1:Math.min(...played);
  const W=180,H=210,x0=26,y0=34,sx=(W-2*x0)/5,sy=(H-y0-14)/5;
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Griffbild">`;
  if(base===1) s+=`<rect x="${x0-1}" y="${y0-4}" width="${5*sx+2}" height="5" rx="2" fill="var(--text)" opacity=".7"/>`;
  else s+=`<text x="${x0-10}" y="${y0+sy*0.62}" text-anchor="end" font-size="13" fill="var(--muted)">${base}</text>`;
  for(let i=0;i<6;i++) s+=`<line x1="${x0}" y1="${y0+i*sy}" x2="${x0+5*sx}" y2="${y0+i*sy}" stroke="var(--line)" stroke-width="2"/>`;
  for(let i=0;i<6;i++) s+=`<line x1="${x0+i*sx}" y1="${y0}" x2="${x0+i*sx}" y2="${y0+5*sy}" stroke="var(--muted)" stroke-opacity=".55" stroke-width="${1.6-i*0.15}"/>`;
  if(barre>0){
    const idx=frets.map((f,i)=>f===barre?i:-1).filter(i=>i>=0);
    if(idx.length>=2){const a=Math.min(...idx),b=Math.max(...idx),y=y0+(barre-base+0.5)*sy;
      s+=`<rect x="${x0+a*sx-9}" y="${y-9}" width="${(b-a)*sx+18}" height="18" rx="9" fill="var(--acc)"/>`;}
  }
  frets.forEach((f,i)=>{
    const x=x0+i*sx;
    if(f<0) s+=`<text x="${x}" y="${y0-12}" text-anchor="middle" font-size="26" font-weight="500" fill="var(--muted)">×</text>`;
    else if(f===0) s+=`<circle cx="${x}" cy="${y0-17}" r="7.5" fill="none" stroke="var(--muted)" stroke-width="3"/>`;
    else s+=`<circle cx="${x}" cy="${y0+(f-base+0.5)*sy}" r="11" fill="var(--acc)"/>`;
  });
  return s+'</svg>';
}

const CH={running:false,raf:0,ctx:null,an:null,stream:null,T:null,eng:null,demoTimer:0,wake:null,hist:[],key:'',last:0,lastProc:0,micStart:0,run:0,mic:false,micMsg:'',ev:[],tNow:0,follow:true,stripKey:'',grids:[],tBase:0,ctxT0:0,met:null,count:0,counting:false,raw:null,RB:null,sel:new Set(),selBars:new Set(),edm:false};
// Layout-Werte (in der Vorschau abgestimmt)
const LAY={dig:20,lab:19,gap:12,str:22,px:88}; const PX0=88;

function labelParts(l){
  if(l.type==='chord') return {root:rootName(l.r),suf:QUAL[l.qi].id+(l.bass!=null&&l.bass!==l.r?'/'+rootName(l.bass):'')};
  if(l.type==='power') return {root:rootName(l.r),suf:'5'};
  return {root:rootName(l.r),suf:''};
}
function stripSVG(){
  const {dig:D,lab:Lb,gap:G,str:C,px:F}=LAY, top=Math.round(Lb+G+D*.62+6), left=30;
  const vw=($('#cstrip').clientWidth||360), W=Math.max(vw,left+CH.tNow*F+70), H=Math.round(top+5*C+D*.7+30);
  let o=`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Tablatur">`;
  for(let i=0;i<6;i++) o+=`<line x1="${left-8}" y1="${top+i*C}" x2="${W-4}" y2="${top+i*C}" stroke="var(--line)" stroke-width="${strW(i,1)}"/>`;
  'TAB'.split('').forEach((ch,i)=>o+=`<text x="9" y="${top+(1+i*1.5)*C*0.95}" font-size="${Math.min(13,C*.7)}" fill="var(--muted)" text-anchor="middle">${ch}</text>`);
  const cy=top-D*.62-G;
  for(let s=0;s<6;s++) o+=`<rect data-str="${s}" x="${left}" y="${top+(5-s)*C-C/2}" width="${W-left}" height="${C}" fill="transparent"/>`;
  o+=`<rect data-clane="1" x="${left}" y="0" width="${W-left}" height="${top-C/2}" fill="transparent"/>`;
  const hY=top+5*C+D*.62+4; // Ziehgriffe der Taktstriche unter dem Tab
  let handles='';
  CH.grids.forEach((g,gi)=>{ gridExtend(g);
    g.lines.forEach((lt,k)=>{ if(lt<0) return; const x=left+lt*F+10, act=DR.active&&DR.b&&DR.b.g===g&&DR.b.k===k;
      o+=`<line x1="${x}" y1="${top-D*.62}" x2="${x}" y2="${top+5*C+D*.62}" stroke="${act?'var(--acc)':'var(--muted)'}" stroke-width="${act?2.6:1.4}" opacity=".85"/>`;
      if(k>0){ o+=`<rect x="${x-5}" y="${hY}" width="10" height="12" rx="3" fill="${act?'var(--acc)':'var(--muted)'}" opacity="${act?1:.45}"/>`;
        handles+=`<rect data-b="${gi},${k}" x="${x-16}" y="${hY-6}" width="32" height="28" fill="transparent"/>`; } }); });
  // Anzeige-Positionen: Würden sich Zahlen überdecken, rückt die spätere nach rechts (die Zeit bleibt unverändert)
  const XS=new Map(), endS=new Array(6).fill(-1e9); let endL=-1e9; const cw=D*.62, gp=5;
  CH.ev.forEach(e=>{ let x=left+e.t*F+10;
    if(e.type==='note'){ const w=cw*String(e.f).length; x=Math.max(x,endS[e.s]+gp+w/2); endS[e.s]=x+w/2; }
    else { const fr=(S.chordFrets!==false&&e.f)?e.f:[]; let need=x; const lw=Lb*.62*(labelParts(e).root.length+labelParts(e).suf.length*.75);
      fr.forEach((f,s)=>{ if(f>=0) need=Math.max(need,endS[s]+gp+cw*String(f).length/2); }); need=Math.max(need,endL+gp+lw/2); x=need;
      fr.forEach((f,s)=>{ if(f>=0) endS[s]=x+cw*String(f).length/2; }); endL=x+lw/2; }
    XS.set(e,x); });
  const W2=Math.max(W,Math.max(...endS,endL)+60);
  CH.ev.forEach((e,i)=>{
    const x=XS.get(e);
    if(e.type==='note'){ const y=top+(5-e.s)*C, n=String(e.f).length, sel=ED.ev===e||DR.ev===e;
      if(e.art&&e.art!=='pick'){ // Spieltechnik zwischen Vorgänger (gleiche Saite) und diesem Ton
        let pv=null; for(let k=i-1;k>=0;k--){const q=CH.ev[k]; if(q.type==='note'){ if(q.s===e.s&&e.t-q.t<1.5) pv=q; break; } }
        const up=pv?e.f>=pv.f:true, sym=e.art==='slide'?(up?'/':'\\'):e.art;
        const mx=pv?(XS.get(pv)+x)/2:x-D*.95;
        o+=`<text x="${mx}" y="${y-D*.75}" text-anchor="middle" font-size="${Math.round(D*.62)}" font-style="${e.art==='slide'?'normal':'italic'}" fill="var(--acc)" opacity=".85">${sym}</text>`; }
      if(sel) o+=`<rect x="${x-D*.8}" y="${y-D*.9}" width="${D*1.6}" height="${D*1.8}" rx="7" fill="var(--acc)" opacity=".22"/>`;
      o+=`<rect x="${x-D*.42*n-1}" y="${y-D*.62}" width="${D*.84*n+2}" height="${D*1.15}" fill="${sel?'none':'var(--bg)'}"/><text x="${x}" y="${y+D*.36}" text-anchor="middle" font-size="${D}" font-weight="500" fill="var(--acc)">${e.f}</text>`;
      o+=`<rect data-i="${i}" x="${x-D*.8}" y="${y-C*.5}" width="${D*1.6}" height="${C}" fill="transparent" style="cursor:pointer"/>`;
      return; }
    const p=labelParts(e);
    if(ED.ev===e||DR.ev===e) o+=`<rect x="${x-Math.max(Lb,D)*1.1}" y="${cy-Lb*1.1}" width="${Math.max(Lb,D)*2.2}" height="${top+5*C+D*.7-cy+Lb*1.1}" rx="8" fill="var(--acc)" opacity=".18"/>`;
    o+=`<text x="${x}" y="${cy}" text-anchor="middle" font-size="${Lb}" font-weight="500" fill="var(--text)">${p.root}<tspan fill="var(--acc)" font-size="${Lb*.75}" dy="-${Lb*.18}">${p.suf}</tspan></text>`;
    if(e.f&&S.chordFrets!==false){ const D2=D*.82; e.f.forEach((f,i)=>{ if(f<0) return; const y=top+(5-i)*C, n=String(f).length;
      o+=`<rect x="${x-D2*.42*n-1}" y="${y-D2*.62}" width="${D2*.84*n+2}" height="${D2*1.15}" fill="${ED.ev===e||DR.ev===e?'none':'var(--bg)'}"/><text x="${x}" y="${y+D2*.36}" text-anchor="middle" font-size="${D2}" fill="var(--muted)">${f}</text>`; }); }
    o+=`<rect data-i="${i}" x="${x-Math.max(Lb,D)*1.1}" y="0" width="${Math.max(Lb,D)*2.2}" height="${H}" fill="transparent" style="cursor:pointer"/>`;
  });
  if(DR.active&&DR.ev&&DR.snapTo!=null){ const sx=left+DR.snapTo*F+10; o+=`<line x1="${sx}" y1="${cy-Lb}" x2="${sx}" y2="${top+5*C+D*.62}" stroke="var(--acc)" stroke-width="2" stroke-dasharray="4 3"/>`; }
  o+=handles;
  o=o.replace(`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"`,`<svg width="${W2}" height="${H}" viewBox="0 0 ${W2} ${H}"`);
  if(CH.mic){const nx=left+CH.tNow*F+10+F*.5; o+=`<line x1="${nx}" y1="${cy-Lb}" x2="${nx}" y2="${top+5*C+D*.7}" stroke="var(--acc)" stroke-width="1.5" stroke-dasharray="3 3" opacity=".7"/>`;}
  return o+'</svg>';
}
function renderStrip(){
  chkUI();
  const key=(ED.ev?CH.ev.indexOf(ED.ev):-1)+'#'+CH.ev.map(e=>e.key+'@'+e.t.toFixed(2)+(e.type==='note'?e.s+'/'+e.f+(e.art||''):(e.f?e.f.join(','):''))+(e.chk?'!':'')+(e.part||'')).join(';')+'|'+S.notation+'|'+CH.mic+'|'+Math.floor(CH.tNow*6)+'|'+CH.grids.map(g=>g.lines.map(x=>x.toFixed(2)).join(':')+(g.end==null?'':'/'+g.end.toFixed(2))).join(',')+'|'+(DR.active?1:0)+'|'+LAY.px+'|'+(S.chordFrets!==false)+'|'+(DR.snapTo!=null?DR.snapTo.toFixed(2):'');
  const sh=!CH.mic&&CH.ev.length>0;
  if(key+sh+($('#cstrip').clientWidth)===CH.stripKey) return; CH.stripKey=key+sh+($('#cstrip').clientWidth);
  const el=$('#cstrip'); el.classList.toggle('blatt',sh); el.innerHTML=sh?sheetSVG():stripSVG(); viewUI(); chordsUI(); if(ED.ev) requestAnimationFrame(()=>edPlace(false));
  if(sh){ $('#cstripnote').textContent=''; $('#chelp').textContent='Antippen = bearbeiten · über dem Tab antippen = Akkord eintragen · leere Saite antippen = Ton eintragen · lange drücken und ziehen = verschieben'; alignUI(); capUI(); undoUI(); zoomUI(); return; }
  if(!CH.follow&&CH.mic&&!ED.ev&&performance.now()-(CH.scrollT||0)>4000) CH.follow=true;
  if(CH.follow&&el.scrollLeft<el.scrollWidth-el.clientWidth-2){CH.progScroll=true; el.scrollLeft=el.scrollWidth;}
  $('#cstripnote').textContent=CH.ev.length||CH.mic?'':'Noch keine Aufnahme · rechts unten starten';
  $('#chelp').textContent=CH.ev.length?(CH.grids.length?'Antippen = bearbeiten · leere Saite antippen = Ton eintragen · lange drücken und ziehen = verschieben · zwei Finger = zoomen':'Antippen = bearbeiten · leere Saite antippen = Ton eintragen · lange drücken und ziehen = verschieben · zwei Finger = zoomen'):'';
  alignUI(); capUI(); undoUI(); zoomUI();
}
function renderChord(now){
  const E=CH.eng, nameEl=$('#cname'), quiet=!E||CH.tNow-E.lastSound>1.5;
  const l=E&&E.cur, vo=E&&E.voicing();
  const key=(l?l.key:'none')+'|'+(l&&l.learned?'L':'')+'|'+CH.mic+'|'+(CH.counting?'c'+CH.count:'')+'|'+(vo?vo.v.id+'/'+vo.n+(E.vLock?'L':''):'')+'|'+S.notation+'|'+((x=>x?x.key+(x.f||[]).join(''):'')(lastChordEv()));
  const le=lastChordEv();
  if(le&&l&&le.key===l.key&&vo&&!le.edited) le.f=vo.v.f;
  renderStrip();
  nameEl.classList.toggle('idle',!l||quiet);
  $('#cdiag').classList.toggle('idle',!l||quiet);
  $('#cvoi').classList.toggle('idle',!l||quiet);
  if(key===CH.key) return;
  CH.key=key;
  if(!l){nameEl.innerHTML='<span>–</span>';$('#cdiag').innerHTML='';$('#cvoi').textContent='';$('#chint').textContent=CH.mic?'Spiel einen Akkord':(CH.micMsg||'Mikro oben rechts starten');}
  else{
    const p=labelParts(l);
    nameEl.innerHTML=`<span>${p.root[0]}</span><span class="acc">${p.root.slice(1)}</span><span class="suf">${p.suf}</span>`;
    nameEl.classList.toggle('single',l.type==='note');
    const lev=lastChordEv(), ed=lev&&lev.edited&&lev.key===l.key&&lev.f;
    $('#cdiag').innerHTML=ed?diagramSVG({f:lev.f,b:(evVoicings(lev).find(v=>v.f.join()===lev.f.join())||{b:0}).b}):(vo?diagramSVG(vo.v):(l.type==='power'?diagramSVG({f:POWER(l.r),b:0}):''));
    $('#cvoi').textContent=vo&&vo.n>1?`Griff ${vo.i+1} von ${vo.n} · tippen zum Wechseln`:'';
    $('#chint').textContent=!CH.mic&&CH.micMsg?CH.micMsg:(l.type==='note'?'Einzelton':(l.learned?'Aus deiner Korrektur gelernt':(l.type==='power'?'Powerchord':'')));
  }
  if(CH.mic&&CH.counting) $('#chint').textContent=CH.count?'Einzählen · '+CH.count:'Einzählen …';
}

function chordFrame(now){
  if(!CH.running) return;
  if(CH.mic&&CH.an&&CH.ctx&&now-CH.lastProc>=30){ // Analyse etwa 30-mal pro Sekunde
    const dt=Math.min(0.1,(now-CH.lastProc)/1000||0.033); CH.lastProc=now;
    const ctx=CH.ctx, M=CH.met; let go=true;
    if(M){
      // Latenz Lautsprecher → Mikro aus den Einzähl-Klicks (Median)
      while(M.pend.length&&ctx.currentTime>=M.pend[0]+0.45){
        const L=metMeasure(M.pend.shift());
        if(L!=null){M.cal.push(L); const a=[...M.cal].sort((x,y)=>x-y); M.L=a[a.length>>1];}
      }
      const m=ctx.currentTime-M.L-M.down;
      if(m<0){ go=false; CH.counting=true; CH.count=clamp(Math.floor((ctx.currentTime-M.L-M.t0)/M.beat)+1,0,M.beats); }
      else { CH.counting=false; CH.tNow=CH.tBase+m; }
    } else CH.tNow=CH.tBase+(ctx.currentTime-CH.ctxT0);
    capFrame(ctx); bpFrame(ctx);
    if(go){
      CH.an.getFloatTimeDomainData(CH.T);
      CH.eng.process(CH.T,dt,CH.tNow,S.a4);
      if($('#esheet').classList.contains('on')||$('#msheet').classList.contains('on')||$('#sheet').classList.contains('on')) CH.idleRef=CH.tNow;
      if(CH.tNow-Math.max(CH.eng.lastSound,CH.tBase,CH.idleRef||0)>30) chordMicOff('Aufnahme nach 30 s Stille gestoppt');
    }
  }
  renderChord(now); statusUI();
  CH.raf=requestAnimationFrame(chordFrame);
}
function lastChordEv(){ for(let i=CH.ev.length-1;i>=0;i--) if(CH.ev[i].type!=='note') return CH.ev[i]; return null; }
function onChordCommit(c){
  if(c.type!=='chord') return; // Powerchords und Einzeltöne werden nicht als Akkord eingetragen
  const last=lastChordEv();
  if(last&&last.key===c.key) return;
  // A – B – A: War der Akkord davor (B) nur kurz und kommt jetzt wieder A, war B ein Lesefehler → B entfernen, A läuft weiter
  if(last&&!last.edited&&CH.tNow-last.t<0.6){ let i=CH.ev.indexOf(last), a=null; for(let k=i-1;k>=0;k--) if(CH.ev[k].type!=='note'){a=CH.ev[k];break;}
    if(a&&a.key===c.key){ logEv(last,'akkord-entfernt-zwischenlesung'); CH.ev.splice(i,1); return; } }
  const E=CH.eng; let t=(E&&CH.tNow-E.lastOn<1)?E.lastOn:CH.tNow-(E?E.candT:0); t=Math.max(t,CH.tBase,0);
  let cn=null;
  if(E){ let n=0; for(const x of E.chroma) n+=x*x; n=Math.sqrt(n)||1; cn=Array.from(E.chroma,x=>x/n); }
  // Töne, die nur zum Akkordanschlag gehören (z. B. das A beim Asus2), sind keine Lauf-Töne
  { const pcs=QUAL[c.qi].iv.map(i=>(c.r+i)%12);
    for(let i=CH.ev.length-1;i>=0;i--){ const e=CH.ev[i]; if(e.t<t-0.25) break;
      if(e.type==='note'&&!e.edited&&e.t<=t+0.45&&pcs.includes(e.m%12)){ logEv(e,'ton-entfernt-akkordanschlag'); CH.ev.splice(i,1); } } }
  { const pc=preferName({type:'chord',r:c.r,qi:c.qi,key:c.key}); if(pc.key!==c.key){ c=Object.assign({},c,{r:pc.r,qi:pc.qi,key:pc.key}); if(last&&last.key===c.key) return; } }
  const fields={r:c.r,qi:c.qi,type:'chord',key:c.key,orig:c.raw||c.key,learned:!!c.learned,f:null,cn,pf:E?Array.from(E.pf):null};
  // Gleicher Anschlag: Die App hat sich nur korrigiert (z. B. erst G7, dann G) → überschreiben, Zeitpunkt bleibt
  const strumSince=E?E.NT.lastStrum:0;
  if(last&&!last.edited&&(t-last.t<0.45||(t-last.t<0.6&&!(strumSince>last.t+0.1)))&&CH.ev.indexOf(last)>=CH.ev.length-3){ Object.assign(last,fields); logEv(last,'akkord-ueberschrieben'); return; }
  if(last) t=Math.max(t,last.t+0.35);
  const ne=Object.assign({t},fields); CH.ev.push(ne); logEv(ne,'akkord');
  if(CH.ev.length>600) CH.ev.shift();
}
// Lauf-Töne: Saite und Bund nach Spielbarkeit, bevorzugt auf der Saite des vorigen Tons
const OPEN_M=[40,45,50,55,59,64];
function fretOptions(m){ const o=[]; for(let s=5;s>=0;s--){const f=m-OPEN_M[s]; if(f>=0&&f<=17) o.push({s,f});} return o; }
function placeNote(m){
  const opts=fretOptions(m); if(!opts.length) return null;
  let prev=null; for(let i=CH.ev.length-1;i>=0;i--){const e=CH.ev[i]; if(e.type==='note'){prev=CH.tNow-e.t<3?e:null;break;}}
  let best=null,bs=1e9;
  for(const o of opts){ let sc=o.f+(o.f>5?(o.f-5)*1.5:0);
    if(prev){ if(o.s===prev.s&&Math.abs(o.f-prev.f)<=5) sc-=4; sc+=Math.abs(o.f-prev.f)*0.3; if(o.f===0&&o.s!==prev.s) sc+=2; }
    else if(o.f===0) sc+=0.5;
    if(sc<bs){bs=sc;best=o;} }
  return best;
}
function onNoteDetected(n){
  if(!CH.mic||CH.counting) return;
  if(BPB.on) return; // neue Ton-Erkennung: Töne kommen nach dem Stoppen
  if(playMode()==='strum') return; // Strummen: nur Akkorde

  let p=placeNote(n.m); if(!p) return;
  // Slide, Hammer-on und Pull-off gehen nur auf derselben Saite: dort platzieren oder als Anschlag werten
  if(n.art&&n.art!=='pick'){
    let pv=null; for(let i=CH.ev.length-1;i>=0;i--){const e=CH.ev[i]; if(e.type==='note'){pv=e;break;}}
    const f=pv?n.m-OPEN_M[pv.s]:-1;
    if(pv&&n.t-pv.t<0.9&&f>=0&&f<=17&&f!==pv.f){ p={s:pv.s,f};
      // gelernte Spieltechnik für diesen Abstand (z. B. +2 → Slide, wenn Manu 3/5 einmal korrigiert hat)
      const k=String(n.m-pv.m), pr=(S.artPref||{})[k]; if(pr) n.art=pr; }
    else n.art='pick';
  }
  // Kontext für das Ton-Lernen
  let prevO=null; for(let i=CH.ev.length-1;i>=0;i--){const e=CH.ev[i]; if(e.type==='note'){ if(n.t-e.t<1.5) prevO=e.origM??e.m; break; }}
  const E=CH.eng, chordKey=E&&E.cur?E.cur.key:null, pf=E?Array.from(E.pf,v=>+v.toFixed(3)):null, origM=n.m;
  const les=pf?noteLesson(n.m,chordKey,prevO,pf,'old'):null;
  if(les&&les.kind==='drop'){ logEv({t:n.t,type:'note',m:n.m,s:p.s,f:p.f,art:n.art},'ton-gelernt-weggelassen'); return; }
  if(les&&les.kind==='map'){ n.m=les.to; const q=placeNote(n.m); if(q) p=q; }
  if(playMode()==='melody'&&(ringingChordTone(n.m,p,E&&E.cur)||p.s<=1)) return;
  const ev={t:Math.max(n.t-0.06,CH.tBase),type:'note',m:n.m,s:p.s,f:p.f,key:'note|'+n.m,art:n.art||'pick',origM,prevM:prevO,chordKey,pf,learned:!!les};
  n.ev=ev; CH.ev.push(ev); logEv(ev,les?'ton-gelernt':'ton'); if(CH.ev.length>600) CH.ev.shift();
}
function onNoteReplaced(n){ const e=n.ev; if(!e) return; const p=placeNote(n.m)||{s:e.s,f:n.m-OPEN_M[e.s]}; e.m=n.m; e.key='note|'+n.m;
  const f=n.m-OPEN_M[e.s]; if(f>=0&&f<=17){e.f=f;} else {e.s=p.s;e.f=p.f;} logEv(e,'ton-ersetzt'); }

// Demo: synthetische Gitarrenakkorde, falls kein Mikrofon verfügbar ist
const DEMO_SEQ=[[7,0],[4,1],[0,0],[2,0],[9,1],[9,5],[4,2],[0,3],[2,6],[9,4]];
function demoStrum(ctx,dest,r,qi,t0){
  const frets=voicings(r,qi)[0].f, open=OPEN_STR;
  const wave=ctx.createPeriodicWave(new Float32Array([0,1,.55,.4,.28,.2,.14,.1,.07]),new Float32Array(9));
  frets.forEach((f,i)=>{
    if(f<0) return;
    const midi=open[i]+f, t=t0+i*0.018;
    const o=ctx.createOscillator(), g=ctx.createGain();
    o.setPeriodicWave(wave); o.frequency.value=S.a4*Math.pow(2,(midi-69)/12);
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.09,t+0.005); g.gain.exponentialRampToValueAtTime(0.0008,t+2.6);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t+2.7);
  });
}

// Bildschirm öffnen: Mikro bleibt aus, bis „Start“ gedrückt wird
function startChords(){ checkVersion(false);
  $('#chords').classList.add('on'); root.classList.add('inch'); setTimeout(()=>NF.check(),300); bpLoad().catch(()=>{}); setEditMode(false); CH.bigK=null; CH.listKey='';
  // Das Blatt bleibt offen und auf demselben Stand, wenn man die Akkord-Ansicht verlässt und wieder öffnet (Manu 14.11.); leer starten = Reset-Knopf
  if(!CH.ev.length){ capClear(); BPB.gen++; UNDO.length=0; CH.ev=[]; CH.onsets=[]; CH.beatCh=[]; CH.song=null; CH.tNow=0; CH.tBase=0; CH.grids=[]; } CH.stripKey=''; CH.follow=true; CH.key=''; CH.eng=null; CH.micMsg=''; metUI();
  $('#cbanner').classList.remove('on');
  setMicUI();
  CH.running=true; cancelAnimationFrame(CH.raf); CH.raf=requestAnimationFrame(chordFrame);
}
function stopChords(){
  try{ NF.save(true); }catch(e){} closeEdit(); chordMicOff(); metPreview(false); if(typeof PL!=='undefined') plStop(); $('#msheet').classList.remove('on'); CH.running=false; cancelAnimationFrame(CH.raf); CH.eng=null;
  $('#chords').classList.remove('on'); root.classList.remove('inch','crec','ced'); closeCPops(); closeCMenu(); $('#hsheet').classList.remove('on');
}
function setMicUI(){
  const b=$('#cmic'); b.classList.toggle('on',CH.mic); b.setAttribute('aria-pressed',CH.mic);
  b.setAttribute('aria-label',CH.mic?'Aufnahme stoppen':'Aufnahme starten');
  $('#chords').classList.toggle('rec',CH.mic); root.classList.toggle('crec',CH.mic);
  if(CH.mic){ closeCPops(); setEditMode(false); }
  CH.key=''; CH.stripKey=''; if(typeof chordsUI==='function') chordsUI();
}
