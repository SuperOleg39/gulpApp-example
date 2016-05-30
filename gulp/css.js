'use strict';

import gulp            from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import path from  './path';

const $ = gulpLoadPlugins();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('stylus:build', () => {
    return gulp.src(path.src.css)
        .pipe($.if( isDevelopment, $.sourcemaps.init() ))
        .pipe($.stylus({
            'include css': true
        }))
        .pipe($.autoprefixer() )
        .pipe($.if( isDevelopment, $.sourcemaps.write() ))
        .pipe($.if( !isDevelopment, $.cssnano() ))
        .pipe(gulp.dest(path.build.css));
});
