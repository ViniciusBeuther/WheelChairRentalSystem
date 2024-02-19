const Client = require('../models/Client');
const Loan = require('../models/Loan');

module.exports = {
    async store(req, res) {
        const { client_id } = req.params;
        const { total_to_pay, installments_number, rental_item_description, return_date } = req.body;

        const client = await Client.findByPk(client_id);

        if ( !client ) {
            return res.send("Cliente não existe");
        }

        const loan = await Loan.create({
            total_to_pay, 
            installments_number, 
            rental_item_description, 
            return_date,
            client_id,
        });

        return res.json(loan);
    }
};