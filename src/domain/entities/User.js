const bcrypt = require("bcryptjs");

class User {
    id = "";
    name = "";
    lastname = "";
    id_number = null;
    email = "";
    password = null;
    street = "";
    street_number = null;
    city = "";
    country = "";
    phone = "";

    constructor(user) {
        this.id = user._uuid;
        this.name = user.name;
        this.lastname = user.lastname;
        this.id_number = user.id_number;
        this.email = user.email;
        //this.password = bcrypt.hashSync(user.password, 12);
        this.password = user.password;
        this.street = user.street;
        this.street_number = user.street_number;
        this.city = user.city;
        this.country = user.country;
        this.phone = user.phone;
    }

    getFullName() {
        return this.name + " " + this.lastname; 
    }

    getName() {
        return this.name; 
    }

    getIdNumber() {
        return this.id_number;
    }

    getEmail() {
        return this.email;
    }

    validatePassword(passwordToValidate) {
        return bcrypt.compareSync(passwordToValidate, this.password);
    }

    getFullUser() {
        return {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            id_number: this.id_number,
            id: this.id
        }
    }

    getUserAddress() {
        return {
            street: this.street,
            street_number: this.street_number,
            city: this.city,
            country: this.country,
            phone: this.phone
        }
    }
}

module.exports = User;