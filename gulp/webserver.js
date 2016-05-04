'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';

import path from './path';

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

    browserSync.watch( path.watch.all ).on('change', browserSync.reload);
});
