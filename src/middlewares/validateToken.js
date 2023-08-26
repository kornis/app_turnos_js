const jwt = require("../domain/services/jwt");

module.exports = (req, res, next) => {
    try {
        const { valid } = jwt.verify(req);
        if (valid) {
            next();
        } else {
            res.status(401).json({
                code: res.statusCode,
                message: "Invalid or expired token."
            });
        }
    } catch (error) {
        res.status(401).json({
            code: res.statusCode,
            message: error.message
        });
    }
};
