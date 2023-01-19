module.exports = (sequelize, dataTypes) => {
    const GCustomer = sequelize.define('GCustomer',
    {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true
        },
        gID: {
            type: dataTypes.STRING(50),
            unsigned: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        avatar: {
            type: dataTypes.STRING(200),
        }
    },
    {
        tableName: "g_customers",
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    });

    return GCustomer;
}