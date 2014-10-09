var util = require('util'),
  Readable = require('stream').Readable;

/**
 *
 * Call readableStream.push(data) to add data to be read.
 */
var ReadableStream = (function () {

  var constructor = function (opt) {
    this._data = [];
    Readable.call(this, opt);
  };
  util.inherits(constructor, Readable);

  constructor.prototype.error = function (err) {
    this.emit('error', err);
  };

  constructor.prototype._read = function () {
    //do nothing, everything will just 'work'.
  };

  return constructor;
})();

module.exports = ReadableStream;