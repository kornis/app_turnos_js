const db = require("../db/models");

const dbCreateAppointment = async (Appointment) => {

    try {
        if(!Appointment) {
            throw new Error("(dbCreateAppointment): Must recieve Appointment Info")
        }
        let appointmentData = Appointment.getAppointmentInfo();
        const dbResult = await db.Appointment.create(appointmentData);
        
        if(dbResult) {
            return dbResult;
        } else {
            throw new Error("(dbCreateAppointment): Error trying to create appointment");
        }
    } catch(error) {
        console.log(error);
    }
}

const dbGetCalendarByEmployee = async (employee_id, date = null) => {
    try {

        const opt = {
            where: {
                employee_id: employee
            }
        };

        if(!employee) {
            throw new Error("(getCalendarByEmployee): employee parameter is mandatory");
        }

        if(date) {
            opt.where = {
                date
            }
        }

        let calendar = await db.Appointment.findAll(opt);

        return calendar;

    } catch(error) {

        console.log("(getCalendarByEmployee): Error trying to get calendar", error);
        throw error;
    }
}

module.exports = { dbCreateAppointment, dbGetCalendarByEmployee };