function Exception(message) {
  this.message = message;
}
Exception.prototype = Object.create(Error.prototype);
Exception.prototype.constructor = Exception;
Exception.prototype.toString = function() {
  return this.constructor.name + ': ' + this.message;
};

module.exports = Exception;
