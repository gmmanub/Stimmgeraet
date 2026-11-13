# Pflichtenheft – Gitarren-App

Stand: 12.11.2026 · Wird bei jeder Änderung an der App mitgepflegt.

## 1. Überblick

Eine Web-App für Akustikgitarre, gedacht für zu Hause, optimiert für das Samsung S24 (Chrome).

- **Code:** `index.html` in diesem Repository (eine Datei: HTML, CSS, JavaScript)
- **Live-Adresse:** GitHub Pages dieses Repositorys
- **Vorschau ohne Mikrofon:** Claude-Artefakt „Gitarren-Stimmgerät“. Dort ist das Mikrofon gesperrt, die App läuft mit simulierter Gitarre.
- **Mikrofon:** nur über HTTPS (GitHub Pages). Lokal geöffnete Dateien funktionieren auf dem S24 nicht.

## 2. Arbeitsweise

1. Manu beschreibt einen Wunsch oder stellt eine Frage.
2. Claude schlägt vor, was es ändern würde. **Nichts wird ohne Freigabe umgesetzt.**
3. Bei Animationen oder größeren Designfragen erst Vorschauen mit Reglern im Chat zeigen; Manu schickt seine Werte über „Werte senden“. Kleine Änderungen (Größe, Farbe, Position) nach kurzer Beschreibung direkt umsetzen und nur kurz testen; große Änderungen (Erkennung, Abläufe) vorher besprechen und gründlich testen.
4. Nach Freigabe: Claude ändert `index.html`, prüft den **ganzen Ablauf mit Davor und Danach** (keine Folgefehler), lädt hoch und aktualisiert dieses Pflichtenheft.
5. Manu testet auf der Pages-Adresse nach einmaligem Neuladen (etwa 1 Minute nach dem Hochladen).

## 3. Globale Regeln

- **Notennamen:** Standard „B“ (international). Umschalter B/H in den Einstellungen gilt für die ganze App, auch für Akkorde und spätere Tabs. Bei H heißt B♭ „B“.
- **Sprache:** Deutsch.
- **Design:** dezent, erwachsen, aufgeräumt. Basis ist das Pitchblack-Pedal.
  - Schrift: **M PLUS Rounded 1c** (runde Ecken, gut lesbare Ziffern)
  - Dunkelmodus Standard: Anthrazit `#171b20`, Text hellgrau `#c9d1d9` (keine harten Kontraste)
  - Hellmodus: gedämpftes Hellgrau `#dde1e6`, Text `#2a3139`
  - Farben: Anzeige gedämpftes Stahlblau (Farbton 212, Sättigung 42 %), „Ton sitzt“ Eisblau (Farbton 200, Sättigung 95 %) mit fast weißem Kern. Über ein Farbrad (Farbton + Sättigung) änderbar.
- **Bildschirm bleibt an**, solange ein Werkzeug aktiv ist (Wake Lock).
- **Mikrofon nur bei Bedarf:** Im Menü ist es immer aus. Sobald die App nicht sichtbar ist (App-Wechsel, Bildschirm aus), wird es sofort freigegeben. Wird ein Werkzeug geschlossen, während das Mikro noch startet, wird es gleich wieder freigegeben.
- **Mikrofon:** Rauschunterdrückung, Echo- und Pegelautomatik aus.
- **Einstellungen werden lokal gespeichert** (localStorage).

## 4. Startbildschirm

Zwei runde Buttons untereinander: **Stimmgerät** und **Akkorde**. Darunter: aktuelle Stimmung, Feinstimmung, Saitentöne, Kammerton. Oben rechts: Einstellungen.

## 5. Einstellungen

- Darstellung: Dunkel / Hell; Schalter „Wellenlinie in den Balken“ (Standard: an)
- Notenbezeichnung: B / H
- Feinstimmung: **Mathematisch** (exakt 0 Cent) / **Menschlich** (Standard; Peterson-„Sweetened“-Werte) / **Buzz Feiten**
  - Menschlich, Saite 6→1: −2,3 · 0 · 0 · −0,4 · −2,1 · −2,3 Cent
  - Buzz Feiten, Saite 6→1: −2 · −2 · −2 · −2 · +1 · 0 Cent
  - Gilt automatisch nur für Standard, Halbton/Ganzton tiefer, Drop D, Drop C. Bei DADGAD und Open-Stimmungen automatisch Mathematisch (Anzeige „Mathe (auto)“), per Schalter erzwingbar.
- Stimmungen: Standard, Drop D, Halbton tiefer, Ganzton tiefer, Drop C, DADGAD, Open G, Open D, Open E, Open C, Chromatisch
- Kammerton A4: 415–466 Hz, Schnellwahl 432 / 440 / 442 / 443
- Farbrad für „Anzeige“ und „Ton sitzt“
- Vibration, wenn der Ton sitzt (Standard: an)

## 6. Modul Stimmgerät (fertig)

### Aufbau
Mikro startet beim Öffnen. Im Hintergrund wird es freigegeben und beim Zurückkommen wieder eingeschaltet.

Oben 15 breite Balken (große Fläche), darunter groß der Ton, darunter Saite und Bund. Keine Cent-/Hz-Anzeige, keine Textzeile, kein Strobe, kein Richtungsstreifen (bewusst entfernt).

### Zielbestimmung
- Nahe an einer leeren Saite (≤ 1,5 Halbtöne): Ziel ist diese Saite.
- Tiefer als die tiefste Saite: Ziel ist die tiefste Saite (lockere Saite).
- Sonst: gegriffener Ton, chromatisch angezeigt. Die eingestellte Stimmung bleibt erhalten.
- Kontinuität: Beim gleitenden Hoch-/Runterstimmen bleibt die App bei der Saite.
- Mehr als 50 Cent daneben: äußerster Balken auf der passenden Seite leuchtet; klein links neben dem Zielton der gehörte Ton („D♯ → E“).
- Saite/Bund: alle möglichen Griffe (max. 3) in fester Reihenfolge, der wahrscheinlichste hervorgehoben.

### Balken und Welle (abgestimmte Werte, `const P` im Code)
| Parameter | Wert |
|---|---|
| Wellen über die Breite (FQ) | 1,5 |
| Tempo der Welle (SP) | 0,8 |
| Überschwingen (OV) | 1,0 |
| Saitendicke (TH) | 2 |
| Zieldicke (TT) | 71, nach oben/unten weich auslaufend |
| Ziel-Deckkraft (TO) | 0,60 |
| Helligkeit Balken (BR) | 1,25 |
| Abstufung außen→innen (G) | 0,15 |
| Mittelbalken: Einblendbereich (FR) | 27 Cent |
| Mittelbalken: Vorab-Stärke (FS) | 0,40 |
| Übergang ins Ziel (TR) | 0,9 s |
| Kurve des Aufbaus (CU) | 1,2 |
| Lichteffekt (SW) | 0,60 |
| Tempo Lichteffekt (SS) | 2,2 |
| Nachleuchten (AG) | 0,90 |

