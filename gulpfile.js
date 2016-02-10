'use strict';

var gulp        = require('gulp'),
    prefixer    = require('gulp-autoprefixer'),
    uglify      = require('gulp-uglify'),
    stylus      = require('gulp-stylus'),
    jade        = require('gulp-jade'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require("gulp-concat"),
    cssnano     = require('gulp-cssnano'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    rimraf      = require('rimraf'),
    browserSync = require("browser-sync"),
    babel       = require("gulp-babel"),
    reload      = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js:   'build/js/',
        css:  'build/css/',
        img:  'build/img/'
    },
    src: {
        html: 'src/html/*.jade',
        js:   'src/js/main.js',
        css:  'src/css/main.styl',
        img:  'src/img/**/*.*'
    },
    watch: {
        html: 'src/html/**/*.jade',
        js:   'src/js/**/*.js',
        css:  'src/css/**/*.styl',
        img:  'src/img/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('jade:build', function () {
    gulp.src(path.src.html)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.watch.js)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('stylus:build', function () {
    gulp.src(path.src.css) 
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(prefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'jade:build',
    'js:build',
    'stylus:build',
    'image:build'
]);


gulp.task('watch', function(){
    gulp.watch(path.watch.html, ['jade:build']);

    gulp.watch(path.watch.css,  ['stylus:build']);

    gulp.watch(path.watch.js,   ['js:build']);

    gulp.watch(path.watch.img,  ['image:build']);
});

gulp.task('default', ['build', 'webserver', 'watch']);