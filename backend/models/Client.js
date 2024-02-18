const { Model, DataTypes } = require('sequelize');

class Client extends Model {
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            date_of_birth: DataTypes.DATE,
            street: DataTypes.STRING,
            house_number: DataTypes.INTEGER,
            neighborhood: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            zipcode: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            email_address: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Client;