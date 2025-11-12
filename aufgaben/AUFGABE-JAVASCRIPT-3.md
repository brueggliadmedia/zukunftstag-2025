# 🎮 Aufgaben für den Workshop

Hier findest du Schritt-für-Schritt Aufgaben, um dein Ping-Pong Spiel zu erweitern und mehr über JavaScript zu lernen!

---

## ✅ Aufgabe 3: Farben mit if/else ändern

**Ziel:** Lerne, wie du `if`, `else if` und `else` verwendest, um verschiedene Farben basierend auf der Trefferanzahl anzuzeigen!

> **🔗 Nützliche Ressource:**  
> [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp) – Eine interaktive Einführung in JavaScript mit vielen Beispielen und Übungen!

### Was du machen sollst:

Verwende `if/else` Statements, um die Ball-Farbe basierend auf der Anzahl der Treffer zu ändern:

1. **Weniger als 5 Treffer** - Ball ist rot
2. **5 bis 9 Treffer** - Ball ist gelb
3. **10 oder mehr Treffer** - Ball ist grün

### 📝 Schritt-für-Schritt Anleitung:

1. Öffne die Datei `game.js` in deinem Code-Editor

2. Finde die `draw()` Funktion (ab Zeile 206) und die Stelle, wo der Ball gezeichnet wird (ab Zeile 229)

3. Ersetze die feste Ball-Farbe durch eine if/else-Struktur:
   ```javascript
   // BALL ZEICHNEN
   // Verschiedene Farben basierend auf Trefferanzahl
   if (gameState.hits < 5) {
     // Weniger als 5 Treffer = rot
     ctx.fillStyle = '#ff0000';  // rot
   } else if (gameState.hits < 10) {
     // 5 bis 9 Treffer = gelb
     ctx.fillStyle = '#ffff00';  // gelb
   } else {
     // 10 oder mehr Treffer = grün
     ctx.fillStyle = '#00ff00';  // grün
   }
   
   ctx.fillRect(
     gameState.ball.x,
     gameState.ball.y,
     BALL_SIZE,
     BALL_SIZE
   );
   ```

### 💡 Tipps:

- **`if`** = "Wenn diese Bedingung wahr ist, dann..."
- **`else if`** = "Wenn die erste Bedingung nicht wahr ist, aber diese Bedingung wahr ist, dann..."
- **`else`** = "Wenn keine der Bedingungen wahr ist, dann..."
- **Vergleichsoperatoren:**
  - `<` = kleiner als
  - `>` = größer als
  - `<=` = kleiner oder gleich
  - `>=` = größer oder gleich
  - `===` = genau gleich
- Die Bedingungen werden von oben nach unten geprüft - sobald eine Bedingung wahr ist, wird der Code ausgeführt und der Rest wird übersprungen

### ✨ Bonus-Aufgabe:

- Ändere auch die Schläger-Farbe basierend auf der Trefferanzahl!
- Füge weitere Farbstufen hinzu (z.B. blau bei 20+ Treffern)
- Zeige eine Nachricht auf dem Canvas, wenn du eine neue Stufe erreicht hast

### 🎓 Was lernst du dabei?

- Wie man `if`, `else if` und `else` verwendet
- Wie man Bedingungen mit Vergleichsoperatoren erstellt
- Wie man verschiedene Aktionen basierend auf Werten ausführt

