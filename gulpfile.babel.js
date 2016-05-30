'use strict';

import gulp        from 'gulp';
import requireDir  from 'require-dir';
import browserSync from 'browser-sync';
import karma       from 'karma';

import path from './gulp/path';

const reload = browserSync.reload;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

const Server = karma.Server;

requireDir('./gulp', {
    recurse: true
});


gulp.task('test', done => {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        autoWatch: isDevelopment,
        singleRun: !isDevelopment,
    }, done).start();
});


gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'jade:build',
        'stylus:build',
        'webpack:build',
        'image:build',
        'fonts:build'
    )
));


gulp.task('watch', () => {
    gulp.watch(path.watch.html,   gulp.series('jade:build'));

    gulp.watch(path.watch.css,    gulp.series('stylus:build'));

    gulp.watch(path.watch.img,    gulp.series('image:build'));

    gulp.watch(path.watch.fonts,  gulp.series('fonts:build'));
});


gulp.task('default', gulp.series(
    'build',
    gulp.parallel(
        'webserver',
        'watch'
    )
));
