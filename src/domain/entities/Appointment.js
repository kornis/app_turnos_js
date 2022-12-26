class Appointment {
    date = null;
    employee = {};
    store = {};
    customer = {};
    type = {};

    constructor(store, employee, customer, type, date) {
        this.store = store;
        this.employee = employee;
        this.customer = customer;
        this.type = type;
        this.date = date; 
    }

    getDate() {
        return this.date;
    }

    getAppointmentInfo() {
        return {
            date: this.date,
            employee_id: this.employee.id,
            store_id: this.store.id,
            customer_id: this.customer.id,
            type_id: this.type.id
        }
    }
}

module.exports = Appointment;