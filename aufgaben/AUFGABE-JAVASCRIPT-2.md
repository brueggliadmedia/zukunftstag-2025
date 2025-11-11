# 🎮 Aufgaben für den Workshop

Hier findest du Schritt-für-Schritt Aufgaben, um dein Ping-Pong Spiel zu erweitern und mehr über JavaScript zu lernen!

---

## ✅ Aufgabe 2: Console.log und DevTools verwenden

**Ziel:** Lerne, wie du `console.log()` verwendest, um Werte im Browser anzuzeigen und deinen Code zu verstehen!

### Was du machen sollst:

Füge `console.log()` Statements in deine `game.js` Datei ein, um verschiedene Werte während des Spiels anzuzeigen:

1. **Treffer ausgeben** - Zeige die Anzahl der Treffer in der Konsole
2. **Ball-Position ausgeben** - Zeige die Position des Balls in der Konsole
3. **DevTools öffnen** - Lerne, wie du die Browser-Konsole öffnest

### 📝 Schritt-für-Schritt Anleitung:

1. **DevTools öffnen:**
   - Drücke `F12` oder `Cmd + Option + I` (Mac) / `Ctrl + Shift + I` (Windows/Linux)
   - Oder: Rechtsklick auf die Seite → "Untersuchen" / "Inspect"
   - Klicke auf den Tab "Console" oben in den DevTools

2. Öffne die Datei `game.js` in deinem Code-Editor

3. Finde die `updateScore()` Funktion (ab Zeile 198) und füge ein `console.log()` hinzu:
   ```javascript
   function updateScore() {
     document.getElementById('scoreL').textContent = gameState.hits;
     console.log('Treffer:', gameState.hits);  // Füge diese Zeile hinzu
   }
   ```

4. Finde die `updateBall()` Funktion (ab Zeile 117) und füge ein `console.log()` hinzu, wenn der Ball den Schläger trifft:
   ```javascript
   // Nach Zeile 157, wenn der Ball den Schläger trifft:
   gameState.hits++;  // Treffer-Zähler erhöhen
   console.log('Ball getroffen! Treffer:', gameState.hits);  // Füge diese Zeile hinzu
   updateScore();
   ```

5. Füge ein `console.log()` hinzu, um die Ball-Position zu sehen. Finde die `updateBall()` Funktion und füge nach Zeile 120 hinzu:
   ```javascript
   gameState.ball.x += gameState.ball.dx;
   gameState.ball.y += gameState.ball.dy;
   
   // Zeige die Ball-Position alle 60 Frames (ca. 1x pro Sekunde)
   if (Math.floor(gameState.ball.x) % 60 === 0) {
     console.log('Ball Position:', gameState.ball.x, gameState.ball.y);
   }
   ```

### 💡 Tipps:

- **`console.log()`** = Gibt Informationen in der Browser-Konsole aus
- Du kannst mehrere Werte ausgeben: `console.log('Text', variable1, variable2)`
- **DevTools** = Entwicklertools im Browser zum Debuggen
- Die Konsole zeigt dir Fehler, Warnungen und deine `console.log()` Ausgaben
- Du kannst auch `console.log('Spiel gestartet!')` am Anfang der `gameLoop()` Funktion hinzufügen

### ✨ Bonus-Aufgabe:

- Füge `console.log()` hinzu, wenn das Spiel pausiert wird (Zeile 78)
- Zeige die Schläger-Position in der Konsole an
- Probiere auch `console.warn()` oder `console.error()` aus!

### 🎓 Was lernst du dabei?

- Wie man `console.log()` verwendet, um Werte auszugeben
- Wie man die Browser-DevTools öffnet und verwendet
- Wie man seinen Code debuggt und versteht, was passiert

