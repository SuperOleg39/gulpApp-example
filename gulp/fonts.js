'use strict';

import gulp        from 'gulp';

import path from './path';

gulp.task('fonts:build', () => {
    return gulp.src(path.src.fonts, {since: gulp.lastRun('fonts:build')})
        .pipe(gulp.dest(path.build.fonts))
});
