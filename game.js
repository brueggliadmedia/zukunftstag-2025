// Canvas und Context
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Spieleinstellungen
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 80;
const PADDLE_SPEED = 5;
const BALL_SIZE = 10;
const BALL_SPEED = 4;

// Spielzustand
let gameState = {
  paused: true,
  hits: 0,
  paddle: {
    x: 10,
    y: canvas.height / 2 - PADDLE_HEIGHT / 2
  },
  ball: {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: BALL_SPEED,
    dy: BALL_SPEED
  }
};

// Tastendrücke verfolgen
const keys = {};

// Event Listener für Tastatur
document.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
  
  // Start/Pause mit Leertaste
  if (e.key === ' ') {
    e.preventDefault();
    gameState.paused = !gameState.paused;
    if (!gameState.paused) {
      gameLoop();
    }
  }
  
  // Reset mit R
  if (e.key.toLowerCase() === 'r') {
    resetGame();
  }
});

document.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

// Paddle bewegen
function updatePaddle() {
  if (keys['w'] && gameState.paddle.y > 0) {
    gameState.paddle.y -= PADDLE_SPEED;
  }
  if (keys['s'] && gameState.paddle.y < canvas.height - PADDLE_HEIGHT) {
    gameState.paddle.y += PADDLE_SPEED;
  }
}

// Ball bewegen
function updateBall() {
  gameState.ball.x += gameState.ball.dx;
  gameState.ball.y += gameState.ball.dy;
  
  // Kollision mit oberer/unterer Wand
  if (gameState.ball.y <= 0 || gameState.ball.y >= canvas.height - BALL_SIZE) {
    gameState.ball.dy = -gameState.ball.dy;
  }
  
  // Kollision mit rechter Wand
  if (gameState.ball.x >= canvas.width - BALL_SIZE) {
    gameState.ball.dx = -gameState.ball.dx;
  }
  
  // Kollision mit Paddle
  if (
    gameState.ball.x <= gameState.paddle.x + PADDLE_WIDTH &&
    gameState.ball.x >= gameState.paddle.x &&
    gameState.ball.y + BALL_SIZE >= gameState.paddle.y &&
    gameState.ball.y <= gameState.paddle.y + PADDLE_HEIGHT
  ) {
    gameState.ball.dx = Math.abs(gameState.ball.dx);
    // Ball-Geschwindigkeit leicht variieren basierend auf Trefferposition
    const hitPosition = (gameState.ball.y - gameState.paddle.y) / PADDLE_HEIGHT;
    gameState.ball.dy = (hitPosition - 0.5) * BALL_SPEED * 2;
    gameState.hits++;
    updateScore();
  }
  
  // Spiel verloren (Ball verlässt linke Seite)
  if (gameState.ball.x < 0) {
    resetBall();
    gameState.hits = 0;
    updateScore();
  }
}

// Ball zurücksetzen
function resetBall() {
  gameState.ball.x = canvas.width / 2;
  gameState.ball.y = canvas.height / 2;
  gameState.ball.dx = BALL_SPEED;
  gameState.ball.dy = (Math.random() * 2 - 1) * BALL_SPEED;
}

// Spiel zurücksetzen
function resetGame() {
  gameState.hits = 0;
  gameState.paddle.y = canvas.height / 2 - PADDLE_HEIGHT / 2;
  resetBall();
  updateScore();
}

// Score aktualisieren
function updateScore() {
  document.getElementById('scoreL').textContent = gameState.hits;
}

// Zeichnen
function draw() {
  // Canvas löschen
  ctx.fillStyle = '#eee';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Paddle
  ctx.fillStyle = '#333';
  ctx.fillRect(
    gameState.paddle.x,
    gameState.paddle.y,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
  
  // Ball
  ctx.fillStyle = '#000';
  ctx.fillRect(
    gameState.ball.x,
    gameState.ball.y,
    BALL_SIZE,
    BALL_SIZE
  );
  
  // Pause-Text
  if (gameState.paused) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.font = '24px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('PAUSE', canvas.width / 2, canvas.height / 2);
  }
}

// Game Loop
function gameLoop() {
  if (!gameState.paused) {
    updatePaddle();
    updateBall();
  }
  
  draw();
  
  if (!gameState.paused) {
    requestAnimationFrame(gameLoop);
  }
}

// Initialisierung
resetBall();
updateScore();
draw();
