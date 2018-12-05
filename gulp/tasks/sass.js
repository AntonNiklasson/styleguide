const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const gulpSequence = require('gulp-sequence')
const replace = require('gulp-replace')
const gulpUtils = require('../gulp-utils')

const browserList = [ 'Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 8', 'Opera >= 12', 'Safari >= 6' ]
const mainEntry = [ 'src/ui/framework/main.scss', 'src/ui/framework/no-js.scss' ]

module.exports = gulp => {

  gulp.task('sass:main', () => {
    return gulp
      .src(mainEntry)
      .pipe(gulpUtils.isDevelopment(sourcemaps.init()))
      .pipe(sass({outputStyle: 'compressed'}))
      .on('error', gulpUtils.mapError)
      .pipe(gulpUtils.isDevelopment(sourcemaps.write(undefined, {sourceRoot: null})))
      .pipe(autoprefixer({browsers: browserList}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'))
      .resume()
  })

  gulp.task('sass:watch', () => {
    gulp.watch('src/ui/**/*.scss', event => {
      gulpUtils.logWatchEvent(event)
      gulpSequence('sass:main')(gulpUtils.mapError)
    })
  })
}
