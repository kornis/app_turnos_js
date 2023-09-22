const ErrorHandler = require("./ErrorHandler");
class NotFoundError extends ErrorHandler {
    constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;