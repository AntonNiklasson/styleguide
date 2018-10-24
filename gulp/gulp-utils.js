const path = require('path')
const environments = require('gulp-environments')

module.exports.isDevelopment = environments.development
module.exports.isProduction = environments.production
module.exports.useEPiServer = process.argv.some(val => val === '--epi')

module.exports.setEnvironment = () => {
  if (this.isProduction()) {
    process.env.NODE_ENV = 'production'
  } else if (this.isDevelopment()) {
    process.env.NODE_ENV = 'development'
  }
  console.log(`Environment is ${process.env.NODE_ENV}`)
}

module.exports.logWatchEvent = event => {
  const root = path.join(__dirname, '../')
  console.log(`\n${event.type.toUpperCase()}: ${event.path.replace(root, '')}`)
}

module.exports.mapError = err => {
  if (!err) {
    return
  }
  if (err.fileName) {
    console.log(`ERROR ${err.fileName.replace(__dirname, '')} [${err.lineNumber}]\n${err.description}`)
  } else {
    console.log(`ERROR ${err.name}\n${err.message}`)
  }
}
