# 🎮 Aufgaben für den Workshop

Hier findest du Schritt-für-Schritt Aufgaben, um dein Pong Spiel zu erweitern und mehr über JavaScript zu lernen!

---

## ✅ Aufgabe 4: Pokemon mit Fetch API anzeigen

**Ziel:** Lerne, wie du die Fetch API verwendest, um Daten von einer API (Pokemon API) abzurufen und anzuzeigen!

> **🔗 Nützliche Ressource:**  
> [W3Schools JavaScript Fetch API](https://www.w3schools.com/js/js_api_fetch.asp) – Eine interaktive Einführung in die Fetch API mit vielen Beispielen!
> [Pokemon API Dokumentation](https://pokeapi.co/docs/v2) – Die offizielle Dokumentation der Pokemon API!

### Was du machen sollst:

Erstelle eine neue HTML-Seite, die beim Laden ein zufälliges Pokemon von der Pokemon API abruft und anzeigt:

1. **Fetch API verwenden** - Lade Daten von der Pokemon API
2. **Zufälliges Pokemon** - Beim Reload wird immer ein anderes Pokemon angezeigt
3. **Pokemon-Informationen anzeigen** - Zeige Name, Bild und andere Infos des Pokemons

### 📝 Schritt-für-Schritt Anleitung:

1. **Erstelle eine neue HTML-Datei** `pokemon.html`:

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <title>Pokemon Anzeige</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      text-align: center;
    }
    #pokemon-container {
      margin-top: 20px;
      padding: 20px;
      border: 2px solid #333;
      border-radius: 10px;
      background-color: #f0f0f0;
    }
    #pokemon-image {
      max-width: 200px;
      height: auto;
    }
    h1 {
      color: #333;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <h1>🔮 Zufälliges Pokemon</h1>
  <div id="pokemon-container">
    <p>Lade Pokemon...</p>
  </div>
  <button onclick="loadRandomPokemon()">Neues Pokemon laden</button>

  <script>
    // Funktion zum Laden eines zufälligen Pokemons
    async function loadRandomPokemon() {
      // Zufällige Pokemon-ID zwischen 1 und 151 (erste Generation)
      const randomPokemonId = Math.floor(Math.random() * 151) + 1;
      
      // Pokemon API URL - ersetze {id} mit der zufälligen ID
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;
      
      try {
        // Fetch API verwenden, um Daten von der API abzurufen
        const response = await fetch(apiUrl);
        
        // Prüfen, ob die Anfrage erfolgreich war
        if (!response.ok) {
          throw new Error('Pokemon konnte nicht geladen werden');
        }
        
        // Die Antwort in JSON-Format umwandeln
        const pokemonData = await response.json();
        
        // Pokemon-Informationen aus den Daten extrahieren
        const pokemonName = pokemonData.name;
        const pokemonImage = pokemonData.sprites.front_default;
        const pokemonHeight = pokemonData.height;
        const pokemonWeight = pokemonData.weight;
        
        // HTML-Element finden, wo das Pokemon angezeigt werden soll
        const container = document.getElementById('pokemon-container');
        
        // Pokemon-Informationen in HTML anzeigen
        container.innerHTML = `
          <h2>${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
          <img id="pokemon-image" src="${pokemonImage}" alt="${pokemonName}">
          <p><strong>Grösse:</strong> ${pokemonHeight / 10} m</p>
          <p><strong>Gewicht:</strong> ${pokemonWeight / 10} kg</p>
        `;
      } catch (error) {
        // Fehlerbehandlung
        const container = document.getElementById('pokemon-container');
        container.innerHTML = `<p style="color: red;">Fehler: ${error.message}</p>`;
      }
    }
    
    // Beim Laden der Seite automatisch ein Pokemon laden
    loadRandomPokemon();
  </script>
</body>
</html>
```

2. **Öffne die Datei** `pokemon.html` im Browser

3. **Teste die Funktion:**
   - Lade die Seite neu (F5 oder Cmd+R) - es sollte ein neues Pokemon erscheinen
   - Klicke auf den Button "Neues Pokemon laden" - es sollte ein neues Pokemon geladen werden

### 💡 Tipps:

- **`fetch()`** = Eine Funktion, um Daten von einer URL (API) abzurufen
- **`async` / `await`** = Warten, bis die Daten geladen sind, bevor wir weitermachen
- **`Math.random()`** = Erzeugt eine zufällige Zahl zwischen 0 und 1
- **`Math.floor()`** = Rundet eine Zahl ab (z.B. 5.7 wird zu 5)
- **`response.json()`** = Wandelt die Antwort der API in ein JavaScript-Objekt um
- **`try / catch`** = Fängt Fehler ab, falls etwas schiefgeht

### 🔍 Wie funktioniert die Pokemon API?

Die Pokemon API ist kostenlos und erlaubt es, Informationen über Pokemon abzurufen:
- **URL-Format:** `https://pokeapi.co/api/v2/pokemon/{id}`
- **Beispiel:** `https://pokeapi.co/api/v2/pokemon/25` gibt Informationen über Pikachu zurück
- **Datenformat:** JSON (JavaScript Object Notation)

### ✨ Bonus-Aufgabe:

- Zeige auch die Pokemon-Typen an (z.B. Feuer, Wasser, Elektro)
- Füge eine Liste der Pokemon-Attacken hinzu
- Erstelle eine Galerie mit mehreren Pokemon gleichzeitig
- Ändere die Anzahl der Pokemon (statt 151 kannst du auch mehr verwenden)
- Füge einen Lade-Indikator hinzu, während das Pokemon geladen wird

### 🎓 Was lernst du dabei?

- Wie man die Fetch API verwendet, um Daten von einer API abzurufen
- Wie man `async` und `await` verwendet, um auf asynchrone Operationen zu warten
- Wie man JSON-Daten verarbeitet und anzeigt
- Wie man Fehlerbehandlung mit `try/catch` implementiert
- Wie man zufällige Werte mit `Math.random()` erzeugt
- Wie man DOM-Elemente dynamisch mit JavaScript ändert

