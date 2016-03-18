'use strict';

const gulp            = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync     = require('browser-sync');

const path =  require( "./path");
const $    = gulpLoadPlugins({
    rename: {
        'gulp-html-minifier': 'htmlmin'
    }
});

const reload = browserSync.reload;
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('jade:build', function() {
    return gulp.src(path.src.html)
        .pipe($.jade({
            pretty: true
        }))
        .pipe($.if( !isDevelopment, $.htmlmin({ collapseWhitespace: true }) ))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});