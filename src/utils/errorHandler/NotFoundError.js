import ErrorHandler from "./ErrorHandler";

export class NotFoundError extends ErrorHandler {
    constructor(message) {
    super(message, null, 404);
    this.name = 'NotFoundError';
  }
}