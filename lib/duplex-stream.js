var util = require('util'),
  Duplex = require('stream').Duplex;

/**
 * @event drain
 * @event finish
 * @event pipe
 * @event unpipe
 * @event error
 */
var DuplexStream = (function () {

  var constructor = function (opt) {
    this._data = [];
    Duplex.call(this, opt);
  };
  util.inherits(constructor, Duplex);

  /**
   * Emit an error
   * @param err
   */
  constructor.prototype.error = function (err) {
    this.emit('error', err);
  };

  constructor.prototype._write = function (chunk, encoding, callback) {
    this._data.push(chunk);
    callback();
  };

  constructor.prototype._read = function () {
    if (this._data.length) {
      this.push(this._data.shift());
    } else {
      this.push(null);
    }
  };

  return constructor;
})();

module.exports = DuplexStream;