### Verhalten
- Welle nur innerhalb der Balken sichtbar, in der Mitte und an den Rändern fixiert, läuft von der Mitte nach außen.
- Ziellinie schwingt mit der Lautstärke. Saitenlinie: zu hoch → wölbt sich nach oben, zu tief → nach unten; in Richtung der Verstimmung stärker, leichtes Überschwingen über die Ziellinie.
- Saitenlinie ist nie im Mittelbalken sichtbar.
- Leuchten nur auf der Seite, von der man kommt – **nie über die Mitte hinaus**, auch nicht beim Nachfedern.
- Mittelbalken unsichtbar, blendet beim Annähern weich ein.
- **Treffer (±2 Cent, 0,2 s stabil):** Mitte kommt weich an → erst danach läuft ein Lichtimpuls symmetrisch von der Mitte nach außen → alle Balken leuchten nach, Nachbarn der Mitte fast so hell wie die Mitte. Saitenlinie blendet aus, Ziellinie leuchtet heller und verschmilzt mit dem Mittelbalken.
- Buchstabe wächst weich um ca. 10 % und bleibt groß, mit Farbverlauf und kleinem Glow. **Kein Ploppen.**
- Helligkeit folgt der Lautstärke; neuer Anschlag hellt in ca. 0,2 s weich auf.
- **Verklingen im Stimmt-Zustand:** alles dimmt gemeinsam weich herunter, Mittelbalken zuletzt; Saitenlinie taucht dabei nicht wieder auf. Aufgehoben wird der Zustand erst durch einen neuen, nicht stimmenden Ton oder eine andere Saite.

## 7. Modul Akkorde (Stufe 1, in Test)

- Live-Erkennung über das Mikrofon: eigene FFT (16384 Punkte, ca. 30 Analysen/s), Tonklassen (Chroma) aus Spektralspitzen mit komprimierter Amplitude, Bereich 75–1500 Hz, Abgleich mit 84 Akkordmustern.
- Vokabular: Dur, Moll, 7, maj7, m7, sus2, sus4 auf allen 12 Grundtönen. Einzelton und Powerchord (z. B. E5) werden erkannt.
- **Entscheidung (Stand 12.11.):**
  - Bass = tiefster deutlich hörbarer *Akkordton* (Bonus 0,06, wenn er der Grundton ist). Die Korpusresonanz (~105 Hz) zählt so nicht als Bass.
  - Die 5 besten Kandidaten bekommen zusätzlich einen Bonus (0,15 × Übereinstimmung), wenn das gehörte Tonhöhenbild zu einem bekannten Griff passt. Das trennt z. B. Asus2 und Esus4 oder Cmaj7 und Em.
  - Powerchord nur, wenn die Terz unter 15 % liegt. Einzelton nur, wenn eine Tonklasse klar alleine steht.
  - **Ruhe:** Ein Wechsel braucht 0,3 s Stabilität und 0,04 Vorsprung, und zwar nur bis 0,8 s nach einem Anschlag. Beim Ausklingen bleibt der Akkord stehen, außer ein anderer liegt um mehr als 0,12 vorne.
