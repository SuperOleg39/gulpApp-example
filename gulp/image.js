'use strict';

import gulp        from 'gulp';
import imagemin    from 'gulp-imagemin';
import pngquant    from 'imagemin-pngquant';
import browserSync from 'browser-sync';

import path from './path';

const reload = browserSync.reload;

gulp.task('image:build', () => {
    return gulp.src(path.src.img, {since: gulp.lastRun('image:build')}) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [ pngquant() ]
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});