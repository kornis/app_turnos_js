module.exports = (sequelize, dataTypes) => {
    const Store = sequelize.define("Store",
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
        street: {
            type: dataTypes.STRING,
            allowNull: false
        },
        city: {
            type: dataTypes.STRING
        },
        contact_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            unsigned: true
        },
        street_number: {
            type: dataTypes.INTEGER,
            unsigned: true
        },
        country: {
            type: dataTypes.STRING
        }
    },
    {
        tableName: "stores",
        timestamps: false
    });

    return Store;
}