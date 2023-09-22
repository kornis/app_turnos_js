const db = require("../db/models");

module.exports = {
    getStoreEmployees: async (store_id) => {
        try {
            const employees = await db.Employee.findAll({
                where: {
                    [db.Sequelize.Op.and]: [{
                        store_id: store_id
                    },{
                        active: 1
                    }]
                },
                attributes: ["id", "name", "lastname", "avatar"]
            });

            return employees;

        } catch(error) {
            console.log(error);
            throw error;
        }
    },
    getStoreEmptySlots: async (store_id) => {

    }
}