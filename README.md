# Skolverkets Komponentbibliotek

Komponentbiblioteket använder ramverket [Fractal](https://fractal.build) för att visualisera och dokumentera de olika komponenterna.

Den senaste versionen av komponentbiblioteket finns live på https://skolverket.github.io/styleguide

# Utveckling

```
git clone git@github.com:skolverket/styleguide.git
cd styleguide
yarn
yarn dev
open http://localhost:3000
```

# Releases

Komponentbiblioteket följer standarden [semantic versioning](https://semver.org/) för att avgöra vilken typ av release en viss ändring genererar.

Innan du skapar en release:

- Läs igenom [Checklista för utvecklare](/docs/3-kod/0-checklista-för-utvecklare.md)
- Alla ändringar är incheckade och pushade till GitHub

Gör releases med kommandot `yarn release`. Det verktyget bygger på [`release-it`](https://github.com/webpro/release-it) och konfigureras i filen `.release-it.json` i roten av kodprojektet. Det filarkiv som inkluderas i varje release konstrueras i skriptet `./scripts/buildReleaseArchive.js`.

- `yarn release` Skapar en patchrelease automatiskt
- `yarn release minor`
- `yarn release major`
- `yarn release preminor`

När releasen är publicerade finns den listad tillsammans med en changelog som automatiskt genererades baserat på de commits som tillkommit sedan den senaste releasen. Se gärna den texten och uppdatera för att göra det så enkelt att följa som möjligt.

# Deployment

För att uppdatera siten som finns på skolverket.github.io/skolverket använder vi kommandot `yarn deploy`. Det kommer att ta hand om fractalbygget, och publicerar sedan den senaste versionen på siten.

Siten hostas med hjälp av GitHub Pages. Mer information finns i inställningarna för repot.
