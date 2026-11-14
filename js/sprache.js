// =================== Sprechen: feste Befehle, keine KI (Chrome-Spracherkennung de-DE) ===================
// Knopf gedrückt halten, sprechen, loslassen. Jeder Befehl ist ein Rückgängig-Schritt, mehrere mit „und dann“.
const VOX={rec:null,on:false,txt:'',alts:[],snaps:0};
// ==VOXCORE-START== (Wortliste und Akkordwörter, ohne Bildschirm – auch im Prüfsatz genutzt)
const NUMW={null:0,eins:1,ein:1,eine:1,einen:1,zwei:2,zwo:2,drei:3,vier:4,fünf:5,sechs:6,sieben:7,acht:8,neun:9,zehn:10,elf:11,zwölf:12,dreizehn:13,vierzehn:14,fünfzehn:15,sechzehn:16,siebzehn:17,achtzehn:18,neunzehn:19,zwanzig:20,dreißig:30,vierzig:40};
const ORDW={erste:1,ersten:1,erster:1,erstes:1,zweite:2,zweiten:2,zweiter:2,zweites:2,dritte:3,dritten:3,dritter:3,drittes:3,vierte:4,vierten:4,vierter:4,viertes:4,fünfte:5,fünften:5,fünfter:5,sechste:6,sechsten:6,sechster:6,siebte:7,siebten:7,siebter:7,achte:8,achten:8,achter:8,neunte:9,neunten:9,neunter:9,zehnte:10,zehnten:10,zehnter:10,elfte:11,elften:11,elfter:11,zwölfte:12,zwölften:12,zwölfter:12};
// Verhörer und Schreibweisen vereinheitlichen
// Wortliste: so schreibt die Google-Spracherkennung deutsche Gitarrenbegriffe (Verhörer, Schreibweisen, Zahlen) → einheitliche Form
function voxNorm(t){ t=' '+t.toLowerCase().replace(/[!?;:]/g,' , ').replace(/(\d)\.(?!\d)/g,'$1 ').replace(/\//g,' über ').replace(/,/g,' , ').replace(/-/g,' ').replace(/\s+/g,' ')+' ';
  t=t.replace(/(seite|saiten|seiten|zeite|seide)/g,'saite');
  const R=[
    // Takt
    [/ (tag|tack|tackt|tackt|takte|taktes|takten|dag|pakt|trakt|tacke|tact) /g,' takt '],
    // Spieltechniken
    [/ (pull over|pullover|pull off|pulloff|pul off|pool off|pull of|pullof|pullhof|pool of) /g,' pulloff '],[/ (hammer on|hammeron|hammer an|hamer on|hama on|hämmer on|hammer ohne) /g,' hammeron '],
    [/ (slide|slider|slight|slyde|schlaid|slaid|sleid|slides|sliden|schleid|glide|gleiten|rutschen) /g,' slide '],[/ (anschlag|angeschlagen|anschlagen|normal) /g,' anschlag '],
    // Saiten (Name, Nummer, Verhörer)
    [/ (tiefe[nr]?|dicke[nr]?|große[nr]?) e saite /g,' S0 '],[/ (sechste[n]?|6) saite /g,' S0 '],[/ (a|ah) saite /g,' S1 '],[/ (fünfte[n]?|5) saite /g,' S1 '],
    [/ (d|de|dee) saite /g,' S2 '],[/ (vierte[n]?|4) saite /g,' S2 '],[/ (g|ge|gee) saite /g,' S3 '],[/ (dritte[n]?|3) saite /g,' S3 '],
    [/ (b|h|be|beh|bee|ha|bäh) saite /g,' S4 '],[/ (beseite|besaite|hasaite) /g,' S4 '],[/ (zweite[n]?|2) saite /g,' S4 '],
    [/ (hohe[nr]? |kleine[nr]? |dünne[nr]? )?(e|eh|ee) saite /g,' S5 '],[/ (erste[n]?|1) saite /g,' S5 '],
    // Bund
    [/ (bunt|bundt|pund|bunde|bunds) /g,' bund '],
    // Akkordnamen
    [/ (fis|fiß|fies|f sharp|fiss) /g,' fis '],[/ (cis|ziss|zis|c sharp) /g,' cis '],[/ (gis|giß|giss) /g,' gis '],[/ (b flat|bes) /g,' bflat '],[/ (e flat|ess) /g,' es '],
    [/ ([a-h]|fis|cis|gis|dis|es|as)(moll|mol) /g,' $1 moll '],[/ ([a-h]|fis|cis|gis|dis|es|as)(dur) /g,' $1 dur '],[/ (mol|mohl|moll) /g,' moll '],[/ (duhr|tour|door) /g,' dur '],
    [/ (sus|suss|saus|sas|sues|sous) ?(2|zwei) /g,' sus2 '],[/ (sus|suss|saus|sas|sues|sous) ?(4|vier) /g,' sus4 '],[/ (add|ad|at|ädd) ?(9|neun) /g,' add9 '],
    [/ (major|maj|mayor|mädscher|majo|mejor) ?(7|sieben|seven) /g,' maj7 '],[/ (ueber|über|durch|slash|mit bass) /g,' über '],
    // Verben
    [/ (verschieb|verschiebe|verschieben|verschiebt|schieb|schiebe|schieben|rück|rücke|rücken|verleg|verlege|verlegen|leg|lege|legen) /g,' VERSCHIEB '],
    [/ (kopier|kopiere|kopieren|kopiert|dupliziere|duplizieren|copy) /g,' KOPIER '],
    [/ (lösch|lösche|löschen|löscht|lesch|entfern|entferne|entfernen|weg damit|raus damit) /g,' LÖSCH '],
    [/ (markier|markiere|markieren|markiert|auswählen|wähle|wählen) /g,' MARKIER '],
    // Auswahl aufheben (Manu: „Markierung aufheben“, „keine Markierungen mehr“ …) – Bernstein-Hinweise heißen „Hinweise“
    [/ (die )?(markierungen|markierung|auswahl|markiertes|markierte|ausgewähltes) (weg|aufheben|LÖSCH|raus|zurücksetzen|vergessen|auflösen|beenden) /g,' MARKWEG '],
    [/ (heb|hebe) (die )?(markierungen|markierung|auswahl) (wieder )?auf /g,' MARKWEG '],[/ (kein|keine|keinen) (markierungen|markierung|auswahl) (mehr)? ?/g,' MARKWEG '],
    [/ (nichts|nix) (mehr )?(MARKIER|markiert|ausgewählt|gewählt) /g,' MARKWEG '],[/ (alles |alle )?(abwählen|abwähle|abgewählt|demarkieren|entmarkieren|deselektieren) /g,' MARKWEG '],[/ (wähle|wähl|MARKIER) (alles |ALLES |alle )?ab( |$)/g,' MARKWEG '],
    [/ (alle )?(hinweise|hinweis|bernstein|bernsteinmarkierungen|prüfmarkierungen|gelben markierungen|orangen markierungen) (weg|LÖSCH|raus|aufheben|entfernen|ausblenden) /g,' CHKWEG '],
    // Alles: ganzes Stück („alles markieren“, „das ganze Lied“, „alle Takte“); „alle Töne“ in einem Takt bleibt
    [/ (das )?(ganze|ganzen|gesamte|gesamten|komplette|kompletten) (stück|lied|song|blatt|tab) /g,' ALLES '],[/ (alles|alle takt|komplett) /g,' ALLES '],
    [/ alle (MARKIER|LÖSCH|KOPIER|VERSCHIEB|ausrichten) /g,' ALLES $1 '],[/ (MARKIER|LÖSCH|KOPIER) alle /g,' $1 ALLES '],
    [/ bis (zum |ans |zu )?(ende|schluss|letzten takt|letzten|end) /g,' bis ENDE '],[/ (rückgängig machen|mach rückgängig|rückgängig|undo) /g,' RÜCKGÄNGIG '],[/ (wiederholen|wiederherstellen|redo) /g,' WIEDERHOL '],
    [/ auf (alle|allen) (ähnlichen|gleichen|anderen|ähnliche) (stellen )?/g,' ALLESIM '],
    // Abspielen (vor den Füllwörtern; „nochmal abspielen“ ≠ „Wiederholen“ = Wiederherstellen; „zurück zum Anfang“ ≠ „zurück“ = Rückgängig)
    [/ (nochmal|noch mal|ganz)? ?(von vorne|von vorn|vom anfang|von anfang an|zurück zum anfang|zum anfang|an den anfang) /g,' PLAYSTART '],[/ (nochmal|noch mal) (abspielen|spielen|anhören|play) /g,' PLAYSTART '],
    [/ (spiel ab|spiel app|spiel mal|play|plei|blay|plej|pläy|spiel|spiele|spielen|abspielen|abspiel|vorspielen|anhören|hör mal|lass hören|wiedergabe|starten|start|los|weiter|weiterspielen|fortsetzen) /g,' PLAY '],
    [/ (stopp|stop|stoppe|stoppen|stoppt|pause|pausiere|pausieren|halt|anhalten|halte an|halt an|aufhören|hör auf) /g,' STOPP '],
    [/ (in (der |einer )?(schleife|dauerschleife)|dauerschleife|schleife|endlos|immer wieder|im kreis|loopen|loope|loop|lupe|lup|luup|lub) /g,' LOOP '],
    [/ (langsamer|schneller) /g,' TEMPOX $1 '],[/ (halbes|halbe|normales|volles|normale|volle|originales) (tempo|geschwindigkeit) /g,' TEMPOX $1 '],[/ (tempo|geschwindigkeit) /g,' TEMPOX '],[/ (prozent|%) /g,' prozent TEMPOX '],
    // Weitere Befehle (14.11., „was ganz offensichtlich fehlt“): Hinweise, Ausrichten, früher/später, Einfügen, Edit, Springen, Zoom, Spielweise, Metronom, Speichern, Hilfe, Sitzung
    [/ (zum |zur )?(nächster|nächste|nächsten|nächstes) (hinweis|hinweise|markierung|stelle|bernstein) /g,' HINWNEXT '],[/ (zum |zur )?(vorheriger|vorherige|vorherigen|voriger|vorige|vorigen) (hinweis|markierung|stelle|bernstein) /g,' HINWPREV '],
    [/ (gerade VERSCHIEB|ausrichten|ausricht|ausgerichtet|richte aus|richt aus|richte|quantisieren|quantisiere|einrasten) /g,' AUSRICHT '],
    [/ (einfügen|einfüg|füge ein|füg ein|paste|reinkopieren|einsetzen) /g,' EINFUEG '],
    [/ (edit|editmodus|edit modus|bearbeitungsmodus) (an|ein|einschalten|starten|öffnen) /g,' EDITAN '],[/ (edit|editmodus|edit modus|bearbeitungsmodus) (aus|ausschalten|beenden|schließen|zu) /g,' EDITAUS '],[/ (fertig|erledigt) /g,' EDITAUS '],
    [/ (geh|gehe|spring|springe|zeig|zeige|scroll|scrolle|zeig mir) (mir )?(zu|zum|nach|auf|an) (den )?takt /g,' GEHZU takt '],
    [/ (zoom|zoome|zoomen) (rein|hinein|ran|größer)|vergrößern|vergrößere /g,' ZOOMIN '],[/ (zoom|zoome|zoomen) (raus|heraus|weg|kleiner)|verkleinern|verkleinere /g,' ZOOMOUT '],[/ (zoom|zoome|zoomen) (anschlag|zurück|zurücksetzen|100|standard) /g,' ZOOMNORM '],
    [/ (spielweise|modus) (zupfen|gezupft|picking|notes|noten) /g,' SPWPICK '],[/ (spielweise|modus) (strummen|strum|strummen plus|strum plus|mit melodie|melodie) (plus melodie|mit melodie|melodie)? ?/g,(m,a,b,c)=>/melodie|plus/.test(b+' '+(c||''))?' SPWMEL ':' SPWSTRUM '],
    [/ metronom (an|ein|einschalten|starten) /g,' METAN '],[/ metronom (aus|ausschalten|stoppen) /g,' METAUS '],
    [/ (speichern|speicher|abspeichern|sichern) /g,' SPEICHERN '],[/ (hilfe|bedienhilfe|sprachbefehle|was kann ich sagen|was kann ich hier sagen|befehle zeigen|welche befehle gibt es) /g,' HILFE '],
    [/ (die )?(letzte|vorige|alte|gesicherte) sitzung (wiederherstellen|WIEDERHOL|laden|zurückholen|holen) /g,' NFRESTORE '],[/ sitzung (wiederherstellen|WIEDERHOL) /g,' NFRESTORE '],
    // mehrfach Rückgängig: „dreimal rückgängig“, „letzten Schritt zurück“
    [/ (zwei|zwo|drei|vier|fünf|sechs|sieben|acht|neun|zehn)mal /g,(m,a)=>' '+(NUMW[a]||2)+' x '],[/ (\d+) ?mal (RÜCKGÄNGIG|rückgängig) /g,' $1 x $2 '],[/ (einen |den letzten |letzten )?schritt zurück /g,' RÜCKGÄNGIG '],
    // Füllwörter
    [/ (bitte|mal|mir|doch|jetzt|eben|bloß|noch|mach|mache|den akkord|der akkord|das|dem|im|am|beim|ton|note) /g,' ']];
  for(let k=0;k<2;k++) R.forEach(([a,b])=>t=t.replace(a,b));
  t=t.replace(/ (ein|zwei|drei|vier|fünf|sechs|sieben|acht|neun)und(zwanzig|dreißig|vierzig) /g,(m,a,b)=>' '+(NUMW[a]+NUMW[b])+' ');
  t=t.split(' ').map(w=>NUMW[w]!=null&&!['ein','eine','einen'].includes(w)?String(NUMW[w]):ORDW[w]!=null?String(ORDW[w]):w).join(' ');
  t=t.replace(/ (\d+) (takte|takt) /g,' $1 takt '); // „die ersten 2 takte“
  t=t.replace(/ (\d+) bund /g,' bund $1 '); // „im fünften bund“
  // Zählzeiten: „2 und“ / „2und“ / „2 +“ (ohne folgende Zahl) = 2+ ; „2 e“ / „2 a“ = Sechzehntel
  t=t.replace(/ (\d+) ?(und|plus|\+)(?! \d)/g,' $1+ ').replace(/ (\d+)(e|a) /g,' $1$2 ');
  return t.replace(/\s+/g,' ').trim(); }
const ROOTW={c:0,cis:1,des:1,d:2,dis:3,es:3,e:4,f:5,fis:6,ges:6,g:7,gis:8,as:8,a:9,ais:10,bflat:10,b:11,h:11};
function qualIdx(id){ return QUAL.findIndex(q=>q.id===id); }
// Akkord in Wörtern: „e moll“, „d über fis“, „a sus2“, „g 7“, „c maj7“, „g dur“
function voxChord(t){ const m=/(?:^| )(cis|des|dis|es|fis|ges|gis|as|ais|bflat|[a-h])(?: (moll|dur))?(?: (7|maj7|sus2|sus4|add9|sieben))?(?: (moll) (7|sieben))?(?: (über|durch|slash) (cis|des|dis|es|fis|ges|gis|as|ais|bflat|[a-h]))?(?= |$)/.exec(t);
  if(!m||ROOTW[m[1]]==null) return null; let id=m[2]==='moll'?'m':''; if(m[3]) id=(m[3]==='sieben'?'7':m[3])==='7'?(id==='m'?'m7':'7'):m[3]; if(m[4]) id='m7';
  const qi=qualIdx(id); if(qi<0) return null; return {r:ROOTW[m[1]],qi,bass:m[7]!=null?ROOTW[m[7]]:null,txt:m[0].trim()}; }
// ==VOXCORE-END==
// ==ABLAUF-START== (Ablauf vorgeben: gesprochen oder als Text, gleiche Regeln; siehe BEFEHLE.md)
// „Strophe: G 6, E-Moll 2, mal 3. Refrain: A sus 2 4, D über Fis 4, G 2, D 2, E-Moll 4, mal 2.“ – Zahl = Schläge, „G 2 Takte“ = ganze Takte.
// „Ablauf: Strophe, Refrain, Strophe, Refrain“ – Reihenfolge aus gemerkten Teilen. Ergebnis: {teile:{key:{name,segs,mal}}, folge:[{key,mal}]|null, fehler:[]}
const TEILW=[['strophe','Strophe',/strophen?|strofen?|strophe|vers(e|es)?|verse/],['refrain','Refrain',/refrains?|refrän|refrain|chorus|kehrvers|re frain/],['prechorus','Pre-Chorus',/pre chorus|prechorus|vorrefrain/],
  ['bridge','Bridge',/bridge|brücke|britsch|bridsch/],['intro','Intro',/intro|einleitung|vorspiel/],['outro','Outro',/outro|schluss|ende|nachspiel/],['solo','Solo',/solo/],['zwischenteil','Zwischenteil',/zwischenteil|zwischenspiel|interlude/],
  ['teila','Teil A',/teil a/],['teilb','Teil B',/teil b/],['teilc','Teil C',/teil c/]];
const MALW={ein:1,einmal:1,zwei:2,zweimal:2,zwo:2,drei:3,dreimal:3,vier:4,viermal:4,fünf:5,fünfmal:5,sechs:6,sechsmal:6,acht:8,achtmal:8};
// Geschriebene Akkordnamen (Em, F#m7, Asus2, D/F#, Bb, Cmaj7) in die gesprochene Form bringen, die voxChord versteht
function ablaufTextChords(t){ const RT={'C#':'cis','Db':'des','D#':'dis','Eb':'es','F#':'fis','Gb':'ges','G#':'gis','Ab':'as','A#':'ais','Bb':'bflat','H':'b'};
  // „G6“, „Em2“ (zusammengeschrieben) = Akkord + Schläge; „G7“ bleibt der Akkord G7, „Cadd9“ bleibt add9
  t=t.replace(/(^|[\s,.;:(\/])([A-H](?:#|b|is|es)?(?:m|moll)?)(\d{1,2})(?=$|[\s,.;:)])/g,(m,pre,c,n)=>n==='7'||n==='9'?m:pre+c+' '+n);
  return t.replace(/♯/g,'#').replace(/♭/g,'b').replace(/(^|[\s,.;:(\/])([A-H])(#|b)?(maj7|m7|m|7|sus2|sus4|add9|moll|dur)?(?=$|[\s,.;:)\/])/g,(m,pre,r,acc,q)=>{
    const root=RT[r+(acc||'')]||(r+(acc==='#'?'is':acc==='b'?'es':'')).toLowerCase(); const qq={m:' moll',m7:' moll 7',moll:' moll',dur:''}[q]??(q?' '+q:'');
    return pre+' '+root+qq+' '; }); }
function parseAblauf(raw,nb){ nb=nb||4; const out={teile:{},folge:null,fehler:[],def:[]};
  let t=' '+ablaufTextChords(raw)+' ';
  // Wiederholungen: erst „mal 3“ (Zahl danach), dann „3 mal“ / „3x“ – so bleibt bei „E-Moll 2 mal 3“ die 2 beim Akkord
  const NW='(\\d+|ein|zwei|zwo|drei|vier|fünf|sechs|acht)', mw=x=>/\d/.test(x)?+x:MALW[x];
  t=t.toLowerCase().replace(/[×]/g,' x ').replace(/\b(einmal|zweimal|dreimal|viermal|fünfmal|sechsmal|achtmal)\b/g,(m)=>' wdh'+MALW[m]+' ');
  t=t.replace(new RegExp('(^|[^a-zäöüß])(?:mal|x) ?'+NW+'(?=$|[^a-zäöüß0-9])','g'),(m,p,n)=>p+' wdh'+mw(n)+' ');
  t=t.replace(new RegExp('(^|[^a-zäöüß])'+NW+' ?(?:mal|x)(?=$|[^a-zäöüß])','g'),(m,p,n)=>p+' wdh'+mw(n)+' ');
  t=t.replace(/\bablauf\b/g,' kwablauf ');
  TEILW.forEach(([k,,re])=>{ t=t.replace(new RegExp('(^|[^a-zäöüß])('+re.source+')(?=$|[^a-zäöüß])','g'),(m,p)=>p+' teil'+k+' '); });
  t=voxNorm(t); t=' '+t.replace(/ (\d+)\+ /g,' $1 , ')+' '; // „G 6 und Em 2“ → voxNorm macht „6+“; hier ist „und“ nur ein Trenner
  const parts=t.split(/(?= teil[a-z]+ )/).map(x=>x.trim()).filter(Boolean);
  const order=[]; let sawAblauf=/kwablauf/.test(t);
  for(let p of parts){ p=p.replace(/kwablauf/g,' ').trim(); const m=/^teil([a-z]+)\b(.*)$/.exec(p); if(!m){ if(p.replace(/[ ,.]/g,'')) out.fehler.push('nicht verstanden: „'+p+'“'); continue; }
    const key=m[1], name=(TEILW.find(x=>x[0]===key)||[0,key])[1]; let rest=' '+m[2].replace(/^[ ,.]+/,'')+' ';
    let mal=1; rest=rest.replace(/ wdh(\d+) /g,(z,n)=>{ mal=+n; return ' '; });
    const segs=[]; let guard=0, junk='';
    while(rest.trim()&&guard++<64){ rest=rest.replace(/^[ ,.]+/,' '); if(!rest.trim()) break;
      const c=voxChord(rest.trim()); const ix=c?(' '+rest.trim()+' ').indexOf(' '+c.txt+' '):-1;
      if(!c||ix!==0){ const w=rest.trim().split(' ')[0]; junk+=' '+w; rest=' '+rest.trim().slice(w.length)+' '; continue; }
      rest=' '+rest.trim().slice(c.txt.length)+' ';
      const n=/^ ?,? ?(\d+)( takt)?(?= |$)/.exec(rest); let d=null;
      if(n){ d=+n[1]*(n[2]?nb:1); rest=' '+rest.slice(n[0].length)+' '; }
      if(d==null){ out.fehler.push(name+': bei '+c.txt+' fehlt die Zahl (Schläge)'); d=nb; }
      if(d<1||d>64){ out.fehler.push(name+': '+c.txt+' '+d+' Schläge ist unplausibel'); d=Math.max(1,Math.min(64,d)); }
      segs.push({r:c.r,qi:c.qi,bass:c.bass,d}); }
    if(junk.trim()) out.fehler.push(name+': nicht verstanden: „'+junk.trim()+'“');
    if(segs.length){ out.teile[key]={key,name,segs,mal}; out.def.push(key); order.push({key,mal:1}); }
    else order.push({key,mal}); } // ohne Akkorde: Reihenfolge („Strophe zweimal“)
  out.folge=order.length?order:null; out.explicit=sawAblauf||order.some(o=>!out.teile[o.key]);
  return out; }
// Gemerkte Teile + neuer Befehl → gültiger Ablauf. Ausgeschrieben für die Erkennung: ein Eintrag je Akkord, mit Durchgang und Liedteil-Name
function ablaufMerge(alt,neu){ const A={teile:Object.assign({},(alt&&alt.teile)||{}),folge:(alt&&alt.folge)||null};
  Object.assign(A.teile,neu.teile);
  // Nur Teile neu angesagt, die im bisherigen Ablauf schon vorkommen → nur die Teile ersetzen, Reihenfolge bleibt
  if(neu.folge&&(neu.explicit||!A.folge||!neu.def.every(k=>A.folge.some(o=>o.key===k)))) A.folge=neu.folge; const miss=(A.folge||[]).filter(o=>!A.teile[o.key]).map(o=>o.key);
  return {ab:A,fehlt:[...new Set(miss)]}; }
function ablaufSeq(A){ const seq=[], cnt={}; let pass=0; if(!A||!A.folge) return seq;
  for(const o of A.folge){ const T=A.teile[o.key]; if(!T) continue;
    for(let k=0;k<o.mal;k++){ cnt[o.key]=(cnt[o.key]||0)+1; const lab=T.name+' '+cnt[o.key];
      for(let m=0;m<T.mal;m++){ pass++; T.segs.forEach((g,j)=>seq.push({r:g.r,qi:g.qi,bass:g.bass??null,d:g.d,pass,first:j===0,last:j===T.segs.length-1,label:j===0&&m===0?lab:null,teil:o.key})); } } }
  return seq; }
function ablaufText(A){ if(!A||!A.folge) return ''; const nm=g=>evName({type:'chord',r:g.r,qi:g.qi,bass:g.bass});
  return A.folge.map(o=>{ const T=A.teile[o.key]; if(!T) return o.key; return T.name+(o.mal>1?' ×'+o.mal:'')+' ('+T.segs.map(g=>nm(g)+' '+g.d).join(' · ')+(T.mal>1?' · mal '+T.mal:'')+')'; }).join(' → '); }
// ==ABLAUF-END==
// Position: „takt 4“, „takt 4 , 2+“, „takt 4 , 2 bis 3“, „takt 1 bis 3“, „takt 1 und 2“, „die ersten 2 takt“
function voxBeat(w){ const m=/^(\d+)(\+|e|a)?$/.exec(w||''); if(!m) return null; return +m[1]-1+({'+':0.5,e:0.25,a:0.75}[m[2]]||0); }
function voxPos(t,skipStr){ const nb=(sheetBars()[0]||{g:{beats:4}}).g.beats, nBars=sheetBars().length;
  t=t.replace(/ ?bis ENDE/,' bis takt '+nBars);
  if(/(^| )ALLES( |$)/.test(t)&&!/takt \d/.test(t)) return {bars:Array.from({length:nBars},(_,i)=>i),txt:'Ganzes Stück',all:1};
  // „takt 1 g akkord von 2“, „takt 1 S4 2+“ → „takt 1 , 2“ (Wörter zwischen Takt und Zählzeit überspringen)
  const gap='(?: (?:,|von|der|die|das|akkord|akkorde|töne|ton|einzeltöne|moll|dur|7|maj7|sus2|sus4|add9|über|cis|des|dis|es|fis|ges|gis|as|ais|bflat|[a-h])'+(skipStr?'| S\\d':'')+')*';
  t=t.replace(new RegExp('takt (\\d+)'+gap+' (\\d+[+ea]?)(?= |$)'),(m,a,b)=>'takt '+a+' , '+b);
  let m=/die (\d+) (letzten )?takt/.exec(t)||/die ersten (\d+) takt/.exec(t); if(/(die )?(ersten|1) (\d+) takt/.test(t)){ const k=+/(\d+) takt/.exec(t)[1]; return {bars:Array.from({length:k},(_,i)=>i),txt:'die ersten '+k+' Takte'}; }
  m=/takt (\d+)((?: und \d+)+)/.exec(t); if(m){ const L=[+m[1]].concat((m[2].match(/\d+/g)||[]).map(Number)); return {bars:L.map(x=>x-1),txt:'Takt '+L.join(' und ')}; }
  m=/takt (\d+) (?:, )?(?:bis|-) (?:takt )?(\d+)(?! ?[+ea]\b)(?! ,? ?\d)/.exec(t);
  if(m&&!/takt \d+ , \d/.test(t)){ const a=+m[1],b=+m[2]; return {bars:Array.from({length:Math.max(1,b-a+1)},(_,i)=>a-1+i),txt:'Takt '+a+' bis '+b}; }
  m=/takt (\d+) ?,? (\d+[+ea]?)(?: bis (\d+[+ea]?))?/.exec(t);
  if(m){ const bar=+m[1]-1, b1=voxBeat(m[2]); if(b1!=null&&b1<nb+0.01){ const p0=bar*nb+b1; let p1=null; if(m[3]){ const b2=voxBeat(m[3]); if(b2!=null) p1=bar*nb+Math.min(nb,b2+1); }
    return {pos:p0,end:p1,txt:'Takt '+(bar+1)+' · '+m[2]+(m[3]?' bis '+m[3]:''),bar}; } }
  m=/takt (\d+)/.exec(t); if(m) return {bars:[+m[1]-1],txt:'Takt '+m[1]};
  return null; }
function barsEv(bars){ const B=sheetBars(); return CH.ev.filter(e=>bars.some(k=>B[k]&&e.t>=B[k].a-1e-3&&e.t<B[k].b-1e-3)); }
function rangeEv(p0,p1){ const a=timeOf(p0)-0.02,b=timeOf(p1)-0.02; return CH.ev.filter(e=>e.t>=a&&e.t<b); }
function markBars(bars){ setEditMode(true); CH.sel.clear(); CH.selBars.clear(); const B=sheetBars(); bars.forEach(k=>{ if(!B[k]) return; CH.selBars.add(B[k].a.toFixed(3)); B[k].ev.forEach(e=>CH.sel.add(e)); }); CH.stripKey=''; edUI(); }
// Nächster gehörter Anschlag nahe t (Abgleich): Basic-Pitch-Tonanfänge, sonst erkannte Akkordanschläge
function voxOnsets(){ const o=(CH.onsets||[]).slice(); CH.ev.forEach(e=>{ if(e.type!=='note'&&!e.added) o.push(e.t); }); return o.sort((a,b)=>a-b).filter((t,i,a)=>i===0||t-a[i-1]>0.05); }
function nearOnset(t,maxd){ let best=null,bd=maxd; voxOnsets().forEach(o=>{ const d=Math.abs(o-t); if(d<bd){bd=d;best=o;} }); return best; }
// Tonfolge ab Position p auf die gehörten Anschläge legen; was nicht passt, auf Achtel; danach auf Zählzeiten einrasten
function placeSeq(p,s,seq){ const B=sheetBars(), beat=B.length?(B[0].b-B[0].a)/B[0].g.beats:0.5, t0=timeOf(p), O=voxOnsets().filter(o=>o>=t0-beat*0.3);
  let k=0, last=null, hit=0; const out=[];
  seq.forEach((x,i)=>{ let t=null; while(k<O.length&&last!=null&&O[k]<=last+0.06) k++;
    if(k<O.length&&O[k]<=(last==null?t0+beat*0.5:last+beat*1.6)){ t=O[k]; k++; hit++; } else t=last==null?t0:last+beat/2;
    t=snapT(t,4); if(last!=null&&t<=last+1e-3) t=snapT(last+beat/4,4); last=t; out.push(t); });
  snap(); let prevNote=null;
  seq.forEach((x,i)=>{ const f=x.f, m=OPEN_M[s]+f; CH.ev=CH.ev.filter(o=>!(o.type==='note'&&o.s===s&&Math.abs(o.t-out[i])<0.03));
    const e={t:out[i],type:'note',s,f,m,key:'note|'+m,art:x.art||'pick',edited:true,added:true}; CH.ev.push(e); prevNote=e; });
  CH.ev.sort((a,b)=>a.t-b.t); return {n:seq.length,hit}; }
function setNoteAt(p,s,f,art){ const t=snapT(timeOf(p),4), m=OPEN_M[s]+f; snap(); CH.ev=CH.ev.filter(o=>!(o.type==='note'&&o.s===s&&Math.abs(o.t-t)<0.03));
  CH.ev.push({t,type:'note',s,f,m,key:'note|'+m,art:art||'pick',edited:true,added:true}); CH.ev.sort((a,b)=>a.t-b.t); }
function setChordAt(p,c,pEnd){ const B=sheetBars(), beat=B.length?(B[0].b-B[0].a)/B[0].g.beats:0.5; let t=timeOf(p); const o=nearOnset(t,beat*0.45); if(o!=null) t=o; t=snapT(t,2); snap();
  const end=pEnd!=null?timeOf(pEnd)-0.02:t+0.05; CH.ev=CH.ev.filter(x=>!(x.type!=='note'&&x.t>=t-beat*0.3&&x.t<Math.max(end,t+beat*0.3)));
  const ev={t,type:'chord',r:c.r,qi:c.qi,key:'chord|'+c.r+'|'+c.qi,orig:null,bass:c.bass,cn:null,pf:null,edited:true,added:true}; ev.f=evFrets(ev); CH.ev.push(ev); CH.ev.sort((a,b)=>a.t-b.t); }
const SN=['tiefe E','A-Saite','D-Saite','G-Saite','B-Saite','hohe e'];
// Einen Satzteil ausführen; gibt {ok,txt} zurück
// Abspielen per Sprache: „Play“, „spiel ab Takt 4“, „Takt 3 bis 5 abspielen“, „spiel Strophe 2“, „spiel die Bridge“, „zweiter Durchlauf von Refrain 2“, „Stopp“, „von vorne“
function voxPlay(t){ const loop=/LOOP/.test(t), was=!!VOX.plResume; VOX.plResume=false; // ein Play-Befehl entscheidet selbst, wie es weitergeht
  if(loop&&/( aus| beenden| weg| ende|STOPP|LÖSCH)( |$)/.test(t)&&!/takt/.test(t)){ const hadL=!!PL.loop, go=was||PL.on; PL.loop=null; if(go) plPlay(PL.on?plNow():PL.pos,null); return {ok:1,txt:hadL?'Loop aus'+(go?' · spielt weiter':''):'Kein Loop an',nosnap:1}; }
  if(/STOPP/.test(t)&&!/PLAY/.test(t)){ PL.loop=null; if(!PL.on&&!was) return {ok:1,txt:'Spielt gerade nicht',nosnap:1}; plStop(); return {ok:1,txt:'Gestoppt',nosnap:1}; }
  if(/TEMPOX/.test(t)){ const go=was; const n=/(\d+)/.exec(t.replace(/takt \d+/g,'')); let p=plRatePct();
    if(n&&+n[1]>=20&&+n[1]<=200) p=+n[1]; else if(/halb/.test(t)) p=50; else if(/normal|voll|original/.test(t)) p=100; else if(/langsamer/.test(t)) p-=5; else if(/schneller/.test(t)) p+=5; else return {ok:0,txt:'Welches Tempo? z. B. „Tempo 75 Prozent“'};
    PL.rate=clamp(Math.round(p),25,150)/100; plUI(); plPopUI(); if(go) plPlay(PL.pos,PL.end); const ps=tx('tempo.prozent',{p:fmtNum(plRatePct())}); return {ok:1,txt:go||PL.on?tx('tempo.gesetzt',{p:ps}):tx('tempo.gesetzt.spaeter',{p:ps}),nosnap:1}; }
  if(!PL.src.length) return {ok:0,txt:'Nichts zum Abspielen · erst aufnehmen oder einen Mitschnitt laden'};
  const B=sheetBars(); let a=null,e=null,txt='';
  if(/PLAYSTART/.test(t)){ a=plFirstT(); txt='Von vorne'; }
  else { const pt=voxPart(t); if(pt&&pt.err) return {ok:0,txt:pt.err}; if(pt){ a=pt.a; e=pt.e; txt=pt.txt; }
    else if(/markiert|markierung|auswahl/.test(t)&&CH.sel.size){ let m0=1e9,m1=-1e9; CH.sel.forEach(x=>{ m0=Math.min(m0,x.t); m1=Math.max(m1,x.t); }); const b0=B.find(b=>m0>=b.a-1e-3&&m0<b.b), b1=B.find(b=>m1>=b.a-1e-3&&m1<b.b); a=b0?b0.a:m0; e=b1?b1.b:null; txt='Markierte Takte'; }
    else { const P=voxPos(t); if(P&&P.bars&&B[P.bars[0]]){ const L=P.bars; a=B[L[0]].a; if(L.length>1||/ nur /.test(' '+t+' ')){ e=(B[L[L.length-1]]||B[B.length-1]).b; txt=P.txt; } else txt='Ab '+P.txt; }
      else if(P&&P.pos!=null){ a=timeOf(P.pos); txt='Ab '+P.txt; } else if(P&&P.bars) return {ok:0,txt:P.txt+' gibt es nicht'}; } }
  if(loop){ if(a==null){ if(PL.loop){ a=PL.loop.a; e=PL.loop.e; txt='Takt '+PL.loop.txt; } else return {ok:0,txt:'Welche Takte? z. B. „Takt 3 bis 5 loopen“'}; }
    if(e==null){ const B2=sheetBars(), bb=B2.find(b=>a>=b.a-1e-3&&a<b.b); e=bb?bb.b:a+2; txt=txt.replace(/^Ab /,''); }
    PL.loop={a,e,txt:txt.replace(/^Takt /,'')}; plPlay(a,e); return {ok:1,txt:'Loop '+txt+' · „Loop aus“ zum Beenden',nosnap:1}; }
  PL.loop=null; plPlay(a,e); return {ok:1,txt:(txt?txt+' · ':'')+'Abspielen',nosnap:1}; }
// Liedteil aus dem Blatt (Namen kommen aus dem Ablauf: „Strophe 1“, „Refrain 2“ …), optional Durchlauf
function voxPart(t){ let k=null,name=null; for(const [key,nm,re] of TEILW){ if(new RegExp('(^| )('+re.source+')( |$)').test(t)){ k=key; name=nm; break; } } if(!k) return null;
  let tt=t, pass=null; const dm=/(\d+) (durchlauf|durchgang|durchläufe|runde|wiederholung)|(durchlauf|durchgang|runde) (\d+)/.exec(tt); if(dm){ pass=+(dm[1]||dm[4]); tt=tt.replace(dm[0],' '); }
  const src=TEILW.find(x=>x[0]===k)[2].source.replace(/\((?!\?)/g,'(?:'), nm=new RegExp('(\\d+) (?:'+src+')|(?:'+src+') (\\d+)').exec(tt); const n=nm?+(nm[1]||nm[2]):1;
  const parts=CH.ev.filter(x=>x.part).sort((x,y)=>x.t-y.t); if(!parts.length) return {err:'Im Blatt stehen keine Liedteile · erst den Ablauf ansagen (z. B. „Strophe: G 6, E-Moll 2, mal 3“)'};
  const lab=name+' '+n, i=parts.findIndex(x=>x.part===lab); if(i<0){ const have=[...new Set(parts.map(x=>x.part))].join(', '); return {err:(nm?lab:name)+' gibt es im Blatt nicht · da sind: '+have}; }
  const B=sheetBars(), barA=tm=>{ const b=B.find(q=>tm>=q.a-1e-3&&tm<q.b); return b&&tm-b.a<(b.b-b.a)*0.3?b.a:tm; };
  let a=barA(parts[i].t), e=i+1<parts.length?barA(parts[i+1].t):null, txt=lab;
  if(pass!=null){ const P=CH.ev.filter(x=>x.abPass!=null&&x.t>=parts[i].t-1e-3&&(e==null||x.t<e-1e-3)).sort((x,y)=>x.t-y.t), ps=[...new Set(P.map(x=>x.abPass))];
    if(pass<1||pass>ps.length) return {err:lab+' hat '+(ps.length||1)+(ps.length===1||!ps.length?' Durchlauf':' Durchläufe')};
    const p0=P.find(x=>x.abPass===ps[pass-1]), p1=P.find(x=>x.abPass===ps[pass]); a=barA(p0.t); if(p1) e=barA(p1.t); txt=lab+', '+pass+'. Durchlauf'; }
  return {a,e,txt}; }
// Weitere Befehle, jeweils dieselbe Funktion wie der Knopf
function voxExtra(t,P,cur,nb){
  if(/HINW(NEXT|PREV)/.test(t)){ const L=CH.ev.filter(e=>e.chk).sort((a,b)=>a.t-b.t); if(!L.length) return {ok:1,txt:'Keine Hinweise (mehr) da',nosnap:1};
    const ref=CH.hintT??-1, nx=/NEXT/.test(t)?(L.find(e=>e.t>ref+1e-3)||L[0]):([...L].reverse().find(e=>e.t<ref-1e-3)||L[L.length-1]); const why=nx.chkWhy||'';
    CH.hintT=nx.t; if(CH.edm) setEditMode(false); openEdit(nx); const k=sheetBars().findIndex(b=>nx.t>=b.a-1e-3&&nx.t<b.b); return {ok:1,txt:'Hinweis in Takt '+(k+1)+(why?' · '+why:'')+' · noch '+(L.length-1),nosnap:1}; }
  if(/AUSRICHT/.test(t)){ if(P&&P.bars) markBars(P.bars); else if(/ALLES/.test(t)){ if(CH.edm) setEditMode(false); } $('#calign').click(); return {ok:1,txt:(P&&P.bars?P.txt:CH.sel.size?'Markiertes':'Ganzes Stück')+' ausgerichtet',nosnap:1}; }
  const fm=/(?:(\d+|einen|ein|eine) )?(schlag|schläge|viertel|achtel|sechzehntel|rasterschritt|rasterschritte|schritt|schritte)? ?(früher|später)(?: |$)/.exec(t);
  if(fm&&(fm[2]||fm[1]||CH.sel.size||cur)){ const n=fm[1]&&/\d/.test(fm[1])?+fm[1]:1, u=fm[2]||'schritt', beats=/schlag|schläge|viertel/.test(u)?1:/achtel/.test(u)?0.5:/sechzehntel/.test(u)?0.25:1/gridDiv(), st=1/gridDiv();
    P=voxPos(t.replace(fm[0],' ')); // „Takt 4 zwei Sechzehntel später“: die 2 ist die Menge, keine Zählzeit
    if(P&&P.bars) markBars(P.bars); else if(P&&P.pos!=null){ const L=P.end!=null?rangeEv(P.pos,P.end):rangeEv(P.pos-0.25,P.pos+0.25); if(L.length){ setEditMode(true); CH.sel.clear(); CH.selBars.clear(); L.forEach(e=>CH.sel.add(e)); edUI(); } }
    else if(!CH.sel.size&&cur){ const c=cur; closeEdit(); setEditMode(true); CH.sel.clear(); CH.sel.add(c); edUI(); }
    if(!CH.sel.size) return {ok:0,txt:'Was soll ich schieben? Erst antippen oder markieren'};
    const d=(fm[3]==='früher'?-1:1)*n*beats/st; nudgeSel(d); return {ok:1,txt:(n>1?n+' ':'')+({schlag:'Schlag',schläge:'Schläge',viertel:'Viertel',achtel:'Achtel',sechzehntel:'Sechzehntel'}[u]||'Rasterschritt')+(n>1&&/schritt/.test(u)?'e':'')+' '+fm[3],nosnap:1}; }
  if(/EINFUEG/.test(t)){ if(!CLIP.items) return {ok:0,txt:'Erst kopieren („Takt 1 bis 2 kopieren“)'}; const tg=/takt (\d+)(?: ?,? (\d+[+ea]?))?/.exec(t); if(!tg) return {ok:0,txt:'Wohin? „einfügen bei Takt 9“'};
    let tp=(+tg[1]-1)*nb; if(tg[2]){ const b=voxBeat(tg[2]); if(b!=null) tp+=b; } setEditMode(true); const r=placePos('paste',tp); return {ok:!!r,txt:r||'Nichts eingefügt'}; }
  if(/EDITAN/.test(t)){ setEditMode(true); return {ok:1,txt:'Edit an',nosnap:1}; }
  if(/EDITAUS/.test(t)){ if(CH.edm) $('#cedDone').click(); closeEdit(); return {ok:1,txt:'Edit aus',nosnap:1}; }
  if(/GEHZU/.test(t)){ const B=sheetBars(); if(!(P&&(P.bars||P.bar!=null))) return {ok:0,txt:'Zu welchem Takt?'}; const k=P.bars?P.bars[0]:P.bar; if(!B[k]) return {ok:0,txt:'Takt '+(k+1)+' gibt es nicht'};
    if(PL.on){ plSeek(B[k].a); return {ok:1,txt:'Ab Takt '+(k+1),nosnap:1}; } const el=document.querySelector(`#cstrip [data-barno="${k}"]`); if(el) el.scrollIntoView({block:'center',behavior:'smooth'}); return {ok:1,txt:'Takt '+(k+1),nosnap:1}; }
  if(/ZOOM(IN|OUT|NORM)/.test(t)){ const z=/ZOOMNORM/.test(t)?1:sheetZ()*(/ZOOMIN/.test(t)?1.25:0.8); setSheetZ(z); return {ok:1,txt:'Zoom '+Math.round(sheetZ()*100)+' %',nosnap:1}; }
  if(/SPW(PICK|MEL|STRUM)/.test(t)){ S.play=/PICK/.test(t)?'pick':/MEL/.test(t)?'melody':'strum'; save(); playUI(); return {ok:1,txt:'Spielweise '+PLAYN[playMode()]+' · gilt ab der nächsten Aufnahme',nosnap:1}; }
  if(/MET(AN|AUS)/.test(t)){ const on=/METAN/.test(t); if(!!metCfg().on!==on) metSet('on',on); return {ok:1,txt:on?'Metronom an ('+metCfg().bpm+' BPM)':'Metronom aus',nosnap:1}; }
  if(/SPEICHERN/.test(t)){ $('#ccap').click(); return {ok:1,txt:'Speichern',nosnap:1}; }
  if(/HILFE/.test(t)){ openHelp(); return {ok:1,txt:'Bedienhilfe',nosnap:1}; }
  if(/NFRESTORE/.test(t)){ nfRestoreMenu(); return {ok:1,txt:'Letzte Sitzung …',nosnap:1}; }
  return null; }
function voxDo(t){ const nb=(sheetBars()[0]||{g:{beats:4}}).g.beats, P=voxPos(t), cur=ED.ev||(CH.sel.size===1?[...CH.sel][0]:null);
  const strM=/ ?S(\d) /.exec(' '+t+' '), str=strM?+strM[1]:null;
  if(/PLAY|STOPP|TEMPOX|LOOP/.test(t)) return voxPlay(t);
  { const xr=voxExtra(t,P,cur,nb); if(xr) return xr; }
  if(/RÜCKGÄNGIG/.test(t)||/^zurück\b/.test(t)){ const m=/(\d+) (?:x )?RÜCKGÄNGIG/.exec(t), n=Math.min(20,m?+m[1]:1); let k=0; for(;k<n&&UNDO.length;k++) $('#cundo').click(); return {ok:1,txt:k>1?k+' Schritte rückgängig':(k?'Rückgängig':'Nichts zum Zurücknehmen'),nosnap:1}; }
  if(/WIEDERHOL/.test(t)){ $('#credo').click(); return {ok:1,txt:'Wiederholt',nosnap:1}; }
  if(/CHKWEG/.test(t)){ const n=CH.ev.filter(e=>e.chk).length; if(!n) return {ok:1,txt:'Keine Hinweise da',nosnap:1}; $('#cmChk').click(); return {ok:1,txt:n+(n>1?' Hinweise':' Hinweis')+' entfernt',nosnap:1}; }
  if(/MARKWEG/.test(t)){ CH.sel.clear(); CH.selBars.clear(); CH.stripKey=''; edUI(); return {ok:1,txt:'Markierung weg',nosnap:1}; }
  if(/MARKIER/.test(t)){ if(!P) return {ok:0,txt:'Welche Takte markieren?'}; const bars=P.bars||[P.bar]; markBars(bars); return {ok:1,txt:P.txt+' markiert',nosnap:1}; }
  // Quelle: genannte Takte/Stelle, sonst die markierten
  const srcFromPos=()=>{ if(P&&P.bars){ markBars(P.bars); return true; } if(P&&P.pos!=null){ const L=(P.end!=null?rangeEv(P.pos,P.end):rangeEv(P.pos-0.25,P.pos+0.25)); if(!L.length) return false; setEditMode(true); CH.sel.clear(); CH.selBars.clear(); L.forEach(e=>CH.sel.add(e)); edUI(); return true; } return CH.sel.size>0; };
  if(/KOPIER|VERSCHIEB/.test(t)){ const mv=/VERSCHIEB/.test(t), sim=/ALLESIM/.test(t);
    // Ziel: „nach/auf takt 9“, „nach takt 9 , 3“, „auf die 1“ (nur Zählzeit = im selben Takt wie die Quelle)
    const tgRe=/(?:nach|auf|zu|zur) (?:die |den |der )?(?:takt (\d+)(?: ?,? (\d+[+ea]?))?|(\d+[+ea]?))(?= |$)/, tg=tgRe.exec(t);
    const tt=tg?t.slice(0,tg.index)+' '+t.slice(tg.index+tg[0].length):t;
    const P2=voxPos(tt,true); const Pz=P2; // Quelle: alles außer dem Ziel
    const tm=tg?[tg[0],tg[1]!=null?tg[1]:null,tg[1]!=null?tg[2]:tg[3]]:null;
    // Akkordname in der Quelle genannt („Takt 1, 2 G auf die 1 schieben“) → nur Akkorde an der Stelle, nicht die Töne daneben
    const onlyCh=/akkord/.test(tt)||!!voxChord(tt.replace(/takt \d+( ,)? ?(\d+[+ea]?)?( bis (takt )?\d+( ,)? ?(\d+[+ea]?)?)?/,' ').replace(/VERSCHIEB|KOPIER/g,' '));
    if(Pz&&Pz.bars&&/\d+[+ea]|von \d/.test(tt.replace(/takt \d+/g,''))&&!confirm('Ganzen '+Pz.txt+(mv?' verschieben':' kopieren')+'?')) return {ok:0,txt:'Nichts geändert'};
    if(Pz&&Pz.bars) markBars(Pz.bars); else if(Pz&&Pz.pos!=null){ let L=(Pz.end!=null?rangeEv(Pz.pos,Pz.end):rangeEv(Pz.pos-0.25,Pz.pos+0.25)); if(onlyCh) L=L.filter(e=>e.type!=='note'); else if(str!=null) L=L.filter(e=>e.type==='note'&&e.s===str); setEditMode(true); CH.sel.clear(); CH.selBars.clear(); L.forEach(e=>CH.sel.add(e)); edUI(); }
    if(!CH.sel.size) return {ok:0,txt:Pz&&Pz.pos!=null?'Bei '+Pz.txt+' liegt '+(onlyCh?'kein Akkord':str!=null?'nichts auf der '+SN[str]:'nichts'):'Was soll ich '+(mv?'verschieben':'kopieren')+'? Erst markieren'};
    if(sim&&!mv){ $('#cedCopy').click(); const n=simStart(); return {ok:1,txt:n?n+(n>1?' ähnliche Stellen':' ähnliche Stelle')+' gefunden · prüfen und „Übernehmen“':'Keine ähnlichen Stellen gefunden',nosnap:1}; }
    if(!tm&&!mv){ $('#cedCopy').click(); return {ok:1,txt:'Kopiert · jetzt „einfügen bei Takt …“',nosnap:1}; }
    if(!tm) return {ok:0,txt:'Wohin? „nach Takt …“ oder „auf die 1“'};
    const bars=selIsBars(), a0=selAnchor(); const barI=tm[1]!=null?+tm[1]-1:Math.floor(a0/nb+1e-6); let tp=barI*nb;
    if(tm[2]){ const b=voxBeat(tm[2]); if(b!=null) tp+=b; } else if(!bars){ tp+=a0-Math.floor(a0/nb+1e-6)*nb; }
    if(!mv){ $('#cedCopy').click(); const r=placePos('paste',tp); return {ok:!!r,txt:r||'Nichts eingefügt'}; }
    const r=placePos('move',tp); return {ok:!!r,txt:r||'Nichts verschoben'}; }
  if(/LÖSCH/.test(t)){ const notesOnly=/töne|noten/.test(t), chOnly=/akkord/.test(t)&&!notesOnly, P=voxPos(t,true);
    let L=null; if(P&&P.bars) L=barsEv(P.bars); else if(P&&P.pos!=null) L=(P.end!=null?rangeEv(P.pos,P.end):rangeEv(P.pos-0.25,P.pos+0.25)); else if(/(ton|akkord|den|das)\b/.test(t)&&cur) L=[cur]; else if(CH.sel.size) L=selList(); else if(cur) L=[cur];
    if(!L||!L.length) return {ok:0,txt:'Was soll ich löschen?'}; if(notesOnly||str!=null) L=L.filter(e=>e.type==='note'); if(str!=null) L=L.filter(e=>e.s===str); if(chOnly) L=L.filter(e=>e.type!=='note');
    if(!L.length) return {ok:0,txt:str!=null?'Dort ist nichts auf der '+SN[str]:chOnly?'Dort ist kein Akkord':'Dort sind keine Töne'};
    if(P&&P.bars&&/\d+[+ea]|von \d/.test(t.replace(/takt \d+/g,''))&&!confirm('Ganzen '+P.txt+' löschen ('+L.length+' Elemente)?')) return {ok:0,txt:'Nichts gelöscht'};
    if(P&&P.all&&!confirm('Das ganze Stück löschen ('+L.length+' Elemente)?')) return {ok:0,txt:'Nichts gelöscht'};
    else if(!(P&&P.all)&&!(P&&P.bars&&/\d+[+ea]|von \d/.test(t.replace(/takt \d+/g,'')))&&!confirm(tx('sprache.loeschen.frage',{was:(P?P.txt+': ':'')+L.length+(L.length>1?' Elemente':' Element')}))) return {ok:0,txt:tx('sprache.loeschen.nein')};
    snap(); const set=new Set(L); CH.ev=CH.ev.filter(e=>!set.has(e)); L.forEach(e=>{ CH.sel.delete(e); }); if(ED.ev&&set.has(ED.ev)) closeEdit(); CH.stripKey=''; edUI();
    return {ok:1,txt:(P?P.txt+(str!=null?' · '+SN[str]:'')+': ':'')+L.length+(notesOnly||str!=null?(L.length>1?' Töne':' Ton'):chOnly?(L.length>1?' Akkorde':' Akkord'):(L.length>1?' Elemente':' Element'))+' gelöscht'}; }
  // Ton setzen: Stelle + Saite + Bund; Folge: Saite + „3, slide 5, 3, 1, pulloff 0“
  if(str!=null){ const after=t.slice(t.indexOf('S'+str)+2); const items=[]; let art=null;
    after.replace(/(slide|hammeron|pulloff|anschlag)|bund (\d+)|(\d+)/g,(m,a,b2,c)=>{ if(a){ art=a==='hammeron'?'h':a==='pulloff'?'p':a==='slide'?'slide':'pick'; return m; } const f=+(b2||c); if(f<=17){ items.push({f,art:art||'pick'}); art=null; } return m; });
    if(!items.length&&cur&&cur.type==='note'){ snap(); const m=cur.m; let f=m-OPEN_M[str]; if(f<0||f>17) return {ok:0,txt:'Der Ton geht auf der '+SN[str]+' nicht'}; cur.s=str; cur.f=f; cur.edited=true; learnString&&learnString(cur); CH.stripKey=''; if(ED.ev) renderEdit(); return {ok:1,txt:SN[str]}; }
    if(!items.length) return {ok:0,txt:'Welcher Bund?'};
    let p=P&&P.pos!=null?P.pos:(P&&P.bars?P.bars[0]*nb:null); if(p==null&&cur) p=posOf(cur.t)+0.5; if(p==null) return {ok:0,txt:'Wo? Bitte mit „Takt …“'};
    if(items.length===1&&P&&P.pos!=null){ setNoteAt(p,str,items[0].f,items[0].art); return {ok:1,txt:P.txt+' · '+SN[str]+' Bund '+items[0].f}; }
    const r=placeSeq(p,str,items); return {ok:1,txt:SN[str]+': '+items.map(x=>(x.art!=='pick'?({slide:'/',h:'h',p:'p'}[x.art]):'')+x.f).join(' ')+' · '+r.hit+' von '+r.n+' auf gehörte Anschläge gelegt'}; }
  // nach Antippen: Bund, Spieltechnik
  const bm=/bund (\d+)/.exec(t); if(bm&&cur&&cur.type==='note'){ snap(); cur.f=+bm[1]; cur.m=OPEN_M[cur.s]+cur.f; cur.key='note|'+cur.m; cur.edited=true; learnNote(cur,'map'); CH.stripKey=''; if(ED.ev) renderEdit(); return {ok:1,txt:'Bund '+bm[1]}; }
  const am=/(slide|hammeron|pulloff|anschlag)/.exec(t); if(am&&cur&&cur.type==='note'&&!P){ snap(); cur.art=am[1]==='hammeron'?'h':am[1]==='pulloff'?'p':am[1]==='slide'?'slide':'pick'; cur.edited=true; CH.stripKey=''; if(ED.ev) renderEdit(); return {ok:1,txt:ARTN[cur.art]}; }
  // Akkord an einer Stelle (auch „takt 5 , 3 bis 6 , 1 e moll“: gilt dort, andere fallen weg)
  const c=voxChord(t.replace(/takt \d+( ,)? \d+[+ea]?( bis (takt )?\d+( ,)? ?(\d+[+ea]?)?)?/,' '));
  if(c){ let p=null,pe=null; const rm=/takt (\d+) ?,? ?(\d+[+ea]?)? bis (?:takt )?(\d+) ?,? ?(\d+[+ea]?)?/.exec(t);
    if(rm){ p=(+rm[1]-1)*nb+(rm[2]?voxBeat(rm[2]):0); pe=rm[4]!=null?(+rm[3]-1)*nb+voxBeat(rm[4]):(rm[2]?(+rm[1]-1)*nb+Math.min(nb,voxBeat(rm[3])+1):(+rm[3])*nb); }
    else if(P&&P.pos!=null) p=P.pos; else if(P&&P.bars) p=P.bars[0]*nb; else if(cur&&cur.type!=='note'){ snap(); setEv(cur,c.r,c.qi,'chord'); cur.bass=c.bass; cur.f=evFrets(cur); CH.stripKey=''; CH.key=''; if(ED.ev) renderEdit(); return {ok:1,txt:evName(cur)}; }
    if(p==null) return {ok:0,txt:'Wo soll der Akkord hin? „Takt …, …“'};
    setChordAt(p,c,pe); const nm=evName({type:'chord',r:c.r,qi:c.qi,bass:c.bass}); return {ok:1,txt:nm+' auf '+(P?P.txt:'Takt')}; }
  return {ok:0,txt:''}; }
const VOXLOG=[]; // Sprachprotokoll (kommt in den Mitschnitt): gehört, verstanden, getan
function voxRun(alts){ let best=null; const edm0=CH.edm, sel0=CH.sel.size>0;
  // Ablauf vorgeben („Strophe: G 6, E-Moll 2, mal 3 …“, „Ablauf: Strophe, Refrain“, „Ablauf aus“) – eigener Weg, ein Rückgängig-Schritt
  const playish=a=>/(^|[\s,])(play|plei|blay|spiel\w*|abspiel\w*|anhören|vorspielen|stopp?|loop\w*|schleife)(?=[\s,.!?]|$)/i.test(a);
  const ab=alts.find(a=>ABLAUF_RE.test(a)&&!playish(a)); if(ab){ const n0=UNDO.length, r=ablaufCmd(ab); VOX.snaps=Math.max(0,UNDO.length-n0); undoUI();
    if(VOXLOG.length<500) VOXLOG.push({when:new Date().toISOString(),heard:alts.slice(0,3),used:ab,norm:['ablauf'],done:r.ok?[r.txt]:[],bad:r.ok?[]:[r.txt],steps:VOX.snaps});
    voxMsg((r.ok?'Verstanden: ':'')+r.txt+(r.ok?'':' · gehört: „'+ab+'“'),VOX.snaps>0); return; }
  const isCmd=x=>/takt|LÖSCH|KOPIER|VERSCHIEB|MARKIER|RÜCKGÄNGIG|WIEDERHOL|MARKWEG|CHKWEG|ALLES|PLAY|STOPP|TEMPOX|LOOP|HINW|AUSRICHT|EINFUEG|EDITAN|EDITAUS|GEHZU|ZOOM|SPW|MET(AN|AUS)|SPEICHERN|HILFE|NFRESTORE|früher|später|S\d/.test(x);
  for(const raw of alts){ const P0=voxNorm(raw).split(/ (?:und dann|danach|dann) /), parts=[]; P0.forEach(x=>{ if(parts.length&&!isCmd(x)) parts[parts.length-1]+=' , '+x; else parts.push(x); }); const sim=[];
    // Trockenlauf geht nicht ohne Seiteneffekte – nimm die erste Variante, deren erster Teil erkannt wird
    best={raw,parts}; if(parts.some(x=>/takt|LÖSCH|KOPIER|VERSCHIEB|MARKIER|RÜCKGÄNGIG|WIEDERHOL|S\d|bund|slide|hammeron|pulloff|anschlag|moll|dur|MARKWEG|ALLESIM/.test(x))) break; }
  if(!best) return; let n0=UNDO.length; const done=[], bad=[];
  for(const part of best.parts){ const r=voxDo(part.trim()); (r.ok?done:bad).push(r.txt); if(!r.ok) break; }
  // Nicht selbst markiert? Dann nach dem Befehl aufräumen: Auswahl weg, zurück in die vorige Ansicht (ausdrücklich Markiertes bleibt)
  const marked=best.parts.some(x=>/MARKIER/.test(x)); if(!marked&&!sel0){ if(CH.sel.size){ resolveSel(); CH.sel.clear(); CH.selBars.clear(); } if(!edm0&&CH.edm) setEditMode(false); }
  VOX.snaps=Math.max(0,UNDO.length-n0); CH.stripKey=''; CH.key=''; chordsUI(); undoUI(); edUI();
  if(VOXLOG.length<500) VOXLOG.push({when:new Date().toISOString(),heard:alts.slice(0,3),used:best.raw,norm:best.parts,done,bad,steps:VOX.snaps});
  if(done.length) voxMsg('Verstanden: '+done.join(' · ')+(bad.length&&bad[0]?' · '+bad[0]:''),VOX.snaps>0);
  else voxMsg(bad[0]?bad[0]+' · gehört: „'+best.raw+'“':'Nicht verstanden: „'+best.raw+'“',false); }
function voxMsg(t,undo){ const b=$('#cbanner'); clearTimeout(BPB.bt); b.textContent=t; if(undo){ const u=document.createElement('button'); u.className='mini'; u.id='cSayUndo'; u.textContent='Rückgängig'; u.style.marginLeft='8px'; b.appendChild(u); } b.classList.add('on'); BPB.bt=setTimeout(()=>b.classList.remove('on'),undo?9000:6000); }
$('#cbanner').addEventListener('click',e=>{ if(e.target.id!=='cSayUndo') return; for(let i=0;i<VOX.snaps;i++) $('#cundo').click(); VOX.snaps=0; voxMsg('Rückgängig gemacht',false); });
// Sprechknopf: einmal tippen = zuhören (auch über Pausen hinweg), nochmal tippen = fertig und ausführen.
// Chrome beendet die Erkennung von sich aus (Stille, zeitweise auch mitten im Sprechen) → solange aktiv, gesichert neu starten.
// Nach 15 s ohne Sprache hört die App von selbst auf. Android liefert manche Sätze doppelt → herausfiltern.
function voxSR(){ return window.SpeechRecognition||window.webkitSpeechRecognition; }
function voxToggle(){ if(VOX.active) voxFinish(); else voxStart(); }
function voxStart(){ if(CH.mic) return cMsg('Sprechen geht, wenn keine Aufnahme läuft'); if(!voxSR()) return cMsg('Sprechen geht in diesem Browser nicht · bitte Chrome nutzen');
  VOX.plResume=PL.on; if(PL.on) plStop(); VOX.active=true; VOX.final=[]; VOX.seg=''; VOX.segAlts=[]; VOX.txt=''; VOX.err=null; VOX.restarts=[]; VOX.lastSpeech=performance.now();
  document.querySelectorAll('.say').forEach(b=>{ b.classList.add('on'); b.setAttribute('aria-pressed','true'); }); voxMsg('Hört zu … zum Beenden nochmal tippen',false); clearTimeout(BPB.bt);
  clearInterval(VOX.tick); VOX.tick=setInterval(()=>{ if(VOX.active&&performance.now()-VOX.lastSpeech>15000){ voxFinish(VOX.final.length||VOX.seg?null:'Nach 15 s ohne Sprache beendet'); } },500);
  voxListen(); }
function voxListen(){ const SR=voxSR(); const r=new SR(); r.lang='de-DE'; r.interimResults=true; r.continuous=true; r.maxAlternatives=3; VOX.rec=r; VOX.seg='';
  r.onresult=e=>{ VOX.lastSpeech=performance.now(); const fin=[], alts=[]; let inter='';
    for(let i=0;i<e.results.length;i++){ const x=e.results[i]; if(x.isFinal){ fin.push(x[0].transcript.trim()); if(i===e.results.length-1){ alts.length=0; for(let k=0;k<x.length;k++) alts.push(x[k].transcript.trim()); } } else inter+=x[0].transcript+' '; }
    let cur=''; fin.forEach(f=>{ const F=f.toLowerCase(), C=cur.toLowerCase(); if(!cur||F.startsWith(C)) cur=f; else if(!C.includes(F)) cur+=' '+f; });
    VOX.seg=cur; if(alts.length) VOX.segAlts=alts; const all=(VOX.final.join(' ')+' '+cur+' '+inter).replace(/\s+/g,' ').trim(); VOX.txt=all; $('#cbanner').textContent='Hört zu … „'+all+'“'; };
  r.onerror=e=>{ VOX.err=e.error; };
  r.onend=()=>{ if(VOX.seg){ VOX.final.push(VOX.seg); VOX.seg=''; }
    if(VOX.active){ const hard=VOX.err&&!['no-speech','aborted'].includes(VOX.err); const now=performance.now(); VOX.restarts=VOX.restarts.filter(t=>now-t<4000); VOX.restarts.push(now);
      if(hard||VOX.restarts.length>4){ voxFinish(VOX.err==='not-allowed'?'Mikrofon für Sprache nicht erlaubt':VOX.err==='network'?'Sprechen braucht Internet':null); return; }
      VOX.err=null; setTimeout(()=>{ if(VOX.active) try{ voxListen(); }catch(_){ voxFinish(null); } },150); return; }
    voxEval(); };
  try{ r.start(); }catch(_){ voxFinish(null); } }
// Fertig: noch kurz auf die letzten Worte warten, dann ausführen
function voxFinish(msg){ if(!VOX.active) return; VOX.active=false; clearInterval(VOX.tick); document.querySelectorAll('.say').forEach(b=>{ b.classList.remove('on'); b.setAttribute('aria-pressed','false'); });
  VOX.endMsg=msg; VOX.done=false; const r=VOX.rec; if(r){ try{ r.stop(); }catch(_){ voxEval(); } setTimeout(()=>{ if(!VOX.done) voxEval(); },1500); } else voxEval(); }
function voxEval(){ if(VOX.done) return; VOX.done=true; if(VOX.seg){ VOX.final.push(VOX.seg); VOX.seg=''; } const txt=VOX.final.join(' ').replace(/\s+/g,' ').trim(); VOX.final=[];
  if(!txt){ voxMsg(VOX.endMsg||'Nichts gehört',false); plAfterVox(); return; } voxRun(VOX.segAlts&&VOX.segAlts.length>1&&VOX.segAlts[0]===txt?VOX.segAlts:[txt]); VOX.segAlts=[]; plAfterVox(); }
// Nach dem Zuhören: lief vorher etwas und hat der Befehl nichts zum Abspielen gesagt, geht es an derselben Stelle weiter (Loop bzw. Bereich bleiben)
function plAfterVox(){ if(!VOX.plResume) return; VOX.plResume=false; if(PL.on) return; if(PL.loop){ const p=PL.pos; plPlay(p!=null&&p>=PL.loop.a&&p<PL.loop.e?p:PL.loop.a,PL.loop.e); } else plPlay(PL.pos,PL.end); }
function voxStop(){ voxFinish(null); }
document.querySelectorAll('#csay,#csay2').forEach(b=>{ b.classList.remove('soon'); delete b.dataset.soon; b.setAttribute('aria-pressed','false'); b.addEventListener('click',voxToggle); });
window.__vox=(t)=>voxRun([t]); // für Tests


