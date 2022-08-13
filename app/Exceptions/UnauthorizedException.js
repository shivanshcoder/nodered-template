/**
 * unauthorized access to resource exception module
 */
const Exception = require('./Exception');

class UnauthorizedException extends Exception {
  constructor(message) {
    super();
    this.constructor = UnauthorizedException;
    this.name = this.constructor.name;
    this.message = message || 'The request has not been applied because it lacks valid authentication credentials for the target resource !';
  }
}

module.exports = UnauthorizedException;