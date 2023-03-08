class Employee {
    name = "";
    lastname = "";
    id_number = null;
    admission_date = null;
    active = 1;
    store = null;
    address = null;
    avatar = null;

    constructor(employee) {
        this.name = employee.name;
        this.lastname = employee.lastname;
        this.id_number = employee.id_number;
        this.admission_date = employee.admission_date;
        this.address = employee.address;
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
            address: this.address.id,
            avatar: this.avatar
        }
    }
}

module.exports = Employee;