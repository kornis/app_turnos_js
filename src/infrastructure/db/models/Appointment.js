module.exports = (sequelize, dataTypes) => {
    const Appointment = sequelize.define("Appointment",
    {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            unsigned: true,
            autoIncrement: true
        },
        _uuid: {
            type: dataTypes.STRING,
            allowNull: false
        },
        date: {
            type: dataTypes.STRING,
            allowNull: false
        },
        hour: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fraction: {
            type: dataTypes.STRING,
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
            type: dataTypes.BIGINT,
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