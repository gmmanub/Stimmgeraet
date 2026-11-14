// =================== Blatt-Ansicht: Takte in Zeilen, Akkorde über dem Takt ===================
// Kein Takt erkannt: Standardraster nur für die Anzeige (4/4, 120 BPM), es wird nichts daran ausgerichtet
function sheetGrids(){ if(CH.grids.length) return CH.grids; if(!CH.ev.length) return [];
  const t0=Math.max(0,CH.ev[0].t-0.05), t1=CH.ev[CH.ev.length-1].t;
  if(!CH.vgrid||CH.vgrid.t!==t0||CH.vgrid.end<t1+0.01){ CH.vgrid={t:t0,bar:2,beats:4,lines:[t0],end:t1+0.01,auto:true,virt:true,bpm:120}; }
  return [CH.vgrid]; }
function sheetBars(){ const bars=[];
  sheetGrids().forEach((g,gi)=>{ gridExtend(g); const L=g.lines.slice(); const end=g.end==null?CH.tNow:g.end;
    if(!g.auto&&L[L.length-1]<end-1e-3) L.push(L[L.length-1]+g.bar);
    for(let k=0;k+1<L.length;k++) bars.push({a:L[k],b:L[k+1],g,gi}); });
  bars.forEach(bb=>bb.ev=CH.ev.filter(e=>e.t>=bb.a-1e-3&&e.t<bb.b-1e-3));
  while(bars.length&&!bars[0].ev.length) bars.shift();
  while(bars.length>1&&!bars[bars.length-1].ev.length) bars.pop();
  return bars;
}
function sheetSVG(){
  // Zoom im Blatt (CH.sz): Schrift, Saitenabstand und Mindestabstand der Töne wachsen mit; Takte pro Zeile ergeben sich daraus
  // Schrift nur bis 72 % verkleinern (bleibt lesbar), Abstände folgen dem Zoom voll; die Takte pro Zeile ergeben sich so, dass nichts überdeckt
  const z=sheetZ(), fz=Math.max(z,0.72), D=LAY.dig*fz, Lb=LAY.lab*fz, G=LAY.gap*fz, C=LAY.str*fz, cw=D*.62, gp=Math.max(4,6*z), left=24, padL=10*z, padR=3*z;
  // Zeilenaufteilung während der Geste erst bei ≥ 10 % Zoomänderung neu (weniger Zucken), beim Loslassen genau
  // Zeilenaufteilung: während der Geste erst bei ≥ 10 % neu, beim Loslassen so lassen, wie sie gerade aussieht (kein Springen)
  let zp=CH.zp; if(zp==null||(!CH.pinching&&!CH.zpKeep)||Math.abs(z/zp-1)>0.1) zp=CH.zp=z;
  const vw=($('#cstrip').clientWidth||360)-4, avail=vw-left-4;
  const CF=S.chordFrets!==false&&playMode()!=='pick'; const bars=sheetBars(); if(!bars.length) return '<svg width="10" height="10"></svg>';
  // benötigte Breite je Takt (nichts darf sich überdecken)
  const lw=e=>{ const p=labelParts(e); return Lb*.62*(p.root.length+p.suf.length*.75); };
  bars.forEach(bb=>{ const len=bb.b-bb.a; let need=0; const lanes={};
    bb.ev.forEach(e=>{ const fr=(e.t-bb.a)/len;
      if(e.type==='note') (lanes['s'+e.s]=lanes['s'+e.s]||[]).push([fr,cw*String(e.f).length]);
      else { (lanes.c=lanes.c||[]).push([fr,lw(e)]); if(CF&&e.f) e.f.forEach((f,s)=>{ if(f>=0) (lanes['s'+s]=lanes['s'+s]||[]).push([fr,cw*.82*String(f).length]); }); } });
    Object.values(lanes).forEach(a=>{ a.sort((x,y)=>x[0]-y[0]); for(let i=1;i<a.length;i++){ const d=Math.max(a[i][0]-a[i-1][0],1/16); need=Math.max(need,((a[i][1]+a[i-1][1])/2+gp)/d); } });
    bb.need=Math.max(70*z,need+padL+padR); });
  // Takte auf Zeilen verteilen
  // gleich breite Takte wie im Notenblatt: so viele pro Zeile, wie der dichteste hineinpasst (Obergrenze nach verfügbarer Breite: Handy 4, breiter Bildschirm mehr)
  // Zeilen einmal festlegen und dann stehen lassen (Bearbeiten verschiebt das Layout nicht); neu nur bei neuem Raster/Tempo/Breite
  const sig=sheetGrids().map(g=>g.lines.length+':'+g.lines[0].toFixed(2)+':'+g.bar.toFixed(3)).join(',')+'|'+avail+'|'+zp.toFixed(3);
  if(!CH.rowPlan||CH.rowPlan.sig!==sig){ const plan=[]; for(let i=0;i<bars.length;){ let k=Math.min(maxPerRow(avail,zp),bars.length-i); while(k>1&&bars.slice(i,i+k).some(bb=>bb.need*(zp<1?1:0.85)>avail/k)) k--; plan.push(k); i+=k; }
    CH.rowPlan={sig,plan}; }
  const rows=[]; { const pl=CH.rowPlan.plan; let ri=0; for(let i=0;i<bars.length;){ const k=Math.max(1,pl[Math.min(ri,pl.length-1)]); rows.push(bars.slice(i,i+k)); i+=k; ri++; } }
  // gleiche Taktbreite innerhalb der Zeile; die letzte Zeile nimmt die Breite der vorigen, wenn sie weniger Takte hat.
  // Ein einzelner, dichter Takt darf bis ein Drittel breiter als der Bildschirm werden (seitlich schieben), darüber wird er zusammengeschoben.
  let wMax=avail;
  rows.forEach((rw,ri)=>{ if(rw.length===1&&!(ri===rows.length-1&&ri>0&&rows[ri-1].length>1)){ const w=avail; /* ein Takt steht immer ganz auf dem Bildschirm (Manu 14.11.) */ rw[0].need=w; wMax=Math.max(wMax,w); return; }
    const per=ri===rows.length-1&&ri>0?Math.max(rw.length,rows[ri-1].length):rw.length; rw.forEach(bb=>bb.need=avail/per); });
  const SW=Math.round(vw+wMax-avail);
  const virt=!CH.grids.length, top0=Lb+G+D*.62+8, rowH=Math.round(top0+5*C+D*.7+18), head=virt?26:6, H=head+rows.length*rowH;
  let o=`<svg width="${SW}" height="${H}" viewBox="0 0 ${SW} ${H}" role="img" aria-label="Tablatur als Blatt">`;
  if(virt) o+=`<text x="${left}" y="17" font-size="12" fill="var(--muted)">Kein Takt erkannt · Standardraster 4/4</text>`;
  let barNo=0; const pos=new Map(); // Ereignis -> {x,y0}
  SHEET.geo=[]; SHEET.geo.nb=(bars[0]&&bars[0].g.beats)||4; SHEET.w=SW; $('#cstrip').classList.toggle('wide',SW>vw);
  rows.forEach((rw,ri)=>{ const y0=head+ri*rowH, top=y0+top0;
    const tot=rw.reduce((a,bb)=>a+bb.need,0), sc=1;
    for(let i=0;i<6;i++) o+=`<line x1="${left}" y1="${top+i*C}" x2="${left+tot*sc}" y2="${top+i*C}" stroke="var(--line)" stroke-width="${strW(i,z)}"/>`;
    'TAB'.split('').forEach((ch,i)=>o+=`<text x="10" y="${top+(1+i*1.5)*C*0.95}" font-size="${Math.min(12,C*.65)}" fill="var(--muted)" text-anchor="middle">${ch}</text>`);
    let x0=left; const nums=[];
    rw.forEach(bb=>{ const w=bb.need, len=bb.b-bb.a; barNo++;
      o+=`<line x1="${x0}" y1="${top}" x2="${x0}" y2="${top+5*C}" stroke="var(--muted)" stroke-width="1.3"/>`;
      SHEET.geo.push({a:bb.a,b:bb.b,x0:x0+padL,w:w-padL-padR,xl:x0,xr:x0+w,y0,y1:y0+rowH});
      if(CH.edm&&CH.selBars.has(bb.a.toFixed(3))) o+=`<rect x="${x0}" y="${y0+4}" width="${w}" height="${top+5*C-y0}" fill="var(--acc)" opacity=".13"/>`;
      o+=`<rect data-clane="1" data-bar="${bars.indexOf(bb)}" data-x0="${x0+padL}" data-w="${w-padL-padR}" x="${x0}" y="${y0+12}" width="${w}" height="${top-y0-12-C/2}" fill="transparent"/>`;
      for(let s=0;s<6;s++) o+=`<rect data-str="${s}" data-bar="${bars.indexOf(bb)}" data-x0="${x0+padL}" data-w="${w-padL-padR}" x="${x0}" y="${top+(5-s)*C-C/2}" width="${w}" height="${C}" fill="transparent"/>`;
      // Anzeige-Positionen: würde sich etwas überdecken, rückt das Spätere nach rechts (Zeit bleibt gleich)
      const XS=new Map(), endS=new Array(6).fill(x0+1); let endL=-1e9; // Zahlen auf der Eins halten Abstand zum Taktstrich (sonst überdeckt ihr Hintergrund den Strich)
      bb.ev.forEach(e=>{ let x=x0+padL+(e.t-bb.a)/len*(w-padL-padR);
        if(e.type==='note'){ const ww=cw*String(e.f).length; x=Math.max(x,endS[e.s]+gp+ww/2); endS[e.s]=x+ww/2; }
        else { const fr=(CF&&e.f)?e.f:[]; fr.forEach((f,s)=>{ if(f>=0) x=Math.max(x,endS[s]+gp+cw*.82*String(f).length/2); }); x=Math.max(x,endL+gp+lw(e)/2);
          fr.forEach((f,s)=>{ if(f>=0) endS[s]=x+cw*.82*String(f).length/2; }); endL=x+lw(e)/2; }
        XS.set(e,x); });
      const X=e=>XS.get(e);
      const cy=top-D*.62-G;
      bb.ev.forEach(e=>{ const i=CH.ev.indexOf(e), x=X(e), sel=ED.ev===e||(CH.edm&&CH.sel.has(e));
        if(e.type==='note'){ const y=top+(5-e.s)*C, n=String(e.f).length; pos.set(e,{x,y});
          if(e.art&&e.art!=='pick'){ let pv=null; for(let k=i-1;k>=0;k--){const q=CH.ev[k]; if(q.type==='note'){ if(q.s===e.s&&e.t-q.t<1.5) pv=q; break; } }
            const up=pv?e.f>=pv.f:true, sym=e.art==='slide'?(up?'/':'\\'):e.art, pp=pv&&pos.get(pv), mx=pp&&pp.y===y?(pp.x+x)/2:x-D*.8;
            o+=`<text x="${mx}" y="${y-D*.75}" text-anchor="middle" font-size="${Math.round(D*.62)}" font-style="${e.art==='slide'?'normal':'italic'}" fill="var(--acc)" opacity=".85">${sym}</text>`; }
          if(sel) o+=`<rect x="${x-D*.8}" y="${y-D*.9}" width="${D*1.6}" height="${D*1.8}" rx="7" fill="var(--acc)" opacity=".22"/>`;
          o+=`<rect x="${x-D*.42*n-1}" y="${y-D*.62}" width="${D*.84*n+2}" height="${D*1.15}" fill="${sel?'none':'var(--bg)'}"/><text x="${x}" y="${y+D*.36}" text-anchor="middle" font-size="${D}" font-weight="500" fill="var(--acc)">${e.f}</text>`;
          o+=`<rect data-i="${i}" x="${x-D*.8}" y="${y-C*.5}" width="${D*1.6}" height="${C}" fill="transparent" style="cursor:pointer"/>`; return; }
        const p=labelParts(e);
        if(e.chk&&!sel) o+=`<rect x="${x-Math.max(Lb,D)*1.05}" y="${cy-Lb*1.05}" width="${Math.max(Lb,D)*2.1}" height="${top+5*C+D*.6-cy+Lb*1.05}" rx="8" pointer-events="none" fill="var(--hint)" fill-opacity=".10" stroke="var(--hint)" stroke-opacity=".75" stroke-width="1.4" stroke-dasharray="4 3"/>`;
        if(sel) o+=`<rect x="${x-Math.max(Lb,D)*1.1}" y="${cy-Lb*1.1}" width="${Math.max(Lb,D)*2.2}" height="${top+5*C+D*.7-cy+Lb*1.1}" rx="8" fill="var(--acc)" opacity=".18"/>`;
        o+=`<text x="${x}" y="${cy}" text-anchor="middle" font-size="${Lb}" font-weight="500" fill="var(--text)">${p.root}<tspan fill="var(--acc)" font-size="${Lb*.75}" dy="-${Lb*.18}">${p.suf}</tspan></text>`;
        if(e.f&&CF){ const D2=D*.82; e.f.forEach((f,s)=>{ if(f<0) return; const y=top+(5-s)*C, n=String(f).length;
          o+=`<rect x="${x-D2*.42*n-1}" y="${y-D2*.62}" width="${D2*.84*n+2}" height="${D2*1.15}" fill="${sel?'none':'var(--bg)'}"/><text x="${x}" y="${y+D2*.36}" text-anchor="middle" font-size="${D2}" fill="var(--muted)">${f}</text>`; }); }
        o+=`<rect data-i="${i}" x="${x-Math.max(Lb,D)*1.1}" y="${y0+12}" width="${Math.max(Lb,D)*2.2}" height="${top+5*C+C*.5-y0-12}" fill="transparent" style="cursor:pointer"/>`; });
      // Taktnummer zuletzt: liegt über dem Akkord-Trefferfeld (antippen im Edit-Modus, lange drücken = Edit + Takt wählen)
      if(CH.edm&&ED.prop){ const bi=bars.indexOf(bb), nbb=bb.g.beats; ED.prop.forEach(pr=>{ const a=Math.max(pr.pos,bi*nbb), b=Math.min(pr.pos+pr.len,(bi+1)*nbb); if(b<=a) return;
        const xa=x0+(a-bi*nbb)/nbb*w, xb=x0+(b-bi*nbb)/nbb*w; o+=`<rect x="${xa}" y="${y0+4}" width="${xb-xa}" height="${top+5*C-y0}" pointer-events="none" fill="var(--sim)" fill-opacity="${pr.on?.16:.05}" stroke="var(--sim)" stroke-opacity="${pr.on?.7:.25}" stroke-dasharray="4 3"/>`; }); }
      // Zählzeichen unter dem Tab (dezent): 1 + 2 + … ; in schmalen Takten nur die Schläge
      { const nb=bb.g.beats, yy=top+5*C+D*.95, fs=Math.max(9,9.5*fz), inner=w-padL-padR, half=inner/(nb*2)>=fs*1.1;
        for(let k=0;k<nb*2;k++){ if(z<0.7||inner/nb<fs*1.6) break; /* rausgezoomt bzw. zu eng: keine Zählzeichen, nur Taktnummern (Manu 14.11.) */ if(k%2&&!half) continue; o+=`<text x="${x0+padL+k/(nb*2)*inner}" y="${yy}" text-anchor="middle" font-size="${k%2?fs*.9:fs}" fill="var(--muted)" opacity="${k%2?.45:.7}">${k%2?'+':k/2+1}</text>`; }
          const selB=CH.edm&&CH.selBars.has(bb.a.toFixed(3)); o+=`<text x="${x0+4*z}" y="${yy}" text-anchor="end" font-size="${fs*1.12}" font-weight="700" fill="${selB?'var(--acc)':'var(--soft)'}" pointer-events="none">${barNo}</text>`; }
      { const yb=top+5*C+C*.5+1, hb=y0+rowH+11-yb; nums.push(`<rect data-barno="${bars.indexOf(bb)}" x="${x0-26}" y="${yb}" width="40" height="${hb}" fill="transparent" style="cursor:pointer"/>`); }
      x0+=w; });
    o+=`<line x1="${x0}" y1="${top}" x2="${x0}" y2="${top+5*C}" stroke="var(--muted)" stroke-width="1.3"/>`; o+=nums.join(''); });
  return o+'</svg>';
}
const SHEET={geo:[],w:0};
// Höchstzahl Takte pro Zeile aus Breite und Zoom (Layout-Regel: nichts fest auf Handybreite; ≈ 82 px je Takt bei Zoom 100 %)
function maxPerRow(avail,z){ if((z||1)>=1.5) return 1; /* stark gezoomt: ein Takt pro Zeile (Manu 14.11.) */ return clamp(Math.floor((avail||($('#cstrip').clientWidth||360)-28)/(82*(z||1))),1,16); }
const SZ_MIN=0.4, SZ_MAX=1.9;
function sheetZ(){ return clamp(CH.sz||S.sz||1,SZ_MIN,SZ_MAX); }
// Saitenstärke: hohe e (oben, i=0) dünn, tiefe E (unten) etwas kräftiger – dezent
function strW(i,z){ return +((0.9+i*0.24)*Math.min(1.3,Math.sqrt(Math.max(z||1,0.72)))).toFixed(2); }
// Zoom im Blatt setzen; die Stelle unter (cy) bleibt möglichst an ihrem Platz
// Während der Geste die berührten Elemente im Dokument halten (sonst kommen nach dem Neuzeichnen keine Fingerbewegungen mehr an)
function keepTouched(list){ let h=$('#touchKeep'); if(!h){ h=document.createElement('div'); h.id='touchKeep'; h.hidden=true; document.body.appendChild(h); }
  let svg=null; (list||[]).forEach(n=>{ if(n&&n.ownerSVGElement&&$('#cstrip').contains(n)){ if(!svg){ svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); h.appendChild(svg); } svg.appendChild(n); } else if(n&&n.tagName==='svg'&&$('#cstrip').contains(n)) h.appendChild(n); }); }
