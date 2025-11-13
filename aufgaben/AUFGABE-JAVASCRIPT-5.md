# 🎮 Aufgaben für den Workshop

Hier findest du Schritt-für-Schritt Aufgaben, um dein Pong Spiel zu erweitern und mehr über JavaScript zu lernen!

---

## ✅ Aufgabe 5: Dad Jokes mit der Fetch API laden

**Ziel:** Verwende die Fetch API, um einen zufälligen Dad Joke aus dem Internet zu holen – beim Neuladen der Seite oder Klick auf einen Button soll immer ein neuer Witz erscheinen!

> **🔗 Nützliche Ressourcen:**  
> [W3Schools JavaScript Fetch API](https://www.w3schools.com/js/js_api_fetch.asp) – Die Grundlagen zu `fetch()`.  
> [Dad Jokes API (icanhazdadjoke)](https://icanhazdadjoke.com/api) – Die Dokumentation für die API, die wir benutzen.

### Was du machen sollst

1. Erstelle eine neue Datei `dad-jokes.html`.
2. Baue darin eine sehr einfache HTML-Struktur:
   - Eine Überschrift (z.B. "😂 Dad Joke des Tages")
   - Einen Bereich, in dem der Witz angezeigt wird (z.B. ein `<p>` mit einer `id`)
   - Einen Button, mit dem du einen neuen Witz laden kannst
3. Schreibe JavaScript-Code (im gleichen File oder in einer separaten Datei), der:
   - Beim Laden der Seite automatisch einen Witz lädt
   - Beim Klick auf den Button einen neuen Witz abruft
   - Den Text im Witz-Bereich aktualisiert

### Starter-Ideen (du entscheidest, wie viel du nutzt)

- So startest du eine Fetch-Anfrage zur API – achte auf den Header, sonst gibt es einen Fehler:
  ```javascript
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  })
  ```
- Arbeite am besten mit `async` und `await`, damit dein Code einfacher zu lesen ist.
- Wenn du noch nicht weisst, wie du das Ergebnis benutzt: Nutze `console.log(...)`, um dir die Antwort anzuschauen.
- Baue eine kleine `loadDadJoke`-Funktion, die du sowohl beim Seitenstart als auch beim Button-Klick aufrufst.
- Überlege, wie du Fehler behandelst (z.B. Anzeige eines kurzen Textes, wenn die API nicht antwortet).

### Debuggen ausdrücklich erlaubt! 💥

- Lass dir Zwischenschritte mit `console.log()` anzeigen.
- Probiere erstmal ohne `Accept`-Header aus und schau in die Konsole, welchen Fehler du bekommst – so lernst du, warum die Header wichtig sind.
- Prüfe, was `response` und `await response.json()` zurückgeben.

### Bonus-Ideen (falls du noch mehr möchtest)

- Zeig einen kleinen Lade-Text an, während du auf den Witz wartest.
- Füge einen Zähler hinzu, wie viele Witze schon geladen wurden.
- Speichere den letzten Witz in `localStorage`, damit beim erneuten Laden nicht derselbe Witz erscheint.

---

🔓 **Lösung:** Du findest eine mögliche Umsetzung in der Datei `aufgaben/AUFGABE-JAVASCRIPT-5-LOESUNG.md`. Schau erst hinein, wenn du selbst fertig bist oder nicht weiterkommst! :)
