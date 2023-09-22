class Appointment {
    _uuid = null;
    date = null;
    employee = {};
    store = {};
    customer = {};
    type = {};
    hour = null;
    fraction = 0;

    constructor(store, employee, customer, type, date, hour, fraction, _uuid) {
        this.store = store;
        this.employee = employee;
        this.customer = customer;
        this.type = type;
        this.date = date; 
        this._uuid = _uuid;
        this.hour = hour;
        this.fraction = fraction;
    }

    getDate() {
        return { date: this.date, hour: this.hour };
    }

    getAppointmentInfo() {
        return {
            _uuid: this._uuid,
            date: this.date,
            employee_id: this.employee,
            store_id: this.store.id,
            customer_id: this.customer.id,
            type_id: this.type.id,
            hour: this.hour,
            fraction: this.fraction
        }
    }
}

module.exports = Appointment;