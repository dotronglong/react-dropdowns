var path = require('path');

if (process.env.NODE_ENV === 'development') {
  var entry = path.join(__dirname, 'example/app.js');
} else {
  var entry = path.join(__dirname, 'src/app.js');
}

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  }
}
