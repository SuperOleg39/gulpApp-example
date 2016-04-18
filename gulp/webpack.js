'use strict';

import gulp        from 'gulp';
import gulplog     from 'gulplog';
import webpack     from 'webpack-stream';
import named       from 'vinyl-named';
import browserSync from 'browser-sync';

import path from './path';

const reload = browserSync.reload;

gulp.task('webpack:build', callback => {

    let firstBuildReady = false;

    function done(err, stats) {
        firstBuildReady = true;

        if (err) return;

        gulplog[stats.hasErrors() ? 'error' : 'info'](
            stats.toString({
                colors: true
            })
        );
    }

    return gulp.src(path.src.js)
        .pipe(named())
        .pipe(webpack( require('../webpack.config.js'), null, done ))
        .pipe(gulp.dest(path.build.js))
        .on('data', () => {
            if (firstBuildReady) {
                callback();
            }
        })
        .pipe(reload({stream: true}));
});