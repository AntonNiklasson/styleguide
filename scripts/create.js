#! /usr/bin/env node

const fs = require('fs');
const path = require('path')
const mkdirp = require('mkdirp')
const prompts = require("prompts");

const createFile = (filename, contents) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, contents, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve()
    })
  })
};

prompts([
  {
    type: "select",
    name: "category",
    message: "Vad vill du skapa?",
    choices: [{ title: "Komponent", value: 'component' }, { title: "Modul", value: 'container' }, { title: "Sida", value: 'page' }]
  },
  {
    type: 'text',
    name: 'name',
    message: 'Namn?'
  }
]).then(({ category, name }) => {
  const resourcePath = path.resolve(__dirname, '../src/ui/', category + 's', name);

  mkdirp(resourcePath)

  return Promise.all([
    createFile(path.resolve(resourcePath, `${name}.hbs`), `<div class="${name.toLowerCase()}"></div>`),
    createFile(path.resolve(resourcePath, `${name}.scss`), `.${name.toLowerCase()} {\n\tbackground: red;\n}`),
    createFile(path.resolve(resourcePath, `${name}.config.js`), `module.exports = { name: ${name}, handle: ${name.toLowerCase()}, context: {} }`),
    createFile(path.resolve(resourcePath, `readme.md`), `# ${name}`)
  ]);
})
