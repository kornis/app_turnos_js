const logger = require("../../logger");
class ErrorHandler extends Error {

    error = null;
    constructor(message, filename = "", statusCode, isOperational = true, logs = true) {
        super(message);
        this.name = this.constructor.name;
        this.message = `(Error en ${filename}): ${message}`;
        this.isOperational = isOperational;
        this.statusCode = statusCode; 

        if(logs)
        this.setLogs();
    }

    setLogs() {
        logger.error(this.message);
        logger.error(this.error)
    }
}

module.exports = ErrorHandler;