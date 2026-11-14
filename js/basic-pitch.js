// =================== Neue Ton-Erkennung (Basic Pitch, Test) ===================
// Nimmt während der Aufnahme den Rohklang auf; nach dem Stoppen rechnet Basic Pitch die Töne aus und trägt sie in den Tab ein.
const BPB={on:false,node:null,mute:null,chunks:[],n:0,sr:48000,ctxStart:null,offset:0,tBase:0,pf:[],pfT:-1,gen:0,lib:null,q:Promise.resolve()};
function bpLoad(){
  if(!BPB.lib) BPB.lib=new Promise((res,rej)=>{ const sc=document.createElement('script'); sc.src='bp/bp.js?v='+APP_VERSION;
    sc.onload=()=>{ try{ res(new BP.BasicPitch('bp/model/model.json')); }catch(e){ BPB.fail=true; rej(e); } }; sc.onerror=()=>{ BPB.lib=null; BPB.fail=true; rej(new Error('laden')); }; document.head.appendChild(sc); });
  return BPB.lib;
}
function bpStart(ctx,src){
  BPB.on=false; BPB.rec=false; if(!src) return;
  bpLoad().catch(()=>{}); // neue Ton-Erkennung ist Standard; lädt sie nicht, übernimmt still die alte Live-Erkennung
  try{
    const node=ctx.createScriptProcessor(4096,1,1), mute=ctx.createGain(); mute.gain.value=0;
    BPB.chunks=[]; BPB.n=0; BPB.sr=ctx.sampleRate; BPB.ctxStart=null; BPB.offset=CH.tNow-ctx.currentTime; BPB.tBase=CH.tBase; BPB.pf=[]; BPB.pfT=-1;
    const max=ctx.sampleRate*600;
    node.onaudioprocess=e=>{ if(BPB.n>=max) return; const d=e.inputBuffer.getChannelData(0);
      if(BPB.ctxStart==null) BPB.ctxStart=e.playbackTime-d.length/BPB.sr;
      BPB.chunks.push(new Float32Array(d)); BPB.n+=d.length; };
    src.connect(node); node.connect(mute); mute.connect(ctx.destination);
    BPB.node=node; BPB.mute=mute; BPB.rec=true; BPB.on=!BPB.fail;
  }catch(e){ BPB.on=false; BPB.rec=false; }
}
function bpFrame(ctx){
  if(!BPB.rec) return;
  if(!CH.counting) BPB.offset=CH.tNow-ctx.currentTime;
  // Klangprofil alle 0,1 s merken – fürs Ton-Lernen
  if(CH.eng&&!CH.counting&&CH.tNow-BPB.pfT>=0.1){ BPB.pfT=CH.tNow; BPB.pf.push({t:CH.tNow,pf:Array.from(CH.eng.pf,v=>+v.toFixed(3))}); }
}
function bpStop(){
  if(!BPB.node) { BPB.on=false; BPB.rec=false; return; }
  try{ BPB.node.disconnect(); BPB.mute.disconnect(); }catch(e){}
  const bp=BPB.on; BPB.node=null; BPB.mute=null; BPB.on=false; BPB.rec=false;
  if(BPB.n<BPB.sr*0.5||BPB.ctxStart==null) return;
  const job={chunks:BPB.chunks,n:BPB.n,sr:BPB.sr,t0:BPB.ctxStart+BPB.offset,tBase:BPB.tBase,pf:BPB.pf,gen:BPB.gen,pick:playMode()==='pick',melody:playMode()==='melody',bp:bp&&playMode()!=='strum'};
  BPB.chunks=[]; BPB.n=0; plAddJob(job);
  if(job.bp){ bpBanner('Töne werden erkannt …');
    BPB.q=BPB.q.then(()=>bpAnalyze(job)).catch(e=>{ bpBanner('Neue Ton-Erkennung fehlgeschlagen ('+(e&&e.message||e)+')',4000); }); }
  BPB.q=BPB.q.then(()=>beatAnalyze(job)).catch(e=>{ bpBanner('Takterkennung fehlgeschlagen ('+(e&&e.message||e)+')',4000); });
}
// ==BEAT-START==
// Takterkennung: Anschlagskurve -> Tempo (Autokorrelation) -> Schläge (dynamische Programmierung, nach Ellis 2007)
function beatTrack(x,sr){
  const dec=Math.max(1,Math.round(sr/24000)), fs=sr/dec, N=2048, H=512;
  const n=Math.floor(x.length/dec), y=new Float32Array(n);
  for(let i=0;i<n;i++){ let s=0; for(let k=0;k<dec;k++) s+=x[i*dec+k]; y[i]=s/dec; }
  const win=new Float32Array(N); for(let i=0;i<N;i++) win[i]=0.5-0.5*Math.cos(2*Math.PI*i/N);
  const F=Math.max(0,Math.floor((n-N)/H)+1), kmax=Math.min(N/2,Math.round(8000/fs*N)), kmin=Math.max(1,Math.round(30/fs*N));
  const re=new Float64Array(N), im=new Float64Array(N); let prev=new Float32Array(kmax), cur=new Float32Array(kmax);
  const env=new Float32Array(F), bass=new Float32Array(F), kb=Math.round(200/fs*N);
  // Radix-2-FFT
  const rev=new Uint32Array(N); for(let i=0,j=0;i<N;i++){ rev[i]=j; let b=N>>1; while(j&b){ j^=b; b>>=1; } j|=b; }
  const fft=()=>{ for(let i=0;i<N;i++){ const j=rev[i]; if(j>i){ let t=re[i];re[i]=re[j];re[j]=t; t=im[i];im[i]=im[j];im[j]=t; } }
    for(let len=2;len<=N;len<<=1){ const a=-2*Math.PI/len, wr=Math.cos(a), wi=Math.sin(a);
      for(let i=0;i<N;i+=len){ let cr=1,ci=0; for(let j=0;j<len/2;j++){ const ur=re[i+j],ui=im[i+j], vr=re[i+j+len/2]*cr-im[i+j+len/2]*ci, vi=re[i+j+len/2]*ci+im[i+j+len/2]*cr;
        re[i+j]=ur+vr; im[i+j]=ui+vi; re[i+j+len/2]=ur-vr; im[i+j+len/2]=ui-vi; const t=cr*wr-ci*wi; ci=cr*wi+ci*wr; cr=t; } } } };
  for(let f=0;f<F;f++){ const o=f*H; for(let i=0;i<N;i++){ re[i]=y[o+i]*win[i]; im[i]=0; } fft();
    let s=0,sb=0; for(let k=kmin;k<kmax;k++){ const m=Math.log(1+1000*Math.hypot(re[k],im[k])); cur[k]=m; const d=m-prev[k]; if(d>0){ s+=d; if(k<kb) sb+=d; } }
    env[f]=f?s:0; bass[f]=f?sb:0; const t=prev; prev=cur; cur=t; }
  const fps=fs/H;
  // gleitenden Mittelwert abziehen, normieren
  const w=Math.round(fps*0.5), on=new Float32Array(F); { let acc=0; const q=[]; for(let f=0;f<F;f++){ acc+=env[f]; q.push(env[f]); if(q.length>2*w) acc-=q.shift(); on[f]=Math.max(0,env[f]-acc/q.length); } }
  let sd=0; for(let f=0;f<F;f++) sd+=on[f]*on[f]; sd=Math.sqrt(sd/Math.max(1,F))||1; for(let f=0;f<F;f++) on[f]/=sd;
  // Tempo: Autokorrelation, gewichtet um 110 BPM
  const lo=Math.round(fps*60/200), hi=Math.round(fps*60/50); let best=0,bp=lo; const ac=new Float32Array(hi+2);
  for(let L=lo;L<=hi+1;L++){ let s=0; for(let f=L;f<F;f++) s+=on[f]*on[f-L]; ac[L]=s/(F-L); }
  for(let L=lo;L<=hi;L++){ const bpm=60*fps/L, wgt=Math.exp(-0.5*Math.pow(Math.log2(bpm/110)/0.9,2)), v=ac[L]*wgt; if(v>best){best=v;bp=L;} }
  let P=bp; if(bp>lo&&bp<hi){ const a=ac[bp-1],b=ac[bp],c=ac[bp+1], d=a-2*b+c; if(d<0) P=bp+0.5*(a-c)/d; }
  // Schläge: dynamische Programmierung
  const alpha=100, sc=new Float32Array(F), bk=new Int32Array(F).fill(-1);
  for(let f=0;f<F;f++){ let m=0,arg=-1; const a=Math.round(f-2*P), b=Math.round(f-P/2);
    for(let p=Math.max(0,a);p<=b&&p<f;p++){ const v=sc[p]-alpha*Math.pow(Math.log((f-p)/P),2); if(arg<0||v>m){m=v;arg=p;} }
    sc[f]=on[f]+(arg>=0?Math.max(0,m):0); bk[f]=arg>=0&&m>0?arg:-1; }
  // Ende: bester Punkt im letzten Schlag
  let e=F-1,mv=-1; for(let f=Math.max(0,F-Math.round(P));f<F;f++) if(sc[f]>mv){mv=sc[f];e=f;}
  const beats=[]; for(let f=e;f>=0;f=bk[f]){ beats.push(f); if(bk[f]<0) break; } beats.reverse();
  // nur Schläge im gespielten Bereich (Stille am Anfang/Ende weg)
  const t0=N/2/fs;
  return {bpm:60*fps/P, beats:beats.map(f=>f/fps+t0), on, bass, fps, t0};
}
// ==BEAT-END==
// ==BEATCHORD-START==
// Akkorde nach dem Stoppen: pro Schlag Klangbild aus der Aufnahme, dann die wahrscheinlichste Akkordfolge (Viterbi)
const KEY_PROFILE=[6.35,2.23,3.48,2.33,4.38,4.09,2.52,5.19,2.39,3.66,2.29,2.88];
function chordsPerBeat(x,sr,beats,opt){
  opt=opt||{}; const dec=Math.max(1,Math.round(sr/24000)), fs=sr/dec, N=8192, H=2048;
  const rev=new Uint32Array(N); for(let i=0,j=0;i<N;i++){ rev[i]=j; let b=N>>1; while(j&b){ j^=b; b>>=1; } j|=b; }
  const re=new Float64Array(N), im=new Float64Array(N), mg=new Float64Array(N/2), win=new Float32Array(N); for(let i=0;i<N;i++) win[i]=0.5-0.5*Math.cos(2*Math.PI*i/N);
  const fft=()=>{ for(let i=0;i<N;i++){ const j=rev[i]; if(j>i){ let t=re[i];re[i]=re[j];re[j]=t; t=im[i];im[i]=im[j];im[j]=t; } }
    for(let len=2;len<=N;len<<=1){ const a=-2*Math.PI/len, wr=Math.cos(a), wi=Math.sin(a);
      for(let i=0;i<N;i+=len){ let cr=1,ci=0; for(let j=0;j<len/2;j++){ const k=i+j+len/2, vr=re[k]*cr-im[k]*ci, vi=re[k]*ci+im[k]*cr;
        re[k]=re[i+j]-vr; im[k]=im[i+j]-vi; re[i+j]+=vr; im[i+j]+=vi; const t=cr*wr-ci*wi; ci=cr*wi+ci*wr; cr=t; } } } };
  const tune=Math.pow(2,(opt.tune||0)/12)*(opt.a4||440);
  const bins=[]; for(let m=PM0;m<=PM1;m++){ const f=tune*Math.pow(2,(m-69)/12); bins.push([Math.max(1,Math.floor(f*Math.pow(2,-0.45/12)/fs*N)),Math.ceil(f*Math.pow(2,0.45/12)/fs*N)]); }
  const sample=t=>{ const i=Math.round(t*sr); return i; };
  // Kandidaten: alle Akkorde, dazu je Akkord die Variante mit dem gehörten Basston
  const cands=[]; for(let r=0;r<12;r++) for(let qi=0;qi<QUAL.length;qi++){ const v=voicings(r,qi); cands.push({r,qi,bass:null,vp:v.slice(0,3).map(x=>x.p)}); }
  const nB=beats.length-1, Praw=[], P=[], chr=[], bassPc=[], energy=[];
  for(let i=0;i<nB;i++){ const a=beats[i]+0.03, b=Math.max(a+0.05,beats[i+1]-0.02); const Pm=new Float32Array(PN); let nf=0, en=0;
    for(let t=a;t+N*dec/sr<=b+N*dec/sr*0.5||nf===0;t+=H*dec/sr){ const s0=sample(t); if(s0+N*dec>x.length) break;
      for(let k=0;k<N;k++){ let v=0; for(let d=0;d<dec;d++) v+=x[s0+k*dec+d]; re[k]=v/dec*win[k]; im[k]=0; en+=re[k]*re[k]; } fft();
      // Spektralspitzen: jede Spitze zählt nur für den nächstgelegenen Halbton (kein Übersprechen ins Nachbarfach)
      const kmax=Math.min(N/2-1,bins[PN-1][1]+2); for(let k=2;k<kmax;k++) mg[k]=re[k]*re[k]+im[k]*im[k];
      const fr=new Float32Array(PN);
      for(let k=bins[0][0];k<kmax-1;k++){ const m0=mg[k]; if(m0<=mg[k-1]||m0<mg[k+1]) continue;
        const al=Math.log(mg[k-1]+1e-20), be=Math.log(m0+1e-20), ga=Math.log(mg[k+1]+1e-20), dk=0.5*(al-ga)/(al-2*be+ga||1e-9);
        const f=(k+dk)*fs/N, mm=69+12*Math.log2(f/tune), j=Math.round(mm)-PM0; if(j<0||j>=PN||Math.abs(mm-Math.round(mm))>0.4) continue;
        const a=Math.sqrt(Math.sqrt(m0)); if(a>fr[j]) fr[j]=a; }
      for(let j=0;j<PN;j++) Pm[j]+=fr[j];
      nf++; if(nf>=6) break; }
    if(nf) for(let j=0;j<PN;j++) Pm[j]/=nf;
    // erkannte Melodie-/Lauftöne nicht als Akkordtöne werten (samt Oktave und Quinte darüber)
    if(opt.mask){ const ms=opt.mask(i)||[]; ms.forEach(m=>[0,12,19].forEach(o=>{ const j=m+o-PM0; if(j>=0&&j<PN) Pm[j]*=0.45; })); }
    energy.push(nf?en/nf/N:0);
    // Basston: tiefster kräftiger Ton bis E3
    let bmx=0; for(let j=0;j<=12;j++) bmx=Math.max(bmx,Pm[j]); let bp=null; let amx=0; for(let j=0;j<PN;j++) amx=Math.max(amx,Pm[j]);
    if(bmx>0.15*amx) for(let j=0;j<=12;j++) if(Pm[j]>=0.5*bmx){ bp=(PM0+j)%12; break; }
    const c=new Float32Array(12); for(let j=0;j<PN;j++) c[(PM0+j)%12]+=Pm[j];
    let n=0; for(const v of c) n+=v*v; n=Math.sqrt(n)||1; for(let k=0;k<12;k++) c[k]/=n;
    let pn=0; for(const v of Pm) pn+=v*v; pn=Math.sqrt(pn)||1; for(let j=0;j<PN;j++) Pm[j]/=pn;
    P.push(Pm); Praw.push(Pm.slice()); chr.push(c); bassPc.push(bp); }
  // Tonart: Summe der Klangbilder gegen Dur-Profil (Moll = parallele Dur-Tonleiter)
  const tot=new Float32Array(12); chr.forEach(c=>c.forEach((v,k)=>tot[k]+=v));
  let key=0,kb=-1e9; for(let k=0;k<12;k++){ let s=0; for(let j=0;j<12;j++) s+=tot[(k+j)%12]*KEY_PROFILE[j]; if(s>kb){kb=s;key=k;} }
  const scale=[0,2,4,5,7,9,11].map(i=>(key+i)%12);
  const tplOf={}; TPL.forEach(t=>tplOf[t.r+'|'+t.qi]=t.v);
  const emax=Math.max(...energy,1e-12);
  const em=(ci,i)=>{ const c=cands[ci], tv=tplOf[c.r+'|'+c.qi]; let d=0; for(let k=0;k<12;k++) d+=chr[i][k]*tv[k]; d*=QUAL[c.qi].p;
    let vf=0; for(const vp of c.vp){ let s=0; for(let j=0;j<PN;j++) s+=P[i][j]*vp[j]; vf=Math.max(vf,s); }
    let sc=d+0.15*vf; if(bassPc[i]!=null&&bassPc[i]===c.r) sc+=0.05;
    if(QUAL[c.qi].iv.every(k=>scale.includes((c.r+k)%12))) sc+=0.04;
    if(opt.vocab){ const vb=opt.vocab[c.r+'|'+c.qi]; sc+=vb!=null?vb:(opt.vocabOther||0); }
    return sc; };
  // Viterbi über die Schläge; Wechsel kosten etwas, auf betonten Zählzeiten weniger
  const S=cands.length, E=[]; for(let i=0;i<nB;i++){ const row=new Float32Array(S); const quiet=energy[i]<emax*0.002; for(let s=0;s<S;s++) row[s]=quiet?0:em(s,i); E.push(row); }
  const lam=opt.lam||0.17; let V=E[0].slice(), back=[];
  for(let i=1;i<nB;i++){ let bi=0; for(let s=1;s<S;s++) if(V[s]>V[bi]) bi=s; const pen=lam*(opt.strong&&opt.strong(i)?0.7:1.2);
    const nv=new Float32Array(S), bk=new Int32Array(S);
    for(let s=0;s<S;s++){ const stay=V[s], sw=V[bi]-pen; if(stay>=sw){ nv[s]=stay+E[i][s]; bk[s]=s; } else { nv[s]=sw+E[i][s]; bk[s]=bi; } }
    V=nv; back.push(bk); }
  let s=0; for(let k=1;k<S;k++) if(V[k]>V[s]) s=k; const path=[s]; for(let i=nB-2;i>=0;i--){ s=back[i][s]; path.unshift(s); }
  // Akkorde außerhalb der Tonart brauchen mindestens 2 Schläge, sonst gilt der Nachbar weiter
  const dia=ci=>QUAL[cands[ci].qi].iv.every(k=>scale.includes((cands[ci].r+k)%12));
  for(let i=0;i<nB;i++){ if(dia(path[i])) continue; const a=i>0&&path[i-1]===path[i], b=i+1<nB&&path[i+1]===path[i]; if(a||b) continue; path[i]=i>0?path[i-1]:(i+1<nB?path[i+1]:path[i]); }
  // Schrägstrich: liegt im Abschnitt meist ein anderer Basston, der zum Akkord gehört → X/Bass
  const out=[]; for(let i=0;i<nB;i++){ if(i&&path[i]===path[i-1]) continue; let j=i; while(j+1<nB&&path[j+1]===path[i]) j++;
    const c=cands[path[i]], quiet=E[i].every(v=>v===0), tones=QUAL[c.qi].iv.map(k=>(c.r+k)%12);
    // Schrägstrich nur, wenn ein anderer Akkordton deutlich der tiefste ist und der Grundton darunter/nah darüber schwach bleibt (D/F♯, G/B, C/G …)
    const avg=new Float32Array(PN); for(let k=i;k<=j;k++) for(let q=0;q<PN;q++) avg[q]+=Praw[k][q];
    let lm=0,am=0; for(let q=0;q<=12;q++) lm=Math.max(lm,avg[q]); for(let q=0;q<PN;q++) am=Math.max(am,avg[q]);
    let bass=null; if(lm>0.15*am){ let jb=-1; for(let q=0;q<=12;q++) if(avg[q]>=0.5*lm){ jb=q; break; }
      const pc=(PM0+jb)%12, iv=(pc-c.r+12)%12;
      if(pc!==c.r&&tones.includes(pc)){ let below=0, sr=0; for(let q=0;q<=Math.min(PN-1,jb+12);q++) if((PM0+q)%12===c.r){ sr=Math.max(sr,avg[q]); if(q<jb) below=Math.max(below,avg[q]); }
        const third=iv===3||iv===4; if(below<0.5*avg[jb]&&third) bass=pc; } }
    out.push({i,r:c.r,qi:c.qi,bass,quiet,chroma:Array.from(chr[i])}); }
  // Ablauf vorgegeben: nicht mehr „welcher Akkord“, nur noch „wann gewechselt“
  if(opt.ablauf&&opt.ablauf.length){ const free=out; const quiet=E.map(r=>r.every(v=>v===0)), mx=E.map(r=>Math.max(...r));
    // gleich klingende Akkorde (gleiche Töne, z. B. Asus2 = Esus4) zählen wie der Ablauf-Akkord
    const pcs=(r,qi)=>QUAL[qi].iv.map(k=>(r+k)%12).sort((a,b)=>a-b).join(), same={};
    const sib=c=>{ const k=pcs(c.r,c.qi); return same[k]||(same[k]=cands.map((x,j)=>pcs(x.r,x.qi)===k?j:-1).filter(j=>j>=0)); };
    const sc=(s,i)=>{ if(quiet[i]) return 0; let v=-1e9; for(const j of sib(opt.ablauf[s])) v=Math.max(v,E[i][j]); return v-mx[i]; };
    const al=ablaufAlign(sc,nB,quiet,opt.ablauf,opt);
    const ao=[], s0=al.segs.length?al.segs[0].b:nB, s1=al.segs.length?al.segs[al.segs.length-1].e:nB;
    // Vorlauf: normale Erkennung bis zum Ablauf-Beginn
    free.forEach(c=>{ if(c.i<s0){ const nx=free.find(q=>q.i>c.i), len=Math.min(s0,nx?nx.i:s0)-c.i; ao.push(!opt.lenient&&!c.quiet&&len>=2?Object.assign({},c,{unsure:true,why:'vor dem Ablauf gespielt'}):c); } });
    al.segs.forEach(g=>{ const c=opt.ablauf[g.s], p=ao[ao.length-1]; if(p&&!c.label&&p.r===c.r&&p.qi===c.qi&&p.bass===(c.bass??null)){ if(g.unsure) p.unsure=true; return; }
      ao.push({i:g.b,r:c.r,qi:c.qi,bass:c.bass??null,quiet:false,chroma:Array.from(chr[g.b]),unsure:g.unsure,why:g.why,label:c.label||null,len:g.e-g.b,pass:c.first?c.pass:null}); });
    // Nachlauf: normale Erkennung ab dem Ablauf-Ende (ein Lauf, der vorher begann, setzt an der Grenze neu ein)
    if(s1<nB){ let last=null; free.forEach(c=>{ if(c.i<s1) last=c; }); const tail=free.filter(c=>c.i>=s1); if(last&&!last.quiet&&!(tail[0]&&tail[0].i===s1)) tail.unshift(Object.assign({},last,{i:s1}));
      tail.forEach(c=>{ const p=ao[ao.length-1]; if(p&&p.r===c.r&&p.qi===c.qi&&p.bass===c.bass) return; const nx=tail.find(q=>q.i>c.i), len=(nx?nx.i:nB)-c.i; ao.push(!opt.lenient&&!c.quiet&&len>=2?Object.assign({},c,{unsure:true,why:'nach dem Ablauf gespielt'}):c); }); }
    return {chords:ao,key,chr:chr.map(c=>c?Array.from(c):null),score:al.score,ablauf:al}; }
  return {chords:out,key,chr:chr.map(c=>c?Array.from(c):null)};
}
// Ablauf an die Aufnahme anlegen (Folge fest, Längen dehnbar). seq = ausgeschriebener Ablauf, je Abschnitt {r,qi,bass,d (Schläge),pass,first,last}.
// sc(s,i) = wie gut Abschnitt s zu Schlag i passt (≤ 0, 0 = bester Akkord dort). Erlaubt: Vorlauf/Nachlauf, einen Durchgang mehr oder weniger
// (je Durchgang Strafe W), Beginn bei einem späteren Durchgang (W/2), Ende früher (W/2). Der letzte Abschnitt darf ausklingen.
// Ergebnis: Abschnitte mit Anfangs-/Endschlag; unsicher, wenn die Länge vom Ablauf abweicht oder der Akkord dort schlecht passt.
function ablaufAlign(sc,nB,quiet,seq,o){
  o=o||{}; const mu=o.mu??0.2, W=o.W??2, lead=o.lead??0.3, bad=o.bad??-0.07, vbad=o.vbad??-0.25, NS=seq.length;
  const pref=seq.map((_,s)=>{ const p=new Float64Array(nB+1); for(let i=0;i<nB;i++) p[i+1]=p[i]+sc(s,i); return p; });
  const lc=new Float64Array(nB+1); for(let i=0;i<nB;i++) lc[i+1]=lc[i]+(quiet[i]?0:lead);
  const passStart=[], passEnd=[]; let ps=0; for(let s=0;s<NS;s++){ if(seq[s].first) ps=s; passStart[s]=ps; }
  let pe=NS-1; for(let s=NS-1;s>=0;s--){ if(s<NS-1&&seq[s+1].first) pe=s; passEnd[s]=pe; }
  // Vorgänger je Abschnitt: [vorheriger Abschnitt, Strafe]
  // Ablauf ist verbindlich (Manu 14.11.): kein Durchgang mehr oder weniger – Abweichungen werden markiert, nicht übernommen (o.lenient = alte Regel, nur zum Vergleich)
  const preds=seq.map((x,s)=>{ const L=[]; if(s>0) L.push([s-1,0]);
    if(o.lenient&&x.first){ L.push([passEnd[s],W]); const pPrev=s>0?passStart[s-1]:-1; if(pPrev>0) L.push([pPrev-1,W]); }
    return L; });
  const dc=(s,L)=>(seq[s].mu??mu)*Math.abs(L-seq[s].d);
  const Lmax=s=>Math.max(seq[s].d*2+4,seq[s].d+6);
  const NEG=-1e18, best=[...Array(nB+1)].map(()=>new Float64Array(NS).fill(NEG)), from=[...Array(nB+1)].map(()=>new Array(NS));
  const inc=(b,s)=>{ let v=NEG, w=null; if(seq[s].first&&(s===0||o.lenient)){ const st=(s===0?0:W*0.5); const c=-lc[b]-st; if(c>v){v=c;w=[-1,b];} }
    if(b>0) for(const [p,pen] of preds[s]){ const c=best[b][p]-pen; if(c>v){v=c;w=[p,b];} } return [v,w]; };
  for(let e=1;e<=nB;e++) for(let s=0;s<NS;s++){ const lm=Math.min(e,Lmax(s));
    for(let L=1;L<=lm;L++){ const b=e-L, [v,w]=inc(b,s); if(v<=NEG/2) continue; const t=v+pref[s][e]-pref[s][b]-dc(s,L); if(t>best[e][s]){ best[e][s]=t; from[e][s]=w; } } }
  // Ende: nach einem Abschnitt Nachlauf, oder der letzte Abschnitt klingt bis zum Schluss aus
  const endPen=s=>s===NS-1?0:(o.lenient&&seq[s].last?W*0.5:W);
  let bv=NEG, bw=null;
  for(let e=1;e<=nB;e++) for(let s=0;s<NS;s++){ if(best[e][s]<=NEG/2) continue; const v=best[e][s]-(lc[nB]-lc[e])-endPen(s); if(v>bv){ bv=v; bw={e,s,open:false}; } }
  for(let s=0;s<NS;s++) for(let b=0;b<nB;b++){ const [v,w]=inc(b,s); if(v<=NEG/2) continue; const L=nB-b; const t=v+pref[s][nB]-pref[s][b]-dc(s,L)-endPen(s); if(t>bv){ bv=t; bw={e:nB,s,open:true,w}; } }
  const segs=[]; if(!bw) return {segs,score:NEG};
  let e=bw.e, s=bw.s, w=bw.open?bw.w:from[e][s];
  while(w){ const b=w[1]; const L=e-b, d=seq[s].d, fit=(pref[s][e]-pref[s][b])/Math.max(1,L);
    const dev=L-d;
    const why=[]; if(dev) why.push((dev>0?'+':'')+dev+(Math.abs(dev)>1?' Schläge':' Schlag')); if(fit<vbad) why.push('Klang passt schlecht');
    segs.unshift({s,b,e,dev,fit,why}); if(w[0]<0) break; e=b; s=w[0]; w=from[e][s]; }
  // Längenabweichung nur markieren, wenn der Klang sie nicht klar belegt (Vergleich mit der Grenze laut Ablauf)
  segs.forEach((g,k)=>{ const nx=segs[k+1], d=seq[g.s].d; let sure=false;
    if(g.dev&&nx&&nx.b===g.e){ let D=0; if(g.dev>0) for(let i=g.b+d;i<g.e;i++) D+=sc(g.s,i)-sc(nx.s,i); else for(let i=g.e;i<Math.min(nB,g.b+d);i++) D+=sc(nx.s,i)-sc(g.s,i); sure=D>(o.sure??0.4); }
    if(sure&&o.lenient) g.why=g.why.filter(x=>!/Schläge?/.test(x)); g.unsure=g.why.length>0; g.why=g.why.join(', '); });
  // Ablauf nicht zu Ende gespielt
  if(segs.length&&segs[segs.length-1].s<NS-1&&!o.lenient){ const g=segs[segs.length-1]; g.unsure=true; g.why=(g.why?g.why+', ':'')+'Ablauf danach nicht zu Ende gespielt'; }
  const n=segs.length||1; return {segs,score:bv,bad:segs.filter(g=>g.fit<bad).length/n,unsure:segs.filter(g=>g.unsure).length/n}; }
