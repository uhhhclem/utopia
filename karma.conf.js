// Karma configuration
// Generated on Sat Aug 13 2016 17:07:17 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'closure'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/google-closure-library/closure/goog/base.js',
      'bower_components/hammerjs/hammer.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // external deps
      {pattern: 'bower_components/google-closure-library/closure/goog/deps.js', included: false, served: false},
      {pattern: 'bower_components/google-closure-library/closure/goog/**/*.js', included: false},
      
      'test/**/*.js',
      'static/templates/*.html',
      {pattern: 'js/**/*.js', included: false}
    ],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'static/',
      moduleName: 'templates'
    },

    preprocessors: {
      // external deps
      'bower_components/google-closure-library/closure/goog/deps.js': ['closure-deps'],

      // source and test files preprocessed for dependencies
      'js/**/*.js': ['closure', 'closure-iit'],
      'test/**/*.js': ['closure', 'closure-iit'],
      'bower_components/google-closure-library/closure/goog/**/*.js': ['closure'],
      
      // html templates loaded by ng-html2js 
      "static/templates/*.html": ["ng-html2js"]
    },

    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server hostname
    hostname: process.env.IP,

    // web server port
    port: process.env.PORT,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
