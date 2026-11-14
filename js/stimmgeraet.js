// ---------- Pitch detection (YIN) ----------
const yinBuf=new Float32Array(4096);
function yin(buf,sr){
  const W=Math.floor(buf.length/2);
  const tauMin=Math.floor(sr/1100), tauMax=Math.min(W-1,Math.floor(sr/62));
  const d=yinBuf;
  for(let tau=1;tau<=tauMax;tau++){let s=0;for(let i=0;i<W;i++){const x=buf[i]-buf[i+tau];s+=x*x;}d[tau]=s;}
  let run=0;
  for(let tau=1;tau<=tauMax;tau++){run+=d[tau];d[tau]=run?d[tau]*tau/run:1;}
  let tau=-1;
  for(let t=Math.max(2,tauMin);t<tauMax;t++){
    if(d[t]<0.13){while(t+1<tauMax&&d[t+1]<d[t])t++;tau=t;break;}
  }
  if(tau<0) return null;
  const x0=d[tau-1],x1=d[tau],x2=d[tau+1];
  const den=x0+x2-2*x1, shift=den?0.5*(x0-x2)/den:0;
  return sr/(tau+clamp(shift,-1,1));
}
const median=a=>{const s=[...a].sort((x,y)=>x-y);return s[s.length>>1];};

// ---------- State ----------
let running=false, raf=0, last=0, lastAna=0, source='demo', audio=null, wake=null;
const sig={f:0,level:0,lastSeen:-1e9};
const view={target:null,idx:-1,cents:0,pos:0,vel:0,ph:0,act:0,lvl:0,lockT:0,locked:false,lockAmt:0,pulse:0,noteKey:'',flat:false};
let hist=[], pend=0, pendF=0;

function accept(f,now){
  if(now-sig.lastSeen>400) hist=[];
  if(hist.length){
    const med=median(hist), dc=1200*Math.log2(f/med);
    if(Math.abs(dc)>60){
      if(pendF&&Math.abs(1200*Math.log2(f/pendF))<60) pend++; else pend=1;
      pendF=f;
      if(pend<3) return;
      hist=[f]; pend=0; pendF=0;
    } else { pend=0; pendF=0; hist.push(f); if(hist.length>7) hist.shift(); }
  } else hist=[f];
  sig.f=median(hist); sig.lastSeen=now;
}
function analyse(now){
  const {an,buf,ctx}=audio;
  an.getFloatTimeDomainData(buf);
  let s=0; for(let i=0;i<buf.length;i++) s+=buf[i]*buf[i];
  const rms=Math.sqrt(s/buf.length);
  sig.level=clamp((Math.sqrt(rms)-0.05)*3.2,0,1);
  if(rms<0.004) return;
  const f=yin(buf,ctx.sampleRate);
  if(f&&f>60&&f<1100) accept(f,now);
}

// Demo: simulated string being tuned (used when the microphone is blocked)
const demo={i:5,phase:'pause',t:0.5,start:0};
function demoStep(dt,now){
  const T=tuning(), strings=(T.m||TUNINGS[0].m);
  demo.t+=dt;
  if(demo.phase==='pause'){
    sig.level*=Math.exp(-dt*3);
    if(demo.t>1.4){demo.phase='tune';demo.t=0;demo.i=(demo.i+1)%6;demo.start=(Math.random()<.5?-1:1)*(14+Math.random()*30);}
    return;
  }
  const t=demo.t;
  const c=t<3.4?demo.start*Math.exp(-t*1.25)+Math.sin(t*7)*0.8:Math.sin(t*5)*0.5;
  const off=SWEET[effSweet()][demo.i];
  const f=S.a4*Math.pow(2,(strings[demo.i]-69)/12)*Math.pow(2,(c+off)/1200);
  sig.level=0.95*Math.exp(-t*0.42);   // ein Anschlag, klingt vollständig aus
  sig.f=f;
  if(sig.level>0.05) sig.lastSeen=now; // leise Saite wird nicht mehr erkannt
  if(t>9){demo.phase='pause';demo.t=0;}
}

