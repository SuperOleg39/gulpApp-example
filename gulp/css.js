'use strict';

const gulp            = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync     = require('browser-sync');

const path = require( "./path");
const $    = gulpLoadPlugins();

const reload        = browserSync.reload;
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('stylus:build', function() {
    return gulp.src(path.src.css)
        .pipe($.if( isDevelopment, $.sourcemaps.init() ))
        .pipe($.stylus({
            'include css': true
        }))
        .pipe($.autoprefixer() )
        .pipe($.if( isDevelopment, $.sourcemaps.write() ))
        .pipe($.if( !isDevelopment, $.cssnano() ))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});