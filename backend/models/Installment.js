const { Model, DataTypes } = require('sequelize');

class Installment extends Model {
    static init (sequelize){
        super.init({
            price: DataTypes.REAL,
            receipt: DataTypes.BLOB,
            maturity_date: DataTypes.DATE,
            is_paid: DataTypes.BOOLEAN,
            paid_at: DataTypes.DATE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Loan, { foreignKey: 'loan_id', as: 'installments' }); // Corrected association
    }
}

module.exports = Installment;