function computeTarget(f){
  const T=tuning();
  const mf=69+12*Math.log2(f/S.a4);
  view.heard=Math.round(mf);
  if(T.m){
    let best=0,bd=1e9;
    T.m.forEach((m,i)=>{const d=Math.abs(mf-m);if(d<bd){bd=d;best=i;}});
    let idx=-1;
    // Kontinuität: beim Hoch-/Runterstimmen an der Saite bleiben
    if(view.idx>=0&&view.contAge<0.6&&Math.abs(mf-T.m[view.idx])<3&&Math.abs(mf-view.lastMf)<0.7) idx=view.idx;
    else if(bd<=1.5) idx=best;
    else if(mf<T.m[0]) idx=0;   // tiefer als die tiefste Saite: lockere Saite
    if(idx>=0){ view.idx=idx; view.target=T.m[idx]; view.flat=!!T.flat; }
    else { view.idx=-1; view.target=view.heard; view.flat=!!T.flat; } // gegriffener Ton
  } else { view.idx=-1; view.target=view.heard; view.flat=false; }
  view.lastMf=mf; view.contAge=0;
  view.cents=(mf-view.target)*100-(view.idx>=0?SWEET[effSweet()][view.idx]:0);
}

function onLock(){
  if(S.haptic&&navigator.vibrate){try{navigator.vibrate(14);}catch(e){}}
}

// Animations-Parameter (abgestimmt)
const P={FQ:1.5,SP:0.8,OV:1.0,TH:2,TT:71,TO:0.6,BR:1.25,G:0.15,FR:27,FS:0.4,TR:0.9,CU:1.2,FD:1.2,SW:0.6,SS:2.2,AG:0.9};
const ease=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;
const A={hasS:0,lockLin:0,fullT:-1,midI:0,side:1,dev:1,rev:new Array(15).fill(0)};

function update(dt,now){
  const age=(now-sig.lastSeen)/1000;
  const present=age<0.25;
  view.contAge=(view.contAge||0)+dt;
  if(age<1.8) computeTarget(sig.f); else {view.target=null;view.idx=-1;}
  const actT=present?1:(age<1.8?0.5:0);
  view.act+=(actT-view.act)*Math.min(1,dt*(actT>view.act?14:2.2));
  view.lvl+=(sig.level-view.lvl)*Math.min(1,dt*(sig.level>view.lvl?5:3)); // weicher Anstieg bei neuem Anschlag
  if(!present) view.lvl*=Math.exp(-dt*1.5);

  const goal=clamp(view.cents,-56,56), k=64, c=2*Math.sqrt(k)*0.74;
  view.vel+=((goal-view.pos)*k-view.vel*c)*dt; view.pos+=view.vel*dt;
  if(present&&Math.abs(view.cents)>0.5) A.side=view.cents>0?1:-1;

  // Stimmt-Zustand bleibt beim Verklingen bestehen und dimmt nur ab;
  // aufgehoben wird er erst durch einen neuen Ton, der nicht stimmt, oder eine andere Saite.
  if(view.locked){
    if(present&&(Math.abs(view.cents)>4||view.target!==view.lockTarget)){view.locked=false;view.lockT=0;A.fullT=-1;}
  } else if(present&&Math.abs(view.cents)<2){
    view.lockT+=dt; if(view.lockT>0.2){view.locked=true;view.lockTarget=view.target;onLock();}
  } else view.lockT=0;
  A.lockLin=clamp(A.lockLin+(view.locked?1:-1)*dt/P.TR,0,1);
  if(view.locked&&A.lockLin>=1&&A.fullT<0) A.fullT=now;
  view.lockAmt=ease(A.lockLin);
}

// ---------- Drawing ----------
const cvM=$('#meter');
function rr(c,x,y,w,h,r){c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}

