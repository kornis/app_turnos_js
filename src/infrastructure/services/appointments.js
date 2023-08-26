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

const dbGetCalendarByEmployee = async (store_id, employee_id, date, customer) => {
    try {

        const opt = {
            where: {
                [db.Sequelize.Op.and]: [
                    { employee_id: employee_id },
                    { date },
                    { store_id }
                ]
            },
            attributes: ["hour"]
        };

        if(!employee_id) {
            throw new Error("(getCalendarByEmployee): employee parameter is mandatory");
        }

        if(customer && customer.id) {
            opt.where[db.Sequelize.Op.and].push({
                customer_id: customer.id
            })
        }

        let calendar = await db.Appointment.findAll(opt);

        return calendar;

    } catch(error) {

        console.log("(getCalendarByEmployee): Error trying to get calendar", error);
        throw error;
    }
}

const validateAppointmentNotCreated = async (employee_id, date, hoursGroup) => {
    try {
        if(!employee_id || !date || !hoursGroup) {
            throw new Error("(validateAppointmentNotCreated): Params required");
        }
        
        const hoursOpts = [];
        for(let i = 0; i < hoursGroup.length; i++) {
            hoursOpts.push({
                hour: hoursGroup[i]
            })
        }
        const response = await db.Appointment.findOne({
            where: {
                [db.Sequelize.Op.and]: [
                    {employee_id},
                    {date},
                    {[db.Sequelize.Op.or]: hoursOpts }
                ]
            }
        });

        return response;
    } catch(error) {
        console.log("(validateAppointmentNotCreated): Error trying to get some appointment");
        throw error;
    }
}

const getEmployeeList = async (store_id) => {
    try {

        if(!store_id) {
            throw new Error("Params required (store)");
        }

        return await db.Employee.findAll({
            where: {
                store_id: store_id
            }
        });
    } catch(error) {
        console.log(("(getEmployeeList): Error trying to get employees"));
        throw error;
    }
}

module.exports = { dbCreateAppointment, dbGetCalendarByEmployee, validateAppointmentNotCreated, getEmployeeList };