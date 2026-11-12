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
- **Noch nicht:** Taktstriche (kommen mit dem Metronom), Läufe als Bundzahlen, Antippen zum Bearbeiten.
- **Tests:** Zwei Aufnahmen von Manus Akustikgitarre (S24, Sprachrekorder). G (320033) 96 %, G (320003) 93 %, D 96 %, Em 95 %, Cmaj7 93 %, Asus2 79 % (Rest Esus4, wenn die A-Saite nicht mitklingt), jeweils mit dem richtigen Griff. Vorher wechselte die Anzeige je Akkord 5- bis 16-mal, jetzt einmal. Synthetischer Klang weiterhin 10/10.
- Bekannt: Sprache wird manchmal als Akkord gelesen und landet im Verlauf.

### Geplant für Akkorde
- Stufe 2: Slash-Akkorde (z. B. D/B), add9 und weitere Erweiterungen.
- **Trainierbar:** Akkorde beibringen und Fehler korrigieren; die App speichert eigene Klangbeispiele lokal und gleicht zuerst damit ab.

## 8. Roadmap

1. **Als Nächstes: BPM- und Takterkennung** (Grundlage für alles Weitere), inkl. Metronom mit Tap-Tempo, Taktart, Einzähler.
2. Aufnahme und Auswertung: Akkordverlauf auf Zeitachse.
3. Transkription: Einzeltöne (z. B. Basic Pitch), Tabs und gut lesbare Takte – als Grundlage für den Bassisten. Mit Bearbeitungsansicht zum Korrigieren. Design und Layout gemeinsam festlegen.
4. Play-Along: aufgenommene Spuren einzeln ein- und ausschaltbar.
5. Alternative Voicings für eine zweite Gitarre, optional in anderen Stimmungen.
6. Schlagzeug-Gestalter (Kick, Snare, HiHat, Muster), Export als WAV.
7. Songwriting-Assistent mit Vorschlägen (regelbasiert in der App; kreative Vorschläge im Chat mit Claude).
8. Später ggf. installierbare App (PWA) oder APK.

## 9. Bekannte Grenzen

- Saite und Bund lassen sich aus dem Klang nicht sicher bestimmen; die App schätzt nach Spielbarkeit.
- Rhythmus in Transkriptionen wird Nachbearbeitung brauchen.
- Downloads (z. B. WAV) funktionieren auf der Pages-Adresse, nicht in der Claude-Vorschau.