function setSheetZ(z,cy,tg){ z=clamp(z,SZ_MIN,SZ_MAX); if(Math.abs(z-sheetZ())<1e-3&&CH.pinching) return; const sc=$('#cbody'), svg=$('#cstrip svg'); if(tg) keepTouched(tg);
  // Anker: der Takt unter den Fingern bleibt an seiner Stelle
  let an=null; if(svg&&cy!=null&&SHEET.geo.length){ const r=svg.getBoundingClientRect(), k=SHEET.w/Math.max(1,r.width), y=(cy-r.top)*k;
    let i=SHEET.geo.findIndex(g=>y>=g.y0&&y<g.y1); if(i<0) i=y<SHEET.geo[0].y0?0:SHEET.geo.length-1; const g=SHEET.geo[i]; an={i,rel:(y-g.y0)/Math.max(1,g.y1-g.y0)}; }
  CH.sz=z; CH.stripKey=''; renderStrip();
  if(an){ const n=$('#cstrip svg'), g=SHEET.geo[an.i]; if(n&&g){ const r=n.getBoundingClientRect(), k=SHEET.w/Math.max(1,r.width); sc.scrollTop+=r.top+(g.y0+an.rel*(g.y1-g.y0))/k-cy; } } }
// Fingerposition (Bildschirm) → Zeit in der Blatt-Ansicht; bleibt in der Zeile, in der der Finger ist
function sheetTimeAt(cx,cy){ const svg=$('#cstrip svg'); if(!svg||!SHEET.geo.length) return null; const r=svg.getBoundingClientRect(), k=SHEET.w/r.width, x=(cx-r.left)*k, y=(cy-r.top)*k;
  let row=SHEET.geo.filter(g=>y>=g.y0&&y<g.y1); if(!row.length){ let bd=1e9,y0=null; SHEET.geo.forEach(g=>{ const d=Math.min(Math.abs(y-g.y0),Math.abs(y-g.y1)); if(d<bd){bd=d;y0=g.y0;} }); row=SHEET.geo.filter(g=>g.y0===y0); }
  let g=row.find(q=>x>=q.xl&&x<q.xr); if(!g) g=x<row[0].xl?row[0]:row[row.length-1];
  return g.a+clamp((x-g.x0)/g.w,0,0.999)*(g.b-g.a); }
