#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const zip = new require('node-zip')()
const pkg = require('../package.json')

const archiveName = `skolverket-bundle-${pkg.version}`;
const files = {
  'dist/js/main.min.js': 'main.min.js',
  'dist/css/main.min.css': 'main.min.css',
  'dist/assets/': 'assets/',
  'README.md': 'README.md'
}

const isDirectory = name => {
  return fs.lstatSync(name).isDirectory()
}

const getSubtree = (folder, alias) => {
  let tree = {};
  const files = fs.readdirSync(folder)
  
  files.forEach(file => {
    const filepath = path.join(folder, file);

    if (isDirectory(filepath)) {
      const subtree = getSubtree(filepath, filepath.replace(folder, alias))
      tree = { ...tree, ...subtree };
    } else {
      tree[filepath.replace(folder, alias)] = fs.readFileSync(filepath)
    }
  })    

  return tree;
}

Object.entries(files).forEach(([source, destination]) => {

  if (isDirectory(source)) {
    const subtree = getSubtree(source, destination);

    Object.entries(subtree).forEach(([filepath, data]) => {
      zip.file(path.join(archiveName, filepath), data);
    });
  } else {
    const sourceData = fs.readFileSync(path.resolve(__dirname, '..', source))
    zip.file(path.join(archiveName, destination), sourceData)
  }
});

fs.writeFileSync(
  `${archiveName}.zip`,
  zip.generate({ base64: false, compression: 'DEFLATE' }),
  'binary'
)
