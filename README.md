# gulpApp-example

[![Build Status](https://travis-ci.org/SuperOleg39/gulpApp-example.svg?branch=master)](https://travis-ci.org/SuperOleg39/gulpApp-example)

Install project:
```
git clone https://github.com/SuperOleg39/Zioniti.git
npm uninstall gulp -g
npm install gulpjs/gulp-cli#4.0 -g
npm install
```

Build a project:
```
gulp build
```

Create a server:
```
gulp webserver
```

Watch changes:
```
gulp watch
```

Clean build project:
```
gulp clean
```

Or all together
```
gulp
```


Development mode
```
set NODE_ENV=development&&gulp
```


Production build
```
set NODE_ENV=production&&gulp build
```