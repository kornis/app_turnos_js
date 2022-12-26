module.exports = (sequelize, dataTypes) => {
    const Appointment = sequelize.define("Appointment",
    {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            unsigned: true,
            autoIncrement: true
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        employee_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        },
        store_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        },
        customer_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        },
        type_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        }
    },
    {
        tableName: "appointments",
        timestamps: false
    });

    return Appointment;
}