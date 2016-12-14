const gulp = require('gulp');
const eslint = require('gulp-eslint');

const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);
gulp.task('scripts:build', scriptsBuild);

function scripts() {
  return gulp.src(conf.path.src('**/*.js'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulp.dest(conf.path.src()));
}

function scriptsBuild() {
    return gulp.src(conf.path.src('**/*.js'))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(gulp.dest(conf.path.tmp()));
}
