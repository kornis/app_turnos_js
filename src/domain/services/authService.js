const { Customer, GCustomer } = require("../entities")
const dbAuthService = require("../../infrastructure/services/dbAuthService");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { encode } = require("./passport");
const { OAuth2Client, verifyIdToken } = require("google-auth-library");
const { ErrorHandler, ParamsError } = require("../../utils/errorHandler");
const { typeUser } = require("../../utils/config");

module.exports = {
    signup: async (req, res) => {
        
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            const paramErrors = errors.errors.map(err => {
                delete err.value;
                return err;
            })
            const error = new ParamsError(paramErrors, null, null , null).getErrorInfo();
            return res.status(401).json({
                code: res.statusCode,
                ...error
            })
        }

        try {

            req.body.password = bcrypt.hashSync(req.body.password, 12);
            const dbResponse =  await dbAuthService.registerUser(req.body, typeUser.CUSTOMER);
            if(dbResponse instanceof ErrorHandler) {
                throw dbResponse;
            }
            return res.status(201).json({
                code: res.statusCode,
                dbResponse
            });

        } catch( error ) {

            if(error instanceof ErrorHandler) {
                return res.status(400).json({
                    code: res.statusCode,
                    ...error.getErrorInfo()
                })
            } else {
                const errorHandler = new ErrorHandler(error, error.message, error.stack, "signup internal error");
                return res.status(500).json({
                    code: res.statusCode,
                    ...errorHandler.getErrorInfo() 
                })
            }
        }
    },

    login: async (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                const paramErrors = errors.errors.map(err => {
                    delete err.value;
                    return err;
                })
                const error = new ParamsError(paramErrors, null, null , null).getErrorInfo();
                return res.status(401).json({
                    code: res.statusCode,
                    ...error.getErrorInfo()
                })
            }

            const user = await dbAuthService.login(req.body);
            if(user instanceof ErrorHandler) {
                throw user
            }
            const token = encode(user.email);
            return res.status(200).json({
                code: res.statusCode,
                user,
                token
            })
        } catch(error) {
            if(error instanceof ErrorHandler) {
                return res.status(400).json({
                    code: res.statusCode,
                    ...error.getErrorInfo()
                })
            } else {
                const errorHandler = new ErrorHandler(error, error.message, error.stack, "Login internal error");

                return res.status(500).json({
                    code: res.statusCode,
                    ...errorHandler.getErrorInfo()
                })
            }
        }
    },

    googleLogin: async (req, res) => {
        try {
            // validar CSRF
            if(!req.body.token) {
                return res.status(400).json({
                    code: res.statusCode,
                    ...new ParamsError(["token"]).getErrorInfo()
                }) 
            }
            const gCustomer = await getGoogleUser(req.body.token);
            
            return res.status(200).json({
                code: res.statusCode,
                user: gCustomer
            });
            
        } catch(error) {
            if(error instanceof ErrorHandler) {
                return res.status(400).json({
                    code: res.statusCode,
                    ...error.getErrorInfo()
                })
            } else {
                return res.status(500).json({
                    code: res.statusCode,
                    ... new ErrorHandler(error, "Error trying to login with google")
                })
            }
        }
    }
}

const validateGoogleUser = async (token) => {
    try {

        const clientID = process.env.GOOGLE_ID_CLIENT;
        const client = new OAuth2Client(clientID);

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: clientID
        });

        const user = ticket.getPayload();
        
        if(!user['sub']) {
            throw new Error("(ValidateGoogleUser): userID not found");
        }

        return user;

    } catch(error) {
        throw new ErrorHandler(error, "Error with token validation", error.stack)
    }
}

const getGoogleUser = async (token) => {
    try {
        const gUser = await validateGoogleUser(token);
        const newGUser = new GCustomer(parseGoogleUser(gUser));
        return await dbAuthService.dbGLogin(newGUser);
    } catch(error) {
        throw new ErrorHandler(error, "Error with token validation", error.stack)
    }
}

const parseGoogleUser = (user) => {
    return {
        name: user.given_name,
        lastname: user.family_name,
        email: user.email,
        avatar: user.picture,
        gID: user.sub
    }
}