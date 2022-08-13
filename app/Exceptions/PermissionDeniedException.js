/**
 * general request exception module
 */
const Exception = require('./Exception');

class PermissionDeniedException extends Exception {
  constructor(message) {
    super();
    this.constructor = PermissionDeniedException;
    this.name = this.constructor.name;
    this.message = (message) || 'Permission Denied for the user';
  }
}

module.exports = PermissionDeniedException;