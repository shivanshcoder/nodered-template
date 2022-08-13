const Exception = require('./Exception');
/**
 * conflict request exception module
 */
class ConflictException extends Exception {
  constructor(message) {
    super();
    this.constructor = ConflictException;
    this.name = this.constructor.name;
    this.message = message || 'The request could not be completed due to a conflict with the current state of the target resource !';
  }
}

module.exports = ConflictException;