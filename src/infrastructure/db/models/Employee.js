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
        email: {
            type: dataTypes.STRING
        },
        id_number: {
            type: dataTypes.STRING
        },
        admission_date: {
            type: dataTypes.DATE
        },
        active: {
            type: dataTypes.SMALLINT
        },
        store_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            foreignKey: true
        },
        avatar: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
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
        tableName: "employees",
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        indexes: [
            {
                unique: true,
                fields: [ "id_number", "email", "name" ]
            }
        ]
    });

    Employee.associate = (models) => {
        Employee.belongsTo(models.Store, {
            foreignKey: "store_id",
            as: "store"
        });
    };

    return Employee;
}