- **Griffbild:** Pro Akkord mehrere gängige Griffe (z. B. G: 320003, 320033, 3x0003, 3x0033 und Barré-Formen). Die App wählt den Griff, dessen Tonhöhen (inkl. Obertönen) am besten zum Gehörten passen. Offene Griffe haben Vorrang. **Antippen** blättert zum nächsten Griff und hält ihn, bis der Akkord wechselt. Die Wahl wird gemerkt (Einstellungen, Schlüssel `voi`) und künftig bevorzugt.
- **Leiste oben rechts:** Reset-Knopf (Kreispfeil, leert Verlauf und angezeigten Akkord, gemerkte Griffe bleiben) und Mikro-Knopf (grau = aus, Akzentblau mit leichtem Leuchten = hört zu). Beim Öffnen ist das Mikro aus, Hinweis „Mikro oben rechts starten“. Nach **30 s Stille** schaltet es sich ab, Hinweis „Mikro nach 30 s Stille aus · oben rechts neu starten“. Im Hintergrund wird es ausgeschaltet und nur per Knopf wieder gestartet. Der letzte Akkord bleibt beim Stoppen stehen. Kein Sprachbefehl, weil das Mikro dafür dauerhaft lauschen müsste.
- **Layout (Werte von Manu, in `LAY` im Code):** Oben ein kompakter Kopf: Akkordname 47 px, daneben das Griffbild 78 px breit (antippen = nächster Griff, „Griff x von n“ darunter). Darunter ein **Tab-Streifen** über die volle Breite: 6 Saitenlinien (hohe e oben), Saitenabstand 22 px, Bundzahlen 20 px, Akkordname über dem Tab 19 px mit 12 px Abstand, Zeitmaßstab 88 px pro Sekunde, Griffzahlen im Akkord an. Der Streifen läuft nach links weiter und folgt der Aufnahme; wischt man zurück, bleibt er stehen und folgt erst wieder, wenn man ans Ende wischt. Gestrichelte Linie = „jetzt“.
- **Ereignisse:** Jeder erkannte Akkord wird mit Zeitstempel (Sekunden seit Aufnahmebeginn), Grundton, Art und Griff gespeichert (`CH.ev`). Nach Mikro-Stopp und Neustart geht der Verlauf mit 0,8 s Abstand weiter. Reset leert alles. Das ist die Grundlage für Bearbeiten, Lernen, Läufe und Takte.
- **Bearbeiten:** Einen Akkord im Tab antippen (oder den großen Akkordnamen für den letzten) öffnet ein Feld von unten. Der gewählte Akkord ist im Tab hinterlegt. Inhalt: Name und Zeitpunkt · **Ähnlich klingend** (5 Vorschläge aus dem gespeicherten Klangbild des Ereignisses, z. B. Esus4 → Asus2) · **Grundton** (12 Tasten, B/H-Schalter gilt) · **Art** (Dur, m, 7, maj7, m7, sus2, sus4, 5) · **Griff** (antippen blättert, wird für diesen Akkord gemerkt) · **Entfernen** · **Fertig**. Änderungen gelten sofort. Ist es der aktuelle Akkord, übernimmt auch die große Anzeige die Korrektur.
- **Klangbild je Ereignis:** Bei jedem erkannten Akkord werden Tonklassen (Chroma) und Tonhöhenbild mitgespeichert, als Grundlage für die Schnellwahl und das spätere Lernen.
- **Ähnlich klingend:** Akkorde mit genau denselben Tönen stehen immer vorn (Esus4 ↔ Asus2), danach die nächstbesten nach Klang.
- **Lernen:** Jede Korrektur speichert das Klangbild als Beispiel (lokal, Schlüssel `gitarre-lernen`, max. 150): „erkannt als X, richtig ist Y“. Liest die App später wieder X und ähnelt der Klang dem Beispiel (Ähnlichkeit ≥ 0,86 aus 30 % Tonklassen und 70 % tiefer Lage MIDI 40–60), zeigt sie Y mit dem Hinweis „Aus deiner Korrektur gelernt“. Wird ein Akkord zurück auf das Erkannte gestellt, wird das Beispiel gelöscht. Im Bearbeiten-Feld steht „Korrektur wird gemerkt · erkannt war X“. In den Einstellungen: Anzahl und „Alle gelernten Korrekturen vergessen“ (zweimal tippen).
- **Test Lernen:** Eine Korrektur Esus4 → Asus2 (Strophe 0:22) reicht: zweiter Durchgang der Strophe wird Asus2, in der Akkordtest-Aufnahme verschwindet das Hin und Her Asus2/Esus4 ganz. Ein echtes Esus4 mit tiefem E (022200) bleibt Esus4 (Ähnlichkeit höchstens 0,84).
- **Kleinigkeiten:** Während ein Bedienfeld offen ist, läuft die 30-s-Stille-Abschaltung nicht. Hat man im Tab zurückgewischt, springt der Streifen bei laufender Aufnahme nach 4 s ohne Berührung wieder ans Ende; beim Mikro-Start sofort.
- **Läufe (Stufe 1):** Zweite Analyse mit kürzerem Fenster (8192 Punkte). Je Halbton wird gemessen, was neu einsetzt. Setzen mehrere tiefe Saiten neu ein, ist es Strumming. Kommt nur oben (ab A3) ein klarer neuer Ton dazu, ist es ein Lauf-Ton. Er wird nach ca. 70 ms bestätigt. Slides/Bindungen: Die App folgt dem stärksten Nachbarton (±2 Halbtöne), Durchgangstöne werden nicht notiert; ein angeschlagener Startton (3/5) wird vorher notiert. Derselbe Ton wird nur bei echtem neuen Anschlag erneut notiert. Obertöne (Oktave/Quinte eines tieferen Tons) und Töne über G5 werden nicht als Lauf-Ton gewertet. Die Feinstimmung der Gitarre wird mitgelernt.
- **Lauf-Töne, Stufe 2:** Töne aus dem Akkordanschlag (Akkordton bis 0,45 s nach dem Strum) werden beim Erkennen des Akkords wieder entfernt. Einschwingen: in den ersten 75 ms einen Halbton daneben → nur Tonhöhe korrigiert. Startton vor dem Slide wird auch nach kurzer Dauer notiert. Hohe Töne ab C5 mit hörbarer Unteroktave gelten als Oberton.
- **Spieltechnik:** Slide (der Ton gleitet über Halbtöne oder neu aufgetauchte Zwischentöne), Hammer-on (ohne neuen Anschlag höher), Pull-off (ohne neuen Anschlag tiefer). Im Tab als kleines „/“, „\“, „h“, „p“ zwischen den Zahlen (bei gleicher Saite). Im Ton-Editor unter „Spieltechnik“ änderbar.
- **Verschieben (Stand 12.11.):** Lange drücken (ca. 0,4 s, kurzes Vibrieren) und ziehen. Kurzes Wischen scrollt weiter den Tab, Antippen öffnet das Bearbeiten.
  - **Taktstriche:** Jeder Strich (außer dem ersten) hat unten einen kleinen Griff. Zieht man ihn, wird der Takt davor länger oder kürzer, alle folgenden Striche rücken mit. Taktstriche sind intern eine Liste (`g.lines`), neue Takte schließen sich mit der Metronom-Länge an.
  - **Akkorde und Lauf-Töne:** ziehbar; sie rasten auf der nächsten Zählzeit ein (Akkorde auf Schläge, Lauf-Töne auf Achtel), wenn es Taktstriche gibt, sonst frei.
  - **„An Zählzeiten ausrichten“** (unter dem Tab, nur mit Taktstrichen): richtet alles auf einmal aus, danach 8 s lang „Rückgängig“.
