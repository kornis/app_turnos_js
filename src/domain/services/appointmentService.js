const { v4: uuidv4 } = require('uuid');
const dbAppointmentService = require("../../infrastructure/services/appointments");
const { Appointment } = require("../entities");
const { minAppointmentDuration } = require("../../utils/config");
const dayjs = require("dayjs");

module.exports = {
    createAppointment: async (req, res) => {
        if(!req.body.date || !req.body.employee || !req.body.store || !req.body.customer || !req.body.type || !req.body.hour) {
            return res.status(400).json({
                meta: {
                    code: res.statusCode
                },
                error: "Params error."
            })
        }

        const uuid = uuidv4();
        const appointments = generateAppointments(uuid, req.body.store, req.body.employee, req.body.customer, req.body.type, req.body.date, req.body.hour);
        return res.json(generateHoursForAppointments("23:00", 3, 30))
       const dbResponse = await storeAppointments(appointments);
        // const appointment = new Appointment(req.body.store, req.body.employee, req.body.customer, req.body.type, req.body.date, req.body.hour, minAppointmentDuration, uuid);

        if(dbResponse.length > 0) {
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

    getCalendarByEmployee: async (req, res) => {

        if(!req.body.employee || !req.body.employee.id) {
            return res.status(400).json({
                code: res.statusCode,
                error: "Error params"
            })
        }

        const result = await dbAppointmentService.dbGetCalendarByEmployee(req.body.employee.id);
        return res.status(200).json({
            code: res.statusCode,
            data: result
        })
    }
}

function generateAppointments(uuid, store, employee, customer, type, date, hour) {
    const appointmentsGroup = [];
    let fraction = hour;
    const hoursGroup = generateHoursForAppointments(hour, type.duration, minAppointmentDuration);
    for(let i = 0; i < hoursGroup.length; i++) {
            
            appointmentsGroup.push(new Appointment(store, employee, customer, type, date, hour, fraction.format("HH:mm:ss"), uuid));
        }
    return appointmentsGroup;
}

async function storeAppointments(appointments) {
    // (revisar) Revisar que devuelve dbCreateAppointment si falla la creación
    try {
        const dbResponse = [];
        for(let i = 0; i < appointments.length; i++) {
            const response = await dbAppointmentService.dbCreateAppointment(appointments[i]);
            dbResponse.push(response);
        }

        return dbResponse;
    } catch(error) {
        console.log(error);
    }
}

function validateHours(hours) {
    let hour = Number(hours[0]);
    let minute = Number(hours[1]);
    while(minute > 59) {
        hour = hour + 1;
        minute = minute - 60;
    }
    while(hour > 23) {
        hour = hour - 24;
    }
    if(hour == 0) {
        hour = "00"
    } else if(hour > 0 && hour < 10) {
       hour = "0" + hour
    }

    if(minute == 0) {
        minute = "00"
    } else if(minute > 0 && minute < 10) {
        minute = "0" + minute
    }
    return [hour,minute]
}

function generateHoursForAppointments(hour, duration, fraction) {
    const hoursArray = [];
    let hourAndMinutes = validateHours(hour.split(":"))

    const hoursToGenerate = (60/fraction) * duration;

    for(let i = 0; i < hoursToGenerate; i++) {
         hoursArray.push(validateHours([hourAndMinutes[0], hourAndMinutes[1] + (fraction * i)]).join(":")) 
    }

    return hoursArray;

}
async function validateAppointmentDate(employee_id, date) {
    
    const calendar = await dbAppointmentService.getCalendarByEmployee(employee_id);

    
 
}