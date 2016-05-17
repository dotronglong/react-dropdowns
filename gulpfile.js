var glob = require('require-dir')('./tasks');
var gulp = require('gulp');

gulp.task('default', ['react']);
gulp.task('watch', ['react:watch']);