- **Gleicher Anschlag:** Überschreiben, wenn der vorige Akkord jünger als 0,6 s ist und seitdem kein Strum kam.
- **Test-Mitschnitt:** Schalter in den Einstellungen (Gruppe „Test“, `capture`). Solange das Mikro in der Akkorderkennung läuft, wird das rohe Mikrofonsignal (vor dem Klick-Filter) als 16-Bit-Mono mitgeschnitten, max. 10 Minuten, über mehrere Mikro-Starts hinweg. Unter dem Tab: „Mitschnitt + Tab speichern (x s)“ lädt **eine** WAV-Datei herunter. Sie enthält zusätzlich einen Block `tabj` mit JSON: Kammerton, Feinstimmung, Metronom, Taktstriche, alle Ereignisse (Akkorde mit Griff, Lauf-Töne mit Saite/Bund/Spieltechnik, bearbeitet/gelernt) und je Mikro-Start die Zuordnung Datei-Zeit → Tab-Zeit (`wavStart`, `ctxStart`, `offset`). Zusätzlich enthält die Datei das **Live-Protokoll** (`live`): alles, was die App live erkannt hat, unverändert (Akkord neu/überschrieben, Ton neu/ersetzt/wegen Akkordanschlag entfernt). `events` ist der Stand nach Manus Korrekturen. So sind Fehlendes, Überflüssiges und Falsches direkt vergleichbar. Reset leert auch Mitschnitt und Protokoll.
- **Melodie im Strum:** Auch während gestrummt wird, zählt ein klar neuer Ton oben, wenn er nicht zum aktuellen Akkord gehört (z. B. das e beim G). Akkordfremde Töne werden auch direkt nach einem Strum nicht mehr blockiert.
- **Spieltechnik nur auf derselben Saite:** Ein Slide, Hammer-on oder Pull-off wird auf die Saite des vorigen Tons gelegt (wenn spielbar), sonst als Anschlag gewertet.
- **Ton eintragen:** Bei gestopptem Mikro auf eine leere Stelle einer Saite tippen → neuer Ton (auf Achtel eingerastet), das Feld öffnet sich mit Bund-Auswahl 0–15, Spieltechnik, Saite.
- **Rückgängig:** Knopf „↶ Rückgängig“ unter dem Tab (bei gestopptem Mikro), bis 40 Schritte: Korrigieren, Entfernen, Eintragen, Verschieben, Ausrichten, Griffwechsel.
- **Version:** `APP_VERSION` im Code (Datum.Uhrzeit des Hochladens). Einstellungen → „Version“ zeigt sie, „Nach neuer Version suchen“. Die App prüft beim Öffnen, bei Rückkehr und alle 5 Minuten; gibt es eine neuere, erscheint unten „Neue Version verfügbar · tippen zum Laden“. Beim Hochladen nur die Zeile `const APP_VERSION='…'` am Zeilenanfang ändern.
- **Griff-Töne (Stand 12.11. abends):** Ein angeschlagener Ton, der genau zum gegriffenen Akkord gehört (z. B. g4 im G 320033), wird zurückgehalten und nur notiert, wenn danach gebunden (Slide/Hammer/Pull) oder schrittweise (≤ 2 Halbtöne, < 0,7 s) weitergespielt wird oder er eine Linie fortsetzt. Bestätigung eines Tons jetzt nach 3 Analysen (~100 ms). Töne werden bis 0,4 s zurückgehalten; rutscht ein Anschlag einen Halbton nach oben auf den Ton (c# → d), wird nur die Tonhöhe korrigiert.
- **Test Manus Mitschnitt (Achtel-Strumming, 58 BPM) gegen seine Korrektur:** vorher 10 richtig / 25 zu viel / 9 fehlend, jetzt 10 / 11 / 9. Offen: c#4 rund um Pull-offs (e → b), Slides 3/5 werden selten als Slide erkannt.
- **Verschieben (überarbeitet):** Beim Ziehen bewegt sich das Element frei, eine gestrichelte Linie zeigt, wo es beim Loslassen einrastet (Raster wählbar). Bearbeiten-Feld oben: „Entfernen“, ← / → (ein Rasterschritt), Raster 1/8 · 1/16 · Triole (Einstellung `grid`). „Wiederholen“ neben „Rückgängig“. „An Zählzeiten ausrichten“ nutzt das allgemeine Rückgängig. Zwei Akkorde innerhalb 0,45 s: der spätere überschreibt den früheren.
- **Anzeige ohne Überlappen (Stand 12.11. abends):** Würden sich Zahlen im Tab überdecken (gleiche Saite oder Akkordspalte), rückt die spätere in der Anzeige nach rechts; die Zeit bleibt unverändert. Griffzahlen der Akkorde kleiner (82 %) und in Grau, Melodie-Töne blau. Einstellungen → „Akkorde · Anzeige“: Griffzahlen ein/aus (`chordFrets`).
- **Zoom:** Zwei Finger waagerecht spreizen/zusammenschieben (30–320 px/s, Stelle zwischen den Fingern bleibt stehen), gespeichert (`px`). Ist der Zoom verändert, erscheint unter dem Tab „Zoom x % · zurücksetzen“. Der Tab hat `touch-action: pan-x`, damit der Browser nicht die ganze Seite zoomt.
- **Erkennung:** A – B – A: Ein kurzer Akkord B (< 1,2 s) zwischen zwei gleichen Akkorden gilt als Lesefehler und wird entfernt. Lauf-Ton mit Sprung ≥ 10 Halbtöne nach oben oder ab C5 mit hörbarer Unteroktave → eine Oktave tiefer (d5 → d4). Lauf-Töne, die Akkordtöne sind, werden von 0,25 s vor bis 0,45 s nach dem Akkordanschlag entfernt (z. B. das a3 beim Asus2).
- **Korrekturen nach Test 12.11. 18:42:** A – B – A nur noch, wenn B kürzer als 0,6 s war (vorher 1,2 s: bei zügigem Spiel wurde das echte Em gelöscht). Griff-Ton setzt eine Linie nur mit einem anderen Ton fort (nicht mit sich selbst). Oktav-Korrektur schon ab A4.
- **Spieltechnik lernen:** Stellt Manu bei einem gebundenen Ton die Spieltechnik um (z. B. h → Slide), merkt sich die App das je Abstand zum vorigen Ton (`artPref`, z. B. „+2“ → Slide) und verwendet es künftig für diesen Abstand.
- **Ton-Lernen:** Jeder erkannte Lauf-Ton speichert seinen Kontext: erkannter Ton (`origM`), Akkord in dem Moment, Abstand zum vorigen Ton, Tonhöhenbild. Ändert Manu die Tonhöhe (Bund, ½ höher/tiefer) oder entfernt den Ton, wird ein Beispiel gespeichert (lokal, `gitarre-lernen-toene`, max. 300): „erkannt X → richtig Y“ bzw. „→ weglassen“. Kommt später derselbe Ton beim selben Akkord mit ähnlichem Klang (Ähnlichkeit ≥ 0,92, oder ≥ 0,8 bei gleichem Abstand zum vorigen Ton), wendet die App die Korrektur an. Gelernte Töne zeigen im Feld „Aus deiner Korrektur gelernt“. Von Hand eingetragene Töne lehren nichts. Zurückstellen auf den erkannten Ton löscht das Beispiel. Einstellungen zeigen Akkord- und Ton-Korrekturen; „vergessen“ löscht beides.
- **Test Ton-Lernen (Mitschnitt 18:28 zweimal abgespielt):** Im ersten Durchgang g4, c#4 und a3 entfernt; im zweiten Durchgang tauchen sie nicht mehr auf, die übrigen Töne bleiben.
- **Saite/Bund:** Niedrige Bünde bevorzugt (über Bund 5 teurer), Kontinuität zur Saite des vorigen Tons (innerhalb 3 s), Leersaite nach einem Ton auf anderer Saite nur ungern. Lauf-Töne stehen blau im Tab. Antippen: „½ tiefer/höher“, andere Saite wählen, Entfernen.
- **Akkorde und Läufe:** Akkordwechsel nur nach Strumming. Nach Lauf-Tönen (1,5 s) hält der Akkord. Powerchords werden nicht mehr automatisch eingetragen (von Hand weiter wählbar).
- **Gleicher Anschlag:** Korrigiert sich die App innerhalb desselben Anschlags (< 0,6 s, kein neuer Strum), wird der vorige Akkord überschrieben und behält den Zeitpunkt (kein „G7 vor G“ mehr). **Löschen:** Der nächste Akkord rückt auf den Platz des gelöschten, wenn er < 1 s danach kam.
- **Tests Läufe (Manus Aufnahmen, Stand 12.11.):** Nur-Lauf-Aufnahme (Takt 4, 6×, teils schneller): ca. 21–22 von 30 Tönen richtig, ca. 8 zu viel (meist A3 beim Asus2-Anschlag, Halbton daneben beim Anschlag). Strophe mit Akkorden: Akkorde sauber; Lauf-Töne vor jedem Em (d e b) meist richtig, der Lauf e d c b meist vollständig, einzelne Obertöne zu viel.
- **Noch nicht:** Aufnahmen bleiben nicht erhalten, wenn man die Akkorderkennung schließt.
- **Wunsch Manu (nächste Version):** bessere Erkennung bei echter Spielweise (Melodie auf B-/e-Saite während Achtel-Strumming); Pull-off-Ton vor dem Em fehlt oft.

### Neue Ton-Erkennung (Basic Pitch, Test, seit 12.11. 19:45)
- **Warum:** Die selbstgebaute Ton-Erkennung schafft bei Manus Spielweise etwa zwei Drittel, beim Zupfen fast nichts (Bass unter A3 fehlt, tiefe Anschläge gelten als Strum). Basic Pitch (Spotify, neuronales Netz, 0,9 MB Modell) erkennt auch mehrere Töne gleichzeitig und Bass. Vergleich mit Manus Korrekturen (ab A3): 18:14 15/19 statt 9/19, 18:51 13/19 wie bisher, 19:07 12/20 statt 9/20.
- **Schalter:** Einstellungen → Test → „Neue Ton-Erkennung (Test)“ (Standard aus, `S.bp`).
- **Ablauf:** Akkordnamen kommen weiter live aus der bisherigen Erkennung. Live-Töne sind aus. Die App nimmt den Rohklang auf; nach „Stopp“ rechnet Basic Pitch im Browser (tfjs, WebGL) die Töne aus, Fortschritt im Hinweisfeld, dann „N Töne eingetragen“. Rückgängig nimmt alle eingetragenen Töne auf einmal zurück.
- **Vom Ergebnis zum Tab:** Töne mit Lautstärke > 0,25, E2–E6, ab Aufnahmebeginn (nach dem Einzählen). 3 und mehr Töne fast gleichzeitig (Abstand ≤ 40 ms, gesamt ≤ 90 ms) = Anschlag: davon bleiben nur akkordfremde Töne ab G3 (Melodieton im Anschlag). Akkordtöne bis 0,25 s nach einem Anschlag = Nachklang, fallen weg. Einzelne und Zweiergruppen (Zupfen, Bass + Melodie) bleiben, gleichzeitige Töne auf verschiedenen Saiten. Saite/Bund wie bisher nach Spielbarkeit. Ton-Lernen gilt auch hier (Klangprofil alle 0,1 s gemerkt). Spieltechnik vorerst immer Anschlag.
- **Seit 20:15:** Gleicher Ton doppelt innerhalb 0,12 s → ein Ton. **Slide automatisch:** kurzer Ton (≤ 0,3 s), direkt danach ohne Lücke 1–2 Halbtöne daneben → Slide auf derselben Saite; stand derselbe Ton kurz vorher schon auf der Saite (≤ 1,2 s), wird nur der Slide eingetragen (wie Manus Korrektur „3 /5“), sonst Ausgangston + Slide. **Getrenntes Lernen:** Korrekturen merken sich, aus welcher Erkennung sie stammen; der neue Modus nutzt nur eigene, der alte nur alte (frühere Korrekturen gelten als alt). Korrekturen speichern Saite, Bund und Spieltechnik mit und werden so wieder eingetragen. **Saite lernen:** Legt Manu einen Ton auf eine andere Saite, gilt diese Saite künftig für den Ton (beim gleichen Akkord, sonst allgemein). Test mit Mitschnitt 19:53, erster Durchgang: alle vier „3 /5“-Slides wie von Manu korrigiert.
- **Seit 20:55 – Schalter „Spielweise: Strummen / Zupfen“** (Knopf unter dem Tab, nur bei neuer Ton-Erkennung, gespeichert als `S.play`, gilt für die Auswertung beim Stoppen). Strummen: Regeln wie oben. Zupfen: alle Töne bleiben, auch 3 und mehr gleichzeitig (Bass + Saiten), kein automatischer Slide, keine Bindung an die Saite des vorigen Tons. **Beide Spielweisen:** Liegt ein Ton im Griff des aktuellen Akkords, kommt er auf diese Saite (z. B. G als leere G-Saite statt 5 auf der D-Saite). Test Zupf-Mitschnitt 20:32: vorher 29 gleichzeitig gezupfte Töne verworfen und einzelne Töne auf falschen Saiten, jetzt alle Töne im Griffbild.
- **Manus Spielweise:** G- und e-Saite klingen bei der Melodie oft mit und werden wirklich gespielt; Aufräumen auf die reine Melodie ist ein späteres Thema.
- **Dateien:** `bp/bp.js` (Basic Pitch + tfjs, 0,9 MB, lädt erst bei eingeschaltetem Schalter), `bp/model/`. Mitschnitt: Töne tragen `bp:true`.
- **Tests:** Ergebnis im Browser identisch mit der Python-Version (319 von 323 Tönen gleich). Zupf-Aufnahme 19:11: Bass und Melodie stehen im Tab. Rechenzeit im Test-Browser ohne Grafikkarte etwa 2,5 s je Sekunde Audio, auf dem S24 mit WebGL deutlich schneller (noch zu messen).
- **Nächste Schritte nach Manus Test-Aufnahmen:** Feinabstimmung, Slide/Hammer-on/Pull-off aus den Tonhöhen-Kurven, prüfen ob fast live möglich ist.

### Takterkennung und Blatt-Ansicht (Schritt 1 der „Ordnung“, seit 13.11. 12:15)
- **Ziel (mit Manu am 13.11. festgelegt):** keine Vollautomatik, sondern gute Erkennung plus einfaches Bearbeiten. Vorbild für die Ordnung: Guitar2Tabs (Tempo, Takte, Zeilenumbrüche, abspielbarer Tab mit Laufbalken). Dort sind die Akkorde kaum besser als bei uns, Slides/Hammer-ons fehlen auch; der Unterschied ist die Ordnung.
- **Aufnahme:** Der Rohklang wird jetzt bei jedem Mikrofon-Start mitgeschnitten (nicht nur bei neuer Ton-Erkennung).
- **Nach „Stopp“:** Ohne Metronom erkennt die App Tempo und Schläge (Anschlagskurve → Autokorrelation mit Vorliebe um 110 BPM → Schlagfolge per dynamischer Programmierung). Die „Eins“ wird über Akkordwechsel, tiefe Anschläge und Basstöne gewählt. Taktart aus der Metronom-Einstellung (Standard 4/4). Mit Metronom gilt dessen Raster. Danach rasten alle Akkorde und Töne der Aufnahme auf Zählzeiten ein; pro Schlag wählt die App Viertel, Achtel, Sechzehntel oder Triolen (was am besten passt, einfaches Raster bevorzugt, keine zwei Töne auf derselben Saite an derselben Stelle). Hinweis „≈ N BPM · 4/4 · N Stellen auf Zählzeiten gesetzt“. Rückgängig nimmt das Einrasten zurück.
- **Blatt-Ansicht:** erscheint nach dem Stoppen automatisch, Knopf „Ansicht: Blatt / Streifen“ zum Wechseln, beim nächsten Mikrofon-Start wieder Streifen. Takte gleich breit, so viele pro Zeile, wie der dichteste Takt zulässt (1–4), Taktnummern, BPM oben, Akkordname über der Stelle. Beim Zupfen ohne graue Griffzahlen. Antippen bearbeitet, leere Saite antippen trägt einen Ton ein (rastet ein). Verschieben per Ziehen und Zoomen nur im Streifen; dort lassen sich auch die Taktstriche verschieben, danach „An Zählzeiten ausrichten“.
- **Tests:** Gestrummt (12.11. 20:49) ≈ 111 BPM (Guitar2Tabs 106), gezupft (20:50) ≈ 97 BPM (Guitar2Tabs 94). Zupf-Takt C stimmt in den Tönen mit Guitar2Tabs weitgehend überein.
- **Seit 13:00:** **Der erste Akkord liegt auf der Eins** (Töne davor = Auftakt; leere Takte am Anfang/Ende werden nicht gezeigt). Kein Einzählen (Manu: lieber einfach drauflosspielen). Akkorde rasten auf den Schlag ein, nur deutlich dazwischen auf die halbe Zählzeit; Töne wählen ihr Raster pro Schlag. **Verschieben in der Blatt-Ansicht:** lange drücken, ziehen, rastet auf Zählzeiten ein, auch in andere Takte der Zeile (Töne nach Raster-Einstellung, Akkorde auf halbe Schläge); Rückgängig. Takte pro Zeile wählt jede Zeile selbst (1–4). **Knopf „Spielweise“ mit drei Stufen**, immer sichtbar: *Strummen* = nur Akkorde (auch live keine Einzeltöne, neue Ton-Erkennung läuft dann nicht), *Strummen + Melodie* = Akkorde + Melodietöne ohne mitklingende leere E-, A-, D- und G-Saite, die zum Akkord gehört (B- und e-Saite bleiben), *Zupfen* = alle Töne. Test Aufnahme 13.11. 11:37: ≈ 122 BPM, erstes G auf Takt 1, Zählzeit 1; über 30 mitklingende G-Saiten fallen bei „Strummen + Melodie“ weg.
- **Seit 13:30 – Eins robuster:** Die Eins liegt dort, wo der häufigste Akkord des Stücks (meist der Grundakkord, z. B. G) **meistens** landet; ein verzögerter erster Anschlag kippt das Raster nicht mehr (dann ist der erste Akkord Auftakt). Liegen die Akkordwechsel systematisch zwischen den erkannten Schlägen (Raster auf den „und“), werden die Schläge auf die Akkorde geschoben. Manus Strophe: G 6 Schläge, Em 2 Schläge (Em auf der 3 im zweiten Takt), dann Lauf auf der B-Saite 3/5 3 1 0 und Asus2.
- **Seit 14:30 – Akkorde nach dem Stoppen pro Schlag (Strummen und Strummen + Melodie):** Für jeden erkannten Schlag ein Klangbild aus der Aufnahme (Spektralspitzen je Halbton, Chroma, Bass), dann die wahrscheinlichste Akkordfolge (Viterbi): Wechsel auf jeder Zählzeit möglich, ein Wechsel kostet etwas (auf betonten Zählzeiten weniger), Tonart-Hilfe (Akkorde aus der erkannten Tonart leicht bevorzugt). Ersetzt die Live-Akkorde dieses Abschnitts (von Hand eingetragene/bearbeitete bleiben). Die Eins richtet sich nach diesen Akkorden (häufigster Akkord). Beim Zupfen bleiben vorerst die Live-Akkorde (pro Schlag zu unsicher; Idee: Akkord aus den Basic-Pitch-Tönen bestimmen). Messung Refrain 12:42 (Soll Asus2 4 · D/F♯ 4 · G 2 · D 2 · Em 4 Schläge bei ≈ 124 BPM): erster Durchgang Asus2 4 · D/F♯ 4 · G 2 · D 1 · Em 5; das kurze D wird noch nicht immer erkannt. Strophe: G ≈ 5 · Em ≈ 3 (Manu: G 6 · Em 2).
- **Neue Akkordarten:** add9 (Griffe u. a. Cadd9 x32033, Gadd9 3x0203). **Schrägstrich-Akkorde** (Bass = Terz, z. B. D/F♯ 2x0232, G/B, C/E): nur wenn die Terz deutlich der tiefste Ton ist und der Grundton nicht darunter liegt. Quint-Bässe (C/G) erkennt die App nicht von selbst, man kann sie aber eintragen. 6, dim, aug bewusst nicht (Manu spielt sie kaum).
- **Akkorde eintragen:** in die Akkordzeile über dem Tab tippen (Blatt und Streifen) → neuer Akkord an der Zählzeit, Vorschlag = Akkord, der dort gerade gilt, danach Grundton/Art/Bass wählen. Im Bearbeiten-Feld neue Gruppe **„Bass“** (– oder jeder Ton), Griffbild passt sich an.
- **Tempo ÷2 / ×2** (Knöpfe in der Blatt-Ansicht): Takte zusammenlegen/teilen. Die Wahl wird gemerkt und beim nächsten Mal automatisch angewendet (Manu zählt den Puls oft halb so schnell, z. B. 62 statt 124 BPM, mit „und“ dazwischen).
- **Seit 15:30 – Bedienung (Manu: „Editieren ist gurkig“):** **Feste Zeilen** – Takte pro Zeile werden einmal nach dem Stoppen festgelegt und ändern sich beim Bearbeiten/Verschieben nicht mehr (neu nur bei neuem Raster, Tempo ÷2/×2 oder anderer Bildschirmbreite). **Rückgängig/Wiederholen** als Symbole oben in der Leiste neben „Zurücksetzen“: grau, wenn nichts da ist, leuchten beim Tippen kurz blau. **Bearbeiten-Feld** nur noch etwa halb so hoch, Tab bleibt darüber sichtbar, gewähltes Element wird hineingescrollt; große Knöpfe **„‹ voriges / nächstes ›“** zum Durchklicken aller Töne und Akkorde. **Größere Trefferflächen:** Tippen knapp neben einen Ton/Akkord (bis ca. 26 px) öffnet diesen statt einen neuen Ton einzutragen.
- **Seit 15:30 – Erkennung:** Akkorde außerhalb der Tonart brauchen mindestens 2 Schläge (einzelne Ausreißer wie F♯sus4, Gsus4 fallen weg). **Lernen aus Korrekturen an Pro-Schlag-Akkorden** (eigene Lektionen, getrennt von den Live-Lektionen; z. B. Esus4 → Asus2, Bm → D/F♯). Bei „Strummen + Melodie“ zählen erkannte Lauftöne (G-, B-, e-Saite) nur noch schwach für den Akkord. Gelöschte Akkorde werden noch nicht gelernt.
- **Seit 16:15 – Prüfsatz:** Jede Änderung an der Akkorderkennung wird vor dem Hochladen an festen Aufnahmen gemessen (13.11.: 12:42 Refrain, 13:21, 13:32, 13:48) gegen Manus Soll: Strophe G 6 · Em 2 (dreimal; beim letzten Lauf vor dem Refrain klingt Em weiter, Lauf endet auf Asus2), Refrain Asus2 4 · D/F♯ 4 · G 2 · D 2 · Em 4 (zweimal). Maß: Abweichung der Akkordfolge (gleiche Töne wie Asus2/Esus4 zählen als richtig). Nur was insgesamt besser ist, kommt in die App. Ergebnis heute: Lauftöne-Herausnehmen (Regel 7) wieder entfernt (schlechter: 22 statt 20 Fehler); Wechsel nur bei von Basic Pitch erkannten Anschlägen getestet (Strophe exakt, insgesamt 21,75) – noch nicht übernommen; Wechselkosten 0,17 und add9 seltener (0,88) → 18 Fehler.
- **Seit 16:15 – Namensvorliebe:** Benennt Manu einen Akkord mit gleichen Tönen um (z. B. Esus4 → Asus2), heißt dieser Klang künftig immer so (live und nach dem Stoppen). **Gelöschte Pro-Schlag-Akkorde werden gelernt** (der vorige Akkord klingt dort beim nächsten Mal weiter); beim Löschen rückt bei Pro-Schlag-Akkorden kein Nachbar mehr nach. **Strummen + Melodie:** keine Töne auf E- und A-Saite (das sind Basssaiten der Anschläge).
- **Seit 16:15 – Bedienung:** Im Bearbeiten-Feld eines Tons **„＋ Ton davor / ＋ Ton danach“** (ein Rasterschritt daneben, gleiche Saite, dann Bund wählen). **Zoomen im Blatt** mit zwei Fingern: auseinander = weniger Takte pro Zeile (4 → 2 → 1), danach wird der Takt breiter als der Bildschirm (seitlich schieben, bis 3×); zusammen = zurück. **Versionshinweis:** Prüfung jede Minute, beim Öffnen der Akkorderkennung und nach jedem Stopp; „Tippen zum Laden“ lädt frisch (nicht aus dem Zwischenspeicher).
- **Seit 17:30:** **Griff wählen:** Im Bearbeiten-Feld eines Akkords stehen alle Griffe nebeneinander (weit oben, direkt unter „Ähnlich klingend“), z. B. G als 320003 oder 320033. Antippen wählt ihn für diesen Akkord und für alle gleichen Akkorde im Tab; die App merkt ihn sich auch für künftige Aufnahmen (vorher galt die Vorliebe nur für die Live-Anzeige, neue Akkorde nahmen immer den ersten Griff). **Akkord-Wortschatz der Sitzung:** Hat Manu einen früheren Durchgang korrigiert, bevorzugt die Akkordbestimmung im nächsten Durchgang die dort vorkommenden Akkorde (+0,05) und dämpft andere (−0,05). Prüfsatz (jetzt mit beiden Durchgängen von 16:33): 29 → 27,25 Fehler durch seltenere maj7/m7 (0,92/0,90); mit Wortschatz (simuliert nach einem korrigierten Durchgang) ≈ 22. Typischer Fehler: Manus G (320033) mit nachklingender leerer E-Saite wird als Em7 erkannt – Wortschatz und seltenere m7 helfen.
- **Seit 17:45 – Datensicherung (Variante 1, mit Manu abgestimmt):** Einstellungen → Datensicherung → „Sicherung erstellen“ legt eine Datei `gitarre-sicherung-JJJJMMTT-HHMM.json` an (Einstellungen inkl. Griff-, Namens-, Saiten- und Tempo-Vorlieben, gelernte Akkord- und Ton-Korrekturen; keine Aufnahmen) und öffnet das Teilen-Menü des Handys (Drive, Mail, WhatsApp …), am Laptop wird sie heruntergeladen. „Sicherung laden“ liest so eine Datei ein (mit Rückfrage, ersetzt die Daten auf dem Gerät) – so lassen sich Handy und Laptop angleichen. Anzeige „Letzte Sicherung … · seitdem N neue Korrekturen“; nach 15 neuen Korrekturen einmal am Tag ein Hinweis nach dem Stoppen. Software-Stand vor Version 1 als Git-Tag `stand-2026-11-13` markiert.
- **Laptop:** Die App läuft auch in Chrome/Edge am Laptop (Klick statt Tippen, Ziehen mit gedrückter Maustaste; Zwei-Finger-Zoom nur per Touchpad; gelernte Korrekturen je Browser getrennt).
- **Nächste Schritte:** 2. Abspielen mit mitlaufendem Balken. 3. Akkorde auf Zählzeiten bestimmen (mehrere pro Takt möglich, Vorliebe Taktanfang/-mitte, mindestens ein Schlag), Strummen = Akkorde + optional Melodie, Nachklang-Doppler beim Zupfen entfernen. 4. „Takt beginnt hier“ zum Korrigieren der Eins, Taktart wählbar.

### Metronom (in der Akkorderkennung)
- **Knopf oben rechts** (zwischen Reset und Mikro): öffnet das Bedienfeld. Leuchtet in der Akzentfarbe, wenn das Metronom bei der Aufnahme mitläuft, und blinkt im Takt (Eins stärker).
- **Bedienfeld:** „Bei Aufnahme mitlaufen“ an/aus · Tempo 30–240 BPM mit −/+ (Gedrückthalten wiederholt), Regler und Tap-Tempo (Mittel der letzten bis zu 5 Taps, Pause > 2 s beginnt neu) · Probehören · Taktart 2/4, 3/4, 4/4, 6/8 (bei 6/8 ist jedes Achtel ein Klick, Betonung auf 1 und 4) · „Und“ leise (nicht bei 6/8) · Einzähler 1 Takt (Standard an) · Lautstärke. Gespeichert in den Einstellungen (`met`).
- **Klänge:** Eins 4 kHz, Schläge 3,2 kHz, „Und“ 3,2 kHz leise und kurz. Kurze Sinus-Klicks.
- **Ablauf:** Mikro starten → 1 Takt Einzählen (Hinweis „Einzählen · 1 … 4“) → Aufnahme beginnt auf der Eins. Tempo und Taktart gelten ab der nächsten Aufnahme.
- **Klicks ausblenden (ohne Kopfhörer):** Vor der Analyse liegt ein Tiefpass (2 Biquads, 1700 Hz, Butterworth 4. Ordnung). Die Erkennung nutzt nur 75–1500 Hz. Test mit Manus Strophen-Aufnahme plus künstlichen Klicks: identische Akkorde wie ohne Klicks; ohne Filter hätten die Klicks zusätzliche Wechsel ausgelöst.
- **Latenz:** Während des Einzählers misst die App über einen zweiten, ungefilterten Analysator, wann jeder Klick am Mikro ankommt (Median). Ohne Messung: Schätzwert aus der Geräte-Latenz. Damit liegen Taktstriche und Akkorde zeitlich richtig.
- **Tab:** Bei Aufnahme mit Metronom zeigt der Streifen Taktstriche.
- **Tests:** Zwei Aufnahmen von Manus Akustikgitarre (S24, Sprachrekorder). G (320033) 96 %, G (320003) 93 %, D 96 %, Em 95 %, Cmaj7 93 %, Asus2 79 % (Rest Esus4, wenn die A-Saite nicht mitklingt), jeweils mit dem richtigen Griff. Vorher wechselte die Anzeige je Akkord 5- bis 16-mal, jetzt einmal. Synthetischer Klang weiterhin 10/10.
- Bekannt: Sprache wird manchmal als Akkord gelesen und landet im Verlauf.

### Geplant für Akkorde
- Stufe 2: Slash-Akkorde (z. B. D/B), add9 und weitere Erweiterungen.
- **Trainierbar:** Akkorde beibringen und Fehler korrigieren; die App speichert eigene Klangbeispiele lokal und gleicht zuerst damit ab.

## 8. Roadmap

Stand: 13.11.2026, abgestimmt im Roadmap-Chat. Dieser Abschnitt ist die eine Quelle für die Reihenfolge; Details zu laufenden Arbeiten stehen in Abschnitt 7.

### A · Läuft gerade (Akkord-Chat, Plan „Ordnung“)
1. ✅ Takterkennung nach dem Stoppen, Blatt-Ansicht, erster Akkord auf der Eins, Verschieben im Blatt, Spielweise in drei Stufen.
2. ▶ Abspielen mit mitlaufendem Balken (erster Teil von Record/Playback).
3. Akkorde auf Zählzeiten bestimmen, Nachklang-Doppler beim Zupfen entfernen.
4. „Takt beginnt hier“ zum Korrigieren der Eins, Taktart wählbar.
- Parallel: neue Ton-Erkennung (Basic Pitch) abstimmen, Rechenzeit auf dem S24 messen, prüfen ob fast live geht; Slide/Hammer-on/Pull-off aus den Tonhöhen-Kurven; offene Fehler: Pull-off-Ton vor dem Em, c#4.

### B · Danach
1. **Sessions speichern** (Aufnahmen-Bereich auf dem Startbildschirm): Name, Datum, Tempo, Taktart, Kapo; wieder öffnen, weiter aufnehmen oder neu starten. Heute geht beim Schließen alles verloren. **Speicher von Anfang an mit Spuren** (jede Session hat eine Liste von Spuren mit Audio und Ereignissen), auch wenn die Spuren-Bedienung erst später kommt – so muss nichts umgebaut werden.
2. **Eigenes Blatt schreiben:** leeres Blatt ohne Aufnahme (Tempo, Taktart, Anzahl Takte), Akkorde und Töne von Hand eintragen. Eine Session kann aufgenommen, geschrieben oder beides sein. Offen: nur Akkordnamen über den Takten, volle Griffe im Tab oder wahlweise.
3. **Kapo-Umschalter** für eigene Blätter: Kapo-Bund einstellen, Ansicht „Griff“ (z. B. G bei Kapo 3) ↔ „klingend“ (B♭). Reine Umrechnung, die Erkennung bleibt unberührt.
4. **Akkordschema für den Bassisten als PDF:** Takte mit den klingenden Akkordnamen, kein Tab, kein Notenblatt. Teilen über das Handy.
5. **Datensicherung:** Einstellungen und gelernte Korrekturen exportieren/importieren (liegen sonst nur im Browser).

### C · Timeline-Bearbeitung
- Akkorde als feste Anker; Einzeltöne dazwischen werden beim Verschieben proportional gestaucht/gedehnt und rasten ein. Absicherungen: Originalpositionen merken, Akkord stoppt am Nachbarakkord, Notenlängen mitskalieren, von Hand korrigierte Töne bleiben fix, Vorschau beim Ziehen.
- Mehrfachauswahl (z. B. zum Löschen; Vorschlag: lange drücken + Rahmen aufziehen), kein Copy-Paste.
- Prüfen, ob „Akkord auf dem Taktstrich lässt sich nicht greifen“ noch besteht.
- Grundsatz: Bearbeitung schlank halten, die Erkennung hat Vorrang.

### D · Später
- Record/Playback ausbauen: zur Aufnahme Melodien erfinden, die mitgeschrieben werden. Offen: ohne Kopfhörer würde die Wiedergabe mit erkannt (herausrechnen oder Echo-Unterdrückung testen).
- Akkorde Stufe 2: Slash-Akkorde (D/B), add9 und weitere.
- Kapo bei der Erkennung (Mikro, Lernen nach klingendem Ton, Bundzahlen ab Kapo).
- **Spuren (Rhythmus, Melodie, Gesang …) in der App:** alle zusammen abspielen mit Balken, stumm/solo, Lautstärke je Spur, Spuren hinzufügen, löschen, neu einspielen; im Tab/Blatt Spuren ein- und ausblenden. **Kein Abmischen** (keine Effekte, kein EQ, kein Audioschnitt, kein Panorama) – dafür Export.
  - Einspielen nur mit Kopfhörern (sonst hört das Mikro die anderen Spuren). Manus In-Ears: Sony WF-1000XM5 (Bluetooth, ca. 150–300 ms Verzögerung). **Kalibrierung:** App spielt Klicks über die Kopfhörer, Manu schlägt im Takt mit, App misst den Gesamtversatz und rechnet ihn heraus. Tipp: in der Sony-App „Stabile Verbindung“ statt „Klangqualität“.
  - **Handymikro erzwingen**, wenn Bluetooth-Kopfhörer verbunden sind (sonst Telefonmodus mit schlechtem Klang); warnen, falls das nicht klappt.
- **Ausgabe pro Spur:** Tab für alle Spuren oder einzelne, dazu das Akkordschema (PDF).
- **Gesang:** Liedtext eintippen, die App legt die Wörter unter Takte und Akkorde, verschiebbar wie Akkorde. Später optional automatische Texterkennung (Whisper, lokal im Browser) als Vorschlag. Gesangsmelodie als Noten (Basic Pitch erkennt auch Stimme) erst danach.
- **Export:** MusicXML (Notenblatt z. B. in MuseScore), MIDI, WAV pro Spur.
- Alternative Voicings für eine zweite Gitarre, optional in anderen Stimmungen.
- Schlagzeug-Gestalter (Kick, Snare, HiHat, Muster), Export als WAV.
- Songwriting-Assistent (regelbasiert in der App; kreative Vorschläge im Chat).
- Kamera zur Unterstützung (Saite/Bund, Spieltechnik), erst wenn das Hören ausgereizt ist.
- Installierbare App (PWA) oder APK.
- Metronom, das sich dem Spieltempo anpasst – nur falls die Takterkennung nach dem Stoppen nicht reicht.
- Sprache nicht als Akkord erkennen – nur falls es stört (Manu redet beim Spielen nicht).

## 9. Bekannte Grenzen

- Saite und Bund lassen sich aus dem Klang nicht sicher bestimmen; die App schätzt nach Spielbarkeit.
- Rhythmus in Transkriptionen wird Nachbearbeitung brauchen.
- Downloads (z. B. WAV) funktionieren auf der Pages-Adresse, nicht in der Claude-Vorschau.
