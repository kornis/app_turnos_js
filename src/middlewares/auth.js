const { validateLogin, validateRegister } = require("../utils/validateSchemas");

module.exports = {
    validateLogin: (req, res, next) => {

        if (validateLogin(req.body)) {
            next();
        } else {
            return res.status(400).json({
                message: "Invalid login request"
            });
        }
    },
    validateRegister: (req, res, next) => {

        if (validateRegister(req.body)) {
            next();
        } else {
            return res.status(400).json({
                message: "Invalid register request"
            });
        }
    }
};