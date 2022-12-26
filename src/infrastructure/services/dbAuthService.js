const db = require("../db/models");
const { plainToInstance } = require("class-transformer");
const { Customer } = require("../../domain/entities");

module.exports = {
    registerUser: async (user, typeUser) => {
        
        try {

            if(typeUser === "customer") {
                return await db.Customer.create(user);
            }
        } catch (error) {
            console.log(error);
            throw new Error("Debe enviar el tipo de usuario a registrar");
        }
    },

    login: async (user) => {

        try {
            const dbResponse = await db.Customer.findOne({ where: { email: user.email } });
            if(dbResponse) {
                const userFound = new Customer(dbResponse.dataValues)
                if(userFound.validatePassword(user.password)) {
                    return userFound.getFullUser();
                } else {
                    console.log("error de credenciales")
                }
            } else {
                console.log("No se encontró el usuario")
            }

        } catch(error) {
            console.log(error);
            throw new Error("Error trying to login user");
        }
    }
}