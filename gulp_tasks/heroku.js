const gulp = require('gulp');
const conf = require('../conf/gulp.conf');

gulp.task('heroku', copyHerokuNeededFiles);

function copyHerokuNeededFiles() {
    var herokuFiles = [
        'heroku-needed-files/.htaccess',
        'heroku-needed-files/404.html',
        'heroku-needed-files/package.json',
        'heroku-needed-files/Procfile',
        'heroku-needed-files/robots.txt',
        'heroku-needed-files/web.js'
    ];

    return gulp.src(herokuFiles)
        .pipe(gulp.dest(conf.path.dist()));
}
