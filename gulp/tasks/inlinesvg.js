const gulpSequence = require('gulp-sequence')
const rename = require('gulp-rename')
const svgstore = require('gulp-svgstore')
const svgmin = require('gulp-svgmin')
const replace = require('gulp-replace')
const gulpUtils = require('../gulp-utils')

const src = `src/ui/assets/svg/**/*`

module.exports = gulp => {
  gulp.task('inlinesvg:main', function () {
    return gulp
      .src(src)
      .pipe(svgmin())
      .pipe(rename({prefix: 'icon-'}))
      .pipe(svgstore({inlineSvg: true}))
      .pipe(replace('<svg xmlns="http://www.w3.org/2000/svg">', '<svg style="height:0;width:0;display:block;" xmlns="http://www.w3.org/2000/svg">'))
      .pipe(rename('inline-svg.hbs'))
      .pipe(gulp.dest('src/ui/framework/inline-svg'))
  })

  gulp.task('inlinesvg:watch', () => {
    gulp.watch(src, event => {
      gulpUtils.logWatchEvent(event)
      gulpSequence('inlinesvg:main')(gulpUtils.mapError)
    })
  })
}