// Blatt außerhalb der Aufnahme, Streifen nur als Live-Anzeige während der Aufnahme
function inSheetView(){ return !CH.mic&&CH.ev.length>0; }
function viewUI(){}
// Tempo halbieren / verdoppeln (z. B. 124 → 62 BPM, wenn Manu den Puls halb so schnell zählt); die App merkt sich die Wahl
function tempoBtn(f){ if(!CH.grids.length) return; snap(); CH.grids.forEach(g=>tempoScale(g,f));
  const pref=S.tempoPref||null; S.tempoPref=f<1?(pref==='double'?null:'half'):(pref==='half'?null:'double'); save();
  metFollowGrid(); CH.stripKey=''; bpBanner(`≈ ${Math.round(CH.grids[0].bpm)} BPM`,2500); }
$('#chalf').addEventListener('click',()=>{ if(!CH.grids.length) return cMsg('Erst nach einer Aufnahme mit erkanntem Takt'); tempoBtn(0.5); closeCPops(); chordsUI(); }); $('#cdouble').addEventListener('click',()=>{ if(!CH.grids.length) return cMsg('Erst nach einer Aufnahme mit erkanntem Takt'); tempoBtn(2); closeCPops(); chordsUI(); });

function bpBanner(txt,hide){ const b=$('#cbanner'); b.textContent=txt; b.classList.add('on'); clearTimeout(BPB.bt); if(hide) BPB.bt=setTimeout(()=>b.classList.remove('on'),hide); }
async function bpAnalyze(job){
  const model=await bpLoad();
  // auf 22 050 Hz mono umrechnen
  const ab=new AudioBuffer({length:job.n,sampleRate:job.sr,numberOfChannels:1}), d=ab.getChannelData(0); let o=0;
  for(const c of job.chunks){ d.set(c,o); o+=c.length; }
  const oc=new OfflineAudioContext(1,Math.ceil(job.n*22050/job.sr),22050), sn=oc.createBufferSource(); sn.buffer=ab; sn.connect(oc.destination); sn.start();
  const r=await oc.startRendering();
  const F=[],O=[],C=[]; let last=0;
  await model.evaluateModel(r.getChannelData(0),(f,on,c)=>{F.push(...f);O.push(...on);C.push(...c);},p=>{ const q=Math.round(p*100); if(q>=last+5){last=q; bpBanner('Töne werden erkannt … '+q+' %');} });
  const raw=BP.noteFramesToTime(BP.addPitchBendsToNoteEvents(C,BP.outputToNotesPoly(F,O,0.5,0.3,7)));
  if(job.gen!==BPB.gen){ $('#cbanner').classList.remove('on'); return; }
  const n=bpToTab(raw,job);
  bpBanner(n?`${n} Töne eingetragen (neue Erkennung)`:'Keine Einzeltöne gefunden (neue Erkennung)',3500);
}
function bpChordAt(t){ let c=null; for(const e of CH.ev){ if(e.t>t+0.1) break; if(e.type!=='note') c=e; } return c; }
function bpToTab(raw,job){
  let N=raw.filter(x=>x.amplitude>0.25&&x.pitchMidi>=40&&x.pitchMidi<=88).map(x=>({t:job.t0+x.startTimeSeconds,m:x.pitchMidi,d:x.durationSeconds}))
    .filter(x=>x.t>=job.tBase-0.05).sort((a,b)=>a.t-b.t);
  storeOnsets(N.map(x=>x.t),job);
  // Anschläge zusammenfassen: 3 und mehr Töne fast gleichzeitig = Akkord → nur akkordfremde Töne bleiben (Melodieton im Anschlag)
  const keep=[]; let lastStrum=-9;
  for(let i=0;i<N.length;){ let j=i+1; while(j<N.length&&N[j].t-N[j-1].t<=0.04&&N[j].t-N[i].t<=0.09) j++;
    const grp=N.slice(i,j);
    if(job.pick) grp.forEach(x=>keep.push(Object.assign(x,{grp}))); // Zupfen: alles behalten
    else if(grp.length>=3){ const c=bpChordAt(grp[0].t+0.3), pcs=c&&c.type==='chord'?QUAL[c.qi].iv.map(k=>(c.r+k)%12):null;
      if(pcs) grp.forEach(x=>{ if(x.m>=55&&!pcs.includes(x.m%12)) keep.push(Object.assign(x,{grp:grp})); }); lastStrum=grp[grp.length-1].t; }
    else grp.forEach(x=>{ // Nachzügler eines Anschlags (Akkordton kurz danach) weglassen
      if(x.t-lastStrum<0.25){ const c=bpChordAt(x.t+0.3); if(c&&c.type==='chord'&&QUAL[c.qi].iv.map(k=>(c.r+k)%12).includes(x.m%12)) return; }
      keep.push(Object.assign(x,{grp})); });
    i=j; }
  // Doppelt erkannte Töne (gleiche Tonhöhe innerhalb 0,12 s) zusammenfassen
  for(let i=keep.length-1;i>0;i--){ for(let k=i-1;k>=0&&keep[i].t-keep[k].t<0.12;k--) if(keep[k].m===keep[i].m){ keep.splice(i,1); break; } }
  // Slide: kurzer Ton, direkt danach (ohne Lücke) 1–2 Halbtöne daneben = ein gerutschter Ton
  if(!job.pick) for(let i=0;i<keep.length;i++){ const A=keep[i]; if(A.used||A.d>0.3) continue;
    for(let k=i+1;k<keep.length&&keep[k].t-A.t<=0.32;k++){ const B=keep[k], dm=Math.abs(B.m-A.m);
      if(B.used||B.t-A.t<0.08||dm<1||dm>2||A.t+A.d<B.t-0.06||B.grp.length>2) continue;
      A.slideTo=B.m; A.slideT=B.t; B.used=true; break; } }
  if(!keep.some(x=>!x.used)) return 0;
  snap();
  let prev=null, cnt=0;
  const add=ev=>{ let k=CH.ev.length; while(k>0&&CH.ev[k-1].t>ev.t) k--; CH.ev.splice(k,0,ev); prev=ev; cnt++; logEv(ev,ev.learned?'ton-bp-gelernt':'ton-bp'); };
  const place=(m,x,chordKey,skipPref)=>{
    const used=x.grp.filter(y=>y.ev&&y!==x).map(y=>y.ev.s), pv=prev&&x.t-prev.t<3?prev:null, opts=fretOptions(m).filter(q=>!used.includes(q.s));
    if(!skipPref){ const sp=S.strPref||{}, ps=sp[m+'|'+(chordKey||'')]??sp[m+'|*']; const q=opts.find(o=>o.s===ps); if(q) return q; }
    let best=null,bs=1e9;
    const c=bpChordAt(x.t), cf=c&&c.type==='chord'?(c.f||(voicings(c.r,c.qi)[0]||{}).f):null;
    for(const q of opts){ let sc=q.f+(q.f>5?(q.f-5)*1.5:0);
      if(cf&&cf[q.s]===q.f) sc-=job.pick?6:3; // Ton liegt im aktuellen Griff → diese Saite
      if(job.pick){ if(q.f===0) sc-=0.5; }
      else if(pv){ if(q.s===pv.s&&Math.abs(q.f-pv.f)<=5) sc-=4; sc+=Math.abs(q.f-pv.f)*0.3; if(q.f===0&&q.s!==pv.s) sc+=2; } else if(q.f===0) sc+=0.5;
      if(sc<bs){bs=sc;best=q;} }
    return best; };
  for(const x of keep){ if(x.used) continue;
    const pr=prev&&x.t-prev.t<1.5?prev:null, prevO=pr?(pr.origM??pr.m):null;
    const c=bpChordAt(x.t), chordKey=c&&c.type!=='note'?c.key:null;
    let pf=null,bd=1e9; for(const p of job.pf){ const dd=Math.abs(p.t-x.t); if(dd<bd){bd=dd;pf=p.pf;} if(p.t>x.t) break; }
    const heard=x.slideTo??x.m;
    const les=pf?noteLesson(heard,chordKey,prevO,pf,'bp'):null;
    if(les&&les.kind==='drop'){ logEv({t:x.t,type:'note',m:heard,s:0,f:0,art:'pick'},'ton-bp-gelernt-weggelassen'); continue; }
    const base={type:'note',origM:heard,prevM:prevO,chordKey,pf,bp:true};
    if(les&&les.kind==='map'){ // gelernt: Ton, und wenn gemerkt auch Saite/Bund/Spieltechnik
      const m=les.to; let p=(les.s!=null&&OPEN_M[les.s]+les.f===m)?{s:les.s,f:les.f}:place(m,x,chordKey); if(!p) continue;
      const ev=Object.assign({t:x.t,m,s:p.s,f:p.f,key:'note|'+m,art:les.s!=null?(les.art||'pick'):'pick',learned:true},base); x.ev=ev; add(ev); continue; }
    if(x.slideTo!=null){ // Slide: Ausgangston + Zielton auf derselben Saite
      const p=place(x.m,x,chordKey,true); if(!p) continue; const f2=x.slideTo-OPEN_M[p.s];
      if(f2<0||f2>17){ x.slideTo=null; } else {
        let ls=null; for(let k=CH.ev.length-1;k>=0;k--){ const q=CH.ev[k]; if(q.type==='note'&&q.bp&&q.s===p.s&&q.t<x.t){ ls=q; break; } } const same=ls&&ls.m===x.m&&x.t-ls.t<1.2; // Ausgangston steht schon da (eben angeschlagen) → nur der Slide
        if(!same){ const e1=Object.assign({t:x.t,m:x.m,s:p.s,f:p.f,key:'note|'+x.m,art:'pick',learned:false},base,{origM:x.m}); add(e1); }
        const ev=Object.assign({t:same?x.t:x.slideT,m:x.slideTo,s:p.s,f:f2,key:'note|'+x.slideTo,art:'slide',learned:false},base); x.ev=ev; add(ev); continue; } }
    const p=place(x.m,x,chordKey); if(!p) continue;
    if(job.melody&&(ringingChordTone(x.m,p,c&&c.type==='chord'?c:null)||p.s<=1)) continue; // Strummen + Melodie: keine Basssaiten (E, A)
    const ev=Object.assign({t:x.t,m:x.m,s:p.s,f:p.f,key:'note|'+x.m,art:'pick',learned:false},base); x.ev=ev; add(ev);
  }
  CH.stripKey=''; CH.key=''; undoUI();
  return cnt;
}

