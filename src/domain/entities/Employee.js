const User = require("./User");

class Employee extends User {
    admission_date = null;
    active = 1;
    store = null;
    avatar = null;

    constructor(employee) {
        super(employee)
        this.admission_date = employee.admission_date;
        this.store = employee.store;
        this.avatar = employee.avatar;
    }

    getEmployeeData() {
        return {
            name: this.name,
            lastname: this.lastname,
            id_number: this.id_number,
            admission_date: Date.now(),
            active: this.active,
            store_id: this.store.id,
            avatar: this.avatar
        }
    }
}

module.exports = Employee;