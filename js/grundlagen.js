const $=s=>document.querySelector(s);
const root=document.documentElement;
const MONO='"M PLUS Rounded 1c", system-ui, sans-serif';
const KEY='gitarre.tuner.v1';
const SWEET={none:[0,0,0,0,0,0],sweet:[-2.3,0,0,-0.4,-2.1,-2.3],buzz:[-2,-2,-2,-2,1,0]}; // Saite 6 → 1, in Cent
const DEF={theme:'dark',notation:'B',tuning:'standard',a4:440,mode:'needle',accH:212,accS:42,tuneH:200,tuneS:95,haptic:true,sweet:'sweet',sweetForce:false,wave:true};
const TUNINGS=[
  {id:'standard',ok:1,name:'Standard',m:[40,45,50,55,59,64]},
  {id:'dropd',ok:1,name:'Drop D',m:[38,45,50,55,59,64]},
  {id:'halfdown',ok:1,name:'Halbton tiefer',m:[39,44,49,54,58,63],flat:true},
  {id:'wholedown',ok:1,name:'Ganzton tiefer',m:[38,43,48,53,57,62]},
  {id:'dropc',ok:1,name:'Drop C',m:[36,43,48,53,57,62]},
  {id:'dadgad',name:'DADGAD',m:[38,45,50,55,57,62]},
  {id:'openg',name:'Open G',m:[38,43,50,55,59,62]},
  {id:'opend',name:'Open D',m:[38,45,50,54,57,62]},
  {id:'opene',name:'Open E',m:[40,47,52,56,59,64]},
  {id:'openc',name:'Open C',m:[36,43,48,55,60,64]},
  {id:'chromatic',name:'Chromatisch',m:null}
];
const SH=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
const FL=['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];

let S=load();
function load(){try{const o=Object.assign({},DEF,JSON.parse(localStorage.getItem(KEY)||'{}'));
  if(o.tuneH===168&&o.tuneS===62){o.tuneH=DEF.tuneH;o.tuneS=DEF.tuneS;}
  if(o.accH===205&&o.accS===70){o.accH=DEF.accH;o.accS=DEF.accS;}
  if(!o.m2){o.sweet='sweet';o.m2=true;}
  return o;}catch(e){return Object.assign({},DEF);}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
const tuning=()=>TUNINGS.find(t=>t.id===S.tuning)||TUNINGS[0];
const effSweet=()=>{const T=tuning();return !T.m?'none':(T.ok||S.sweetForce)?S.sweet:'none';};
const autoMath=()=>{const T=tuning();return !!T.m&&!T.ok&&!S.sweetForce&&S.sweet!=='none';};

// Global note naming (B / H)
function noteName(m,flat){
  let n=(flat?FL:SH)[((m%12)+12)%12];
  if(S.notation==='H'){ if(n==='B') n='H'; else if(n==='B♭') n='B'; }
  return n;
}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
// =================== Texte: zentrale Textsammlung (texte/de.json), Platzhalter für Notennamen, Zahlen nach Sprache (Pflichtenheft Abschnitt 3) ===================
// t('schlüssel',{wert}) holt den Text; {akk:Em} / {sag:Em} / {saite:B} / {ton:B} setzt die App nach B/H ein. txApply(el) füllt [data-t] (Text), [data-ta] (aria-label), [data-tl] (Liste, **fett**).
const TX={lang:'de-DE',d:{},ok:false};
fetch('texte/de.json',{cache:'no-cache'}).then(r=>r.json()).then(j=>{ TX.d=j; TX.lang=j._sprache||'de-DE'; TX.ok=true; txApply(document); }).catch(()=>{});
const TXPC={C:0,'C#':1,Db:1,D:2,'D#':3,Eb:3,E:4,F:5,'F#':6,Gb:6,G:7,'G#':8,Ab:8,A:9,'A#':10,Bb:10,B:11};
const TXSAG={1:'Cis',3:'Es',6:'Fis',8:'Gis',10:'B'};
function txTon(n){ const pc=TXPC[n]; return pc==null?n:rootName(pc); }
function txSagTon(n){ const pc=TXPC[n]; if(pc==null) return n; if(pc===11) return S.notation==='H'?'H':'B'; if(pc===10) return S.notation==='H'?'B':'B♭'; return TXSAG[pc]||rootName(pc); }
function txAkk(c,sag){ const m=/^([A-G][#b]?)(.*?)(?:\/([A-G][#b]?))?$/.exec(c); if(!m) return c; const r=sag?txSagTon(m[1]):txTon(m[1]);
  let q=m[2]; if(sag) q=q==='m'?'-Moll':q==='m7'?'-Moll 7':q.replace(/^sus(\d)/,' sus $1').replace(/^add(\d)/,' add $1').replace(/^maj7/,' Major 7');
  return r+q+(m[3]?(sag?' über '+txSagTon(m[3]):'/'+txTon(m[3])):''); }
function txSub(x){ return String(x).replace(/\{akk:([^}]+)\}/g,(m,c)=>txAkk(c,false)).replace(/\{sag:([^}]+)\}/g,(m,c)=>txAkk(c,true)).replace(/\{saite:([^}]+)\}/g,(m,c)=>txSagTon(c)+'-Saite').replace(/\{ton:([^}]+)\}/g,(m,c)=>txTon(c)); }
function t(k,v){ const x=TX.d[k]; if(x==null||Array.isArray(x)) return k; return txSub(String(x).replace(/\{(\w+)\}/g,(m,n)=>v&&v[n]!=null?v[n]:m)); }
function tx(k,v){ return t(k,v); } // eindeutiger Name: in vielen Funktionen heißt die Zeit „t“
function tList(k){ const x=TX.d[k]; return Array.isArray(x)?x.map(txSub):[]; }
const txEsc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const txFett=x=>txEsc(x).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
function txApply(root){ if(!TX.ok||!root) return; root.querySelectorAll('[data-t]').forEach(el=>el.textContent=t(el.dataset.t)); root.querySelectorAll('[data-ta]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.ta)));
  root.querySelectorAll('[data-tl]').forEach(el=>el.innerHTML=tList(el.dataset.tl).map(x=>'<li>'+txFett(x)+'</li>').join('')); }
// Zahlen nach Sprache (122,5 / 122.5)
function fmtNum(v,d){ try{ return new Intl.NumberFormat(TX.lang,{minimumFractionDigits:d||0,maximumFractionDigits:d||0}).format(v); }catch(e){ return String(v); } }
const fmt=(v,d)=>v.toFixed(d).replace('.',',');

// Colours
function hsl(h,s,l){s/=100;l/=100;const k=n=>(n+h/30)%12;const a=s*Math.min(l,1-l);
  const f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));
  return [Math.round(255*f(0)),Math.round(255*f(8)),Math.round(255*f(4))];}
