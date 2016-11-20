const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other:serve', otherServe);
gulp.task('other:dist', otherDist);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function otherServe() {
    const fileFilter = filter(file => file.stat.isFile());

    return gulp.src([
        path.join(conf.paths.src, '/**/*'),
        path.join(`!${conf.paths.src}`, '/**/*.{css,js,html}')
    ])
        .pipe(fileFilter)
        .pipe(gulp.dest(conf.paths.tmp));
}

function otherDist() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{css,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}