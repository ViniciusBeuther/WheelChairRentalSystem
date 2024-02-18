const Loan = require('../models/Loan');

module.exports = {
    async store(req, res) {
        const { client_id } = req.params;
        const { total_to_pay, installments_number, rental_item_description, return_date } = req.body;

        const loan = await Loan.findByPk(client_id);

        if (!loan) {
            return res.send("Cliente nao existe!");
        }

        const loans = await Address.create({
            total_to_pay, 
            installments_number, 
            rental_item_description, 
            return_date
        });

        return res.json(loans);
    }
};