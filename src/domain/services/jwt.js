const jwt = require("jsonwebtoken");
const variables = require("../../utils/constants");
const { ErrorHandler } = require("../../utils/errorHandler");

function verify(req) {
    try {
        const authorization = req.headers.authorization || '';
        const token = authorization.replace('Bearer ', '');
        const decoded = jwt.verify(token, variables.jwtSecret);
        req.jwt = {
            plain: decoded,
            token
        }
        return { valid: true, expired: false, decoded };
    } catch (err) {
        return {
            valid: false,
            expired: err.message === "jwt expired",
            decoded: null,
        };
    }
}

function sign(payload) {
    try {
        payload.expiresIn = "1d";
        return jwt.sign(payload, variables.jwtSecret);
    } catch(error) {
        console.log(error);
        throw new ErrorHandler(error, "Error signing JWT", error.stack);
    }
}

module.exports = {
    verify,
    sign
}