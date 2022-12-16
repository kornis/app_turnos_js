module.exports = ( sequelize, DataTypes ) => {
    const Customer = sequelize.define("Customer", 
    {
        id: {
            type: DataTypes.BIGINT,
            primary: true,
            unsigned: true
        },
        name: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        }
    },
    {
        tablename: "customer",
        timestamps: false,
        paranoid: true
    });

    return Customer;
}