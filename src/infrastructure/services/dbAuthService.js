const db = require("../db/models");
const { Customer } = require("../../domain/entities");
const { ErrorHandler, InternalParamsError, CredentialsError } = require("../../utils/errorHandler");
const logger = require("../../logger");

module.exports = {
    registerUser: async (user, typeUser) => {

        try {
            if (typeUser === "customer") {
                return await db.Customer.create(user);
            }
        } catch (error) {
            throw new ErrorHandler(error, "Internal Error", error.stack, "dbAuthService - registerUser")
        }
    },

    login: async (user) => {

        try {
            if (!user) {
                throw new InternalParamsError(["user"]);
            }

            const dbResponse = await db.Customer.findOne({ where: { email: user.email } });

            const userFound = new Customer(dbResponse.dataValues);

            if (userFound.validatePassword(user.password)) {

                return userFound.getFullUser();

            } else {

                throw new CredentialsError()
            }


        } catch (error) {
            if(error instanceof ErrorHandler) {
                return error
            }
            throw new ErrorHandler(error, "Error trying to login user")
        }
    },

    dbGLogin: async (user) => {
        try {
            
            const userFound = await db.GCustomer.findOne({ where: { email: user.getEmail() } });
            
            if (userFound.gID) {
                return userFound
            } else {

                return await db.GCustomer.create(user.getFullUser());
            }
        } catch (error) {
            throw new ErrorHandler(error, "(dbGLogin): Error trying to login with google", error.stack)
        }
    },

    dbGetUserByEmail: async (email) => {
        try {
            
            return await db.Customer.findOne({where: { email }});

        } catch(error) {
            if(error instanceof ErrorHandler) {
                throw error
            }
            console.log(error)
            throw new ErrorHandler(error, "(dbGetUserByEmail): Error trying to find user by email", error.stack);
        }
    },

    findUserCreated: async (email, id_number) => {
        try {

            const userFound = await db.Customer.findOne({
                where: {
                    [db.Sequelize.Op.or]: [
                        { email },
                        { id_number }
                ]}
            });

            if (userFound) {
                return true;
            }

            return false;
        } catch(error) {

        }
    }
}