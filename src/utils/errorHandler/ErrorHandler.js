const logger = require("../../logger");
class ErrorHandler extends Error {
    constructor(message, httpCode, logs = true) {
        super(message);
        this.httpCode = httpCode;

        if(logs)
        this.setLogs();
    }

    setLogs() {
        logger.info(this.message);
        logger.error(this.error)
    }
}

module.exports = ErrorHandler;