async function chordMicOn(){
  const run=++CH.run; CH.mic=true; CH.view='strip'; CH.micMsg=''; setMicUI();
  let ctx=null, demo=true, stream=null;
  try{ctx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}
  if(!ctx){$('#cbanner').textContent='Audio wird von diesem Browser nicht unterstützt.';$('#cbanner').classList.add('on');CH.mic=false;setMicUI();return;}
  metPreview(false);
  const an=ctx.createAnalyser(); an.fftSize=16384; an.smoothingTimeConstant=0;
  // Tiefpass vor der Analyse: blendet die hohen Metronom-Klicks (3,2/4 kHz) aus
  const lp1=ctx.createBiquadFilter(), lp2=ctx.createBiquadFilter();
  lp1.type=lp2.type='lowpass'; lp1.frequency.value=lp2.frequency.value=1700; lp1.Q.value=0.541; lp2.Q.value=1.307;
  lp1.connect(lp2); lp2.connect(an);
  try{
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia) throw 0;
    stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});
    demo=false;
  }catch(e){}
  if(run!==CH.run){ // inzwischen gestoppt oder geschlossen
    try{if(stream) stream.getTracks().forEach(t=>t.stop());}catch(e){} try{ctx.close();}catch(e){} return;
  }
  if(!demo){
    const src=ctx.createMediaStreamSource(stream); src.connect(lp1); CH.stream=stream; CH.src=src;
    const raw=ctx.createAnalyser(); raw.fftSize=32768; raw.smoothingTimeConstant=0; src.connect(raw); CH.raw=raw; CH.RB=new Float32Array(raw.fftSize);
  }
  else{
    const mute=ctx.createGain(); mute.gain.value=0; an.connect(mute); mute.connect(ctx.destination);
    let i=0; const play=()=>{const [r,qi]=DEMO_SEQ[i%DEMO_SEQ.length]; demoStrum(ctx,lp1,r,qi,ctx.currentTime+0.05); i++;};
    play(); CH.demoTimer=setInterval(play,2400);
  }
  CH.ctx=ctx;
  try{await ctx.resume();}catch(e){}
  if(run!==CH.run) return; // chordMicOff hat bereits aufgeräumt
  CH.an=an; CH.T=new Float32Array(an.fftSize);
  if(!CH.eng||CH.eng.sr!==ctx.sampleRate){ // letzten Akkord stehen lassen, wenn möglich
    const old=CH.eng; CH.eng=makeChordEngine(ctx.sampleRate); if(old){CH.eng.cur=old.cur; CH.eng.vIdx=old.vIdx;}
  }
  CH.eng.pref=S.voi||(S.voi={}); CH.eng.onCommit=onChordCommit; CH.eng.NT.onNote=onNoteDetected; CH.eng.NT.onReplace=onNoteReplaced; CH.eng.learn=LEARN; CH.follow=true; CH.idleRef=0;
  CH.lastProc=0; CH.tBase=CH.tNow+(CH.ev.length?0.8:0); CH.tNow=CH.tBase; CH.ctxT0=ctx.currentTime;
  CH.met=null; CH.counting=false; CH.count=0;
  const mc=metCfg();
  if(mc.on){
    const beat=metBeatLen(), beats=+mc.sig, t0=ctx.currentTime+0.3, down=t0+(mc.cnt?beats*beat:0);
    const L0=clamp((ctx.outputLatency||0)+(ctx.baseLatency||0)+0.02,0.03,0.35);
    CH.met={t0,down,beat,beats,L:L0,cal:[],pend:mc.cnt?Array.from({length:beats},(_,k)=>t0+k*beat):[]};
    CH.grids.push(newGrid(CH.tBase,beat*beats,beats));
    CH.counting=true; metStart(ctx,t0);
  }
  if(!demo){ capStart(ctx,CH.src); bpStart(ctx,CH.src); }
  $('#cbanner').textContent='Vorschau mit simulierter Gitarre: In dieser Ansicht ist das Mikrofon gesperrt. Die Akkorde werden aus einem künstlichen Gitarrenklang erkannt.';
  $('#cbanner').classList.toggle('on',demo);
  let w=null; try{if('wakeLock' in navigator) w=await navigator.wakeLock.request('screen');}catch(e){}
  if(run!==CH.run){try{if(w) w.release();}catch(e){}} else CH.wake=w;
}
function chordMicOff(msg){
  CH.run++; CH.mic=false; CH.micMsg=msg||''; clearInterval(CH.demoTimer);
  metStop(); capStop(); bpStop(); CH.src=null; const g=CH.grids[CH.grids.length-1]; if(g&&g.end==null) g.end=CH.tNow;
  CH.met=null; CH.counting=false; CH.raw=null; CH.key='';
  try{if(CH.stream) CH.stream.getTracks().forEach(t=>t.stop());}catch(e){}
  try{if(CH.ctx) CH.ctx.close();}catch(e){}
  try{if(CH.wake) CH.wake.release();}catch(e){}
  CH.stream=null; CH.ctx=null; CH.an=null; CH.wake=null;
  setMicUI();
}
$('#cstrip').addEventListener('scroll',e=>{const el=e.target; if(CH.progScroll){CH.progScroll=false;return;} CH.follow=el.scrollLeft+el.clientWidth>=el.scrollWidth-40; CH.scrollT=performance.now();});
$('#cmic').addEventListener('click',()=>{CH.mic?chordMicOff():chordMicOn();});
// Zoom zurücksetzen per Doppeltipp auf eine leere Stelle (kein eigener Knopf mehr)
function zoomUI(){}
function zoomReset(){ if(inSheetView()){ CH.sz=1; S.sz=1; CH.zpKeep=false; CH.zp=null; save(); CH.stripKey=''; renderStrip(); } else { LAY.px=PX0; S.px=PX0; save(); CH.stripKey=''; } cMsg('Zoom zurückgesetzt'); }
// =================== Rückgängig ===================
const UNDO=[], REDO=[];
function stateNow(){ return {ev:CH.ev.map(e=>Object.assign({},e,{f:Array.isArray(e.f)?e.f.slice():e.f})),grids:CH.grids.map(g=>Object.assign({},g,{lines:g.lines.slice()}))}; }
function snap(){ if(CH.mic) return; UNDO.push(stateNow()); if(UNDO.length>40) UNDO.shift(); REDO.length=0; undoUI(); }
function undoUI(){ const b=$('#cundo'), r=$('#credo'); if(b) b.classList.toggle('off',!(UNDO.length&&!CH.mic)); if(r) r.classList.toggle('off',!(REDO.length&&!CH.mic)); }
function flashBtn(b){ b.classList.add('flash'); setTimeout(()=>b.classList.remove('flash'),450); }
$('#credo').addEventListener('click',()=>{ const u=REDO.pop(); if(!u) return; flashBtn($('#credo')); UNDO.push(stateNow()); closeEdit(); CH.ev=u.ev; CH.grids=u.grids; CH.sel.clear(); CH.selBars.clear(); edUI(); CH.stripKey=''; CH.key=''; undoUI(); alignUI(); });
$('#cundo').addEventListener('click',()=>{ const u=UNDO.pop(); if(!u) return; flashBtn($('#cundo')); REDO.push(stateNow()); closeEdit(); CH.ev=u.ev; CH.grids=u.grids; CH.sel.clear(); CH.selBars.clear(); edUI(); ALIGN_UNDO=null; CH.stripKey=''; CH.key=''; undoUI(); alignUI(); });

