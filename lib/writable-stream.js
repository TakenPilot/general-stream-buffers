var util = require('util'),
  Writable = require('stream').Writable;

/**
 *
 * Call stream.write(data) to write data into the stream.
 *
 * @event drain
 * @event finish
 * @event pipe
 * @event unpipe
 * @event error
 */
var WritableStream = (function () {

  var constructor = function (opt) {
    this._data = [];
    Readable.call(this, opt);
  };
  util.inherits(constructor, Readable);

  /**
   * Emit an error
   * @param err
   */
  constructor.prototype.error = function (err) {
    this.emit('error', err);
  };

  /**
   * Get one chunk
   */
  constructor.prototype.get = function () {
    if (this._data.length === 0) {
      return false;
    } else {
      return this._data.shift();
    }
  };

  /**
   * Get all chunks
   */
  constructor.prototype.getAll = function () {
    var data = this._data;
    this._data = [];
  };

  constructor.prototype._write = function (chunk, encoding, callback) {
    //write to underlying resource (in this case, memory)
    this._data.push(chunk);
    callback();
  };

  return constructor;
})();

module.exports = WritableStream;