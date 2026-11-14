# Befehlssprache der Gitarren-App

**Version 1** (14.11.2026) · gilt für Sprechen und für Befehlsblöcke (Knopf „abc“, kommt mit Version 2)

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
- Der Ablauf wird gemerkt (auch im Mitschnitt) und gleich auf die letzte Aufnahme angewendet. Die Erkennung bestimmt dann nur noch, **wann** gewechselt wird. Ein Durchgang mehr oder weniger ist erlaubt. Unsichere Stellen bekommen die Bernstein-Markierung „bitte drüberschauen“.
- Passt der Ablauf nicht zur Aufnahme, bleiben die Akkorde unverändert. Ein halb verstandener Befehl ändert nichts.

## Auswählen
- `Takt 3 bis 5 markieren` → Edit-Modus an, Takte gewählt. Befehle ohne Stelle wirken danach auf die Markierung.
- `Markierung weg`.

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

## Sonstiges
- `Rückgängig` · `Wiederholen`.

## Noch nicht in v1 (geplant)
- Bestimmter Griff (`Griff x57765`), mehrere Töne gleichzeitig (`zusammen`), Griff halten und einzelne Saiten anschlagen.
