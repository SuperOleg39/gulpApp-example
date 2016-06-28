# gulpApp-example

[![Build Status](https://travis-ci.org/SuperOleg39/gulpApp-example.svg?branch=master)](https://travis-ci.org/SuperOleg39/gulpApp-example)

## About project:
Modern app boilerplate.
Use:
- Stylus preprocessor;
- Jade templates;
- Webpack only for JS files;
- Minify css, html, js and images;
- Browser Sync;
- Unit tests with Mocha and Chai, with Karma runner in Phantom js browser;

Important!
Build tasks work with files in in the root directory, path example - ``` 'src/js/*.js' ``` if you have main.js and admin.js in this directory, it is entry points.

Watch tasks work with all files in directory, path example - ``` 'src/html/**/*.jade' ```

## Install project:
```
git clone https://github.com/SuperOleg39/gulpApp-example.git
npm rm -g gulp
npm install -g gulp-cli
npm install
```

## Gulp tasks:

Start a work with project:
```
gulp build
```

Clean build project:
```
gulp clean
```

Development mode
```
set NODE_ENV=development&&gulp
```

Production build
```
set NODE_ENV=production&&gulp build
```

Run tests (separate for Production and Development)
```
npm test  or  gulp test
```
