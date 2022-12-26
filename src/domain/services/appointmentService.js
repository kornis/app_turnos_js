const dbAppointmentService = require("../../infrastructure/services/appointments");
const { Appointment } = require("../entities")

module.exports = {
    createAppointment: (req, res) => {
        if(!req.body.date || !req.body.employee || !req.body.store || !req.body.customer || !req.body.type) {
            return res.status(400).json({
                meta: {
                    code: res.statusCode
                },
                error: "Params error."
            })
        }

        const appointment = new Appointment(req.body.store, req.body.employee, req.body.customer, req.body.type, req.body.date);
        const dbResponse =  dbAppointmentService.dbCreateAppointment(appointment);

        if(dbResponse) {
            return res.status(201).json({
                meta: {
                    code: res.statusCode
                },
                appointment: dbResponse
            })
        } else {
            return res.status(400).json({
                meta: {
                    code: res.statusCode
                },
                error: "Error trying to create appointment. Please, try again"
            })
        }
    }
}