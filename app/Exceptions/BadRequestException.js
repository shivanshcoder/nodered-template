/**
 * general request exception module
 */
const Exception = require('./Exception');

class BadRequestException extends Exception {
  constructor(message) {
    super();
    this.constructor = BadRequestException;
    this.name = this.constructor.name;
    this.message = (message) || 'Request contains insufficient data.';
  }
}

module.exports = BadRequestException;