function drawMeter(dt,now){
  const {c,w,h}=fit(cvM); c.clearRect(0,0,w,h);
  const day=S.theme==='day';
  const ACC=COL.acc,TUNE=COL.tune,CORE=COL.core,TXT=COL.text;
  const BAR=day?[200,206,213]:[34,40,47], BARo=day?[212,217,222]:[24,28,33];
  const lock=view.lockAmt, lvl=view.lvl;
  A.dev+=(clamp((Math.abs(view.pos)-1.5)/14,0,1)-A.dev)*Math.min(1,dt*8);
  const side=A.side, sPos=side>0?Math.max(0,view.pos):Math.min(0,view.pos);
  A.hasS+=((view.target!=null?1:0)-A.hasS)*Math.min(1,dt*2.5);
  const has=A.hasS>0.01;
  const act=Math.min(1,0.1+lvl*1.1)*A.hasS, actMid=Math.min(1,0.3+lvl*2.6)*A.hasS;
  const close=1-Math.min(1,Math.abs(sPos)/50);
  const prox=has?Math.max(0,1-Math.abs(sPos)/P.FR):0;
  const pre=Math.pow(prox,P.CU)*P.FS*act;
  A.midI+=((pre+(actMid*P.BR-pre)*lock)-A.midI)*Math.min(1,dt*4);
  const far=has&&Math.abs(view.cents)>50;

  const N=15, span=Math.min(w*0.9,520), step=span/(N-1), cx=w/2, x0=cx-span/2;
  const top=h*0.06, H=h*0.88, mid=top+H/2, bw=step*0.66, rad=bw/2, MI=(N-1)/2;
  const sweepR=A.fullT>0?(now-A.fullT)/1000*P.SS:-1;
  const B=[];
  for(let i=0;i<N;i++){
    const ce=-50+i*(100/(N-1)), x=x0+i*step, isMid=i===MI;
    const dist=Math.abs(i-MI)/MI, shade=1-P.G*Math.pow(dist,1.4)*0.9;
    const sameSide=(ce*side)>0;
    let I=sameSide&&has?Math.exp(-Math.pow((ce-sPos)/7,2))*(1-lock):0;
    if(far&&sameSide&&(i===0||i===N-1)) I=Math.max(I,0.85);
    const sweep=sweepR>=0?Math.exp(-Math.pow((dist-sweepR)/0.16,2)):0;
    if(!isMid){
      const passed=sweepR>=0&&sweepR>=dist;
      A.rev[i]=passed?Math.min(1,A.rev[i]+dt*2.5):(view.locked?A.rev[i]:Math.max(0,A.rev[i]-dt*2));
    }
    const gate=ease(A.rev[i]);
    const near=Math.exp(-Math.pow(dist/0.28,2));
    let col,a,vis=1;
    if(isMid){
      vis=Math.min(1,A.midI*2.2);
      col=mix(mix(ACC,TUNE,0.5+0.5*prox),CORE,0.7*lock);
      a=Math.min(1,A.midI);
    } else {
      const after=(P.AG*0.6+0.4*near*P.AG)*act*shade*P.BR*gate;
      const seek=Math.min(1,I*act*(0.45+0.55*close)*shade*P.BR);
      col=mix(mix(ACC,TUNE,0.3*close),mix(TUNE,CORE,Math.max(sweep,0.4*near)),Math.max(gate,sweep));
      a=Math.min(1,seek*(1-lock)+after+P.SW*sweep*Math.max(act,0.5));
    }
    B.push({x,col,a,shade,vis,gate});
    if(vis<0.01) continue;
    c.beginPath(); rr(c,x-bw/2,top,bw,H,rad);
    c.fillStyle=rgba(mix(BARo,BAR,shade),vis); c.fill();
    if(a>0.01){
      c.fillStyle=rgba(col,a);
      c.shadowColor=rgba(col,Math.min(1,a)); c.shadowBlur=(isMid?26:14)*a*(day?0.5:1);
      c.fill(); c.shadowBlur=0;
    }
  }
  if(!S.wave||!has) return;
  const amp=H*0.10*lvl, off=side*Math.min(1,Math.abs(sPos)/50)*H*0.16;
  const gWith=1+1.5*A.dev, gAgainst=1+P.OV*A.dev;
  const X0=x0-bw/2, X1=x0+span+bw/2, ph=view.ph;
  const seg=(xa,xb,fn)=>{c.beginPath();const n=14;for(let j=0;j<=n;j++){const x=xa+(xb-xa)*j/n,u=(x-X0)/(X1-X0),env=Math.abs(Math.sin(2*Math.PI*u)),s=Math.sin(2*Math.PI*P.FQ*Math.abs(u-0.5)*2-ph);const y=mid-fn(env,s);j?c.lineTo(x,y):c.moveTo(x,y);}c.stroke();};
  c.lineJoin='round'; c.lineCap='round';
  B.forEach((b,i)=>{
    if(b.vis<0.01) return;
    const isMid=i===MI, lk=isMid?lock:b.gate, xa=b.x-bw/2-2, xb=b.x+bw/2+2;
    c.save(); c.beginPath(); rr(c,b.x-bw/2,top,bw,H,rad); c.clip();
    const tcol=isMid?b.col:mix(TXT,mix(TUNE,CORE,0.25),lk);
    const ta=(isMid?Math.min(1,b.a):(0.14*(1-lk)+0.6*act*lk)*b.shade)*P.TO*b.vis;
    for(let L=0;L<12;L++){c.strokeStyle=rgba(tcol,ta*1.7/12);c.lineWidth=Math.max(1,P.TT*(1-L/12));seg(xa,xb,(env,s)=>amp*env*s);}
    if(!isMid){
      const wa=(1-lock)*Math.min(Math.max(0.35,Math.min(0.85,b.a+0.4)),0.3+0.5*act)*(0.5+0.5*b.shade);
      if(wa>0.01){c.strokeStyle=rgba(ACC,wa);c.lineWidth=P.TH;
        seg(xa,xb,(env,s)=>{const g=(s*side>=0)?gWith:gAgainst;return off*env*lvl+amp*env*s*g;});}
    }
    c.restore();
  });
}

