var path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/app.js'),
    test: path.join(__dirname, 'example/app.js')
  },
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
