# 🎮 Aufgaben für den Workshop

Hier findest du Schritt-für-Schritt Aufgaben, um dein Pong Spiel zu erweitern und mehr über JavaScript zu lernen!

---

## ✅ Aufgabe 1: Farben ändern

**Ziel:** Lerne, wie du die Farben von Ball und Schläger im JavaScript-Code ändern kannst!

> **🔗 Nützliche Ressource:**  
> [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp) – Eine interaktive Einführung in JavaScript mit vielen Beispielen und Übungen!

### Was du machen sollst:

Ändere in deiner `game.js` Datei die Farben, mit denen Ball und Schläger gezeichnet werden:

1. **Schläger-Farbe ändern** - Ändere die Farbe des Schlägers zu einer anderen Farbe
2. **Ball-Farbe ändern** - Ändere die Farbe des Balls zu einer anderen Farbe
3. **Hintergrund-Farbe ändern** - Ändere die Hintergrundfarbe des Canvas

### 📝 Schritt-für-Schritt Anleitung:

1. Öffne die Datei `game.js` in deinem Code-Editor

2. Finde die `draw()` Funktion (ab Zeile 206) und die Stelle, wo der Hintergrund gezeichnet wird:
   ```javascript
   ctx.fillStyle = '#eee';  // Ändere '#eee' zu einer anderen Farbe, z.B. '#f0f0f0'
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   ```

3. Finde die Stelle, wo der Schläger gezeichnet wird:
   ```javascript
   ctx.fillStyle = '#333';  // Ändere '#333' zu einer anderen Farbe, z.B. '#0066ff' (blau)
   ctx.fillRect(
     gameState.paddle.x,
     gameState.paddle.y,
     PADDLE_WIDTH,
     PADDLE_HEIGHT
   );
   ```

4. Finde die Stelle, wo der Ball gezeichnet wird:
   ```javascript
   ctx.fillStyle = '#000';  // Ändere '#000' zu einer anderen Farbe, z.B. '#ff0000' (rot)
   ctx.fillRect(
     gameState.ball.x,
     gameState.ball.y,
     BALL_SIZE,
     BALL_SIZE
   );
   ```

### 💡 Tipps:

- **Farben in JavaScript** werden als Strings (Text) angegeben:
  - **Hex-Codes:** `'#ff0000'` (rot), `'#00ff00'` (grün), `'#0000ff'` (blau)
  - **RGB:** `'rgb(255, 0, 0)'` (rot)
  - **RGBA:** `'rgba(255, 0, 0, 0.5)'` (rot, halb durchsichtig)
- **`ctx.fillStyle`** = Die Farbe, mit der Rechtecke gefüllt werden
- **`ctx`** = Der "Stift" zum Zeichnen auf dem Canvas
- Vergiss nicht die Anführungszeichen um die Farbe!

### ✨ Bonus-Aufgabe:

- Probiere verschiedene Farbkombinationen aus!
- Ändere die Farbe des Pause-Textes (Zeile 242)
- Versuche, den Ball in einer anderen Farbe zu zeichnen, wenn er schnell ist

### 🎓 Was lernst du dabei?

- Wie man Variablen und Werte in JavaScript ändert
- Die `fillStyle` Eigenschaft des Canvas-Kontexts
- Verschiedene Möglichkeiten, Farben anzugeben (Hex, RGB, RGBA)

