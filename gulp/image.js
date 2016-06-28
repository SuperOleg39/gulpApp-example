'use strict';

import gulp            from 'gulp';
import imagemin        from 'gulp-imagemin';
import pngquant        from 'imagemin-pngquant';
import gulpLoadPlugins from 'gulp-load-plugins';

import path from './path';

const $ = gulpLoadPlugins();

gulp.task('image:build', () => {
    return gulp.src(path.src.img, {since: gulp.lastRun('image:build')})
        .pipe($.plumber())
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [ pngquant() ]
        }))
        .pipe(gulp.dest(path.build.img));
});
