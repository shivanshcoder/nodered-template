/**
 * lacks permission to access resource exception module
 */
const Exception = require('./Exception');

class ForbiddenException extends Exception {
  constructor(message) {
    super();
    this.constructor = ForbiddenException;
    this.name = this.constructor.name;
    this.message = message || "The request has not been applied because you don't have the necessary permissions for this resource !";
  }
}

module.exports = ForbiddenException;