// =================== Takte und Verschieben ===================
function newGrid(t0,bar,beats){ return {t:t0,bar,beats,lines:[t0],end:null}; }
function gridExtend(g){ const end=g.end==null?CH.tNow:g.end, L=g.lines; let n=0; while(L[L.length-1]+g.bar<=end+1e-3&&n++<2000) L.push(L[L.length-1]+g.bar); }
// Nächste Zählzeit (div 1 = Viertel/Schlag, 2 = Achtel); ohne Takt: unverändert
function gridDiv(){ return {'8':2,'16':4,'12':3}[S.grid||'8']||2; }
function snapT(t,div){
  for(let gi=CH.grids.length-1;gi>=0;gi--){ const g=CH.grids[gi], L=g.lines; gridExtend(g);
    const endT=(g.end==null?CH.tNow:g.end)+g.bar; if(t<L[0]-g.bar*0.25||t>endT) continue;
    let k=0; while(k+1<L.length&&L[k+1]<=t) k++;
    if(t<L[0]) k=0;
    const next=k+1<L.length?L[k+1]:L[k]+g.bar, len=next-L[k], sub=len/(g.beats*div);
    return Math.max(0,L[k]+Math.round((t-L[k])/sub)*sub); }
  return t;
}
const DR={timer:0,active:false,ev:null,b:null,x0:0,t0:0,lines0:null,justDragged:false,sx:0,sy:0};
function pressStart(x,y,target){
  // lange auf eine Taktnummer drücken = Edit-Modus an und diesen Takt wählen (Abkürzung am Handy)
  const bn=target.closest&&target.closest('[data-barno]');
  if(bn&&PL.on) return; // beim Abspielen springt Antippen dorthin
  if(bn&&!CH.edm&&!CH.mic){ DR.sx=x; DR.sy=y; clearTimeout(DR.timer); DR.timer=setTimeout(()=>{ DR.timer=0; setEditMode(true); barToggle(+bn.dataset.barno); DR.justDragged=true; setTimeout(()=>DR.justDragged=false,400);
    try{navigator.vibrate&&S.haptic&&navigator.vibrate(12);}catch(_){} },430); return; }
  if(CH.edm) return; // im Edit-Modus wird ausgewählt, nicht gezogen
  const sheet=inSheetView();
  if(sheet&&!(target.closest&&target.closest('[data-i]'))) return;
  const h=target.closest&&(target.closest('[data-b]')||target.closest('[data-i]')); if(!h) return;
  DR.sx=x; DR.sy=y; clearTimeout(DR.timer);
  DR.timer=setTimeout(()=>{ DR.timer=0; snap(); DR.active=true; DR.x0=x; CH.follow=false;
    if(h.dataset.b){ const [gi,k]=h.dataset.b.split(',').map(Number), g=CH.grids[gi]; if(!g){DR.active=false;return;}
      DR.b={g,k}; DR.lines0=g.lines.slice(); DR.ev=null; }
    else { const e=CH.ev[+h.dataset.i]; if(!e){DR.active=false;return;} DR.ev=e; DR.t0=e.t; DR.b=null; DR.sheet=sheet; }
    try{navigator.vibrate&&S.haptic&&navigator.vibrate(12);}catch(_){}
    CH.stripKey=''; },430);
}
function pressMove(x,y){
  if(DR.active){ const dt=(x-DR.x0)/LAY.px;
    if(DR.ev&&DR.sheet){ const t=sheetTimeAt(x,y); if(t!=null){ DR.ev.t=snapT(t,DR.ev.type==='note'?gridDiv():2); DR.snapTo=null; } }
    else if(DR.ev){ const e=DR.ev; e.t=Math.max(0,DR.t0+dt); DR.snapTo=snapT(e.t,gridDiv()); }
    else if(DR.b){ const {g,k}=DR.b, L=g.lines, L0=DR.lines0; let nt=L0[k]+dt; nt=Math.max(L0[k-1]+0.25,nt); const d=nt-L0[k];
      for(let j=k;j<L.length;j++) L[j]=(L0[j]??L0[L0.length-1]+(j-L0.length+1)*g.bar)+d; }
    CH.stripKey=''; return true; }
  if(DR.timer&&(Math.abs(x-DR.sx)>8||Math.abs(y-DR.sy)>8)){clearTimeout(DR.timer);DR.timer=0;}
  return false;
}
function pressEnd(){
  clearTimeout(DR.timer); DR.timer=0; if(!DR.active) return;
  DR.active=false; DR.justDragged=true; setTimeout(()=>DR.justDragged=false,400);
  if(DR.ev){ if(!DR.sheet) DR.ev.t=snapT(DR.ev.t,gridDiv()); DR.ev.edited=true; DR.snapTo=null; CH.ev.sort((a,b)=>a.t-b.t); }
  DR.sheet=false;
  DR.ev=null; DR.b=null; DR.lines0=null; CH.stripKey='';
}
{ const st=$('#cstrip');
  if(S.px) LAY.px=S.px;
  // Zoomen mit zwei Fingern (in jede Richtung gespreizt), die Stelle zwischen den Fingern bleibt stehen
  let Z=null;
  st.addEventListener('touchstart',e=>{ if(e.touches.length===2&&!inSheetView()){ clearTimeout(DR.timer); DR.timer=0; const a=e.touches[0],b=e.touches[1], r=st.getBoundingClientRect();
    const mid=(a.clientX+b.clientX)/2-r.left; Z={d0:Math.max(30,Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)),px0:LAY.px,tm:(st.scrollLeft+mid-40)/LAY.px,mid}; } },{passive:true});
  st.addEventListener('touchmove',e=>{ if(Z&&e.touches.length===2){ e.preventDefault(); const a=e.touches[0],b=e.touches[1];
    LAY.px=clamp(Z.px0*Math.max(30,Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY))/Z.d0,30,320); CH.follow=false; CH.stripKey=''; renderStrip(); st.scrollLeft=Z.tm*LAY.px+40-Z.mid; } },{passive:false});
  st.addEventListener('touchend',e=>{ if(Z&&e.touches.length<2){ Z=null; S.px=Math.round(LAY.px); save(); zoomUI(); } });
  // Blatt: zwei Finger = stufenlos zoomen. Gedämpft (Exponent 0,6), an den Grenzen hört er einfach auf, beim Loslassen bleibt alles stehen.
  // Das Blatt wird dabei laufend neu gezeichnet (höchstens einmal pro Bild), die Stelle zwischen den Fingern bleibt stehen.
  let ZS=null, zRaf=0; const inSheet=inSheetView;
  st.addEventListener('touchstart',e=>{ if(e.touches.length===2&&inSheet()){ clearTimeout(DR.timer); DR.timer=0; clearTimeout(TAP.timer); TAP.timer=0; const a=e.touches[0],b=e.touches[1];
    ZS={d0:Math.max(30,Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)),z0:sheetZ(),z:sheetZ(),cy:(a.clientY+b.clientY)/2,tg:[a.target,b.target]}; CH.pinching=true; CH.zpKeep=false; } },{passive:true});
  // Bewegung/Ende am Fenster abhören: das berührte Element wird beim Neuzeichnen ersetzt und meldet dann nichts mehr
  window.addEventListener('touchmove',e=>{ if(ZS&&e.touches.length===2){ e.preventDefault(); const a=e.touches[0],b=e.touches[1];
    ZS.z=clamp(ZS.z0*Math.pow(Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)/ZS.d0,0.6),SZ_MIN,SZ_MAX); ZS.cy=(a.clientY+b.clientY)/2;
    if(!zRaf) zRaf=requestAnimationFrame(()=>{ zRaf=0; if(ZS) setSheetZ(ZS.z,ZS.cy,ZS.tg); }); } },{passive:false});
  const zsEnd=()=>{ if(!ZS) return; setSheetZ(ZS.z,ZS.cy); CH.pinching=false; CH.zpKeep=true; ZS=null; S.sz=sheetZ(); save(); TAP.noTapUntil=performance.now()+400; setTimeout(()=>{ const h=$('#touchKeep'); if(h) h.innerHTML=''; },0); };
  window.addEventListener('touchend',e=>{ if(ZS&&e.touches.length<2) zsEnd(); });
  window.addEventListener('touchcancel',zsEnd);
  // Touch-Ereignisse hängen am berührten Element; der Tab wird beim Ziehen neu gezeichnet, deshalb die Zuhörer direkt dort anbringen
  const onMove=e=>{ const t=e.touches[0]; if(t&&pressMove(t.clientX,t.clientY)) e.preventDefault(); };
  const onEnd=e=>{ const el=e.currentTarget; el.removeEventListener('touchmove',onMove); el.removeEventListener('touchend',onEnd); el.removeEventListener('touchcancel',onEnd); pressEnd(); };
  st.addEventListener('touchstart',e=>{ if(e.touches.length!==1) return; const el=e.target;
    el.addEventListener('touchmove',onMove,{passive:false}); el.addEventListener('touchend',onEnd); el.addEventListener('touchcancel',onEnd);
    pressStart(e.touches[0].clientX,e.touches[0].clientY,el); },{passive:true});
  st.addEventListener('mousedown',e=>pressStart(e.clientX,e.clientY,e.target));
  window.addEventListener('mousemove',e=>{ if(DR.active||DR.timer){ if(pressMove(e.clientX,e.clientY)) e.preventDefault(); } });
  window.addEventListener('mouseup',pressEnd);
  st.addEventListener('contextmenu',e=>e.preventDefault());
}
// Ausrichten: Akkorde auf Viertel, Lauf-Töne auf Achtel (mit Rückgängig)
let ALIGN_UNDO=null, alignT=0;
function alignUI(){ const b=$('#calign'); if(!b) return; const can=CH.grids.length>0&&CH.ev.length>0; b.classList.toggle('soon',!can); }
$('#ccap').addEventListener('click',()=>{ if(S.capture&&CAP.n){ capSave(); cMsg('Test-Mitschnitt gespeichert (Klang + Tab)'); NF.save(true); return; }
  // Speichern sichert das Blatt (Akkorde, Töne, Klang) auch ohne Aufnahme: Änderungen an Akkorden zählen (Manu 14.11.)
  if(!CH.ev.length&&!PL.src.length) return cMsg('Noch nichts zu sichern · erst aufnehmen oder Akkorde schreiben');
  NF.save(true).then(()=>cMsg('Blatt gesichert · kommt beim nächsten Öffnen automatisch zurück')); });
