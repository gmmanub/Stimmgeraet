# Befehlssprache der Gitarren-App

**Version 1** (14.11.2026, ergänzt um Abspielen) · gilt für Sprechen und für Befehlsblöcke (Knopf „abc“, kommt mit Version 2)

Diese Datei ist die einzige Quelle für die Befehle. Ein Chat, der einen Befehlsblock schreibt, liest nur diese Datei.
Die App versteht feste Befehle, keine freie Sprache und keine KI. Ändert sich die Sprache, steigt die Versionsnummer.

## Befehlsblock (für den abc-Knopf)
- Erste Zeile: `befehle v1`. Passt die Version nicht zur App, meldet sie „Block für Befehle v1, App kann v…“.
- Danach **ein Befehl pro Zeile**. Leere Zeilen und Zeilen, die mit `#` beginnen, werden übersprungen.
- Die App prüft vorher jede Zeile (✓/✗ mit kurzem Grund). „Ausführen“ ist ein einziger Rückgängig-Schritt.
- Beim Sprechen dasselbe in einem Satz; mehrere Befehle mit „und dann“.

```
befehle v1
# Strophe mit Lauf
Strophe: G 6, Em 2, mal 3
Refrain: Asus2 4, D/F# 4, G 2, D 2, Em 4, mal 2
Ablauf: Strophe, Refrain
Takt 4, 1 B-Saite: 3, Slide 5, 3, 1, Pull-off 0
Takt 1 bis 2 kopieren nach Takt 9
```

## Schreibweisen
- **Stelle:** `Takt 4` (ganzer Takt) · `Takt 4, 2` (Zählzeit 2) · `Takt 4, 2+` oder `2 und` (Achtel) · `2e` / `2a` (Sechzehntel) · `Takt 4, 2 bis 3` · `Takt 1 bis 3` · `Takt 1 und 2`. Zwischen Takt und Zählzeit dürfen Saite, Akkordname, `Akkord` oder `von` stehen.
- **Saiten:** `E-Saite` = hohe e · `tiefe E-Saite` · `A-Saite` · `D-Saite` · `G-Saite` · `B-Saite` (H geht auch) · `zweite Saite` usw.
- **Akkorde geschrieben:** `G`, `Em`, `Am7`, `Cmaj7`, `Asus2`, `Esus4`, `Cadd9`, `D/F#`, `Bb`, `F#m` (B statt H; `H` wird als B gelesen).
- **Akkorde gesprochen:** `E-Moll`, `A sus 2`, `C add 9`, `C Major 7`, `D über Fis`, `Fis-Moll`.
- **Spieltechnik:** `Slide`, `Hammer-on`, `Pull-off` (englisch), `Anschlag`.
- Füllwörter („bitte“, „mal“, „mir“) und typische Verhörer (Seite/Saite, Tag/Takt, Pullover/Pull-off …) versteht die App.

## Ablauf (neu in v1)
- **Teil festlegen:** `Strophe: G 6, Em 2, mal 3` – die Zahl hinter dem Akkord zählt **Schläge** (Zählzeiten 1 2 3 4 im 4/4). `G 6` = G auf 1 2 3 4 1 2, dann der nächste Akkord. Ganze Takte: `G 2 Takte`.
- Wiederholung: `mal 3`, `3 mal`, `x3` oder `dreimal`. Zusammengeschrieben geht auch: `Strophe G6 Em2 x3` (`G7`/`Cadd9` bleiben Akkorde).
- **Teile:** Strophe, Refrain (auch Chorus), Pre-Chorus, Bridge, Intro, Outro, Solo, Zwischenteil, Teil A/B/C.
- **Reihenfolge:** `Ablauf: Strophe, Refrain, Strophe, Refrain` (aus gemerkten Teilen; `Refrain zweimal` geht auch). Ohne eigene Reihenfolge gelten die Teile in der angesagten Folge.
- `Ablauf aus` · `Ablauf an`.
- Der Ablauf wird gemerkt (auch im Mitschnitt) und gleich auf die letzte Aufnahme angewendet. Die Erkennung bestimmt dann nur noch, **wann** gewechselt wird. Der Ablauf ist verbindlich: Spielst du anders, wird die Stelle bernsteinfarben markiert („bitte drüberschauen“), der Ablauf bleibt.
- Passt der Ablauf nicht zur Aufnahme, bleiben die Akkorde unverändert. Ein halb verstandener Befehl ändert nichts.

## Auswählen
- `Takt 3 bis 5 markieren` → Edit-Modus an, Takte gewählt. Befehle ohne Stelle wirken danach auf die Markierung.
- **Alles:** `alles markieren` · `alles auswählen` · `alle Takte markieren` · `das ganze Stück / Lied markieren`. „Alles“ geht auch bei Kopieren/Löschen (`alles nach Takt 9 kopieren`; `alles löschen` fragt vorher nach). `Takt 4 alle Töne löschen` bleibt in Takt 4.
- **Bis zum Ende:** `Takt 3 bis zum Ende` · `Takt 3 bis Schluss`.
- **Auswahl aufheben:** `Markierung weg` · `Markierung(en) aufheben` · `keine Markierung(en) mehr` · `Auswahl weg/aufheben` · `alles abwählen` · `wähle alles ab` · `nichts mehr markiert` · `hebe die Markierung auf`.
- **Bernstein-Hinweise („bitte drüberschauen“) entfernen:** `Hinweise weg` (im Menü: „Markierungen weg“).
- Per Finger: Knopf **„Alle“** in der Edit-Leiste (bei allem gewählt: „Keine“).

