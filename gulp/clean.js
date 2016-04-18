'use strict';

import gulp from 'gulp';
import del  from 'del';

import path from  './path';

gulp.task('clean', () => {
    return del(path.clean);
});