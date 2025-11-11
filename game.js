// ============================================
// PING-PONG SPIEL - JAVASCRIPT CODE
// ============================================
// 
// In diesem Code steuern wir unser Ping-Pong Spiel!
// Wir brauchen:
// 1. Ein Zeichenbrett (Canvas) - das ist wie ein Blatt Papier zum Malen
// 2. Einen Schläger (Paddle) - den können wir mit W und S bewegen
// 3. Einen Ball - der springt herum und prallt ab

// ============================================
// SCHRITT 1: Das Zeichenbrett finden
// ============================================
// Wir holen uns das HTML-Element mit der ID "game" aus der HTML-Datei
// Das ist unser Zeichenbrett (Canvas), auf dem wir alles zeichnen
const canvas = document.getElementById('game');

// Mit getContext('2d') sagen wir dem Browser: "Wir wollen 2D-Grafiken malen!"
// ctx ist wie ein Stift, mit dem wir auf dem Canvas zeichnen können
const ctx = canvas.getContext('2d');

// ============================================
// SCHRITT 2: Spiel-Einstellungen festlegen
// ============================================
// Hier definieren wir, wie groß und schnell alles sein soll
// Das sind "Konstanten" - Werte, die sich während des Spiels nicht ändern

const PADDLE_WIDTH = 10;      // Breite des Schlägers (in Pixeln)
const PADDLE_HEIGHT = 80;     // Höhe des Schlägers (in Pixeln)
const PADDLE_SPEED = 5;       // Wie schnell sich der Schläger bewegt
const BALL_SIZE = 10;         // Größe des Balls (ein Quadrat mit 10x10 Pixeln)
const BALL_SPEED = 4;         // Wie schnell sich der Ball bewegt

// ============================================
// SCHRITT 3: Spielzustand speichern
// ============================================
// Ein "Objekt" ist wie eine Schublade mit verschiedenen Fächern
// Hier speichern wir alle wichtigen Informationen über unser Spiel
let gameState = {
  paused: true,              // Ist das Spiel pausiert? (ja = true, nein = false)
  hits: 0,                   // Wie viele Treffer haben wir geschafft?
  
  // Wo ist der Schläger?
  paddle: {
    x: 10,                   // x-Position (von links nach rechts)
    y: canvas.height / 2 - PADDLE_HEIGHT / 2  // y-Position (von oben nach unten)
    // Wir starten in der Mitte des Bildschirms
  },
  
  // Wo ist der Ball?
  ball: {
    x: canvas.width / 2,     // Start in der Mitte (x-Richtung)
    y: canvas.height / 2,    // Start in der Mitte (y-Richtung)
    dx: BALL_SPEED,          // Geschwindigkeit nach rechts (dx = delta x)
    dy: BALL_SPEED           // Geschwindigkeit nach unten (dy = delta y)
  }
};

// ============================================
// SCHRITT 4: Tastendrücke verfolgen
// ============================================
// Ein leeres Objekt, das merkt, welche Tasten gerade gedrückt sind
// Wenn 'w' gedrückt ist, dann ist keys['w'] = true
const keys = {};

// ============================================
// SCHRITT 5: Tastatur-Events (Ereignisse)
// ============================================
// Wenn eine Taste gedrückt wird, passiert etwas!

document.addEventListener('keydown', (e) => {
  // Merken: Diese Taste ist jetzt gedrückt
  keys[e.key.toLowerCase()] = true;
  
  // Leertaste = Spiel starten/pausieren
  if (e.key === ' ') {
    e.preventDefault();  // Verhindern, dass die Seite nach unten scrollt
    gameState.paused = !gameState.paused;  // Pause umschalten (an/aus)
    if (!gameState.paused) {
      gameLoop();  // Wenn nicht pausiert, starte die Spielschleife
    }
  }
  
  // R-Taste = Spiel zurücksetzen
  if (e.key.toLowerCase() === 'r') {
    resetGame();
  }
});

// Wenn eine Taste losgelassen wird
document.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;  // Diese Taste ist nicht mehr gedrückt
});

