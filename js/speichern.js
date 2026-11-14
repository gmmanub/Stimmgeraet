// =================== Speichern: Blatt-Datei, Laden, frühere Stände, Stücke mit Namen ===================
// Der Browserspeicher (NF, IndexedDB) ist die Arbeitsablage, je Stück getrennt. Speichern lädt zusätzlich die kleine Blatt-Datei in die Downloads
// (Browser überschreibt nie → Datum und Uhrzeit im Namen). Der Klang steckt nicht in der Datei; er liegt einmal je Stück im Browserspeicher.
const SV={FORMAT:1,MAX:5,saved:null,
  jsonStr(o){ return JSON.stringify(o,(k,v)=>ArrayBuffer.isView(v)?Array.from(v):v); },
  async staende(id){ id=id||NF.cur(); if(!id) return []; let l=null; try{ l=await NF.get('staende:'+id); }catch(e){} return Array.isArray(l)?l:[]; },
  // Stand merken: nur wenn sich seit dem letzten gemerkten Stand etwas geändert hat; die ältesten fallen weg
  async merke(rec,sig,id){ id=id||NF.ensure(); const l=await SV.staende(id); if(l.length&&l[l.length-1].sig===sig) return l; l.push({sig,rec}); while(l.length>SV.MAX+1) l.shift(); await NF.put('staende:'+id,l); return l; },
  name(){ const n=((CH.song&&CH.song.name)||'Session').replace(/[^\wäöüÄÖÜß-]+/g,'_'); const d=new Date(), p=x=>String(x).padStart(2,'0');
    return n+'_'+d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+'_'+p(d.getHours())+p(d.getMinutes()); },
  async save(){ if(CH.mic) return cMsg(t('speichern.erstStop'));
    if(!CH.ev.length&&!PL.src.length) return cMsg(t('speichern.nichts'));
    // erstes Speichern: nach dem Namen fragen (Manu 14.11.)
    if(!CH.song||!CH.song.name){ const n=await KS.ask(t('stuecke.wieHeisst'),t('speichern.knopf'),''); if(n==null) return; NF.ensure(); CH.song.name=n; KS.ui(); }
    const sig=NF.blattSig(), rec=NF.rec(); await NF.save(true); const l=await SV.merke(rec,sig);
    const file={format:SV.FORMAT,app:'Gitarren-App',version:APP_VERSION,when:rec.when,blatt:rec,staende:l.slice(0,-1).map(x=>x.rec)};
    const blob=new Blob([SV.jsonStr(file)],{type:'application/json'}), n=SV.name()+'.json', a=document.createElement('a');
    a.href=URL.createObjectURL(blob); a.download=n; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),4000);
    SV.saved=sig; SV.when=Date.now(); SV.ui(); cMsg(t('speichern.ok',{n})); },
  // Datei laden: gehört sie (gleiche Kennung) zu einem Stück auf diesem Handy, wird dieses Stück geöffnet und mit dem Klang ersetzt; sonst entsteht ein neues Stück ohne Klang
  async load(f){ if(CH.mic) return cMsg(t('speichern.erstStop')); let o=null; try{ o=JSON.parse(await f.text()); }catch(e){}
    if(!o||o.app!=='Gitarren-App'||!o.blatt||!o.blatt.ev) return cMsg(t('laden.keineDatei'));
    if((o.format||0)>SV.FORMAT) return cMsg(t('laden.zuNeu'));
    const b=o.blatt, l=await NF.list(), sid=b.song&&b.song.id, e=sid&&l.find(x=>x.id===sid);
    const fname=f.name.replace(/(_\d{4}-\d\d-\d\d_\d{4})?(\s*\(\d+\))?\.json$/i,'').replace(/_/g,' ');
    let id, name;
    if(e){ id=e.id; name=e.name||(b.song.name)||fname;
      if(id===NF.cur()){ if(CH.ev.length&&!confirm(t('laden.ersetzen',{name:KS.label(e)}))) return; }
      else if(e.nA+e.nT>0&&!confirm(t('laden.ueberschreiben',{name:KS.label(e)}))) return;
      if(id!==NF.cur()) await KS.open(id,true);
      if(CH.ev.length) await SV.merke(NF.rec(),NF.blattSig(),id); }
    else { name=KS.unique((b.song&&b.song.name)||fname,l,null); await NF.save(true); NF.busy=true; blattLeeren(); NF.busy=false;
      id=sid||uid(); }
    NF.offer=Object.assign({},b,{song:Object.assign(NF.newSong(name),b.song||{},{id,name})}); await NF.restore(); await NF.save(true); await SV.merke(NF.rec(),NF.blattSig(),id);
    if(Array.isArray(o.staende)&&o.staende.length){ const s=await SV.staende(id); const have=new Set(s.map(x=>x.rec.when)); o.staende.forEach(r=>{ if(!have.has(r.when)) s.unshift({sig:'',rec:r}); }); while(s.length>SV.MAX+1) s.shift(); await NF.put('staende:'+id,s); }
    SV.saved=NF.blattSig(); SV.ui(); cMsg(t(PL.src.length?'laden.okKlang':'laden.okOhneKlang',{name})); },
  fmt(w){ const d=new Date(w); return d.toLocaleDateString('de-DE',{day:'numeric',month:'numeric'})+' '+d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}); },
  async list(){ const l=await SV.staende(), ul=$('#slist'); ul.innerHTML='';
    if(!l.length){ ul.innerHTML='<li style="color:var(--muted);font-size:14px">'+txEsc(t('staende.leer'))+'</li>'; }
    l.slice().reverse().forEach((x,i)=>{ const r=x.rec, c=NF.counts(r.ev), li=document.createElement('li'), b=document.createElement('button');
      b.textContent=t(i===0?'staende.zeileLetzter':'staende.zeile',{w:SV.fmt(r.when),a:c.nA,n:c.nT}); li.appendChild(b); ul.appendChild(li);
      b.onclick=async()=>{ if(CH.mic) return cMsg(t('speichern.erstStop')); if(CH.ev.length&&!confirm(t('staende.ersetzen'))) return;
        if(CH.ev.length) await SV.merke(NF.rec(),NF.blattSig()); NF.offer=Object.assign({},r,{song:CH.song}); await NF.restore(); $('#ssheet').classList.remove('on'); cMsg(t('staende.geladen',{w:SV.fmt(r.when)})); }; });
    $('#ssheet').classList.add('on'); },
  ui(){ const b=$('#ccap'); if(!b) return; const d=!!(CH.ev.length||PL.src.length)&&NF.blattSig()!==SV.saved; b.classList.toggle('dirty',d); },
  async menuUI(){ const n=(await SV.staende()).length; $('#cmStaendeN').textContent=n?' ('+n+')':''; }
};

