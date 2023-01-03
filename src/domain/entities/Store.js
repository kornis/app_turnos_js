class Store {
    name = "";
    street = "";
    city = "";
    contact_id = null;
    street_number = 0;
    country = "";

    constructor(store) {
        this.name = store.name;
        this.street = store.street;
        this.city = store.city;
        this.street_number = store.street_number;
        this.country = store.country;
    }
}

module.exports = Store;