---
name: Knappar
category: Komponenter
---

Knappar kan användas med elementen `<a>`, `<button>`, och `<input>`.

## Exempel

Det finns tre typer av knappar:

- Primär: Är den mest visuellt utmärkande och _skall_ användas för det viktigaste valet om flera knappar används
- Sekundär: En alternativ knapp som _bör_ användas för att märka ut att det här inte är det primära valet
- Länk: Tona ned en knapp genom att göra att den ser ut som en länk men med fortsatt knapp-beteende (sänder formulär etc)

```types.html
<button class="btn btn--primary">Primär</button>
<button class="btn btn--secondary">Sekundär</button>
<button class="btn btn--primary" disabled>Disabled</button>
<button class="btn btn--link">Länk</button>
<button class="btn btn-icon icon-speaker">Lyssna</button>
<button class="btn btn-icon btn-icon--right icon-dropdown-arrow">Platshållare</button>
```

En variant för små knappar finns och _bör_ används där utrymmet är begränsat eller där en normal knappstorlek skulle få för mycket uppmärksamhet.

```small.html
<button class="btn btn--primary btn--small">Primär</button>
<button class="btn btn--secondary btn--small">Sekundär</button>
<button class="btn btn--primary btn--small" disabled>Disabled</button>
```

För att få en knapp att bli 100% bred används `.btn--block`.

```block.html
<button class="btn btn--primary btn--block">Primär</button>
<button class="btn btn--secondary btn--block">Sekundär</button>
```
