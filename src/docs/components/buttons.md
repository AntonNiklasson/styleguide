---
name: Knappar
category: Komponenter
---

Knappar kan användas med elementen `<a>`, `<button>`, och `<input>`.

## Exempel

Det finns tre typer av knappar:

- Primär: Tillhandahåller extra visuell vikt och framhäver en knapp bland en grupp av knappar
- Sekundär: En alternativ knapp som används för att märka ut att det här inte är det primära valet
- Länk: Tona ned en knapp genom att göra att den ser ut som en länk men med fortsatt knapp-beteende (sänder formulär etc)

```types.html
<button class="btn btn--primary">Primär</button>
<button class="btn btn--secondary">Sekundär</button>
<button class="btn btn--link">Länk</button>
```
```types:_well/padded.css hidden
```

## Storlekar
En mindre knapp är lämplig att använda till exempel när lorem ipsum...

```small.html
<button class="btn btn--primary btn--small">Primär</button>
<button class="btn btn--secondary btn--small">Sekundär</button>
```
```small:_well/padded.css hidden
```

För att få en knapp att bli 100% bred används `.btn--block`.
```block.html
<button class="btn btn--primary btn--standard btn--block">Primär</button>
<button class="btn btn--secondary btn--standard btn--block">Sekundär</button>
```
```block:_well/padded.css hidden
```
