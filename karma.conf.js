// Karma configuration
// Generated on Sat Aug 13 2016 17:07:17 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/google-closure-library/closure/goog/base.js',
      'bower_components/hammerjs/hammer.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-mocks/angular-mocks.js',
      //TODO:  Figure out how to use the karma-closure-preprocessor so that
      // these JS files don't have to be listed in the order they must be
      // loaded.
      'js/constants.js',
      'js/objects/*.js',
      'js/controllers/*.js',
      'js/app.js',
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
