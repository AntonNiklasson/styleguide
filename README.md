# Skolverket UI Component Library

The component library uses the style guide [Fractal](https://fractal.build/) to visualize common UI components used at Skolverket.

View the component library [here](https://skolverket.github.io/styleguide/)

# View locally

If you want to view the components locally or start contributing code or documentation to the project. You need to have [Node](https://nodejs.org) installed.

```sh
npm install
npm start
```

Go to [localhost:3000](http://localhost:3000) to view the component library.

# Contribute

To develop a component, go to `/src/scss/_component.scss` and write your code following [BEM](http://getbem.com/introduction/). Document your component in Markdown `/src/docs/_component.scss`. Then make a Pull Request.

# Release Management

1. Update the component library version using `npm version <major|minor|patch> -m "Message describing what happened".` The message will be published as the [release notes in Github](https://github.com/skolverket/styleguide/releases).
2. `git push`
3. `git push --tags` to see the release notes in Github
4. `npm run deploy` the component library [here](https://skolverket.github.io/styleguide/)
5. Inform the system owners across Skolverket to upgrade to the new release.
