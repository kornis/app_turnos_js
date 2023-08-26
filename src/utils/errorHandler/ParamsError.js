const ErrorHandler = require("./ErrorHandler");

class ParamsError extends ErrorHandler {
    constructor(message) {
        super(message = "Bad Request - Parameters Error", 400)
    }
}

module.exports = ParamsError;