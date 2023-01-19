const pino = require("pino");
const path = require("path");

module.exports = pino({
    level: process.env.PINO_LOG_LEVEL || 'info'
}, pino.destination(path.join(__dirname, "logs", "errors.log")));
