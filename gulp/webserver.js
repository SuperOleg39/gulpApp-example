'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync');

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('webserver', function() {
    browserSync(config);
});