/**
 * validation exception module
 */
const Exception = require('./Exception');

class ValidationException extends Exception {
  constructor(message) {
    super();
    this.constructor = ValidationException;
    this.name = this.constructor.name;
    this.message = message || 'The syntax of the request entity is correct but was unable to process the contained instructions.';
  }
}

module.exports = ValidationException;