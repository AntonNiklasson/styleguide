const files = require('./files')
const fs = require('fs')
const path = require('path')

let counter = 1;

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

console.log('PATCHING FRACTAL')

try {
  for(let i=0; i < files.length; i++) {
    const file = files[i]
    const data = fs.readFileSync(path.join(__dirname, file.path), 'utf-8')
    let newData = (' ' + data).slice(1);

    for(let i=0; i < file.patches.length; i++) {
      const patch = file.patches[i]
      newData = newData.replace(new RegExp(escapeRegExp(patch.pattern), 'g'), patch.replace);
    }

    if(newData !== data) {
      fs.writeFileSync(path.join(__dirname, file.path), newData, 'utf-8')
      console.log(counter + '. ' + file.note);
      counter++
    }
  }

  if(counter > 1) {
    console.log('PATCH RESULT: Complete!')
  } else {
    console.log('PATCH RESULT: No changes detected! You are up to date.')
  }
} catch (err) {
  console.log('PATCH ERROR: ' + err)
}


