var Exception = require('./Exception.js');

function NotFoundException() {
  Exception.apply(this, arguments);
}
NotFoundException.prototype = Object.create(Exception.prototype);
NotFoundException.prototype.constructor = NotFoundException;

module.exports = NotFoundException;
