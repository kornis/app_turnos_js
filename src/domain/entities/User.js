const bcrypt = require("bcryptjs");

class User {
    #name = "";
    #lastname = "";
    #id_number = null;
    #email = "";
    #password = null;

    constructor(user) {

        this.#name = user.name;
        this.#lastname = user.lastname;
        this.#id_number = user.id_number;
        this.#email = user.email;
        //this.#password = bcrypt.hashSync(user.password, 12);
        this.#password = user.password;
    }

    getFullName() {
        return this.#name + " " + this.#lastname; 
    }

    getName() {
        return this.#name; 
    }

    getIdNumber() {
        return this.#id_number;
    }

    getEmail() {
        return this.#email;
    }

    validatePassword(passwordToValidate) {
        return bcrypt.compareSync(passwordToValidate, this.#password);
    }

    getFullUser() {
        return {
            name: this.#name,
            lastname: this.#lastname,
            email: this.#email,
            id_number: this.#id_number
        }
    }
}

module.exports = User;