// Spielweise für die neue Ton-Erkennung: Strummen (Anschläge zusammenfassen) oder Zupfen (alle Töne behalten)
const PLAYN={strum:'Strummen',melody:'Strummen + Melodie',pick:'Zupfen'};
const PLAYS={strum:'Strum',melody:'Strum+',pick:'Notes'};
function playUI(){ const b=$('#cplay'); if(!b) return; const m=playMode(); b.textContent=PLAYS[m]; b.setAttribute('aria-label','Spielweise: '+PLAYN[m]+' · antippen zum Wählen');
  document.querySelectorAll('#cplayPop .opt').forEach(o=>o.classList.toggle('on',o.dataset.v===m)); }
$('#cplay').addEventListener('click',()=>toggleCPop('#cplayPop','#cplay'));
$('#cplayPop').addEventListener('click',e=>{ const o=e.target.closest('.opt'); if(!o) return; S.play=o.dataset.v; save(); playUI(); closeCPops(); cMsg('Spielweise gilt ab der nächsten Aufnahme'); });
playUI();
// Ausrichten: mit Auswahl nur das Gewählte, sonst das ganze Stück
$('#calign').addEventListener('click',()=>{ if(!(CH.grids.length&&CH.ev.length)){ cMsg('Ausrichten geht erst, wenn ein Takt erkannt ist'); return; }
  const L=CH.sel.size?[...CH.sel]:CH.ev; snap(); L.forEach(e=>e.t=snapT(e.t,e.type==='note'?gridDiv():1));
  CH.ev.sort((a,b)=>a.t-b.t); if(CH.sel.size) resolveSel(); CH.stripKey=''; alignUI(); edUI(); cMsg(CH.sel.size?'Gewähltes an Zählzeiten ausgerichtet':'Ganzes Stück an Zählzeiten ausgerichtet'); });

// =================== Akkord-Ansicht: Felder, Menü, Auswahlfenster, Akkordliste, Edit-Modus ===================
function cMsg(t){ bpBanner(t,3500); }
function closeCPops(){ const d=$('#cpDim'); if(d) d.classList.remove('on'); document.querySelectorAll('#chords .cpop.on').forEach(p=>p.classList.remove('on')); document.querySelectorAll('#chords .fld.open,#cplay.open').forEach(b=>b.classList.remove('open')); }
// Pop-up wie im Bearbeiten-Feld: waagrecht mittig und über das Feld gelegt – oben liegende Felder: Oberkante auf das Feld, unten liegende: Unterkante auf Höhe des Felds
function toggleCPop(pop,btn){ const on=!$(pop).classList.contains('on'); closeCPops(); closeCMenu(); if(!on) return; const P=$(pop), B=$(btn);
  P.classList.add('on'); B.classList.add('open'); $('#cpDim').classList.add('on');
  const r=B.getBoundingClientRect(), h=P.offsetHeight, top=r.top+r.height/2<innerHeight/2?r.top:r.bottom-h; P.style.top=clamp(top,8,innerHeight-h-8)+'px'; }
function closeCMenu(){ $('#cmenu').classList.remove('on'); $('#cmenuB').setAttribute('aria-expanded','false'); }
function setEditMode(on){ on=!!on; if(!on&&CH.edm){ resolveSel(); CH.sel.clear(); CH.selBars.clear(); ED.tgt=null; ED.prop=null; $('#cedbar').classList.remove('prop'); }
  CH.edm=on; $('#chords').classList.toggle('edm',on); $('#cedit').setAttribute('aria-pressed',on); if(on){ closeCPops(); closeEdit(); } CH.stripKey=''; alignUI(); edUI(); }
// =================== Edit-Modus: Auswählen, Kopieren/Einfügen, Verschieben, Schieben, Löschen ===================
// Musikalische Position: Zählzeiten seit dem ersten Takt (so bleiben Abstände in Schlägen erhalten, auch wenn Takte leicht unterschiedlich lang sind)
function posOf(t){ const B=sheetBars(); if(!B.length) return t*2; const nb=B[0].g.beats;
  let k=B.findIndex(bb=>t<bb.b-1e-6); if(k<0) k=B.length-1; const bb=B[k], len=bb.b-bb.a; if(t<B[0].a) return (t-B[0].a)/len*nb; return k*nb+(t-bb.a)/len*nb; }
function timeOf(p){ const B=sheetBars(); if(!B.length) return Math.max(0,p/2); const nb=B[0].g.beats; let k=Math.floor(p/nb);
  if(k<0){ const len=B[0].b-B[0].a; return Math.max(0,B[0].a+p/nb*len); }
  if(k>=B.length){ const L=B[B.length-1], len=L.b-L.a; return L.b+(p-B.length*nb)/nb*len; } const bb=B[k]; return bb.a+(p-k*nb)/nb*(bb.b-bb.a); }
const CLIP={items:null,bars:false};
function selList(){ return CH.ev.filter(e=>CH.sel.has(e)); }
// Doppelungen auflösen: Gewähltes verdrängt, was auf derselben Saite (Töne) bzw. an derselben Stelle (Akkorde) liegt
function resolveSel(){ if(!CH.sel.size) return 0; const S0=selList(); let n=0;
  CH.ev=CH.ev.filter(o=>{ if(CH.sel.has(o)) return true; const hit=S0.some(e=>Math.abs(e.t-o.t)<0.03&&(e.type==='note'?o.type==='note'&&o.s===e.s:o.type!=='note'));
    if(hit) n++; return !hit; }); return n; }
function edUI(){ const L=selList(); let t=0,a=0; L.forEach(e=>e.type==='note'?t++:a++); const p=[]; if(t) p.push(t+(t>1?' Töne':' Ton')); if(a) p.push(a+(a>1?' Akkorde':' Akkord'));
  if(CH.selBars.size) p.push(CH.selBars.size+(CH.selBars.size>1?' Takte':' Takt'));
  $('#cedInfo').textContent=p.length?p.join(' · ')+' gewählt':'Edit an · antippen zum Auswählen';
  { const nB=sheetBars().length; $('#cedAll').textContent=nB&&CH.selBars.size===nB?'Keine':'Alle'; $('#cedAll').setAttribute('aria-label',nB&&CH.selBars.size===nB?'Alles abwählen':'Alles auswählen'); }
  ['#cedCopy','#cedMove','#cedDel','#cedL','#cedR'].forEach(id=>$(id).classList.toggle('dim',!L.length)); $('#cedPaste').classList.toggle('dim',!CLIP.items);
  $('#cedbar').classList.toggle('tgt',!!ED.tgt); $('#cedbar').classList.toggle('tgtsim',ED.tgt==='paste'&&!!CLIP.bars); }
function barToggle(k){ const bb=sheetBars()[k]; if(!bb) return; const key=bb.a.toFixed(3), on=!CH.selBars.has(key);
  if(on) CH.selBars.add(key); else CH.selBars.delete(key); bb.ev.forEach(e=>on?CH.sel.add(e):CH.sel.delete(e)); if(on) chkSeen(bb.ev); CH.stripKey=''; edUI(); }
// Zielstelle aus dem Antippen: die Stelle im Takt bleibt erhalten (was auf „2+“ begann, landet auf einem „+“); ganze Takte beginnen auf der Eins
function targetPos(t,anchor,bars){ const B=sheetBars(); if(!B.length) return posOf(snapT(t,gridDiv())); const nb=B[0].g.beats, p=posOf(t);
  if(bars){ let k=Math.floor(p/nb), fr=p-k*nb; if(fr>nb-0.5) k++; return Math.max(0,k)*nb; }
  const sub=anchor-Math.floor(anchor+1e-6); return Math.max(0,Math.round(p-sub)+sub); }
