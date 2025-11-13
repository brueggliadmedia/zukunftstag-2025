# 🎨 Aufgaben für den Workshop

Hier findest du Schritt-für-Schritt Aufgaben, um dein Pong Spiel zu verschönern und mehr über CSS zu lernen!

---

## ✅ Aufgabe 1: Farben und Hintergrund ändern

**Ziel:** Lerne, wie du Farben und Hintergründe mit CSS ändern kannst!

> **🔗 Nützliche Ressource:**  
> [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp) – Eine interaktive Einführung in CSS mit vielen Beispielen und Übungen!


### Was du machen sollst:

Ändere in deiner `style.css` Datei die folgenden Eigenschaften:

1. **Hintergrundfarbe des `body`** - Ändere die weisse Hintergrundfarbe zu einer anderen Farbe
2. **Hintergrundfarbe des `canvas`** - Ändere die graue Hintergrundfarbe zu einer anderen Farbe
3. **Textfarbe** - Ändere die Farbe des Textes im `.hud` Bereich

### 📝 Schritt-für-Schritt Anleitung:

1. Öffne die Datei `style.css` in deinem Code-Editor

2. Finde die `body` Regel und ändere die Hintergrundfarbe:
   ```css
   body { 
     display: grid;
     place-items: center;
     background: #f0f0f0;  /* Ändere #fff zu einer anderen Farbe */
   }
   ```

3. Finde die `canvas` Regel und ändere die Hintergrundfarbe:
   ```css
   canvas { 
     background: #2d2d2d;  /* Ändere #eee zu einer anderen Farbe */
   }
   ```

4. Finde die `.hud` Regel und füge eine Textfarbe hinzu:
   ```css
   .hud { 
     font-family: system-ui, sans-serif;
     margin-top: 8px;
     text-align: center;
     color: #333;  /* Füge diese Zeile hinzu */
   }
   ```

### 💡 Tipps:

- **Farben in CSS** können auf verschiedene Weise angegeben werden:
  - **Hex-Codes:** `#ff0000` (rot), `#00ff00` (grün), `#0000ff` (blau)
  - **RGB:** `rgb(255, 0, 0)` (rot)
  - **Farbnamen:** `red`, `blue`, `green`, `darkblue`, `lightgray`
