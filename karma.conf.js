// Karma configuration
// Generated on Thu Feb 02 2017 03:58:06 GMT+0530 (IST)
const webpackConfig = require('./tools/webpack.config').default;

const srcFilesGlob = 'src/**/*.test.js';
const toolFilesGlob = 'tools/*.js';
const clientWebPackConfig = webpackConfig[0];

const webpackConfigN = {...clientWebPackConfig, externals:{
    ...clientWebPackConfig.externals,
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
    'react/lib/ReactContext': 'window',
    'sinon': 'window.sinon'
}};
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            srcFilesGlob
        ],


        // list of files to exclude
        exclude: [],

        webpack: webpackConfigN,
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            [srcFilesGlob]: ['webpack']
        },

        /*client: {
            mocha: {
                require: [require.resolve('./src/test/setup')],
            }
        },*/
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec','coverage'],

        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'coverage/', subdir: '.'},
                {type: 'json', dir: 'coverage/', subdir: '.'},
                {type: 'text-summary'},
            ]
        },
        specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false,  // do not print information about failed tests
            suppressPassed: false,  // do not print information about passed tests
            suppressSkipped: true,  // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },
        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