// ---------- DOM read-outs ----------
function updateDOM(now){
  const n=$('#note');
  const showHeard=view.target!=null&&view.idx>=0&&Math.abs(view.cents)>50&&view.heard!==view.target;
  const key=view.target==null?'idle':`${view.target}|${S.notation}|${view.idx}|${view.flat}|${showHeard?view.heard:''}|${S.tuning}`;
  if(key!==view.noteKey){
    view.noteKey=key;
    if(view.target==null){n.innerHTML='<span>–</span>';$('#pos').innerHTML='';}
    else{
      const nm=noteName(view.target,view.flat), oct=Math.floor(view.target/12)-1;
      const hd=showHeard?`<span class="heard">${noteName(view.heard,view.flat)} →</span>`:'';
      n.innerHTML=`${hd}<span>${nm[0]}</span><span class="acc">${nm.slice(1)}</span><span class="oct">${oct}</span>`;
      $('#pos').innerHTML=positions();
    }
  }
  n.classList.toggle('idle',view.target==null||view.act<0.3);
  n.classList.toggle('lock',view.locked&&view.target!=null);
}
function positions(){
  const T=tuning(), base=T.m||TUNINGS[0].m, out=[], note=view.heard;
  base.forEach((o,i)=>{const fr=note-o;if(fr>=0&&fr<=15)out.push({s:6-i,fr});});
  out.sort((a,b)=>a.fr-b.fr);
  let mainS=-1,mainF=-1;
  if(view.idx>=0){mainS=6-view.idx;mainF=0;if(!out.some(p=>p.s===mainS&&p.fr===0))out.unshift({s:mainS,fr:0});}
  else if(out[0]){mainS=out[0].s;mainF=out[0].fr;}
  return out.slice(0,3).map(p=>`<span class="${p.s===mainS&&p.fr===mainF?'main':''}">Saite ${p.s} <em>· ${p.fr===0?'leer':'Bund '+p.fr}</em></span>`).join('');
}

