#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const zip = new require('node-zip')()
const pkg = require('../package.json')

const archiveName = `skolverket-styleguide-${pkg.version}`;
const files = {
  './dist/js/main.min.js': 'main.min.js',
  './dist/css/main.min.css': 'main.min.css',
  'README.md': 'README.md'
}

Object.entries(files).forEach(([source, destination]) => {
  const sourceData = fs.readFileSync(path.resolve(__dirname, '..', source))

  zip.file(path.join(archiveName, destination), sourceData)
});

fs.writeFileSync(
  `${archiveName}.zip`,
  zip.generate({ base64: false, compression: 'DEFLATE' }),
  'binary'
)
