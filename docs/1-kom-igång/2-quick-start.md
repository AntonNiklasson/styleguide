---
name: Snabbstart
---

# Snabbstart

Alla releaser finns att ladda ned [på Github](https://www.github.com/skolverket/styleguide/releases). Till varje release finns ett snapshot av den kompletta styleguiden bifogad:

![Exempelrelease med snapshot](/tmp/img/sample-release.png)

Ladda ned den och lägg till den i projektet. Här finns dels kompletta CSS- och JavaScript-filer som går att inkludera direkt i `<link />` och `<script />`. Men snapshoten inkluderar även den faktiska källkoden: SASS-filer och mindre JavaScript-moduler som ni själva kan inkludera i ett eventuellt byggsteg.

När du laddar ner biblioteket hittar du följande filer:

```
skolverket-styleguide-v1.0.0.tgz
├── dist
│   └── js
│       └── main.min.js
└── src
    └── ui
        ├── assets
        ├── components
        ├── containers
        ├── core
        ├── framework
        └── pages
├── package.json
└── README.md
```

I `dist` finns de kompletta filerna `main.min.js` och `styleguide.css`. Inkludera dem för att få tillgång till alla komponenter och containrar. I mappen `src` finns källkoden. Här kan det vara intressant att inkludera vissa SCSS-filer för att ni själva ska kunna äga exempelvis typografin, eller slippa ett stort bundle om ni ändå bara använder ett fåtal komponenter.

## Bidra

Mer ingående information kring hur vi utvecklar styleguiden kan du hitta under [Utveckling](/docs/kom-igang/utveckling).