// ==BEATCHORD-END==

// Nach dem Stoppen: Tempo, Schläge und Takte erkennen (oder Metronom-Raster nehmen), dann alles auf Zählzeiten einrasten
function jobSamples(job){ if(job.x) return job.x; const x=new Float32Array(job.n); let o=0; for(const c of job.chunks){ x.set(c,o); o+=c.length; } job.x=x; return x; }
// Gehörte Anschläge (Basic-Pitch-Tonanfänge) und Klangbild je Schlag dieser Aufnahme merken – für den Abgleich eingesprochener Töne und „auf alle ähnlichen“
function storeOnsets(T,job){ const a=job.tBase-0.05, b=job.t0+job.n/job.sr+0.5; const o=(CH.onsets||[]).filter(t=>t<a||t>b); T.forEach(t=>{ if(!o.length||Math.abs(o[o.length-1]-t)>0.05) o.push(t); }); CH.onsets=o.sort((x,y)=>x-y); }
function storeBeatCh(job,L){ const a=job.tBase-0.05, b=job.t0+job.n/job.sr+0.5; CH.beatCh=(CH.beatCh||[]).filter(x=>x.t<a||x.t>b).concat(L.filter(x=>x.c)).sort((x,y)=>x.t-y.t); }
async function beatAnalyze(job){
  if(job.gen!==BPB.gen) return;
  await new Promise(r=>setTimeout(r,30));
  const tA=job.tBase-0.05, tB=job.t0+job.n/job.sr+0.5;
  const evs=CH.ev.filter(e=>e.t>=tA&&e.t<=tB); if(!evs.length) return;
  const te0=evs[0].t, te1=evs[evs.length-1].t;
  let g=CH.grids.find(q=>q.t>=tA&&q.t<=tB);
  let pbRes=null;
  if(!g){
    const r=beatTrack(jobSamples(job),job.sr), P=60/r.bpm;
    let B=r.beats.map(b=>job.t0+b).filter(b=>b>=te0-0.6*P&&b<=te1+P);
    if(B.length<4){ bpBanner('Zu kurz für die Takterkennung',3000); return; }
    const M=+(metCfg().sig)||4;
    // Strummen: Akkorde pro Schlag direkt aus der Aufnahme (auf den erkannten Schlägen), daraus auch die Eins
    if(playMode()!=='pick'){ try{ const times=B.map(b=>b-job.t0); times.push(times[times.length-1]+P);
      const base=Object.assign({a4:S.a4,tune:CH.eng?CH.eng.tune:0},sessionVocab(job));
      // Ablauf vorgegeben (Version 2): nur noch „wann gewechselt“; passt er nicht zur Aufnahme, normale Erkennung
      const ar=ablaufTry(job,times,base); CH.lastJob={job};
      const res=ar&&ar.ok?ar.res:chordsPerBeat(jobSamples(job),job.sr,times,base);
      pbRes={times:B.slice(),chords:res.chords,ablauf:ar}; storeBeatCh(job,res.chr.map((c,i)=>({t:B[i],c})).filter(x=>x.t!=null)); }catch(e){ pbRes=null; } }
    // Akkordwechsel gehören auf den Schlag: liegt das Raster systematisch dazwischen (z. B. auf den „und“), Schläge dorthin schieben
    if(!pbRes){ let sx=0,sy=0,n=0; evs.forEach(e=>{ if(e.type==='note') return; let k=0; while(k+1<B.length&&B[k+1]<=e.t) k++; const len=(B[k+1]??B[k]+P)-B[k], fr=(e.t-B[k])/len; if(fr<0||fr>1) return; sx+=Math.cos(2*Math.PI*fr); sy+=Math.sin(2*Math.PI*fr); n++; });
      if(n>=3){ let mf=Math.atan2(sy,sx)/(2*Math.PI); if(mf<-0.5) mf+=1; const R=Math.hypot(sx,sy)/n; if(Math.abs(mf)>0.2&&R>0.4) B=B.map(b=>b+mf*P); } }
    // Wo ist die Eins? Akkordwechsel, Basstöne und kräftige tiefe Anschläge zählen
    const bassAt=t=>{ const f=Math.round((t-job.t0-r.t0)*r.fps); let m=0; for(let k=f-2;k<=f+2;k++) if(k>=0&&k<r.bass.length) m=Math.max(m,r.bass[k]); return m; };
    let bmax=1e-9; B.forEach(b=>bmax=Math.max(bmax,bassAt(b)));
    let best=-1,ph=0;
    // Die Eins: dort, wo der Anfangsakkord im ganzen Stück meistens landet (ein verzögerter erster Anschlag kippt das Raster nicht)
    const c0=evs.find(e=>e.type!=='note'), nb=t=>{ let bd=1e9,bi=-1; B.forEach((b,i)=>{ const d=Math.abs(b-t); if(d<bd){bd=d;bi=i;} }); return bd<0.35*P?bi:-1; };
    const abFirst=pbRes&&pbRes.ablauf&&pbRes.ablauf.ok?pbRes.chords.find(c=>c.label):null;
    if(abFirst){ ph=abFirst.i%M; best=1e9; } // Ablauf beginnt auf der Eins
    else if(pbRes){ const runs=pbRes.chords.filter(c=>!c.quiet), kk=c=>c.r+'|'+c.qi, kc={}; runs.forEach(c=>kc[kk(c)]=(kc[kk(c)]||0)+1);
      let ak=runs.length?kk(runs[0]):null; for(const k in kc) if(kc[k]>kc[ak]) ak=k; const cnt=new Array(M).fill(0);
      runs.forEach((c,ri)=>{ if(kk(c)===ak) cnt[c.i%M]+=1+(ri===0?0.5:0); else { cnt[c.i%M]+=0.15; cnt[(c.i+M/2)%M]+=0.15; } });
      let bm=-1; for(let p=0;p<M;p++) if(cnt[p]>bm){bm=cnt[p];ph=p;} best=1e9; }
    else if(c0){ const cnt=new Array(M).fill(0); let i0=nb(c0.t);
      // Anker: der häufigste Akkord (bei Gleichstand der erste) – meist der Grundakkord des Stücks
      const kc={}; evs.forEach(e=>{ if(e.type!=='note') kc[e.key]=(kc[e.key]||0)+1; }); let ak=c0.key; for(const k in kc) if(kc[k]>kc[ak]) ak=k;
      if(ak!==c0.key) i0=-1;
      evs.forEach(e=>{ if(e.type==='note') return; const i=nb(e.t); if(i<0) return; if(e.key===ak) cnt[i%M]+=1; else { cnt[i%M]+=0.15; cnt[(i+M/2)%M]+=0.15; } });
      let bm=-1; for(let p=0;p<M;p++){ const v=cnt[p]+(i0>=0&&i0%M===p?0.5:0); if(v>bm){bm=v;ph=p;} } best=1e9; }
    if(best<1e9) for(let p=0;p<M;p++){ let sc=0;
      for(let i=p;i<B.length;i+=M){ const b=B[i];
        sc+=bassAt(b)/bmax;
        if(evs.some(e=>e.type!=='note'&&Math.abs(e.t-b)<0.18)) sc+=2;
        if(evs.some(e=>e.type==='note'&&e.m<52&&Math.abs(e.t-b)<0.1)) sc+=0.7; }
      sc/=Math.ceil((B.length-p)/M); if(sc>best){best=sc;ph=p;} }
    const L=[]; for(let i=ph;i<B.length;i+=M) L.push(B[i]);
    const bar=L.length>1?(L[L.length-1]-L[0])/(L.length-1):P*M;
    while(L[0]>te0+0.5*P) L.unshift(L[0]-bar);
    while(L[L.length-1]<=te1+0.02) L.push(L[L.length-1]+bar);
    g={t:L[0],bar,beats:M,lines:L,end:L[L.length-1],auto:true,bpm:r.bpm};
    snap(); CH.grids.push(g); CH.grids.sort((a,b)=>a.t-b.t);
  } else { snap(); gridExtend(g); if(g.end==null) g.end=CH.tNow; }
  g.bpm=g.bpm||60*g.beats/g.bar;
  // Halbes/doppeltes Tempo, wenn Manu das so eingestellt hat
  if(g.auto&&S.tempoPref==='half'&&g.bpm>90) tempoScale(g,0.5); else if(g.auto&&S.tempoPref==='double'&&g.bpm<80) tempoScale(g,2);
  // Akkorde pro Schlag aus der Aufnahme bestimmen (nicht beim Zupfen: dort bleiben die Live-Akkorde)
  let nc=0; if(playMode()!=='pick'){ try{ nc=pbRes?applyBeatChords(job,evs,pbRes.times,pbRes.chords):beatChords(job,g,evs); }catch(e){} }
  const evs2=CH.ev.filter(e=>e.t>=tA&&e.t<=tB);
  const n=quantizeEvents(g,evs2); if(pbRes&&pbRes.ablauf&&pbRes.ablauf.ok) abDedupe(tA,tB);
  CH.view='sheet'; CH.stripKey=''; CH.key=''; undoUI(); alignUI(); checkVersion(false);
  const am=pbRes&&pbRes.ablauf?ablaufMsg(pbRes.ablauf):'';
  metFollowGrid(); bpBanner(`≈ ${Math.round(g.bpm)} BPM · ${g.beats}/4${nc?' · '+nc+' Akkordwechsel':''} · ${n} Stellen auf Zählzeiten gesetzt`+(am?' · '+am:''),am?9000:4000);
  setTimeout(bakRemind,4500);
}
// Schlagzeiten eines Rasters (Taktstriche gleichmäßig geteilt)
function gridBeats(g){ const L=g.lines.slice(); gridExtend(g); if(g.end!=null) while(L[L.length-1]<g.end-1e-3) L.push(L[L.length-1]+g.bar); L.push(L[L.length-1]+g.bar);
  const out=[]; for(let k=0;k+1<L.length;k++){ const len=(L[k+1]-L[k])/g.beats; for(let j=0;j<g.beats;j++) out.push({t:L[k]+j*len,j}); } return out; }
