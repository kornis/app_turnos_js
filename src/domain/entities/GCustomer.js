const User = require("./User");
const bcrypt = require("bcryptjs");

class GCustomer extends User {

    avatar = null;

    constructor(customer) {
        super(customer);
        this.avatar = customer.picture;
        this.gID = customer.gID;
    }

    getFullUser() {
        return {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            avatar: this.avatar,
            gID: this.gID
        }
    }
}

module.exports = GCustomer;