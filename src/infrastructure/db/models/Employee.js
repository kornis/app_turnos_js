module.exports = (sequelize, dataTypes) => {
    const Employee = sequelize.define("Employee", 
    {
        id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        id_number: {
            type: dataTypes.STRING
        },
        admission_date: {
            type: dataTypes.DATE
        },
        active: {
            type: dataTypes.TINYINT
        },
        store_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            foreignKey: true
        },
        address_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            foreignKey: true
        }
    }, 
    {
        tableName: "employees",
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    });

    return Employee;
}