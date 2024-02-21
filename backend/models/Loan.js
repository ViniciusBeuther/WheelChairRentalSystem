const { Model, DataTypes } = require('sequelize');

class Loan extends Model {
    static init (sequelize){
        super.init({
            total_to_pay: DataTypes.REAL,
            installments_number: DataTypes.INTEGER,
            rental_item_description: DataTypes.STRING,
            return_date: DataTypes.DATE, // Change to DataTypes.DATE
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
        this.hasMany(models.Installment, { foreignKey: 'loan_id', as: 'installments'});
    }
}

module.exports = Loan;
