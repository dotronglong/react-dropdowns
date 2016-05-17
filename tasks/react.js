const gulp = require('gulp');
const webpack = require('webpack');

const config = {
  webpack: {
    context: __dirname + '/../src',
    entry: 'app.js',
    output: {
      path: __dirname + "/../dist",
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      }]
    }
  },
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
//
// gulp.task('build-sourcemaps', function() {
//   gulp.src(config.src)
//     .pipe(sourcemaps.init())
//     .pipe(babel(config.babel))
//     .pipe(log.all('babel'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest(config.dist))
//     .pipe(bundle());
// });

gulp.task('build', function() {
  webpack(config.webpack, function(err, result) {
    // console.log(err, result);
  });
});

gulp.task('watch', function() {
  gulp.watch(config.src, ['build']);
});

gulp.task('default', ['build']);