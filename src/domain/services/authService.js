const { Customer } = require("../entities")
const dbAuthService = require("../../infrastructure/services/dbAuthService");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { encode } = require("./passport");

module.exports = {
    signup: async (req, res) => {

        if(!req.body.email || !req.body.password || !req.body.name || !req.body.lastname) {
            return res.status(401).json({
                code: res.statusCode,
                error: "Params error"
            })
        }

        try {
            req.body.password = bcrypt.hashSync(req.body.password, 12);
            const dbResponse =  await dbAuthService.registerUser(req.body, "customer");
            return res.status(201).json({
                meta: {
                    code: res.statusCode
                },
                data: {
                    dbResponse
                }
            })
        } catch( error ) {
            throw error;
        }
    },

    login: async (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.status(401).json({
                    meta: {
                        code: res.statusCode
                    },
                    error: errors.mapped()
                })
            }
            const user = await dbAuthService.login(req.body);
            const token = encode(user.email);
            return res.status(200).json({
                meta: {
                    code: res.statusCode,
                },
                data: {
                    user,
                    token
                }
            })
        } catch(error) {
            throw error;
        }
    }
}