// ---------- Loop ----------
function frame(now){
  if(!running) return;
  const dt=Math.min(0.05,(now-last)/1000||0.016); last=now;
  if(source==='mic'){ if(now-lastAna>18){lastAna=now;analyse(now);} }
  else demoStep(dt,now);
  update(dt,now);
  view.ph+=dt*9*P.SP;
  drawMeter(dt,now); updateDOM(now);
  raf=requestAnimationFrame(frame);
}

async function getWake(){try{if('wakeLock' in navigator) wake=await navigator.wakeLock.request('screen');}catch(e){wake=null;}}
// Mikro freigeben, sobald die App nicht sichtbar ist; beim Zurückkommen ins Stimmgerät wieder einschalten
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='hidden'){ if($('#tuner').classList.contains('on')){stopTuner(); tunerResume=true;} }
  else if(tunerResume) startTuner();
});

let tunerRun=0, tunerResume=false;
async function startTuner(){
  const run=++tunerRun; tunerResume=false;
  $('#tuner').classList.add('on');
  hist=[]; sig.lastSeen=-1e9; sig.level=0; view.noteKey=''; view.locked=false; view.lockAmt=0; view.pos=0; view.vel=0; view.idx=-1; A.lockLin=0; A.fullT=-1; A.midI=0;
  source='demo'; let ctx=null;
  try{ctx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}
  try{
    if(!ctx||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia) throw 0;
    const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});
    if(run!==tunerRun){stream.getTracks().forEach(t=>t.stop()); try{ctx.close();}catch(_){} return;} // inzwischen geschlossen
    const src=ctx.createMediaStreamSource(stream), an=ctx.createAnalyser();
    an.fftSize=4096; src.connect(an);
    await ctx.resume();
    audio={ctx,an,stream,buf:new Float32Array(an.fftSize)}; source='mic';
  }catch(e){ if(ctx) try{ctx.close();}catch(_){}; audio=null; }
  if(run!==tunerRun) return;
  const b=$('#banner');
  b.textContent='Vorschau mit simulierter Gitarre: In dieser Ansicht ist das Mikrofon gesperrt. So siehst du Anzeige, Dämpfung und Einrasten.';
  b.classList.toggle('on',source!=='mic');
  getWake();
  running=true; last=performance.now(); cancelAnimationFrame(raf); raf=requestAnimationFrame(frame);
}
function stopTuner(){
  tunerRun++; running=false; cancelAnimationFrame(raf);
  if(audio){try{audio.stream.getTracks().forEach(t=>t.stop());audio.ctx.close();}catch(e){} audio=null;}
  if(wake){try{wake.release();}catch(e){} wake=null;}
  $('#tuner').classList.remove('on');
}

