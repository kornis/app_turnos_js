const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv();
addFormats(ajv);

const { login, register } = require("../routes/auth/schema");

const validateLogin = ajv.compile(login);
const validateRegister = ajv.compile(register);

module.exports = {
    validateLogin,
    validateRegister
};