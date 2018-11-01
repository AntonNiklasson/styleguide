---
name: Snabbstart
---

# Snabbstart

## Ladda ned

Alla releaser finns att ladda ned på Github:

<a href="https://github.com/skolverket/styleguide/releases/latest" class="btn btn-primary">Ladda hem senare versionen</a>

## Källkod

För att skräddarsy Skolverkets komponentbibliotek kan du ladda hem källkoden och bygga ut de komponenter du behöver i ditt projekt. Koden ligger publikt på [Github](https://github.com/skolverket/styleguide)

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

# Snabbstart
    ├── ...
    └── skolverket.scss
```

I `skolverket.scss` kan du styra vilka komponenter du vill använda i ditt projekt.

Enklast är om du använder du det inbyggda byggprocessen ([NodeJS](https://nodejs.org/)).

Om du använder en egen behöver ha en byggprocess där du konfigurerar:

- [SASS](https://sass-lang.com/)-kompilator för att kompilera till CSS
- [Autoprefixer](https://github.com/postcss/autoprefixer)

## Bidra

Vill du bidra med kod eller dokumentation till komponentbiblioteket så hittar du koden
på [Github](https://github.com/skolverket/styleguide).

## Upphovsrätt och licenser
Kod släppt under [MIT Licens](https://opensource.org/licenses/MIT).
