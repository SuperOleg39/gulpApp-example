'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync');

const path =  require( "./path");

const reload = browserSync.reload;

gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts, {since: gulp.lastRun('fonts:build')})
        .pipe(gulp.dest(path.build.fonts))
});