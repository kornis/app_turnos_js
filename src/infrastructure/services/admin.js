const db = require("../db/models");

const addStore = async (store) => {
    try {

        return await db.Store.create(store); 
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const addEmployee = async (employee) => {
    try {

        return await db.Employee.create(employee);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const addAppointmentType = async (appointmentType) => {
    try {

        return await db.AppointmentType.create(appointmentType);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    addStore,
    addEmployee,
    addAppointmentType
}