const rgba=(c,a)=>`rgba(${c[0]},${c[1]},${c[2]},${clamp(a,0,1)})`;
const mix=(a,b,t)=>[0,1,2].map(i=>Math.round(a[i]+(b[i]-a[i])*t));
const COL={acc:[0,0,0],tune:[0,0,0],core:[255,255,255],text:[201,209,217]};
function applyColors(){
  const day=S.theme==='day';
  const L=day?44:60, LT=day?46:66;
  root.style.setProperty('--acc',`hsl(${S.accH} ${S.accS}% ${L}%)`);
  root.style.setProperty('--tune',`hsl(${S.tuneH} ${S.tuneS}% ${LT}%)`);
  root.style.setProperty('--tune-hi',`hsl(${S.tuneH} ${S.tuneS}% ${day?62:88}%)`);
  root.style.setProperty('--tune-lo',`hsl(${S.tuneH} ${S.tuneS}% ${day?34:50}%)`);
  COL.acc=hsl(S.accH,S.accS,L); COL.tune=hsl(S.tuneH,S.tuneS,LT);
  COL.core=hsl(S.tuneH,S.tuneS,day?60:92);
  COL.text=day?[42,49,57]:[201,209,217];
  document.querySelector('meta[name="theme-color"]').setAttribute('content',day?'#dde1e6':'#171b20');
}

// Canvas helper
function fit(cv){
  const r=cv.getBoundingClientRect(), d=Math.min(2.5,window.devicePixelRatio||1);
  const W=Math.max(1,Math.round(r.width*d)), H=Math.max(1,Math.round(r.height*d));
  if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}
  const c=cv.getContext('2d'); c.setTransform(d,0,0,d,0,0);
  return {c,w:r.width,h:r.height};
}

