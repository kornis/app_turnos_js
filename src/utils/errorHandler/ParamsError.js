class ParamsError {
    params = null;
    error = null;
    message = null;
    stack = null;
    constructor(params = [], error, message, stack) {
        this.error = error;
        this.message = message;
        this.stack = stack;
        this.params = params;
    }

    getErrorInfo() {
        return {
            message: this.message,
            paramsWithErrors: this.params
        }
    }
}

module.exports = ParamsError;