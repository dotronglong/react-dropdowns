const through = require('through2');

module.exports = {
  all: (label) => {
    return through.obj((file, enc, cb) => {
      console.log(label, ":", file.path);
      cb(null, file);
    });
  }
};