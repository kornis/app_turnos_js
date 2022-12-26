const db = require("../db/models");

const dbCreateAppointment = async (Appointment) => {

    try {
        if(!Appointment) {
            throw new Error("(dbCreateAppointment.js): Must recieve Appointment Info")
        }
        let appointmentData = Appointment.getAppointmentInfo();
        const dbResult = await db.Appointment.create(appointmentData);
        
        if(dbResult) {
            return dbResult;
        } else {
            throw new Error("(dbCreateAppointment.js): Error trying to create appointment");
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = { dbCreateAppointment };