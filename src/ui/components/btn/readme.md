# Knappar

Knappar används för att signalera att en handling utförs. Knappar kan användas med elementen `<a>`, `<button>`, och `<input>`.

## Exempel

Det finns tre typer av knappar:

- Primär: Är den mest visuellt utmärkande och _skall_ användas för det viktigaste valet om flera knappar används
- Sekundär: En alternativ knapp som _bör_ användas för att märka ut att det här inte är det primära valet
- Avstängd: _Skall_ användas där interaktion inte är möjlig _men snart kommer vara det_, om användaren aldrig kan aktivera den genom t.ex. andra formulärval på sidan så skall knappen inte visas alls.

```html
<button class="btn btn--primary">Primär knapp</button>
<button class="btn btn--secondary">Sekundär knapp</button>
<button class="btn btn--primary" disabled>Inaktiv knapp</button>
```

En variant för små knappar finns och _bör_ används där utrymmet är begränsat.

```html
<button class="btn btn--primary btn--small">Primär</button>
<button class="btn btn--secondary btn--small">Sekundär</button>
<button class="btn btn--primary btn--small" disabled>Disabled</button>
```

På små skärmar kan en knapp användas i fullbredd med `.btn--block`.

```html
<button class="btn btn--primary btn--block">Primär fullbredd</button>
<button class="btn btn--secondary btn--block">Sekundär fullbredd</button>
```
