const { body } = require("express-validator");

const loginValidaor = [
    body("email")
        .notEmpty().withMessage("Email field cannot be null").bail()
        .isEmail().withMessage("Send valid email"),
    
    body("password")
        .notEmpty().withMessage("Password field cannot be null").bail()
        .isLength({min: 8}).withMessage("Password too short")
];

const registerValidator = [
    body("email")
        .notEmpty().withMessage("email field cannot be null").bail()
        .isEmail().withMessage("Send valid email"),
    
    body("password")
        .notEmpty().withMessage("password field cannot be null").bail()
        .isLength({min: 8}).withMessage("password too short"),
    
    body("name")
        .notEmpty().withMessage("name field cannot be null").bail()
        .isString().withMessage("name field must be string"),

    body("lastname")
        .notEmpty().withMessage("lastname field cannot be null").bail()
        .isString().withMessage("lastname field must be string"),

    body("id_number").custom((field, { req }) => {
        if(isNaN(Number(field))) {
            throw new Error("id_number field must be only numbers")
        }
        return true;
    })
];

module.exports = {
    loginValidaor,
    registerValidator
}