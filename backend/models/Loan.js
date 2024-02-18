const { Model, DataTypes } = require('sequelize');

class Loan extends Model {
    static init (sequelize){
        super.init({
            total_to_pay: DataTypes.REAL,
            installments_number: DataTypes.INTEGER,
            rental_item_description: DataTypes.STRING,
            return_date: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = Loan;