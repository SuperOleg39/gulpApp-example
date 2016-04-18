module.exports = function (config) {
    'use strict';

    config.set({

        basePath: 'src',

        frameworks: ['mocha', 'chai'],

        files: [
            'test/**/*.test.js'
        ],

        preprocessors: {
            'test/**/*.test.js': ['webpack']
        },

        webpack: {
            module: {

                loaders: [{
                    test:   /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }]

            }
        },

        webpackMiddleware: {
            noInfo: true
        },
 
        plugins: [
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-mocha-reporter'
        ],

        reporters: ['mocha'],

        mochaReporter: {
            colors: {
                error: 'bgRed'
            }
        },

        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: false,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']

    });
};