function beatChords(job,g,evs){
  const tA=job.t0, tB=job.t0+job.n/job.sr, bt=gridBeats(g).filter(b=>b.t>=tA&&b.t<tB-0.2);
  if(bt.length<4) return 0;
  const times=bt.map(b=>b.t-job.t0); times.push(Math.min(job.n/job.sr,times[times.length-1]+(times[1]-times[0])));
  const res=chordsPerBeat(jobSamples(job),job.sr,times,{...sessionVocab(job),a4:S.a4,tune:CH.eng?CH.eng.tune:0,strong:i=>bt[i]&&(bt[i].j===0||bt[i].j===g.beats/2)});
  storeBeatCh(job,res.chr.map((c,i)=>({t:bt[i]&&bt[i].t,c})).filter(x=>x.t!=null));
  return applyBeatChords(job,evs,bt.map(b=>b.t),res.chords);
}
// Melodie-Töne je Schlag (nur bei „Strummen + Melodie“): diese Töne zählen nicht für den Akkord
function melodyMask(evs,T){ if(playMode()!=='melody') return null; const ns=evs.filter(e=>e.type==='note');
  return i=>{ const a=T[i]-0.05, b=T[i+1]??T[i]+0.5; return ns.filter(e=>e.t>=a&&e.t<b&&e.s>=3).map(e=>e.m); }; }