## Löschen
- `Takt 4 löschen` · `Takt 4, 2 bis 3 löschen` · `Takt 4 Töne löschen` (nur Einzeltöne) · `Takt 4 B-Saite löschen` · `Takt 4 Akkord löschen`.
- Ohne Stelle: das Markierte bzw. das Angetippte.

## Kopieren, Verschieben
- `Takt 1 bis 2 kopieren nach Takt 9` · `Takt 4 verschieben nach Takt 12, 3` · `Takt 1, 2 G auf die 1 schieben` (nur der Akkord, im selben Takt).
- `… kopieren auf alle ähnlichen` → Vorschlag (blau gestrichelt), dann „Übernehmen“.
- Ohne Quelle: das Markierte.

## Akkorde setzen
- `Takt 5, 3 Em` – Akkord an der Stelle.
- `Takt 5, 3 bis 6, 1 Em` – gilt dort, andere Akkorde in dem Bereich fallen weg.
- Ohne Stelle: der angetippte Akkord wird geändert.

## Töne setzen
- `Takt 3, 2+ B-Saite Bund 3` – ein Ton.
- `Takt 4, 1 B-Saite: 3, Slide 5, 3, 1, Pull-off 0` – Tonfolge; die App legt sie auf die gehörten Anschläge (sonst Achtel).
- Nach Antippen eines Tons: `Bund 5` · `G-Saite` · `Slide` · `Hammer-on` · `Pull-off` · `Anschlag`.

## Abspielen
- **Start:** `Play` · `spiel` · `spiel ab` · `abspielen` · `los` · `weiter` · `anhören`. Ohne Ort: ab markierten Takten, sonst ab der Stoppstelle, sonst von Anfang an.
- **Mit Ort:** `Play ab Takt 4` · `ab Takt 4 abspielen` · `spiel von Takt 2` · `Takt 3 bis 5 abspielen` (hält am Ende an) · `nur Takt 3 abspielen` · `spiel das Markierte`.
- **Von vorne:** `von vorne` · `nochmal abspielen` · `zurück zum Anfang`.
- **Liedteile** (stehen im Blatt, sobald ein Ablauf angesagt ist): `spiel Strophe 2` · `spiel die Bridge` · `spiel den Refrain` (= Refrain 1) · `zweite Strophe` · `spiel den zweiten Durchlauf von Refrain 2` · `Strophe 1, dritter Durchgang abspielen`.
- **Stopp:** `Stopp` · `Pause` · `halt` · `anhalten`.
- Solange zugehört wird, pausiert die Wiedergabe; danach geht es weiter (bzw. dorthin, wo der Befehl hinwill).
- **Loop:** `Takt 3 bis 5 loopen` · `Loop Takt 3 bis 5` · `Takt 3 bis 5 in Schleife abspielen` · `spiel Takt 2 bis 4 immer wieder` · `Refrain 1 loopen` · `Loop das Markierte` · `Loop` (= den letzten Loop wieder) · `Loop aus` / `Schleife beenden` (spielt weiter). Pause behält den Loop, Springen außerhalb beendet ihn.
- Kommt mit dem nächsten Schritt: `langsamer` · `schneller` · `Tempo 75 Prozent`.

## Hinweise, Ausrichten, Schieben, Einfügen
- `nächster Hinweis` · `vorheriger Hinweis` (springt zur Bernstein-Stelle und öffnet sie).
- `Takt 3 ausrichten` · `alles ausrichten` · `ausrichten` (das Markierte) · `quantisieren`.
- `Takt 2 einen Schlag später` · `ein Achtel früher` · `Takt 4 zwei Sechzehntel später` (ohne Stelle: das Markierte bzw. Angetippte).
- `Takt 1 bis 2 kopieren` (ohne Ziel = Zwischenablage) → `einfügen bei Takt 9` · `einfügen bei Takt 9, 3`.

## Ansicht und Einstellungen
- `Edit an` · `Edit aus` · `fertig`.
- `geh zu Takt 12` · `zeig mir Takt 3` (beim Abspielen: dorthin springen).
- `Zoom rein` · `Zoom raus` · `Zoom normal`.
- `Spielweise Zupfen` · `Spielweise Strummen` · `Spielweise Strummen mit Melodie`.
- `Metronom an` · `Metronom aus`.
- `speichern` · `Hilfe` · `letzte Sitzung wiederherstellen`.

## Sonstiges
- `Rückgängig` · `zurück` · `dreimal rückgängig` · `letzten Schritt zurück`.
- `Wiederholen` (= wiederherstellen; zum erneuten Abspielen: `nochmal abspielen`).

## Noch nicht in v1 (geplant)
- **Punch-in:** `ab Takt 12 neu` · `ab Takt 12 neu aufnehmen` (Einzähler mit Klicks direkt vor der Stelle, ab dort ersetzen; kommt mit Version 2).
- Bestimmter Griff (`Griff x57765`), mehrere Töne gleichzeitig (`zusammen`), Griff halten und einzelne Saiten anschlagen.
