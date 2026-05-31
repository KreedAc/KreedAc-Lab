# KreedAc Lab — Portfolio

Sito statico pronto per Netlify.

## Pubblicare
- **Drag & drop**: vai su https://app.netlify.com/drop e trascina l'intera cartella `kreedac-lab-site`.
- **Da Git**: crea un repo con questi file. Build command: vuoto. Publish directory: `.` (root).

## File
- `index.html` — pagina (entry point Netlify)
- `styles.css` — stili
- `app.js` — logica (lingua IT/EN, animazioni)
- `netlify.toml` — configurazione deploy

## Note
- I due progetti mostrano un mockup-browser che linka al sito live.
  Per sostituirli con screenshot reali: rimpiazza il blocco `<a class="project__shot project__frame">`
  con `<img class="project__shot" src="img/nome.jpg" alt="...">` e crea una cartella `img/`.
- Le webfont (Newsreader, Hanken Grotesk, Space Mono) sono caricate da Google Fonts.