// Akkord-Wortschatz der Sitzung: Hat Manu einen früheren Durchgang korrigiert, sind dessen Akkorde wahrscheinlicher, andere unwahrscheinlicher
function sessionVocab(job){ const prev=CH.ev.filter(e=>e.t<job.tBase-0.1);
  if(!prev.some(e=>e.edited||e.added)) return {};
  const vocab={}; prev.forEach(e=>{ if(e.type==='chord'&&e.qi!=null) vocab[e.r+'|'+e.qi]=0.05; });
  return Object.keys(vocab).length>=2?{vocab,vocabOther:-0.05}:{}; }
function applyBeatChords(job,evs,T,chords){
  // bisherige (nicht von Hand bearbeitete) Akkorde dieses Abschnitts ersetzen
  const keep=evs.filter(e=>e.type!=='note'&&(e.edited||e.added));
  CH.ev=CH.ev.filter(e=>!(e.type!=='note'&&evs.includes(e)&&!keep.includes(e)));
  let n=0;
  chords.forEach(c=>{ if(c.quiet) return; const t=T[c.i]; const kp=keep.find(k=>Math.abs(k.t-t)<0.3); if(kp){ if(c.label&&!kp.part) kp.part=c.label; if(c.pass!=null&&kp.abPass==null) kp.abPass=c.pass; return; } // Handkorrektur hat Vorrang, Liedteil und Durchlauf wandern mit
    let pf=null,bd=1e9; for(const p of job.pf){ const d=Math.abs(p.t-(t+0.3)); if(d<bd){bd=d;pf=p.pf;} }
    const key='chord|'+c.r+'|'+c.qi, e={t,tr:t,type:'chord',r:c.r,qi:c.qi,key,orig:key,bass:c.bass,learned:false,cn:c.chroma,pf,beat:true};
    if(c.label) e.part=c.label; if(c.pass!=null) e.abPass=c.pass; if(c.unsure){ e.chk=true; e.chkWhy=c.why||''; } if(c.label||c.unsure!=null) e.ab=true;
    // aus Manus Korrekturen an Pro-Schlag-Akkorden gelernt (nicht beim vorgegebenen Ablauf: dort steht der Akkord fest)
    if(pf&&!e.ab){ let bx=null,bs=0; for(const x of LEARN){ if(x.src!=='beat'||x.from!==key) continue; const sm=learnSim(c.chroma,pf,x); if(sm>bs){bs=sm;bx=x;} }
      if(bx&&bs>=LEARN_T&&bx.to.type==='drop'){ logEv(e,'akkord-schlag-gelernt-weggelassen'); return; }
      if(bx&&bs>=LEARN_T&&bx.to.type==='chord'){ e.r=bx.to.r; e.qi=bx.to.qi; e.key='chord|'+e.r+'|'+e.qi; e.learned=true; if(e.bass===e.r) e.bass=null; } }
    if(!e.ab) preferName(e); e.f=evFrets(e); let k=CH.ev.length; while(k>0&&CH.ev[k-1].t>t) k--; CH.ev.splice(k,0,e); logEv(e,e.learned?'akkord-schlag-gelernt':'akkord-schlag'); n++; });
  return n;
}
// ---- Ablauf vorgeben (Version 2) ----
// Gemerkt in den Einstellungen (S.ablauf, an/aus S.ablaufOn) und im Mitschnitt (song.ablauf). Zählt in den Schlägen der Takterkennung.
function ablaufOn(){ return S.ablaufOn!==false&&S.ablauf&&S.ablauf.folge&&ablaufSeq(S.ablauf).length>0; }
// Ablauf an eine Aufnahme anlegen; ok = passt zur Aufnahme (sonst normale Erkennung)
function ablaufTry(job,times,base){ if(!ablaufOn()) return null; const seq=ablaufSeq(S.ablauf);
  const res=chordsPerBeat(jobSamples(job),job.sr,times,Object.assign({},base,{ablauf:seq})), A=res.ablauf, dur=job.n/job.sr;
  const ok=A.segs.length>0&&A.bad<0.5&&A.score/Math.max(1,dur)>-0.3;
  return {ok,res,seq,unsure:res.chords.filter(c=>c.unsure).length,score:A.score/Math.max(1,dur),bad:A.bad}; }
