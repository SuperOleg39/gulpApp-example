'use strict';

import gulp        from 'gulp';
import requireDir  from 'require-dir';
import browserSync from 'browser-sync';

import path from './gulp/path';
console.log(path)

const reload = browserSync.reload;

requireDir('./gulp', {
    recurse: true
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

    gulp.watch(path.build.js,     reload);
});


gulp.task('default', gulp.series(
    'build',
    gulp.parallel(
        'webserver',
        'watch'
    )
));