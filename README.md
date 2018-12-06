# Skolverket UI Component Library

The component library uses the style guide [Fractal](https://fractal.build/) to visualize common UI components used at Skolverket.

View the component library [here](https://skolverket.github.io/styleguide/)

# Contribute

```
git clone git@github.com:skolverket/styleguide.git
cd styleguide
yarn
yarn dev
open http://localhost:3000
```

# Releases

Use the command `yarn release` to create a new release. This is built with `release-it` and configured through `.release-it.json` in the repo. Also, the asset included in the release is built using `./scripts/buildReleaseArchive.js`.

- `yarn release`
- `yarn release minor`
- `yarn release minor`
- `yarn release major`
- `yarn release preminor`

Just make sure the working tree is clean and everything you want to include in the release is pushed to GitHub.
