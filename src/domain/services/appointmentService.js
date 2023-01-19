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
        const appointments = await generateAppointments(uuid, req.body.store, req.body.employee, req.body.customer, req.body.type, req.body.date, req.body.hour);
        if(appointments.length > 0) {
            return res.status(201).json({
                meta: {
                    code: res.statusCode
                },
                appointment: appointments
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

        if(!req.body.employee || !req.body.employee.id || !req.body.store) {
            return res.status(400).json({
                code: res.statusCode,
                error: "Error params"
            })
        }

        const result = await dbAppointmentService.dbGetCalendarByEmployee(req.body.store.id, req.body.employee.id, req.body.date, req.body.customer);
        return res.status(200).json({
            code: res.statusCode,
            data: result
        })
    },

    getEmployees: async (req, res) => {
        if(!req.body.store) {
            return res.status(400).json({
                code: res.statusCode,
                error: "Error params"
            })
        }

        const result = await dbAppointmentService.getEmployeeList(req.body.store.id);

        return res.status(200).json({
            code: res.statusCode,
            data: result
        })
    }
}

async function generateAppointments(uuid, store, employee, customer, type, date, hour) {
    try {
        const appointmentsGroup = [];
        const hoursGroup = generateHoursForAppointments(hour, type.duration, minAppointmentDuration);
        const appointmentFound = await validateAppointmentDate(employee.id, date, hoursGroup);
        if(appointmentFound) {
            return []
        }
        for(let i = 0; i < hoursGroup.length; i++) {
                
                let newAppointment = new Appointment(store, employee, customer, type, date, hoursGroup[i], JSON.stringify(hoursGroup), uuid);
                await dbAppointmentService.dbCreateAppointment(newAppointment);
                appointmentsGroup.push(newAppointment);
            }
        return appointmentsGroup;

    } catch(error) {
        console.log(error);
        throw error;
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

    const hoursToGenerate = (60/fraction) * (duration/60);

    for(let i = 0; i < hoursToGenerate; i++) {
         hoursArray.push(validateHours([hourAndMinutes[0], hourAndMinutes[1] + (fraction * i)]).join(":")) 
    }

    return hoursArray;

}
async function validateAppointmentDate(employee_id, date, hoursGroup) {
    return await dbAppointmentService.validateAppointmentNotCreated(employee_id, date, hoursGroup);

    
 
}