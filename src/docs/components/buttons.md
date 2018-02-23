---
name: Knappar
category: Komponenter
---

Knappar kan användas med elementen `<a>`, `<button>`, och `<input>`.

## Exempel

Det finns tre typer av knappar:

- Primär: Är den mest visuellt utmärkande och _skall_ användas för det viktigaste valet om flera knappar används
- Sekundär: En alternativ knapp som _bör_ användas för att märka ut att det här inte är det primära valet

```types.html
<button class="btn btn--primary">Primär</button>
<button class="btn btn--secondary">Sekundär</button>
<button class="btn btn--primary" disabled>Disabled</button>
<button class="btn btn-icon icon-volume">Lyssna</button>
<button class="btn btn-icon icon-volume-disabled" disabled>Lyssna</button>
```
```types.css hidden
.btn {
  margin: 0 28px 28px 0;
}
```

En variant för små knappar finns och _bör_ används där utrymmet är begränsat eller där en normal knappstorlek skulle få för mycket uppmärksamhet.

```small.html
<button class="btn btn--primary btn--small">Primär</button>
<button class="btn btn--secondary btn--small">Sekundär</button>
<button class="btn btn--primary btn--small" disabled>Disabled</button>
```
```small.css hidden
.btn {
  margin: 0 28px 28px 0;
}
```

För att få en knapp att bli 100% bred används `.btn--block`.

```block.html
<button class="btn btn--primary btn--block">Primär</button>
<button class="btn btn--secondary btn--block">Sekundär</button>
```
