const logger = require("../../logger");
class ErrorHandler extends Error {

    error = null;
    constructor(error, message, stack = null, name = null, logs = true) {
        super(message);
        this.error = error;
        this.stack = stack;
        this.name = name;
        if(logs)
        this.setLogs();
    }

    getErrorInfo() {
        return {
            error: this.name,
            message: this.message
        }
    }

    setLogs() {
        logger.info(this.message);
        logger.error(this.error)
    }
}

module.exports = ErrorHandler;