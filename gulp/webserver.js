'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('webserver', () => {
    browserSync(config);
});