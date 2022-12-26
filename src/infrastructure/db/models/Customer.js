module.exports = ( sequelize, DataTypes ) => {
    const Customer = sequelize.define("Customer", 
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            unsigned: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        id_number: {
            type: DataTypes.BIGINT,
            unsigned: true
        }
    },
    {
        tableName: "customers",
        timestamps: true,
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    });

    return Customer;
}