// ============================================
// SCHRITT 6: Schläger bewegen
// ============================================
// Diese Funktion wird in jedem Frame aufgerufen
// Sie prüft, ob W oder S gedrückt sind, und bewegt den Schläger
function updatePaddle() {
  // W-Taste = nach oben bewegen
  // Prüfen: Ist 'w' gedrückt UND ist der Schläger nicht schon ganz oben?
  if (keys['w'] && gameState.paddle.y > 0) {
    gameState.paddle.y -= PADDLE_SPEED;  // Nach oben = y wird kleiner
  }
  
  // S-Taste = nach unten bewegen
  // Prüfen: Ist 's' gedrückt UND ist der Schläger nicht schon ganz unten?
  if (keys['s'] && gameState.paddle.y < canvas.height - PADDLE_HEIGHT) {
    gameState.paddle.y += PADDLE_SPEED;  // Nach unten = y wird größer
  }
}

// ============================================
// SCHRITT 7: Ball bewegen und Kollisionen prüfen
// ============================================
function updateBall() {
  // Ball bewegen: Position ändern um die Geschwindigkeit
  gameState.ball.x += gameState.ball.dx;  // x-Position ändern
  gameState.ball.y += gameState.ball.dy;  // y-Position ändern
  
  // ============================================
  // KOLLISION MIT WÄNDEN
  // ============================================
  
  // Obere oder untere Wand getroffen?
  // Wenn der Ball zu weit oben (y <= 0) oder zu weit unten ist
  if (gameState.ball.y <= 0 || gameState.ball.y >= canvas.height - BALL_SIZE) {
    gameState.ball.dy = -gameState.ball.dy;  // Richtung umkehren (nach oben wird nach unten)
  }
  
  // Rechte Wand getroffen?
  if (gameState.ball.x >= canvas.width - BALL_SIZE) {
    gameState.ball.dx = -gameState.ball.dx;  // Richtung umkehren (nach rechts wird nach links)
  }
  
  // ============================================
  // KOLLISION MIT SCHLÄGER
  // ============================================
  // Prüfen, ob der Ball den Schläger trifft
  // Das ist kompliziert - wir müssen prüfen, ob sich Ball und Schläger überschneiden
  if (
    gameState.ball.x <= gameState.paddle.x + PADDLE_WIDTH &&  // Ball ist links vom rechten Rand des Schlägers
    gameState.ball.x >= gameState.paddle.x &&                 // Ball ist rechts vom linken Rand des Schlägers
    gameState.ball.y + BALL_SIZE >= gameState.paddle.y &&     // Ball ist unterhalb der oberen Kante des Schlägers
    gameState.ball.y <= gameState.paddle.y + PADDLE_HEIGHT    // Ball ist oberhalb der unteren Kante des Schlägers
  ) {
    // Treffer! Ball prallt ab
    gameState.ball.dx = Math.abs(gameState.ball.dx);  // Ball fliegt immer nach rechts (positiv)
    
    // Cooler Trick: Ball-Geschwindigkeit variieren basierend auf Trefferposition
    // Wenn wir oben am Schläger treffen, fliegt der Ball nach oben
    // Wenn wir unten am Schläger treffen, fliegt der Ball nach unten
    const hitPosition = (gameState.ball.y - gameState.paddle.y) / PADDLE_HEIGHT;
    gameState.ball.dy = (hitPosition - 0.5) * BALL_SPEED * 2;
    
    gameState.hits++;  // Treffer-Zähler erhöhen
    updateScore();     // Punktzahl auf dem Bildschirm aktualisieren
  }
  
  // ============================================
  // SPIEL VERLOREN
  // ============================================
  // Wenn der Ball die linke Seite verlässt, haben wir verloren
  if (gameState.ball.x < 0) {
    resetBall();           // Ball zurücksetzen
    gameState.hits = 0;    // Treffer-Zähler zurücksetzen
    updateScore();         // Punktzahl aktualisieren
  }
}

