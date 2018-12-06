---
name: Utveckling
---

# Utveckling

## Installera

```
git clone git@github.com:skolverket/styleguide.git
cd styleguide
yarn
yarn dev
```

## Skript

Vi använder oss av `yarn`. I `package.json` finns ett par skript definierade:

- `yarn dev`: Starta utvecklingsserver
- `yarn deploy`: Uppdatera sajten som finns på [skolverket.github.io/styleguide](https://skolverket.github.io/styleguide)
- `yarn release`: Släpp en ny version, mer info nedan

## Release

Lansera en ny version av styleguiden med `yarn release`. Det här skriptet ansvarar för att paketera och publicera styleguiden på GitHub. Vi använder deras release feature så mycket som möjligt, så den senaste versionen finns hela tiden på [github.com/skolverket/styleguide/releases](https://www.github.com/skolverket/styleguide/releases).

För att kunna ladda upp hela releasen till GitHub behöver du skapa ett [_Personal Access Token_](https://github.com/settings/tokens) och klistra in det i en fil `.env` som du skapar utifrån `.env.example` som finns med i repot. Det enda som behövs är access till scopet `repo`:

![GitHub Scopes](/tmp/img/github-scopes.png)