- **`background`** = Hintergrundfarbe eines Elements
- **`color`** = Textfarbe eines Elements
- Du kannst Farben online finden: [HTML Color Codes](https://htmlcolorcodes.com/)

### ✨ Bonus-Aufgabe:

- Probiere verschiedene Farbkombinationen aus!
- Ändere auch die Farbe der `<kbd>` Elemente (Tasten-Symbole)
- Versuche, ein dunkles Design zu erstellen (dark mode)

### 🎓 Was lernst du dabei?

- Wie man Farben in CSS verwendet
- Die Eigenschaften `background` und `color`
- Verschiedene Möglichkeiten, Farben anzugeben (Hex, RGB, Farbnamen)

---

## ✅ Aufgabe 2: Schriftarten und Text-Styling

**Ziel:** Lerne, wie du Texte mit CSS gestalten kannst!

### Was du machen sollst:

Ändere in deiner `style.css` Datei die Schriftart und Text-Eigenschaften:

1. **Schriftart ändern** - Wähle eine andere Schriftart für den `.hud` Bereich
2. **Schriftgrösse ändern** - Mache den Text grösser oder kleiner
3. **Text fett machen** - Mache bestimmte Texte fett

### 📝 Schritt-für-Schritt Anleitung:

1. Öffne die Datei `style.css` in deinem Code-Editor

2. Finde die `.hud` Regel und ändere die Schriftart:
   ```css
   .hud { 
     font-family: 'Arial', sans-serif;  /* Ändere die Schriftart */
     margin-top: 8px;
     text-align: center;
     color: #333;
   }
   ```

3. Füge eine Schriftgrösse hinzu:
   ```css
   .hud { 
     font-family: 'Arial', sans-serif;
     margin-top: 8px;
     text-align: center;
     color: #333;
     font-size: 16px;  /* Füge diese Zeile hinzu */
   }
   ```

4. Ändere die Schriftgrösse des `<small>` Elements:
   ```css
   .hud small {
     font-size: 12px;  /* Füge diese neue Regel hinzu */
   }
   ```

### 💡 Tipps:

- **Schriftarten:** `Arial`, `Helvetica`, `Times New Roman`, `Courier New`, `Georgia`
- **Schriftgrössen:** `12px`, `14px`, `16px`, `18px`, `20px`, `24px`
- **`font-family`** = Welche Schriftart verwendet werden soll
- **`font-size`** = Wie gross der Text sein soll
- **`font-weight`** = Wie dick der Text ist (`normal`, `bold`, `600`, `700`)
- Wenn eine Schriftart nicht verfügbar ist, wird die nächste in der Liste verwendet

### ✨ Bonus-Aufgabe:

- Probiere verschiedene Schriftarten aus!
- Ändere die Schriftgrösse der Punktzahl (`#scoreL`)
- Mache die Tasten-Symbole (`<kbd>`) grösser

### 🎓 Was lernst du dabei?

- Wie man Schriftarten in CSS ändert
- Die Eigenschaften `font-family`, `font-size` und `font-weight`
- Wie man verschiedene Text-Elemente unterschiedlich stylt

---

## ✅ Aufgabe 3: Abstände und Rahmen

**Ziel:** Lerne, wie du Abstände und Rahmen mit CSS erstellst!

### Was du machen sollst:

Füge in deiner `style.css` Datei Abstände und Rahmen hinzu:

1. **Abstand um das Canvas** - Füge einen Abstand (padding) um das Canvas hinzu
2. **Rahmen um das Canvas** - Füge einen Rahmen (border) um das Canvas hinzu
3. **Abstand im HUD** - Ändere die Abstände im HUD-Bereich

### 📝 Schritt-für-Schritt Anleitung:

1. Öffne die Datei `style.css` in deinem Code-Editor

2. Finde die `canvas` Regel und füge einen Rahmen hinzu:
   ```css
   canvas { 
     background: #2d2d2d;
     border: 3px solid #000;  /* Füge diese Zeile hinzu */
   }
   ```

3. Füge einen Abstand um das Canvas hinzu:
   ```css
   canvas { 
     background: #2d2d2d;
     border: 3px solid #000;
     padding: 10px;  /* Füge diese Zeile hinzu */
   }
   ```

4. Ändere die Abstände im `.hud` Bereich:
   ```css
   .hud { 
     font-family: 'Arial', sans-serif;
     margin-top: 16px;  /* Ändere von 8px zu 16px */
     margin-bottom: 16px;  /* Füge diese Zeile hinzu */
     text-align: center;
     color: #333;
     font-size: 16px;
   }
   ```

### 💡 Tipps:

- **`border`** = Rahmen um ein Element
  - Format: `border: [Dicke] [Stil] [Farbe]`
  - Stile: `solid` (durchgezogen), `dashed` (gestrichelt), `dotted` (gepunktet)
- **`padding`** = Innenabstand (Abstand zwischen Inhalt und Rahmen)
- **`margin`** = Aussenabstand (Abstand zwischen Elementen)
- Du kannst auch einzelne Seiten ansprechen: `margin-top`, `margin-bottom`, `padding-left`, etc.

### ✨ Bonus-Aufgabe:

- Probiere verschiedene Rahmen-Stile aus (`dashed`, `dotted`)
- Ändere die Rahmenfarbe zu einer passenden Farbe
- Füge einen Schatten (shadow) zum Canvas hinzu mit `box-shadow: 0 4px 8px rgba(0,0,0,0.2);`

### 🎓 Was lernst du dabei?

- Die Eigenschaften `border`, `padding` und `margin`
- Wie man Abstände zwischen Elementen kontrolliert
- Wie man Rahmen um Elemente erstellt

---

## 📋 Weitere CSS-Aufgaben

- **[Flexbox lernen mit Flexbox Froggy](AUFGABE-CSS-FLEXBOX.md)** - Lerne Flexbox mit einem interaktiven Spiel! 🐸

---

