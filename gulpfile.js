const gulp   = require('gulp');
const coffee = require('gulp-coffee');
const eslint = require('gulp-eslint');

gulp.task('default', () =>
  gulp.src('src/jquery.easing.coffee')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('dist/js'))
);
