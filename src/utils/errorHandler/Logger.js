const logger = require("../../logger");

module.exports = function logError(error) {
    console.error(error);
    logger.error(error);
}