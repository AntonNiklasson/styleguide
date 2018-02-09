---
name: Snabbstart
category: Kom igång
---

Det finns flera alternativ tillgängliga:

## Kompilerad CSS och JavaScript

Ladda hem färdigkompilerad kod för att enkelt lägga till i ditt projekt, inkluderar

- Kompilerad och minifierad CSS och JavaScript

Detta alternativ saknar dokumentation och källkods-filer.

<a href="/dist/archive/skolverket-compiled-latest.zip" class="btn btn-primary">Ladda hem</a>

När du laddar ner biblioteket hittar du följande kataloger och filer,
både kompilerade och minifierade:

```
skolverket/
├── css/
│   ├── skolverket.css
│   ├── skolverket.css.map
│   ├── skolverket.min.css
│   ├── skolverket.min.css.map
└── js/
    ├── skolverket.js
    └── skolverket.min.js
```

Vi tillhandahåller kompilerad CSS and JS (`skolverket.*`), men även kompilerad och minifierad (`skolverket.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`skolverket.*.map`) är tillgänglig för att användas i vissa webbläsares utvecklingsverktyg.


## Källkod

Kompilera Skolverkets komponentbibliotek med din egen byggprocess genom att ladda hem källkoden för Sass, JavaScript, and dokumentation. Fördelen med detta alternativ är att du endast behöver välja de komponenter du behöver i ditt projekt samt att det är enklare att bygga ut komponenter för att möta ditt behov.

Detta alternativ kräver att du konfigurerar

- Sass-kompilator för att kompilera till CSS
- Autoprefixer

<a href="/dist/archive/skolverket-source-latest.zip" class="btn btn-primary">Ladda hem källkod</a>

## Npm

Installera med [npm](https://www.npmjs.com/): `npm install @skolverket/ui`