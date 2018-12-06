const gulp = require('gulp')
const del = require('del')
const gulpSequence = require('gulp-sequence')
const gulpUtils = require('./gulp/gulp-utils')

require('./gulp/tasks/assets')(gulp)
require('./gulp/tasks/inlinesvg')(gulp)
require('./gulp/tasks/sass')(gulp)
require('./gulp/tasks/scripts')(gulp)

gulp.task('watch:all', [ 'assets:watch', 'sass:watch', 'inlinesvg:watch'])
gulp.task('clean', () => { return del('dist') })
gulp.task('environment', gulpUtils.setEnvironment)

gulp.task('default', callback => {
  gulpSequence('environment', 'clean', 'inlinesvg:main',
    ['assets:all', 'sass:main', 'scripts:all'],
    gulpUtils.isDevelopment() ? 'watch:all' : null
  )(callback)
})