function ablaufMsg(ar){ if(!ar) return ''; if(!ar.ok) return 'Ablauf passt nicht zu dieser Aufnahme · normale Erkennung';
  const nu=CH.ev.filter(e=>e.chk).length; return 'Akkorde nach Ablauf'+(nu?' · '+nu+(nu>1?' Stellen':' Stelle')+' bitte drüberschauen':''); }
// Aufnahme aus einem geladenen Mitschnitt (letzter Abschnitt), damit ein Ablauf auch dort wirkt
function jobFromCap(){ const seg=(CAP.segs||[]).filter(x=>x&&x.ctxStart!=null&&x.offset!=null).pop(); if(!seg||!CAP.n) return null;
  const all=new Int16Array(CAP.n); let o=0; for(const c of CAP.chunks){ all.set(c,o); o+=c.length; }
  const nx=(CAP.segs||[]).find(x=>x&&x.wavStart>seg.wavStart+1e-6), a=Math.round(seg.wavStart*CAP.sr), b=nx?Math.round(nx.wavStart*CAP.sr):CAP.n;
  const x=new Float32Array(Math.max(0,b-a)); for(let i=0;i<x.length;i++) x[i]=all[a+i]/32768;
  const t0=seg.ctxStart+seg.offset; return {x,n:x.length,sr:CAP.sr,t0,tBase:t0,pf:[],gen:BPB.gen}; }
