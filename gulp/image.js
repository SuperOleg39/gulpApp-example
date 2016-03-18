'use strict';

const gulp            = require('gulp');
const imagemin        = require('gulp-imagemin');
const pngquant        = require('imagemin-pngquant');
const browserSync     = require('browser-sync');

const path =  require( "./path");

const reload = browserSync.reload;

gulp.task('image:build', function() {
    return gulp.src(path.src.img, {since: gulp.lastRun('image:build')}) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [ pngquant() ]
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});