// ============================================
// SCHRITT 8: Ball zurücksetzen
// ============================================
function resetBall() {
  // Ball zurück in die Mitte
  gameState.ball.x = canvas.width / 2;
  gameState.ball.y = canvas.height / 2;
  
  // Neue Geschwindigkeit: nach rechts, aber y-Richtung zufällig
  gameState.ball.dx = BALL_SPEED;
  gameState.ball.dy = (Math.random() * 2 - 1) * BALL_SPEED;  // Zufällig zwischen -BALL_SPEED und +BALL_SPEED
}

// ============================================
// SCHRITT 9: Komplettes Spiel zurücksetzen
// ============================================
function resetGame() {
  gameState.hits = 0;                                    // Treffer zurücksetzen
  gameState.paddle.y = canvas.height / 2 - PADDLE_HEIGHT / 2;  // Schläger in die Mitte
  resetBall();                                           // Ball zurücksetzen
  updateScore();                                         // Punktzahl aktualisieren
}

// ============================================
// SCHRITT 10: Punktzahl auf dem Bildschirm anzeigen
// ============================================
function updateScore() {
  // Das HTML-Element mit der ID "scoreL" finden und den Text ändern
  document.getElementById('scoreL').textContent = gameState.hits;
}

// ============================================
// SCHRITT 11: Alles auf dem Bildschirm zeichnen
// ============================================
function draw() {
  // ============================================
  // HINTERGRUND LÖSCHEN
  // ============================================
  // Wir malen ein großes graues Rechteck über alles
  // Das löscht den alten Frame, damit wir neu zeichnen können
  ctx.fillStyle = '#eee';  // Farbe: hellgrau
  ctx.fillRect(0, 0, canvas.width, canvas.height);  // Rechteck von (0,0) bis (width,height)
  
  // ============================================
  // SCHLÄGER ZEICHNEN
  // ============================================
  ctx.fillStyle = '#333';  // Farbe: dunkelgrau
  ctx.fillRect(
    gameState.paddle.x,      // x-Position (von links)
    gameState.paddle.y,      // y-Position (von oben)
    PADDLE_WIDTH,            // Breite
    PADDLE_HEIGHT            // Höhe
  );
  
  // ============================================
  // BALL ZEICHNEN
  // ============================================
  ctx.fillStyle = '#000';  // Farbe: schwarz
  ctx.fillRect(
    gameState.ball.x,       // x-Position
    gameState.ball.y,       // y-Position
    BALL_SIZE,              // Breite
    BALL_SIZE               // Höhe (gleich wie Breite = Quadrat)
  );
  
  // ============================================
  // PAUSE-TEXT ZEICHNEN
  // ============================================
  // Wenn das Spiel pausiert ist, zeigen wir "PAUSE"
  if (gameState.paused) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';  // Farbe: schwarz, aber halb durchsichtig
    ctx.font = '24px system-ui';           // Schriftart und Größe
    ctx.textAlign = 'center';              // Text zentrieren
    ctx.fillText('PAUSE', canvas.width / 2, canvas.height / 2);  // Text in der Mitte zeichnen
  }
}

// ============================================
// SCHRITT 12: Die Spielschleife (Game Loop)
// ============================================
// Das ist das Herzstück des Spiels!
// Diese Funktion wird immer wieder aufgerufen (ca. 60x pro Sekunde)
// Jedes Mal:
// 1. Bewegungen aktualisieren
// 2. Alles neu zeichnen
// 3. Nächsten Frame anfordern
function gameLoop() {
  // Nur wenn das Spiel nicht pausiert ist, bewegen wir alles
  if (!gameState.paused) {
    updatePaddle();  // Schläger bewegen
    updateBall();    // Ball bewegen und Kollisionen prüfen
  }
  
  draw();  // Alles auf dem Bildschirm zeichnen
  
  // Wenn nicht pausiert, nächsten Frame anfordern
  // requestAnimationFrame sagt dem Browser: "Ruf mich nochmal auf, wenn du bereit bist!"
  if (!gameState.paused) {
    requestAnimationFrame(gameLoop);
  }
}

// ============================================
// SCHRITT 13: Spiel starten
// ============================================
// Wenn die Seite geladen ist, machen wir:
resetBall();    // Ball in die Mitte setzen
updateScore();  // Punktzahl anzeigen (0)
draw();         // Erstes Bild zeichnen
