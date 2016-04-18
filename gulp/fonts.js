'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';

import path from './path';

const reload = browserSync.reload;

gulp.task('fonts:build', () => {
    return gulp.src(path.src.fonts, {since: gulp.lastRun('fonts:build')})
        .pipe(gulp.dest(path.build.fonts))
});