const dbCustomerService = require("../../infrastructure/services/customerService");

module.exports = {
    getCustomerAppointments: async (req, res) => {
        const appointments = await dbCustomerService.getCustomerAppointments(req.jwt.plain.customer.email);
        return res.status(201).json({
            code: res.statusCode,
            appointments
        })
    }
}