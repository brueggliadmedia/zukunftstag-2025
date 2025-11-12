# ✅ Lösung: Dad Jokes mit Fetch API

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <title>Dad Joke Generator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background-color: #f6f6f6;
      color: #333;
      padding: 24px;
    }

    main {
      max-width: 480px;
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
      text-align: center;
    }

    h1 {
      margin-top: 0;
      font-size: 28px;
    }

    #dad-joke-text {
      font-size: 20px;
      line-height: 1.4;
      margin: 16px 0;
    }

    button {
      padding: 12px 24px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background-color: #ff9800;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #f57c00;
    }
  </style>
</head>
<body>
  <main>
    <h1>😂 Dad Joke des Tages</h1>
    <p id="dad-joke-text">Lade Witz...</p>
    <button id="load-joke-button">Neuen Witz anzeigen</button>
  </main>

  <script>
    const dadJokeText = document.getElementById('dad-joke-text');
    const loadJokeButton = document.getElementById('load-joke-button');

    async function loadDadJoke() {
      dadJokeText.textContent = '🤔 Warte, suche gerade einen Witz...';
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Server antwortet nicht wie erwartet.');
        }

        const jokeData = await response.json();
        dadJokeText.textContent = jokeData.joke;
        console.log('Neuer Witz geladen:', jokeData);
      } catch (error) {
        console.error('Konnte keinen Witz abrufen:', error);
        dadJokeText.textContent = 'Ups! Heute keine Witze – versuch es gleich nochmal.';
      }
    }

    loadJokeButton.addEventListener('click', loadDadJoke);
    loadDadJoke();
  </script>
</body>
</html>
```
