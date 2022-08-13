/**
 * general request exception module
 */
const Exception = require('./Exception');

class GeneralException extends Exception {
  constructor(message) {
    super();
    this.constructor = GeneralException;
    this.name = this.constructor.name;
    this.message = (message) || 'The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay !';
  }
}

module.exports = GeneralException;