function startTarget(kind){ if(kind==='move'&&!CH.sel.size) return cMsg('Erst etwas antippen'); if(kind==='paste'&&!CLIP.items) return cMsg('Erst etwas kopieren');
  ED.tgt=kind; $('#cedTgtTxt').textContent=(kind==='move'?'Verschieben':'Einfügen')+': Ziel im Blatt antippen'; edUI(); }
function selIsBars(){ const L=selList(); return CH.selBars.size>0&&L.length>0&&L.every(e=>CH.selBars.has(sheetBarKey(e.t))); }
function selAnchor(){ const L=selList(); return selIsBars()?posOf(barStartOf(L[0].t)):posOf(L[0].t); }
function placeAt(t){ const kind=ED.tgt; ED.tgt=null; const bars=kind==='move'?selIsBars():CLIP.bars, anc=kind==='move'?selAnchor():CLIP.anchor;
  const r=placePos(kind,targetPos(t,anc,bars)); if(r) cMsg(r+' · Rückgängig oben'); edUI(); }
// Verschieben ('move', die Auswahl) oder Einfügen ('paste', die Zwischenablage) an die musikalische Position tp; gibt die Meldung zurück
function placePos(kind,tp){ let items, bars;
  if(kind==='move'){ const L=selList(); if(!L.length) return null; bars=selIsBars(); const a0=selAnchor(); items=L.map(e=>({e,off:posOf(e.t)-a0}));
    snap(); items.forEach(it=>{ it.e.t=Math.max(0,timeOf(tp+it.off)); it.e.edited=true; }); CH.selBars.clear(); }
  else { if(!CLIP.items) return null; bars=CLIP.bars; items=CLIP.items; snap(); const add=CLIP.items.map(it=>{ const e=JSON.parse(JSON.stringify(it.e)); e.t=Math.max(0,timeOf(tp+it.off)); e.edited=true; e.added=true; delete e.learned; delete e.lid; return e; });
    CH.sel.clear(); CH.selBars.clear(); add.forEach(e=>{ CH.ev.push(e); CH.sel.add(e); }); }
  CH.ev.sort((a,b)=>a.t-b.t);
  // am Ziel: Gewähltes verdrängt Gleiches auf derselben Saite/Stelle; ganze Takte ersetzen die Zieltakte komplett; von Hand korrigierte Stellen nur nach Rückfrage
  let span=null; if(bars){ const nb=(sheetBars()[0]||{g:{beats:4}}).g.beats, nBar=Math.max(1,Math.floor(Math.max(...items.map(i=>i.off))/nb)+1); span=[timeOf(tp)-0.02,timeOf(tp+nBar*nb)-0.02]; }
  const S0=selList(), victim=o=>!CH.sel.has(o)&&((span&&o.t>=span[0]&&o.t<span[1])||S0.some(e=>Math.abs(e.t-o.t)<0.03&&(e.type==='note'?o.type==='note'&&o.s===e.s:o.type!=='note')));
  const hand=CH.ev.filter(o=>victim(o)&&o.edited&&!o.added);
  if(hand.length&&!confirm(hand.length+(hand.length>1?' von Hand korrigierte Stellen':' von Hand korrigierte Stelle')+' am Ziel überschreiben?')){ const u=UNDO.pop(); if(u){ CH.ev=u.ev; CH.grids=u.grids; } CH.sel.clear(); CH.stripKey=''; edUI(); undoUI(); cMsg('Nichts geändert'); return null; }
  CH.ev=CH.ev.filter(o=>!victim(o)); const nbL=(sheetBars()[0]||{g:{beats:4}}).g.beats, bI=Math.floor(tp/nbL+1e-6), bt=tp-bI*nbL, sub=bt-Math.floor(bt+1e-6), lab='Takt '+(bI+1)+' · '+(Math.floor(bt+1e-6)+1)+(Math.abs(sub-0.5)<0.05?'+':Math.abs(sub-0.25)<0.05?'e':Math.abs(sub-0.75)<0.05?'a':'');
  CH.stripKey=''; CH.key=''; undoUI(); return (kind==='move'?'Verschoben':'Eingefügt')+(lab?' nach '+lab:''); }
function sheetBarKey(t){ const bb=sheetBars().find(b=>t>=b.a-1e-3&&t<b.b-1e-3); return bb?bb.a.toFixed(3):''; }
function barStartOf(t){ const bb=sheetBars().find(b=>t>=b.a-1e-3&&t<b.b-1e-3); return bb?bb.a:t; }
$('#cedCopy').addEventListener('click',()=>{ const L=selList(); if(!L.length) return cMsg('Erst etwas antippen');
  const bars=CH.selBars.size>0&&L.every(e=>CH.selBars.has(sheetBarKey(e.t))), a0=bars?posOf(barStartOf(L[0].t)):posOf(L[0].t);
  CLIP.items=L.map(e=>({e:JSON.parse(JSON.stringify(e)),off:posOf(e.t)-a0})); CLIP.bars=bars; CLIP.anchor=a0; edUI();
  cMsg((L.length>1?L.length+' Elemente':'1 Element')+' kopiert · jetzt „Einfügen“'); });
$('#cedPaste').addEventListener('click',()=>startTarget('paste'));
$('#cedMove').addEventListener('click',()=>startTarget('move'));
$('#cedCancel').addEventListener('click',()=>{ ED.tgt=null; edUI(); cMsg('Abgebrochen'); });
$('#cedDel').addEventListener('click',()=>{ const L=selList(); if(!L.length) return cMsg('Erst etwas antippen'); snap();
  // einzeln gewählte Töne lehren „weglassen“ (Erkennungsfehler); ganze Takte nicht
  L.forEach(e=>{ if(e.type==='note'&&!CH.selBars.has(sheetBarKey(e.t))&&!e.added) learnNote(e,'drop'); });
  CH.ev=CH.ev.filter(e=>!CH.sel.has(e)); const n=L.length; CH.sel.clear(); CH.selBars.clear(); CH.stripKey=''; CH.key=''; edUI(); undoUI(); cMsg(n+(n>1?' Elemente':' Element')+' gelöscht · Rückgängig oben'); });
// Schiebepfeile: Auswahl um einen Rasterschritt, auch über anderes hinweg (verdrängt wird erst beim Abwählen oder „Fertig“)
function nudgeSel(d){ const L=selList(); if(!L.length) return cMsg('Erst etwas antippen'); const st=1/gridDiv(); snap();
  L.forEach(e=>{ e.t=Math.max(0,timeOf(posOf(e.t)+d*st)); e.edited=true; }); CH.selBars.clear(); CH.ev.sort((a,b)=>a.t-b.t); CH.stripKey=''; edUI();
  const lab=countLabel(L[0].t); if(lab) cMsg(lab); }
$('#cedL').addEventListener('click',()=>nudgeSel(-1)); $('#cedR').addEventListener('click',()=>nudgeSel(1));
// Antippen im Edit-Modus: auswählen statt bearbeiten; im Ziel-Modus: Ziel setzen
function editTap(e){ if(ED.tgt){ const t=sheetTimeAt(e.clientX,e.clientY); if(t!=null) placeAt(t); return; }
  const bn=e.target.closest('[data-barno]'); if(bn){ if(ED.prop){ const nb=(sheetBars()[0]||{g:{beats:4}}).g.beats, k=+bn.dataset.barno; const pr=ED.prop.find(x=>k*nb<x.pos+x.len&&(k+1)*nb>x.pos); if(pr){ pr.on=!pr.on; CH.stripKey=''; propUI(); } return; } barToggle(+bn.dataset.barno); return; }
  let h=e.target.closest('[data-i]');
  if(!h){ const svg=e.target.ownerSVGElement||e.target.closest('svg'); if(svg){ const r=svg.getBoundingClientRect(), k=svg.viewBox.baseVal.width/r.width, px=(e.clientX-r.left)*k, py=(e.clientY-r.top)*k; let bd=1e9;
    svg.querySelectorAll('[data-i]').forEach(q=>{ const b=q.getBBox(), d=Math.hypot(Math.max(0,Math.abs(px-(b.x+b.width/2))-b.width/2),Math.max(0,Math.abs(py-(b.y+b.height/2))-b.height/2)); if(d<bd){bd=d;h=q;} }); if(bd>LAY.str*sheetZ()*1.2) h=null; } }
  if(!h) return; const ev=CH.ev[+h.dataset.i]; if(!ev) return;
  if(CH.sel.has(ev)){ resolveSel(); CH.sel.delete(ev); } else { CH.sel.add(ev); chkSeen([ev]); } CH.stripKey=''; edUI(); }
