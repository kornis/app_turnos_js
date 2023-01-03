const { v4: uuidv4 } = require('uuid');
const dbAppointmentService = require("../../infrastructure/services/appointments");
const { Appointment } = require("../entities");
const { minAppointmentDuration } = require("../../utils/config");

module.exports = {
    createAppointment: (req, res) => {
        if(!req.body.date || !req.body.employee || !req.body.store || !req.body.customer || !req.body.type || !req.body.hour) {
            return res.status(400).json({
                meta: {
                    code: res.statusCode
                },
                error: "Params error."
            })
        }

        const uuid = uuidv4();

        // extraer horario del body.date y enviarlo en el new Appointment
        const appointment = new Appointment(req.body.store, req.body.employee, req.body.customer, req.body.type, req.body.date, req.body.hour );
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
    },

    
}

function generateAppointments(uuid, store, employee, customer, type, date) {
    const appointmentsGroup = [];
        for(let i = 0; i < type.duration / minAppointmentDuration; i++) {
            appointmentsGroup.push(new Appointment(store, employee, customer, type, date, uuid));
        }
    return appointmentsGroup;
}

async function validateAppointmentDate(employee_id, date) {
    
    const calendar = await dbAppointmentService.getCalendarByEmployee(employee_id);

    
 
}