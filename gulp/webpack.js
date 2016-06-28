'use strict';

import gulp        from 'gulp';
import gulplog     from 'gulplog';
import webpack     from 'webpack-stream';
import named       from 'vinyl-named';
import plumber     from 'gulp-plumber';

import path from './path';

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
        .pipe(plumber())
        .pipe(named())
        .pipe(webpack( require('../webpack.config.js'), null, done ))
        .pipe(gulp.dest(path.build.js))
        .on('data', () => {
            if (firstBuildReady) {
                callback();
            }
        });
});
