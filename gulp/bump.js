'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from './path';

const $ = gulpLoadPlugins();
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


let options = {};

gulp.task('bump-major', () => {

    options.type = 'major';

    return gulp.src('./package.json')
        .pipe($.bump(options))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-minor', () => {

    options.type = 'minor';

    return gulp.src('./package.json')
        .pipe($.bump(options))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-patch', () => {

    options.type = 'patch';

    return gulp.src('./package.json')
        .pipe($.bump(options))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-build', () => {

    options.type = 'prerelease';

    return gulp.src('./package.json')
        .pipe($.if( !isDevelopment, $.bump(options) ))
        .pipe(gulp.dest('./'));
});
