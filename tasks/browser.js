var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var _ = require('underscore');

module.exports = {
  build: function(config) {
    config = _.extend({
      input: './main.js',
      output: 'bundle.js'
    }, config);

    browserify({ debug: true })
      .transform(babelify)
      .require(config.input, { entry: true })
      .bundle()
      .on("error", function (err) { console.log("Error: " + err.message); })
      .pipe(fs.createWriteStream(config.output));
  }
};