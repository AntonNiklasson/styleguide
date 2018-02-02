---
name: Vad som ingår
category: Kom igång
---

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