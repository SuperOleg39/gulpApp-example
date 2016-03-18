'use strict';

const gulp        = require('gulp');
const gulplog     = require('gulplog');
const webpack     = require('webpack-stream');
const named       = require('vinyl-named');
const browserSync = require('browser-sync');

const path =  require( "./path");

const reload = browserSync.reload;

gulp.task('webpack:build', function(callback) {

    let firstBuildReady = false;

    function done(err, stats) {
        firstBuildReady = true;

        if (err) return;

        gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
            colors: true
        }));
    }

    return gulp.src(path.src.js)
        .pipe(named())
        .pipe(webpack( require('../webpack.config.js'), null, done ))
        .pipe(gulp.dest(path.build.js))
        .on('data', function() {
            if (firstBuildReady) {
                callback();
            }
        })
        .pipe(reload({stream: true}));
});