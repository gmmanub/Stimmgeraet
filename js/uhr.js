// =================== Uhr: gemeinsame Taktquelle (Roadmap E · Beat-Modul, „jetzt billig vorbereiten“) ===================
// Eine Audio-Uhr für Abspielen (heute) und später Metronom, Aufnahme und Beat-Modul. Keine Oberfläche, kein setTimeout für Zeitpunkte:
// Zeitpunkte werden immer in AudioContext-Zeit (ctx.currentTime, Sekunden) angegeben und vorausgeplant.
// 1) UHR.audio()        einen gemeinsamen AudioContext holen/anlegen (null, wenn der Browser keinen kann)
// 2) UHR.setze(t,ctx,r) Ankerpunkt: Blattzeit t erklingt zur Audiozeit ctx, mit Tempo r (1 = normal)
//    UHR.jetzt(loop)    Blattzeit jetzt (Ausgabe-Latenz abgezogen; mit loop={a,e} springt sie am Loop-Ende zurück)
//    UHR.zuCtx(t)       Audiozeit, zu der die Blattzeit t erklingt (für vorausgeplante Töne); UHR.halt() beendet die Zeitabbildung
// 3) UHR.planer(fn,o)   Vorausplaner: ruft fn(von,bis) alle ~25 ms mit dem Zeitfenster [von,bis) in Audiozeit (Vorlauf 0,15 s),
//                       jedes Fenster genau einmal und lückenlos. Rückgabe: {stop()}. Der Verbraucher plant seine Töne in diesem Fenster ein.
//    UHR.gitter(a)      Schlagfolge auf der Audiozeit-Uhr: UHR.gitter({t0,schritt}) → (von,bis,fn) ruft fn(zeit,n) für jeden Schritt n im Fenster
const UHR={ctx:null,anker:{ctx:0,t:0,rate:1},an:false,planer_:new Set()};
UHR.audio=function(){ if(!UHR.ctx||UHR.ctx.state==='closed'){ try{ UHR.ctx=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ UHR.ctx=null; } } return UHR.ctx; };
UHR.lat=function(){ const c=UHR.ctx; return c?Math.max(0,Math.min(0.5,(c.outputLatency||0)||(c.baseLatency||0))):0; };
UHR.setze=function(t,ctxZeit,rate){ UHR.anker={ctx:ctxZeit,t,rate:rate||1}; UHR.an=true; };
UHR.halt=function(){ UHR.an=false; };
UHR.zuCtx=function(t){ const a=UHR.anker; return a.ctx+(t-a.t)/a.rate; };
UHR.jetzt=function(loop){ const c=UHR.ctx; if(!c||!UHR.an) return null; const a=UHR.anker; let x=a.t+Math.max(0,c.currentTime-a.ctx-UHR.lat())*a.rate;
  if(loop&&x>=loop.e){ const len=Math.max(0.05,loop.e-loop.a); x=loop.a+((x-loop.a)%len); } return x; };
UHR.planer=function(fn,o){ o=o||{}; const vor=o.vorlauf==null?0.15:o.vorlauf, ctx=o.ctx||UHR.audio(); if(!ctx) return {stop(){}};
  let bis=ctx.currentTime+(o.start||0), id=0; const h={stop(){ clearInterval(id); UHR.planer_.delete(h); }};
  const tick=()=>{ if(ctx.state==='closed'){ h.stop(); return; } const nach=ctx.currentTime+vor; if(nach>bis){ const von=bis; bis=nach; fn(von,bis); } };
  tick(); id=setInterval(tick,o.takt||25); UHR.planer_.add(h); return h; };
UHR.gitter=function(g){ return (von,bis,fn)=>{ const s=g.schritt; if(!(s>0)) return; for(let n=Math.max(0,Math.ceil((von-g.t0)/s-1e-9));;n++){ const t=g.t0+n*s; if(t>=bis) break; fn(t,n); } }; };
