const webpackConfig = require('./config/webpack/test.js')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["jquery-3.2.1", "jasmine-jquery", "jasmine"],
    plugins: [
      "karma-jquery",
      "karma-jasmine-jquery",
      "karma-jasmine",
      "karma-webpack",
      "karma-chrome-launcher",
      "karma-coverage-istanbul-reporter" /* optional */,
      "karma-spec-reporter" /* optional */
    ],
    files: ["app/javascript/**/*.spec.js"],
    exclude: [],
    webpack: webpackConfig,
    preprocessors: {'app/javascript/**/*.spec.js': ['webpack']},
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      fixWebpackSourcePaths: true
    } /* optional */,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};
