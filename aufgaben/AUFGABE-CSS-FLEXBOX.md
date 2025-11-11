# 🎨 Flexbox lernen mit Flexbox Froggy

Hier findest du eine Schritt-für-Schritt Aufgabe, um Flexbox zu lernen - ein mächtiges CSS-Tool zum Anordnen von Elementen!

---

## ✅ Aufgabe: Flexbox lernen mit Flexbox Froggy

**Ziel:** Lerne Flexbox kennen - ein mächtiges CSS-Tool zum Anordnen von Elementen!

### Was du machen sollst:

1. **Spiele Flexbox Froggy** - Ein interaktives Spiel, um Flexbox zu lernen
2. **Wende Flexbox auf dein Spiel an** - Nutze Flexbox, um Elemente auf deiner Seite zu positionieren

### 📝 Schritt-für-Schritt Anleitung:

#### Teil 1: Flexbox Froggy spielen

1. Öffne deinen Browser und gehe zu: **[Flexbox Froggy](https://flexboxfroggy.com/#de)**
   - Das Spiel ist auf Deutsch verfügbar! 🇩🇪

2. **Spiele die ersten 5 Level** und lerne die Grundlagen:
   - **Level 1:** `justify-content` - Elemente horizontal ausrichten
   - **Level 2:** `justify-content` mit `flex-end` - Elemente nach rechts
   - **Level 3:** `justify-content` mit `center` - Elemente zentrieren
   - **Level 4:** `justify-content` mit `space-between` - Abstand zwischen Elementen
   - **Level 5:** `justify-content` mit `space-around` - Abstand um Elemente

3. **Tipp:** Lies die Anweisungen genau! Sie erklären, welche CSS-Eigenschaft du verwenden musst.

#### Teil 2: Flexbox in deinem Spiel anwenden

1. Öffne die Datei `style.css` in deinem Code-Editor

2. Finde die `.hud` Regel und füge Flexbox hinzu:
   ```css
   .hud { 
     font-family: 'Arial', sans-serif;
     margin-top: 16px;
     margin-bottom: 16px;
     text-align: center;
     color: #333;
     font-size: 16px;
     display: flex;  /* Füge diese Zeile hinzu */
     justify-content: center;  /* Füge diese Zeile hinzu */
     gap: 20px;  /* Füge diese Zeile hinzu - Abstand zwischen Elementen */
   }
   ```

3. **Probiere verschiedene Flexbox-Eigenschaften aus:**
   - Ändere `justify-content` zu `space-between` oder `space-around`
   - Füge `flex-direction: column;` hinzu, um Elemente vertikal anzuordnen
   - Füge `align-items: center;` hinzu, um Elemente vertikal zu zentrieren

### 💡 Tipps:

- **`display: flex`** = Aktiviert Flexbox für ein Element
- **`justify-content`** = Richtet Elemente horizontal aus:
  - `flex-start` = Links
  - `flex-end` = Rechts
  - `center` = Zentriert
  - `space-between` = Abstand zwischen Elementen
  - `space-around` = Abstand um Elemente
- **`align-items`** = Richtet Elemente vertikal aus:
  - `flex-start` = Oben
  - `flex-end` = Unten
  - `center` = Zentriert
- **`flex-direction`** = Richtung der Elemente:
  - `row` = Horizontal (Standard)
  - `column` = Vertikal
- **`gap`** = Abstand zwischen Flexbox-Elementen (moderne Alternative zu margin)

### 🎮 Flexbox Froggy - Level-Übersicht:

Nach den ersten 5 Leveln kannst du weiter spielen:
- **Level 6-10:** `align-items` - Vertikale Ausrichtung
- **Level 11-15:** `flex-direction` - Richtung ändern
- **Level 16-20:** Kombinationen und fortgeschrittene Techniken
- **Level 21-24:** Komplexe Layouts

### ✨ Bonus-Aufgabe:

- Spiele alle 24 Level von Flexbox Froggy! 🐸
- Erstelle einen Flexbox-Container für deine Steuerungs-Anweisungen
- Nutze Flexbox, um das Canvas und das HUD nebeneinander anzuordnen (mit `flex-direction: row`)
- Probiere `flex-wrap: wrap;` aus, um Elemente umbrechen zu lassen

### 🎓 Was lernst du dabei?

- Was Flexbox ist und wofür es verwendet wird
- Die wichtigsten Flexbox-Eigenschaften (`display`, `justify-content`, `align-items`, `flex-direction`)
- Wie man Elemente mit Flexbox anordnet und ausrichtet
- Praktische Anwendung durch das interaktive Spiel Flexbox Froggy

### 🔗 Weitere Ressourcen:

- **[Flexbox Froggy](https://flexboxfroggy.com/#de)** - Interaktives Spiel zum Lernen
- **[CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)** - Detaillierte Erklärung (Englisch)
- **[MDN Flexbox](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout)** - Offizielle Dokumentation

---