function gridBpm(){ const g=CH.grids[0]; return g?Math.round(g.bpm||60*g.beats/g.bar):null; }
// Akkorde, die im Stück wirklich vorkommen (Reihenfolge des ersten Auftretens; je Name der meistgespielte Griff).
// Hat Manu an einer Stelle selbst einen anderen Griff gewählt (voiSet), steht dieser Griff zusätzlich als eigener Eintrag da.
function pieceChords(){ const by=new Map(), own=[];
  CH.ev.forEach(e=>{ if(e.type==='note') return; const f=e.f||(evVoicings(e)[0]||{}).f; if(!f) return; const n=evName(e);
    if(!by.has(n)) by.set(n,{k:n,e,name:n,cnt:{}}); const c=by.get(n), fk=f.join(','); c.cnt[fk]=(c.cnt[fk]||0)+1; if(e.voiSet) own.push({n,e,fk}); });
  const out=[]; const bfk=fk=>fk.split(',').map(Number);
  by.forEach(c=>{ const fk=Object.keys(c.cnt).sort((a,b)=>c.cnt[b]-c.cnt[a])[0]; out.push(Object.assign(c,{fk,f:bfk(fk),b:(evVoicings(c.e).find(v=>v.f.join()===fk)||{b:0}).b}));
    own.filter(o=>o.n===c.name&&o.fk!==fk).forEach(o=>{ const k=o.n+'|'+o.fk; if(!out.some(x=>x.k===k)) out.push({k,e:o.e,name:o.n,fk:o.fk,f:bfk(o.fk),b:(evVoicings(o.e).find(v=>v.f.join()===o.fk)||{b:0}).b}); }); });
  return out; }
function chordsUI(){
  const bpm=gridBpm(), g=CH.grids[0];
  $('#ctempo').textContent=bpm?bpm+' BPM':'– BPM';
  $('#ctempoInfo').textContent=g?`${g.beats}/4 · ≈ ${bpm} BPM${g.auto?' · automatisch erkannt':''}`:'Noch kein Takt erkannt';
  $('#chalf').classList.toggle('soon',!g); $('#cdouble').classList.toggle('soon',!g);
  $('#ckapo').classList.add('soon');
  const L=CH.mic?[]:pieceChords(), key=L.map(c=>c.k+':'+c.fk).join(';')+'|'+S.notation+'|'+(CH.bigK||'');
  $('#clist').classList.toggle('on',L.length>0);
  if(key!==CH.listKey){ CH.listKey=key;
    $('#cchips').innerHTML=L.map((c,i)=>`<button class="cchip${CH.bigK===c.k?' on':''}" data-k="${c.k.replace(/"/g,'&quot;')}" aria-label="${c.name} groß anzeigen">${diagramSVG({f:c.f,b:c.b})}<span>${c.name}</span></button>`).join('');
    const c=L.find(x=>x.k===CH.bigK); if(!c) CH.bigK=null;
    $('#cbig').classList.toggle('on',!!c);
    $('#cbig').innerHTML=c?`<div class="gb">${diagramSVG({f:c.f,b:c.b})}</div><div><b id="cbigName" role="button" aria-label="${c.name} fürs ganze Stück ändern">${c.name}</b><small class="cbighint">Name antippen = im ganzen Stück ändern</small><small>Griff ${c.f.map(x=>x<0?'x':x).join(' ')}</small><button id="cbigX">Schließen</button></div>`:''; }
  alignUI();
}
function statusUI(){
  let t='';
  if(CH.mic) t=CH.counting?(CH.count?'Einzählen · '+CH.count:'Einzählen …'):'Aufnahme läuft';
  else if(CH.edm) t=ED.tgt?'Ziel im Blatt antippen':'Edit an';
  else if(CH.micMsg) t=CH.micMsg;
  else if(!CH.ev.length) t='Bereit';
  const el=$('#cstat'); if(el.textContent!==t) el.textContent=t;
  if(CH.mic){ const d=Math.max(0,CH.tNow-CH.tBase), m=Math.floor(d/60), sc=Math.floor(d%60), tx=m+':'+String(sc).padStart(2,'0'); if($('#ctime').textContent!==tx) $('#ctime').textContent=tx; }
}
$('#cchips').addEventListener('click',e=>{ const b=e.target.closest('.cchip'); if(!b) return; CH.bigK=CH.bigK===b.dataset.k?null:b.dataset.k; CH.listKey=''; chordsUI(); });
$('#cbig').addEventListener('click',e=>{ if(e.target.id==='cbigX'){ CH.bigK=null; CH.listKey=''; chordsUI(); } });
$('#ctempo').addEventListener('click',()=>{ metUI(); toggleCPop('#ctempoPop','#ctempo'); });
$('#cpDim').addEventListener('click',e=>{ e.stopPropagation(); closeCPops(); });
$('#cmOn').addEventListener('click',()=>{ metSet('on',!metCfg().on); cMsg(metCfg().on?'Metronom läuft bei der nächsten Aufnahme mit ('+metCfg().bpm+' BPM)':'Kein Metronom · Tempo wird erkannt'); });
$('#cmMinus').addEventListener('click',()=>metBpm(metCfg().bpm-1)); $('#cmPlus').addEventListener('click',()=>metBpm(metCfg().bpm+1));
$('#cedit').addEventListener('click',()=>setEditMode(!CH.edm));
$('#cedDone').addEventListener('click',()=>setEditMode(false));
// Platzhalter: Knopf steht schon da, Funktion folgt
$('#chords').addEventListener('click',e=>{ const b=e.target.closest('[data-soon]'); if(b){ cMsg(b.dataset.soon+' folgt'); return; }
  if(e.target.closest('#ckapo')){ cMsg('Kapo folgt'); return; }
  if(!e.target.closest('.cpop')&&!e.target.closest('.fld')&&!e.target.closest('#cplay')) closeCPops();
  if(!e.target.closest('#cmenu')&&!e.target.closest('#cmenuB')) closeCMenu(); });
$('#cmenuB').addEventListener('click',()=>{ const on=!$('#cmenu').classList.contains('on'); closeCPops(); $('#cmenu').classList.toggle('on',on); $('#cmenuB').setAttribute('aria-expanded',on); cmenuUI(); });
function cmenuUI(){ $('#cmTestV').textContent=S.capture?'an':'aus'; }
$('#cmenu').addEventListener('click',e=>{ if(e.target.closest('button')) setTimeout(closeCMenu,0); });
$('#cmSet').addEventListener('click',()=>openSheet());
function openHelp(){ txApply($('#hsheet')); $('#hsheet').classList.add('on'); }
$('#cmHelp').addEventListener('click',openHelp);
$('#cmVoice').addEventListener('click',openHelp);
$('#cmLoad').addEventListener('click',()=>$('#capFile').click());
// Edit-Leiste: alles auswählen bzw. (wenn schon alles gewählt) alles abwählen
$('#cedAll').addEventListener('click',()=>{ const B=sheetBars(); if(B.length&&CH.selBars.size===B.length){ CH.sel.clear(); CH.selBars.clear(); CH.stripKey=''; edUI(); return; } markBars(B.map((_,i)=>i)); });
// „Bitte drüberschauen“-Markierungen (Bernstein): alle auf einmal weg
// Per Finger angetippt/ausgewählt = angeschaut (die Sprache zählt nicht: man hat die Stelle dann noch nicht gesehen)
function chkSeen(L){ let n=0; L.forEach(e=>{ if(e.chk){ delete e.chk; delete e.chkWhy; n++; } }); if(n) chkUI(); return n; }
function chkUI(){ const n=CH.ev.filter(e=>e.chk).length, b=$('#cmChk'); if(b){ b.hidden=!n; $('#cmChkN').textContent=n?String(n):''; } }
$('#cmChk').addEventListener('click',()=>{ const L=CH.ev.filter(e=>e.chk); if(!L.length) return; snap(); L.forEach(e=>{ delete e.chk; delete e.chkWhy; }); chkUI(); CH.stripKey=''; renderStrip(); cMsg(L.length+(L.length>1?' Markierungen':' Markierung')+' entfernt · Rückgängig oben'); });
$('#capFile').addEventListener('change',e=>{ const f=e.target.files&&e.target.files[0]; if(f) capLoad(f); e.target.value=''; });
$('#cmTest').addEventListener('click',()=>{ S.capture=!S.capture; save(); cmenuUI(); capUI(); cMsg(S.capture?'Test-Mitschnitt an · gilt ab der nächsten Aufnahme':'Test-Mitschnitt aus'); });
$('#cmVer').addEventListener('click',async()=>{ await checkVersion(true); if(NEWVER) location.replace(location.pathname+'?v='+Date.now()); else cMsg('Das ist die neueste Version'); });
$('#hclose').addEventListener('click',()=>$('#hsheet').classList.remove('on'));
// Vollbild: blendet Browserleiste und Tabs aus (der Browser beendet es bei Zurück-Geste oder App-Wechsel)
function fullUI(){ const on=!!(document.fullscreenElement||document.webkitFullscreenElement); $('#cfull').setAttribute('aria-pressed',on); $('#cfull').setAttribute('aria-label',on?'Vollbild beenden':'Vollbild');
  $('#cfull').innerHTML=on?'<svg viewBox="0 0 24 24"><path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/></svg>':'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/></svg>'; }
$('#cfull').addEventListener('click',async()=>{ const d=document, el=d.documentElement;
  try{ if(d.fullscreenElement||d.webkitFullscreenElement) await (d.exitFullscreen||d.webkitExitFullscreen).call(d); else await (el.requestFullscreen||el.webkitRequestFullscreen).call(el,{navigationUI:'hide'}); }
  catch(e){ cMsg('Vollbild geht in diesem Browser nicht'); } fullUI(); });
document.addEventListener('fullscreenchange',fullUI); document.addEventListener('webkitfullscreenchange',fullUI);
$('#hsheet').addEventListener('click',e=>{ if(e.target.id==='hsheet') $('#hsheet').classList.remove('on'); });

