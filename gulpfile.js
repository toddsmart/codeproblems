var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var mocha = require('gulp-mocha');

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------


// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------
gulp.task('test', function () {
    return gulp.src('test/product-test.js', {read: false})
        .pipe(mocha());
});

gulp.task('default', ['test']);
