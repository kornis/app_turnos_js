const User = require("./User");
const bcrypt = require("bcryptjs");

class Customer extends User {

    constructor(customer) {
        super(customer);
    }
}

module.exports = Customer;