// ---------- Settings ----------
let wheelT='acc', wheelImg=null, wheelKey='';
function buildWheel(px){
  const off=document.createElement('canvas'); off.width=off.height=px;
  const x=off.getContext('2d'), img=x.createImageData(px,px), R=px/2, L=S.theme==='day'?42:62;
  for(let j=0;j<px;j++)for(let i=0;i<px;i++){
    const dx=i+0.5-R, dy=j+0.5-R, d=Math.hypot(dx,dy)/R; if(d>1) continue;
    const h=(Math.atan2(dy,dx)*180/Math.PI+360)%360, c=hsl(h,d*100,L), k=(j*px+i)*4;
    img.data[k]=c[0];img.data[k+1]=c[1];img.data[k+2]=c[2];img.data[k+3]=d>0.985?Math.round(255*(1-d)/0.015):255;
  }
  x.putImageData(img,0,0); return off;
}
function drawWheel(){
  const cv=$('#wheel'), {c,w}=fit(cv);
  const px=cv.width, k=px+'|'+S.theme;
  if(k!==wheelKey){wheelImg=buildWheel(px);wheelKey=k;}
  c.clearRect(0,0,w,w); c.drawImage(wheelImg,0,0,w,w);
  const R=w/2;
  [['acc',S.accH,S.accS],['tune',S.tuneH,S.tuneS]].forEach(([t,h,s])=>{
    const a=h*Math.PI/180, r=s/100*R*0.985, x=R+Math.cos(a)*r, y=R+Math.sin(a)*r;
    c.beginPath(); c.arc(x,y,t===wheelT?10:6,0,Math.PI*2);
    c.lineWidth=t===wheelT?3:1.5; c.strokeStyle='#fff'; c.stroke();
    c.lineWidth=1; c.strokeStyle='rgba(0,0,0,.6)'; c.beginPath(); c.arc(x,y,(t===wheelT?10:6)+2,0,Math.PI*2); c.stroke();
  });
}
function wheelPick(e){
  const r=$('#wheel').getBoundingClientRect(), R=r.width/2;
  const dx=e.clientX-r.left-R, dy=e.clientY-r.top-R;
  S[wheelT+'H']=Math.round((Math.atan2(dy,dx)*180/Math.PI+360)%360);
  S[wheelT+'S']=Math.round(clamp(Math.hypot(dx,dy)/R,0,1)*100);
  save(); applyColors(); refreshSwatches(); drawWheel();
}
let picking=false;
$('#wheel').addEventListener('pointerdown',e=>{picking=true;$('#wheel').setPointerCapture(e.pointerId);wheelPick(e);});
$('#wheel').addEventListener('pointermove',e=>{if(picking)wheelPick(e);});
$('#wheel').addEventListener('pointerup',()=>picking=false);
$('#wheel').addEventListener('pointercancel',()=>picking=false);

function refreshSwatches(){
  document.querySelectorAll('.sw[data-t]').forEach(b=>{
    b.setAttribute('aria-pressed',b.dataset.t===wheelT);
    b.querySelector('i').style.background=b.dataset.t==='acc'?'var(--acc)':'var(--tune)';
  });
}
document.querySelectorAll('.sw[data-t]').forEach(b=>b.addEventListener('click',()=>{wheelT=b.dataset.t;refreshSwatches();drawWheel();}));
$('#cReset').addEventListener('click',()=>{['accH','accS','tuneH','tuneS'].forEach(k=>S[k]=DEF[k]);save();refresh();});

