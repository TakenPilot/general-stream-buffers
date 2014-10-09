var util = require('util'),
  Transform = require('stream').Transform;

/**
 * @event drain
 * @event finish
 * @event pipe
 * @event unpipe
 * @event error
 */
var TransformStream = (function () {

  var constructor = function (opt) {
    Transform.call(this, opt);
  };
  util.inherits(constructor, Transform);

  /**
   * Emit an error
   * @param err
   */
  constructor.prototype.error = function (err) {
    this.emit('error', err);
  };

  constructor.prototype._transform = function (chunk, encoding, callback) {

  };

  constructor.prototype._flush = function (callback) {

  };

  return constructor;
})();

module.exports = TransformStream;