// Ablauf nachträglich auf die letzte Aufnahme anwenden (ein Rückgängig-Schritt). Gibt eine Meldung zurück.
function ablaufReapply(){ if(!ablaufOn()) return 'Ablauf ist aus';
  if(playMode()==='pick') return 'Ablauf gemerkt · beim Zupfen bleiben die Akkorde wie erkannt';
  let job=CH.lastJob&&CH.lastJob.job.gen===BPB.gen?CH.lastJob.job:null; if(!job){ job=jobFromCap(); if(job) CH.lastJob={job}; }
  if(!job) return 'Ablauf gemerkt · gilt ab der nächsten Aufnahme';
  const tA=job.t0-0.05, tB=job.t0+job.n/job.sr+0.5, evs=CH.ev.filter(e=>e.t>=tA&&e.t<=tB);
  const g=CH.grids.find(q=>q.lines.some(l=>l>=tA&&l<=tB)); if(!g||!evs.length) return 'Ablauf gemerkt · gilt ab der nächsten Aufnahme';
  // Schläge des vorhandenen Rasters (die Eins bleibt, wo sie ist); gezählt wird in Schlägen um 80–160 BPM wie bei der Takterkennung
  let bt=gridBeats(g).map(b=>b.t).filter(t=>t>=evs[0].t-0.3*g.bar/g.beats&&t<job.t0+job.n/job.sr-0.2); let bpm=g.bpm||60*g.beats/g.bar;
  while(bpm<80&&bt.length>1){ const L=[]; bt.forEach((t,i)=>{ L.push(t); if(i+1<bt.length) L.push((t+bt[i+1])/2); }); bt=L; bpm*=2; }
  while(bpm>160&&bt.length>2){ bt=bt.filter((_,i)=>i%2===0); bpm/=2; }
  if(bt.length<4) return 'Ablauf gemerkt · Aufnahme zu kurz';
  const P=60/bpm, times=bt.map(t=>t-job.t0); times.push(times[times.length-1]+P);
  const ar=ablaufTry(job,times,Object.assign({a4:S.a4,tune:CH.eng?CH.eng.tune:0},sessionVocab(job)));
  if(!ar||!ar.ok) return 'Ablauf gemerkt · passt nicht zu dieser Aufnahme, Akkorde bleiben';
  snap(); CH.ev.forEach(e=>{ if(evs.includes(e)&&e.type!=='note'){ delete e.chk; delete e.chkWhy; delete e.part; delete e.abPass; } });
  applyBeatChords(job,evs,bt,ar.res.chords);
  quantizeEvents(g,CH.ev.filter(e=>e.t>=tA&&e.t<=tB)); abDedupe(tA,tB); CH.rowPlan=null; CH.stripKey=''; CH.key=''; CH.listKey=''; chordsUI();
  return ablaufMsg(ar); }
