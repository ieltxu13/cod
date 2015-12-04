var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');


gulp.task('watch', function() {
  connect.server({
    root: 'src',
    port: 3000,
    livereload: true
  })
  watch('./src/app/**/*.js').pipe(connect.reload());
  watch('./src/**/*.html').pipe(connect.reload());
});
