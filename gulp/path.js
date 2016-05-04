export default {
        build: {
            html:    'build/',
            js:      'build/js/',
            css:     'build/css/',
            fonts:   'build/fonts/',
            img:     'build/img/'
        },
        src: {
            html:    'src/html/*.jade',
            js:      'src/js/*.js',
            css:     'src/css/*.styl',
            fonts:   'src/fonts/**/*.*',
            img:     'src/img/**/*.*'
        },
        watch: {
            html:    'src/html/**/*.jade',
            js:      'src/js/**/*.js',
            css:     'src/css/**/*.styl',
            fonts:   'src/fonts/**/*.*',
            img:     'src/img/**/*.*',
            all:     'build/**/*.*'
        },
        clean: './build'
    };
