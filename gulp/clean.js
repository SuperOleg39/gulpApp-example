'use strict';

const gulp = require('gulp');
const del  = require('del');

const path = require( "./path");

gulp.task('clean', function() {
    return del(path.clean);
});