function setSeg(id,val){document.querySelectorAll(id+' button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===val));}
function bindSeg(id,key){document.querySelectorAll(id+' button').forEach(b=>b.addEventListener('click',()=>{S[key]=b.dataset.v;save();refresh();}));}
bindSeg('#themeSeg','theme'); bindSeg('#sweetSeg','sweet'); bindSeg('#notSeg','notation'); 

const notesOf=t=>t.m?t.m.map(m=>noteName(m,t.flat)).join(' '):'alle 12 Töne';
function buildTList(){
  $('#tlist').innerHTML=TUNINGS.map(t=>`<button data-id="${t.id}" aria-pressed="${t.id===S.tuning}">${t.name}<span>${notesOf(t)}</span></button>`).join('');
  document.querySelectorAll('#tlist button').forEach(b=>b.addEventListener('click',()=>{S.tuning=b.dataset.id;save();refresh();}));
}
const setA4=v=>{S.a4=clamp(Math.round(v),415,466);save();refresh();};
$('#aMinus').addEventListener('click',()=>setA4(S.a4-1));
$('#aPlus').addEventListener('click',()=>setA4(S.a4+1));
document.querySelectorAll('#aPre button').forEach(b=>b.addEventListener('click',()=>setA4(+b.dataset.v)));
$('#hap').addEventListener('click',()=>{S.haptic=!S.haptic;save();refresh();});
$('#cfT').addEventListener('click',()=>{S.chordFrets=S.chordFrets===false;save();refresh();CH.stripKey='';});
$('#waveT').addEventListener('click',()=>{S.wave=!S.wave;save();refresh();});
$('#sweetForce').addEventListener('click',()=>{S.sweetForce=!S.sweetForce;save();refresh();});

function openSheet(scrollTo){
  $('#sheet').classList.add('on'); refreshSwatches(); requestAnimationFrame(drawWheel);
  if(scrollTo) requestAnimationFrame(()=>$(scrollTo).scrollIntoView({block:'start'}));
}
const closeSheet=()=>$('#sheet').classList.remove('on');
$('#homeSet').addEventListener('click',()=>openSheet());
$('#tchip').addEventListener('click',()=>openSheet('#gTuning'));
$('#sclose').addEventListener('click',closeSheet);
$('#sheet').addEventListener('click',e=>{if(e.target.id==='sheet')closeSheet();});
$('#launch').addEventListener('click',startTuner);
$('#close').addEventListener('click',stopTuner);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#hsheet').classList.contains('on'))$('#hsheet').classList.remove('on');else if($('#esheet').classList.contains('on'))closeEdit();else if($('#msheet').classList.contains('on')){$('#msheet').classList.remove('on');metPreview(false);}else if($('#sheet').classList.contains('on'))closeSheet();else if(running)stopTuner();else if(CH.running)stopChords();}});

function refresh(){ if(typeof bakUI==='function') try{ bakUI(); }catch(_){}
  root.classList.toggle('day',S.theme==='day');
  applyColors();
  setSeg('#themeSeg',S.theme); setSeg('#sweetSeg',S.sweet);
  $('#sweetInfo').textContent={none:'Jede Saite exakt auf 0 Cent. Am besten zusammen mit Klavier oder Keyboard.',sweet:'Einige Saiten um bis zu 2 Cent tiefer, damit Akkorde für das Ohr ausgewogener klingen. Werte nach Peterson „Sweetened“, gemessen von Nutzern.',buzz:'Versätze für Gitarren mit Buzz-Feiten-Sattel. Auf einer normalen Gitarre nur eine Halblösung. Werte aus Gitarrenforen.'}[S.sweet]+' Gilt nicht im chromatischen Modus. In offenen Stimmungen und DADGAD schaltet die App automatisch auf Mathematisch, weil die Werte für Standard ausgelegt sind.'; setSeg('#notSeg',S.notation); 
  buildTList();
  $('#aVal').textContent=S.a4+' Hz';
  document.querySelectorAll('#aPre button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.v===S.a4));
  $('#hap').setAttribute('aria-pressed',S.haptic);
  $('#cfT').setAttribute('aria-pressed',S.chordFrets!==false);
  if(typeof playUI==='function') playUI(); if(typeof capUI==='function') capUI();
  $('#sweetForce').setAttribute('aria-pressed',S.sweetForce);
  $('#waveT').setAttribute('aria-pressed',S.wave);
  const T=tuning();
  const sw=autoMath()?' · Mathematisch (automatisch)':({none:' · Mathematisch',sweet:' · Menschlich',buzz:' · Buzz Feiten'}[effSweet()]||'');
  $('#summary').innerHTML=`<b>${T.name}</b>${T.m?sw:''}<br>${notesOf(T)} · A4 = ${S.a4} Hz`;
  $('#tchip').innerHTML=`${T.name}${autoMath()?' · Mathe (auto)':({sweet:' · Mensch',buzz:' · BF'}[effSweet()]||'')} · ${S.a4} Hz<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>`;
  view.noteKey='';
  refreshSwatches();
  if($('#sheet').classList.contains('on')) drawWheel();
}

