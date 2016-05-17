var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var config = require('../webpack.config.js');
var path = require('path')

gulp.task('react', function() {
  gulp.src('')
      .pipe(gulpWebpack(config))
      .pipe(gulp.dest(path.join(__dirname + '/../', 'dist/')));
});

gulp.task('react:watch', function() {
  gulp.watch([
    path.join(__dirname, '/../src/**/*.js'),
    path.join(__dirname, '/../example/app.js')
  ], ['react']);
});
