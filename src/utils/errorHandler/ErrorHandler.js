const logger = require("../logger");
class ErrorHandler extends Error {
    constructor(message, httpCode, logs = true) {
        super(message);
        this.httpCode = httpCode;

        if(logs)
        this.setLogs();
    }

    setLogs() {
        logger(this.message);
        logger(this.error)
    }
}

module.exports = ErrorHandler;