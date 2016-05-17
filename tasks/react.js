const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const log = require('./log');
const browser = require('./browser');

const config = {
  src: ['src/**/*.js'],
  babel: {
    presets: [
      'es2015',
      'react'
    ],
    plugins: [
      'syntax-class-properties',
      'transform-class-properties'
    ]
  },
  dist: 'dist'
};

gulp.task('bundle', ['build'], function() {
  browser.build({
    input: './dist/main.js',
    output: './dist/bundle.js'
  });
});

// gulp.task('build-sourcemaps', function() {
//   gulp.src(config.src)
//     .pipe(sourcemaps.init())
//     .pipe(babel(config.babel))
//     .pipe(log.all('babel'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest(config.dist));
// });

gulp.task('build', function() {
  gulp.src(config.src)
    .pipe(babel(config.babel))
    .pipe(log.all('babel'))
    .pipe(gulp.dest(config.dist))
});

gulp.task('watch', function() {
  gulp.watch(config.src, ['build']);
});

gulp.task('default', ['bundle']);