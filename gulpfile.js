var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

var gutil = require('gulp-util');
gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
});