// =================== Stücke: Liste, Neu, Öffnen, Umbenennen, Löschen (Fenster wie „Frühere Stände“) ===================
const KS={
  label(e){ return (e&&e.name)||t('stuecke.ohneName'); },
  unique(n,l,skipId){ n=(n||'').trim().slice(0,60)||t('stuecke.vorschlag',{d:new Date().toLocaleDateString('de-DE',{day:'numeric',month:'numeric'})}); const has=x=>l.some(e=>e.id!==skipId&&(e.name||'').toLowerCase()===x.toLowerCase());
    if(!has(n)) return n; let i=2; while(has(n+' ('+i+')')) i++; return n+' ('+i+')'; },
  // Namensfenster: gibt den Namen zurück oder null (Abbrechen); doppelte Namen werden abgelehnt
  ask(title,okText,init,skipId){ return new Promise(async res=>{ const l=await NF.list(), sh=$('#nsheet'), inp=$('#nIn'), err=$('#nErr');
    const sug=t('stuecke.vorschlag',{d:new Date().toLocaleDateString('de-DE',{day:'numeric',month:'numeric'})});
    $('#nTitle').textContent=title; $('#nOk').textContent=okText; inp.value=init||''; inp.placeholder=sug; err.textContent=''; sh.classList.add('on'); setTimeout(()=>inp.focus(),60);
    const done=v=>{ sh.classList.remove('on'); $('#nOk').onclick=$('#nCancel').onclick=inp.onkeydown=sh.onclick=null; res(v); };
    inp.oninput=()=>err.textContent='';
    $('#nOk').onclick=()=>{ const v=(inp.value.trim()||sug).slice(0,60); if(l.some(e=>e.id!==skipId&&(e.name||'').toLowerCase()===v.toLowerCase())){ err.textContent=t('stuecke.nameDoppelt'); return; } done(v); };
    inp.onkeydown=e=>{ if(e.key==='Enter') $('#nOk').click(); };
    $('#nCancel').onclick=()=>done(null); sh.onclick=e=>{ if(e.target===sh) done(null); }; }); },
  // Name rechts in der Statuszeile, feste Breite: die ersten 4 Zeichen, sonst „…“ (Manu 15.11.)
  kurz(n){ const a=Array.from(n||''); return a.length>4?a.slice(0,4).join('').trim()+'…':a.join(''); },
  ui(){ const el=$('#csong'); if(!el) return; const n=CH.song&&CH.song.name; el.classList.toggle('none',!n); const s=n?KS.kurz(n):t('stuecke.ohneNameKurz'); if(el.firstChild.textContent!==s) el.firstChild.textContent=s; el.setAttribute('aria-label',t('stuecke.titel')+': '+(n||t('stuecke.ohneName'))); },
  async list(){ await NF.save(true); const l=(await NF.list()).slice().sort((a,b)=>a.id===NF.cur()?-1:b.id===NF.cur()?1:String(b.used||'').localeCompare(String(a.used||''))), ul=$('#klist'); ul.innerHTML='';
    if(!l.length) ul.innerHTML='<li style="color:var(--muted);font-size:14px">'+txEsc(t('stuecke.leer'))+'</li>';
    l.forEach(e=>{ const cur=e.id===NF.cur(), li=document.createElement('li'), b=document.createElement('button'), r=document.createElement('button'), d=document.createElement('button');
      li.className='krow'; b.className='kopen'+(cur?' cur':'');
      b.innerHTML=txEsc(KS.label(e))+(cur?' <span class="kcur">· '+txEsc(t('stuecke.offen'))+'</span>':'')+'<small>'+txEsc(t(e.klang?'stuecke.zeileKlang':'stuecke.zeile',{w:e.used?SV.fmt(e.used):'–',a:e.nA||0,n:e.nT||0}))+'</small>';
      r.className='iconbtn'; r.setAttribute('aria-label',t('stuecke.umbenennen')); r.innerHTML='<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>';
      d.className='iconbtn'; d.setAttribute('aria-label',t('stuecke.loeschen')); d.innerHTML='<svg viewBox="0 0 24 24"><path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/></svg>';
      b.onclick=()=>{ $('#ksheet').classList.remove('on'); if(!cur) KS.open(e.id); };
      r.onclick=()=>KS.rename(e); d.onclick=()=>KS.remove(e);
      li.append(b,r,d); ul.appendChild(li); });
    let info=''; try{ const q=await navigator.storage.estimate(); info=t('stuecke.platz',{u:Math.max(1,Math.round(q.usage/1048576)),q:(q.quota/1073741824).toLocaleString('de-DE',{maximumFractionDigits:1})}); }catch(e){}
    $('#kinfo').textContent=info; $('#ksheet').classList.add('on'); },
  // anderes Stück öffnen: das offene wird vorher gesichert, darum keine Rückfrage
  async open(id,quiet){ if(CH.mic) return cMsg(t('speichern.erstStop')); await NF.save(true); NF.busy=true;
    try{ const e=(await NF.list()).find(x=>x.id===id); let b=null; try{ b=await NF.get('blatt:'+id); }catch(x){}
      blattLeeren(); CH.song=Object.assign(NF.newSong(e?e.name:''),b&&b.song||{},{id,name:e?e.name:''}); NF.ksig=id+'|';
      if(b&&b.ev&&b.ev.length){ NF.offer=Object.assign({},b,{song:CH.song}); await NF.restore(); }
      await NF.put('aktuell',id); NF.sig=NF.blattSig(); SV.saved=NF.sig; KS.ui(); SV.ui();
      if(!quiet) cMsg(t(PL.src.length?'stuecke.geoeffnetKlang':'stuecke.geoeffnet',{name:KS.label(e)})); }
    finally{ NF.busy=false; } },
  async neu(){ if(CH.mic) return cMsg(t('speichern.erstStop')); await NF.save(true); NF.busy=true; try{ blattLeeren(); CH.song=NF.newSong(); NF.ksig=CH.song.id+'|'; NF.sig=NF.blattSig(); SV.saved=NF.sig; } finally{ NF.busy=false; }
    $('#ksheet').classList.remove('on'); KS.ui(); SV.ui(); cMsg(t('stuecke.neuOk')); },
  async rename(e){ const n=await KS.ask(t('stuecke.umbenennenTitel'),t('stuecke.umbenennen'),e.name||'',e.id); if(n==null) return;
    if(e.id===NF.cur()){ CH.song.name=n; await NF.save(true); }
    else { await NF.setEntry({id:e.id,name:n}); const b=await NF.get('blatt:'+e.id); if(b&&b.song){ b.song.name=n; await NF.put('blatt:'+e.id,b); } }
    await NF.setEntry({id:e.id,name:n}); KS.ui(); cMsg(t('stuecke.umbenanntOk',{name:n})); if($('#ksheet').classList.contains('on')) KS.list(); },
  // Löschen mit Rückfrage; trifft es das offene Stück, öffnet sich das zuletzt benutzte andere (oder ein leeres neues)
  async remove(e){ if(CH.mic) return cMsg(t('speichern.erstStop')); if(!confirm(t('stuecke.loeschenFrage',{name:KS.label(e)}))) return;
    const cur=e.id===NF.cur(); NF.busy=true;
    try{ await NF.del('blatt:'+e.id); await NF.del('klang:'+e.id); await NF.del('staende:'+e.id); const l=(await NF.list()).filter(x=>x.id!==e.id); await NF.put('stuecke',l);
      if(cur){ blattLeeren(); CH.song=null; NF.ksig=''; const nx=l.slice().sort((a,b)=>String(b.used||'').localeCompare(String(a.used||'')))[0]; if(nx) await NF.put('aktuell',nx.id); else await NF.del('aktuell');
        NF.busy=false; if(nx) await KS.open(nx.id,true); NF.sig=NF.blattSig(); SV.saved=NF.sig; } }
    finally{ NF.busy=false; }
    KS.ui(); SV.ui(); cMsg(t('stuecke.geloescht',{name:KS.label(e)})); KS.list(); }
};
$('#ccap').addEventListener('click',()=>SV.save());
$('#cmSLoad').addEventListener('click',()=>$('#sFile').click());
$('#sFile').addEventListener('change',e=>{ const f=e.target.files&&e.target.files[0]; if(f) SV.load(f); e.target.value=''; });
$('#cmStaende').addEventListener('click',()=>SV.list());
$('#cmStuecke').addEventListener('click',()=>{ closeCMenu(); KS.list(); });
$('#csong').addEventListener('click',()=>KS.list());
$('#kNeu').addEventListener('click',()=>KS.neu());
$('#ksClose').addEventListener('click',()=>$('#ksheet').classList.remove('on'));
$('#ksheet').addEventListener('click',e=>{ if(e.target.id==='ksheet') $('#ksheet').classList.remove('on'); });
$('#ssClose').addEventListener('click',()=>$('#ssheet').classList.remove('on'));
$('#ssheet').addEventListener('click',e=>{ if(e.target.id==='ssheet') $('#ssheet').classList.remove('on'); });
$('#cmCapSave').addEventListener('click',()=>{ if(S.capture&&CAP.n){ capSave(); cMsg(t('speichern.testOk')); } });
setInterval(()=>{ SV.ui(); KS.ui(); },1500);
// Dauerhaften Speicher beim Browser anfragen, damit er die Sicherung bei Platzmangel nicht von selbst löscht
try{ if(navigator.storage&&navigator.storage.persist) navigator.storage.persist(); }catch(e){}
