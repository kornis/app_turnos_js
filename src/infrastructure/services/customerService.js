const db = require("../db/models");

module.exports = {
    getCustomerAppointments: async (email) => {
        try {
            return await db.Customer.findOne(
                {
                    where: { email },
                    include: ["appointments"],
                    attributes: ["id", "name", "email", "lastname"],
                });
                
        } catch (error) {
            console.log(error)
            throw new Error(`Error getting appointments for customer with email ${email}`)
        }
    }
}