// Von Hand gesetzte/bearbeitete Akkorde haben Vorrang: ein erkannter Akkord an derselben Stelle fällt weg (Liedteil-Name wandert mit)
function abDedupe(tA,tB){ const hand=CH.ev.filter(e=>e.type!=='note'&&(e.edited||e.added)&&e.t>=tA&&e.t<=tB);
  CH.ev=CH.ev.filter(e=>{ if(e.type==='note'||e.edited||e.added||e.t<tA||e.t>tB) return true; const h=hand.find(x=>Math.abs(x.t-e.t)<0.02); if(!h) return true; if(e.part&&!h.part) h.part=e.part; if(e.abPass!=null&&h.abPass==null) h.abPass=e.abPass; return false; }); }
// Ablauf-Befehl (Sprache oder Text): merken, gleich auf die letzte Aufnahme anwenden
function ablaufCmd(raw){ const nb=(sheetBars()[0]||{g:{beats:4}}).g.beats, t=raw.toLowerCase();
  if(/\b(ablauf|abläufe)\b.*\b(aus|weg|löschen|lösche|vergessen|entfernen|stopp?)\b/.test(t)){ S.ablaufOn=false; save(); return {ok:1,txt:'Ablauf aus · Akkorde werden wieder frei erkannt'}; }
  if(/\b(ablauf)\b\s*(an|ein|einschalten)\s*$/.test(t)){ S.ablaufOn=true; save(); return {ok:1,txt:S.ablauf?'Ablauf an: '+ablaufText(S.ablauf):'Noch kein Ablauf gemerkt'}; }
  const p=parseAblauf(raw,nb); if(!Object.keys(p.teile).length&&!p.folge) return {ok:0,txt:p.fehler[0]||'Ablauf nicht verstanden'};
  // Halb verstanden ändert nichts (sonst würde ein Verhörer die gemerkte Strophe überschreiben)
  if(p.fehler.length) return {ok:0,txt:p.fehler[0]+' · nichts geändert'};
  const m=ablaufMerge(S.ablauf,p); if(m.fehlt.length) return {ok:0,txt:'Diese Teile kenne ich noch nicht: '+m.fehlt.join(', ')+' · erst z. B. „'+m.fehlt[0]+': G 4, D 4“'};
  S.ablauf=m.ab; S.ablaufOn=true; save(); const r=ablaufReapply();
  return {ok:1,txt:'Ablauf: '+ablaufText(S.ablauf)+(p.fehler.length?' · Achtung: '+p.fehler.join(' · '):'')+' · '+r,nosnap:1}; }
