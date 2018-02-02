---
name: Knappar
category: Komponenter
---

Knappar kan användas med elementen `<a>`, `<button>`, och `<input>`.

## Exempel

Skolverket inkluderar tre typer av knappar

- Primär: Tillhandahåller extra visuell vikt och framhäver en knapp bland en grupp av knappar
- Sekundär: En alternativ knapp som inte är det primära valet
- Länk: Tona ned en knapp genom att göra att den ser ut som en länk men med fortsatt knapp-liknande beteende

```types.html
<button class="btn btn--primary">Primär</button>
<button class="btn btn--secondary">Sekundär</button>
<button class="btn btn--link">Länk</button>
```

## Storlekar
En mindre knapp är lämplig att använda till exempel när lorem ipsum...
```small.html
<button class="btn btn--primary btn--small">Primär</button>
<button class="btn btn--secondary btn--small">Sekundär</button>
```

Skapa en knapp med full bredd med klassen `.btn--block`. Denna knapp är speciellt lämplig när ...
```block.html
<button class="btn btn--primary btn--standard btn--block">Primär</button>
<button class="btn btn--secondary btn--standard btn--block">Sekundär</button>
```
