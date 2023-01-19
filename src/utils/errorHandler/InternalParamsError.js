const ErrorHandler = require("./ErrorHandler");
const logger = require("../../logger");


class InternalParamsError extends ErrorHandler {
    params = null;
    constructor(params = [], error = null, stack = null, logger = true ) {
        super(error, "Internal params not found", stack, "Parameters Error", false);
        this.params = params;
        if(logger) {
            this.setLogs(params);
        }
    }

    getErrorInfo() {
        return {
            message: "Internal Error, more info in logs file."
        }
    }

    setLogs(params = []) {
        let messageToLog = "Parameters not found:";
        params.forEach(p => messageToLog += ` ${p},`);
        logger.info(messageToLog);
    }
}

module.exports = InternalParamsError;