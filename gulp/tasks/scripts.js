const gulp = require('gulp')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const browserify = require('browserify')
const watchify = require('watchify')
const gulpUtils = require('../gulp-utils')

const _scripts = [
  {
    entry: ['src/ui/framework/main.js'],
    watch: ['src/ui/**/*.js'],
    fileName: 'main'
  }
]

const browserifyConfig = entry => {
  return {
    entries: [entry],
    extensions: ['.js'],
    debug: gulpUtils.isDevelopment(),
    cache: {},
    packageCache: {},
    transform: ['babelify'],
    plugin: gulpUtils.isDevelopment() ? [watchify] : []
  }
}

const bundle = (bw, fileName) => {

  bw.bundle()
    .on('error', gulpUtils.mapError)
    .pipe(source(`${fileName}.min.js`))
    .pipe(buffer())
    .pipe(gulpUtils.isProduction(uglify()))
    .pipe(gulp.dest('dist/js'))
}

module.exports = gulp => {

  gulp.task('scripts:all', () => {

    _scripts.map(script => {
      script.cache = script.cache || browserify(browserifyConfig(script.entry))

      if (gulpUtils.isProduction() || gulpUtils.useEPiServer) {
        script.cache.ignore('./src/dev/api/adapter.js')
      }

      if (gulpUtils.isDevelopment) {
        script.cache.on('update', () => { bundle(script.cache, script.fileName) });
      }

      bundle(script.cache, script.fileName)
    })

  })

}
