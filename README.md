# Skolverket UI Component Library

The component library uses a the style guide [Stylemark](https://github.com/nextbigsoundinc/stylemark) to visualize common UI components used at Skolverket. To develop new components or make changes to existing ones, you need to have both [Node](https://nodejs.org) installed and it is assumed knowledge of the version control [git](http://www.git-scm.com).

View the component library at [here](https://acandocxc.github.io/skolverket-komponentbibliotek/)

# View locally

If you want to view the components locally or start contributing code or documentation to the project.

```sh
npm install
npm start
```

Go to [localhost:3000](http://localhost:3000) to view the component library.

# Contribute

To develop a component, go to `/src/scss/_component.scss` and write your code following [BEM](http://getbem.com/introduction/). Document your component in Markdown `/src/docs/_component.scss`. Then make a Pull Request.

# Release Management

1. Update the component library version using `npm version <major|minor|patch> -m "Message describing what happened".` The message will be published as the [release notes in Github](https://github.com/AcandoCxC/skolverket-komponentbibliotek/releases).
2. `git push`
3. `git push --tags` to see the release notes in Github
4. `npm run deploy` the component library at [here](https://acandocxc.github.io/skolverket-komponentbibliotek/)
