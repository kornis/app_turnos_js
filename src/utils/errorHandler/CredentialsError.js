const ErrorHandler = require("./ErrorHandler");
const logger = require("../../logger");

class CredentialsError extends ErrorHandler {

    constructor(logs = true) {
        super(null, "Credentials error. Try again", null, null, false);
        if(logs)
            logger.error("Credentials error")
    }

    getErrorInfo() {
        return {
            message: this.message
        }
    }
}

module.exports = CredentialsError;