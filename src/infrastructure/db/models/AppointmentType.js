module.exports = (sequelize, dataTypes) => {

    const AppointmentType = sequelize.define("AppointmentType",
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            unsigned: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unsigned: true
        }
    },
    {
        tableName: "appointments_type",
        timestamps: false
    });

    return AppointmentType;
}