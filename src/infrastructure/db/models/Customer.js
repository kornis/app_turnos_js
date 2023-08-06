module.exports = ( sequelize, dataTypes ) => {
    const Customer = sequelize.define("Customer", 
    {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            unsigned: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        id_number: {
            type: dataTypes.BIGINT,
            unsigned: true
        },
        street: {
            type: dataTypes.STRING
        },
        street_number: {
            type: dataTypes.INTEGER,
            unsigned: true
        },
        city: {
            type: dataTypes.STRING
        },
        country: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        }
    },
    {
        tableName: "customers",
        timestamps: true,
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        indexes: [
            {
                unique: true,
                fields: ["name", "email", "id_number"]
            }
        ]
    });

    return Customer;
}