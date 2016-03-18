'use strict';

const gulp            = require('gulp');
const requireDir      = require('require-dir');

const path = require('./gulp/path');

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


gulp.task('watch', function() {
    gulp.watch(path.watch.html,    gulp.series('jade:build'));

    gulp.watch(path.watch.css,     gulp.series('stylus:build'));

    gulp.watch(path.watch.img,     gulp.series('image:build'));

    gulp.watch(path.watch.fonts,   gulp.series('fonts:build'));
});


gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver', 'watch')
));