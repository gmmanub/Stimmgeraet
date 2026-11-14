// =================== Speichern: Blatt-Datei, Laden, frühere Stände ===================
// Der Browserspeicher (NF, IndexedDB) ist die Arbeitsablage. Speichern lädt zusätzlich die kleine Blatt-Datei in die Downloads
// (Browser überschreibt nie → Datum und Uhrzeit im Namen). Der Klang steckt nicht in der Datei; er liegt einmal im Browserspeicher.
const SV={FORMAT:1,MAX:5,saved:null,
  jsonStr(o){ return JSON.stringify(o,(k,v)=>ArrayBuffer.isView(v)?Array.from(v):v); },
  async staende(){ let l=null; try{ l=await NF.get('staende'); }catch(e){} return Array.isArray(l)?l:[]; },
  // Stand merken: nur wenn sich seit dem letzten gemerkten Stand etwas geändert hat; die ältesten fallen weg
  async merke(rec,sig){ const l=await SV.staende(); if(l.length&&l[l.length-1].sig===sig) return l; l.push({sig,rec}); while(l.length>SV.MAX+1) l.shift(); await NF.put('staende',l); return l; },
  name(){ const n=((CH.song&&CH.song.name)||'Session').replace(/[^\wäöüÄÖÜß-]+/g,'_'); const d=new Date(), p=x=>String(x).padStart(2,'0');
    return n+'_'+d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+'_'+p(d.getHours())+p(d.getMinutes()); },
  async save(){ if(CH.mic) return cMsg('Erst die Aufnahme stoppen');
    if(!CH.ev.length&&!PL.src.length) return cMsg('Noch nichts zu sichern · erst aufnehmen oder Akkorde schreiben');
    const sig=NF.blattSig(), rec=NF.rec(); await NF.save(true); const l=await SV.merke(rec,sig);
    const file={format:SV.FORMAT,app:'Gitarren-App',version:APP_VERSION,when:rec.when,blatt:rec,staende:l.slice(0,-1).map(x=>x.rec)};
    const blob=new Blob([SV.jsonStr(file)],{type:'application/json'}), n=SV.name()+'.json', a=document.createElement('a');
    a.href=URL.createObjectURL(blob); a.download=n; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),4000);
    SV.saved=sig; SV.when=Date.now(); SV.ui(); cMsg('Gespeichert · '+n+' in Downloads'); },
  async load(f){ if(CH.mic) return cMsg('Erst die Aufnahme stoppen'); let o=null; try{ o=JSON.parse(await f.text()); }catch(e){}
    if(!o||o.app!=='Gitarren-App'||!o.blatt||!o.blatt.ev) return cMsg('Das ist keine Session-Datei dieser App');
    if((o.format||0)>SV.FORMAT) return cMsg('Die Datei ist neuer als die App · erst „Neue Version laden“');
    if(CH.ev.length&&!confirm('Aktuelles Blatt durch die Datei ersetzen?')) return;
    NF.offer=o.blatt; await NF.restore(); await SV.merke(o.blatt,NF.blattSig());
    if(Array.isArray(o.staende)&&o.staende.length){ const l=await SV.staende(); const have=new Set(l.map(x=>x.rec.when)); o.staende.forEach(r=>{ if(!have.has(r.when)) l.unshift({sig:'',rec:r}); }); while(l.length>SV.MAX+1) l.shift(); await NF.put('staende',l); }
    cMsg('Session geladen · der Klang ist der zuletzt gesicherte auf diesem Handy'); },
  fmt(w){ const d=new Date(w); return d.toLocaleDateString('de-DE',{day:'numeric',month:'numeric'})+' '+d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}); },
  async list(){ const l=await SV.staende(), ul=$('#slist'); ul.innerHTML='';
    if(!l.length){ ul.innerHTML='<li style="color:var(--muted);font-size:14px">Noch keine Stände · sie entstehen beim Speichern.</li>'; }
    l.slice().reverse().forEach((x,i)=>{ const r=x.rec, nT=r.ev.filter(e=>e.type==='note').length, li=document.createElement('li'), b=document.createElement('button');
      b.textContent=SV.fmt(r.when)+' · '+(r.ev.length-nT)+' Akkorde, '+nT+' Töne'+(i===0?' · letzter':''); li.appendChild(b); ul.appendChild(li);
      b.onclick=async()=>{ if(CH.mic) return cMsg('Erst die Aufnahme stoppen'); if(CH.ev.length&&!confirm('Aktuelles Blatt durch diesen Stand ersetzen? Der aktuelle Stand wird vorher gemerkt.')) return;
        if(CH.ev.length) await SV.merke(NF.rec(),NF.blattSig()); NF.offer=r; await NF.restore(); $('#ssheet').classList.remove('on'); cMsg('Stand vom '+SV.fmt(r.when)+' geladen · Rückgängig gibt es dafür nicht, der vorherige steht in der Liste'); }; });
    $('#ssheet').classList.add('on'); },
  ui(){ const b=$('#ccap'); if(!b) return; const d=!!(CH.ev.length||PL.src.length)&&NF.blattSig()!==SV.saved; b.classList.toggle('dirty',d); },
  async menuUI(){ const n=(await SV.staende()).length; $('#cmStaendeN').textContent=n?' ('+n+')':''; }
};
$('#ccap').addEventListener('click',()=>SV.save());
$('#cmSLoad').addEventListener('click',()=>$('#sFile').click());
$('#sFile').addEventListener('change',e=>{ const f=e.target.files&&e.target.files[0]; if(f) SV.load(f); e.target.value=''; });
$('#cmStaende').addEventListener('click',()=>SV.list());
$('#ssClose').addEventListener('click',()=>$('#ssheet').classList.remove('on'));
$('#ssheet').addEventListener('click',e=>{ if(e.target.id==='ssheet') $('#ssheet').classList.remove('on'); });
$('#cmCapSave').addEventListener('click',()=>{ if(S.capture&&CAP.n){ capSave(); cMsg('Test-Mitschnitt gespeichert (Klang + Tab)'); } });
setInterval(()=>SV.ui(),1500);
// Dauerhaften Speicher beim Browser anfragen, damit er die Sicherung bei Platzmangel nicht von selbst löscht
try{ if(navigator.storage&&navigator.storage.persist) navigator.storage.persist(); }catch(e){}
