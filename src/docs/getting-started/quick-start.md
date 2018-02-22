---
name: Snabbstart
category: Kom igång
---

## Källkod

Kompilera Skolverkets komponentbibliotek med din egen byggprocess genom att ladda hem källkoden för Sass och sedan de komponenter du behöver i ditt projekt.

När du laddar ner biblioteket hittar du följande filer:

```
src/
├── docs/
│   ├── components/
│   │   ├── _accordion.md
│   │   ├── _buttons.md
│   │   └── ...
│   └── getting-started/
│       ├── conventions.md
│       ├── introduction.md
│       └── ...
└── scss/
    ├── _accordion.scss
    ├── _buttons.scss
    ├── ...
    └── skolverket.scss
```

I `skolverket.scss` kan du styra vilka komponenter du vill använda i ditt projekt.

Din byggprocess kräver att du konfigurerar

- Sass-kompilator för att kompilera till CSS
- Autoprefixer

<a href="https://github.com/AcandoCxC/skolverket-komponentbibliotek/releases/latest" class="btn btn-primary">Ladda hem källkod</a>