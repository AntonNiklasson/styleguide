const del = require('del')
const gulpSequence = require('gulp-sequence')
const flatten = require('gulp-flatten')
const gulpUtils = require('../gulp-utils')

const rootSource = 'src/ui/*'
const uiSource = ['src/ui/assets/**/*', '!src/ui/assets/svg', '!src/ui/assets/svg/**/*']
const devImgSource = 'src/dev/img/**/*'

module.exports = gulp => {

  gulp.task('assets:clean', () => {
    return del('dist/assets')
  })

  gulp.task('assets:root', () => {
    return gulp.src(rootSource).pipe(flatten()).pipe(gulp.dest('dist'))
  })

  gulp.task('assets:ui', () => {
    return gulp.src(uiSource).pipe(gulp.dest('dist/assets'))
  })

  gulp.task('assets:devImg', () => {
    return gulp.src(devImgSource).pipe(gulp.dest('dist/tmp/img'))
  })

  gulp.task('assets:all', callback => {
    gulpSequence(['assets:root', 'assets:ui', 'assets:devImg'])(callback)
  })

  gulp.task('assets:watch', () => {
    gulp.watch([rootSource, uiSource, devImgSource], event => {
      gulpUtils.logWatchEvent(event)
      gulpSequence('assets:clean', 'assets:all')(gulpUtils.mapError)
    })
  })


}
