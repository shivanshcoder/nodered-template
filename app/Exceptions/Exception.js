/**
 * Handler for all error exceptions
 * @param error
 * @return error object
 */
class Exception extends Error {
  constructor() {
    super();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }
  }
}

module.exports = Exception;