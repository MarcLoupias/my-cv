const conf = require('./gulp.conf');
const listFiles = require('./karma-files.conf');

module.exports = function (config) {
    const configuration = {
        basePath: '../',
        singleRun: true,
        autoWatch: false,
        logLevel: 'INFO',
        junitReporter: {
            outputDir: 'test-reports'
        },
        browsers: [
            'PhantomJS'
        ],
        frameworks: [
            'phantomjs-shim',
            'jasmine',
            'angular-filesort'
        ],
        files: listFiles(),
        reporters: ['progress', 'coverage'],
        preprocessors: {
            '**/*.html': ['ng-html2js'],
            'src/**/*.js': ['coverage']
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/',
            moduleName: 'app'
        },
        angularFilesort: {
            whitelist: [
                conf.path.src('**/!(*.html|*.spec|*.mock).js')
            ]
        },
        coverageReporter: {
            type : 'lcovonly',
            dir : 'coverage/'
        },
        plugins: [
            require('karma-jasmine'),
            require('karma-junit-reporter'),
            require('karma-coverage'),
            require('karma-phantomjs-launcher'),
            require('karma-phantomjs-shim'),
            require('karma-ng-html2js-preprocessor'),
            require('karma-angular-filesort')
        ]
    };

    config.set(configuration);
};