const ABLAUF_RE=/\b(ablauf|strophen?|refrain|refrän|chorus|bridge|intro|outro|solo|zwischenteil|zwischenspiel|pre.?chorus|kehrvers)\b/i;

// Tempo halbieren/verdoppeln: Taktstriche zusammenlegen bzw. teilen
function tempoScale(g,f){ const old=g.bpm||60*g.beats/g.bar;
  if(f===0.5){ // die Hälfte der Taktstriche behalten, auf der mehr Akkordwechsel liegen
    const on=p=>CH.ev.filter(e=>e.type!=='note'&&g.lines.some((l,i)=>i%2===p&&Math.abs(l-e.t)<0.06)).length;
    const par=on(1)>on(0)?1:0; let L=g.lines.filter((_,i)=>i%2===par); if(par===1&&g.lines.length) L.unshift(g.lines[1]-2*g.bar); g.lines=L; g.bar*=2; } else { const L=[]; g.lines.forEach((l,i)=>{ L.push(l); const nx=g.lines[i+1]; L.push(nx!=null?(l+nx)/2:l+g.bar/2); }); g.lines=L; g.bar/=2; }
  if(g.end!=null) while(g.lines.length>1&&g.lines[g.lines.length-1]>g.end+1e-3) g.lines.pop();
  if(g.end!=null&&g.lines[g.lines.length-1]<g.end-1e-3) g.lines.push(g.lines[g.lines.length-1]+g.bar);
  g.t=g.lines[0]; g.bpm=old*f; if(g.auto) g.end=g.lines[g.lines.length-1]; }
// Pro Schlag das passende Raster wählen (Viertel, Achtel, Sechzehntel, Triolen) und einrasten
function quantizeEvents(g,evs){
  const L=g.lines.slice(); if(g.end!=null) while(L[L.length-1]<g.end-1e-3) L.push(L[L.length-1]+g.bar);
  L.push(L[L.length-1]+g.bar);
  const beats=[]; for(let k=0;k+1<L.length;k++){ const len=(L[k+1]-L[k])/g.beats; for(let j=0;j<g.beats;j++) beats.push(L[k]+j*len); } beats.push(L[L.length-1]);
  const pen={1:0,2:0.02,4:0.06,3:0.05}; let moved=0;
  for(let i=0;i+1<beats.length;i++){ const a=beats[i], len=beats[i+1]-a;
    const inb=evs.filter(e=>{ const t=e.tr??e.t; return e.type==='note'&&t>=a-len*0.125&&t<a+len*0.875; }); if(!inb.length) continue;
    let bd=2,bc=1e9;
    for(const dv of [1,2,4,3]){ const u=len/dv, slot=new Map(); let c=0;
      for(const e of inb){ const t=e.tr??e.t, k=Math.round((t-a)/u), q=a+k*u; c+=Math.abs(t-q)/len+pen[dv];
        const lane=e.type==='note'?'s'+e.s:'c', key=lane+'@'+k; if(slot.has(key)&&!(e.type==='note'&&slot.get(key)===e.m)) c+=1; slot.set(key,e.type==='note'?e.m:1); }
      if(dv===1&&inb.some(e=>e.type==='note')) c+=0.03*inb.length; // Läufe: lieber Achtel als Viertel
      if(c<bc){bc=c;bd=dv;} }
    const u=len/bd;
    for(const e of inb){ if(e.tr==null) e.tr=e.t; const q=a+Math.round((e.tr-a)/u)*u; if(Math.abs(q-e.t)>1e-4){ e.t=q; moved++; } } }
  // Akkorde: auf den Schlag; nur deutlich dazwischen auf die halbe Zählzeit. Der erste Akkord sitzt auf der Eins.
  const c0=evs.find(e=>e.type!=='note');
  evs.forEach(e=>{ if(e.type==='note') return; if(e.tr==null) e.tr=e.t; let k=0; while(k+1<beats.length&&beats[k+1]<=e.tr) k++;
    const a=beats[k], len=(beats[k+1]??a+g.bar/g.beats)-a, fr=(e.tr-a)/len;
    let q=fr<0.3?a:fr>0.7?a+len:a+len/2;
    if(e===c0){ let bd=1e9; L.forEach(l=>{ if(Math.abs(l-e.tr)<Math.abs(bd-e.tr)) bd=l; }); if(Math.abs(bd-e.tr)<len*0.6) q=bd; }
    if(Math.abs(q-e.t)>1e-4){ e.t=q; moved++; } });
  // gleicher Ton doppelt an derselben Stelle: einmal reicht
  const seen=new Set(); CH.ev=CH.ev.filter(e=>{ if(e.type!=='note') return true; const k=e.s+'|'+e.m+'|'+e.t.toFixed(3); if(seen.has(k)) return false; seen.add(k); return true; });
  CH.ev.sort((a,b)=>a.t-b.t);
  return moved;
}

