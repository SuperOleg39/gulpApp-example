'use strict';

import gulp            from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync     from 'browser-sync';

import path from './path';

const $ = gulpLoadPlugins({
    rename: {
        'gulp-html-minifier': 'htmlmin'
    }
});

const reload = browserSync.reload;
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('jade:build', () => {
    return gulp.src(path.src.html)
        .pipe($.jade({
            pretty: true
        }))
        .pipe($.if( !isDevelopment, $.htmlmin({ collapseWhitespace: true }) ))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});