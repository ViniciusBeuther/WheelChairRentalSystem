const Client = require('../models/Client');
const Installment = require('../models/Installment');
const Loan = require('../models/Loan');

module.exports = {
    async storeInstallment(req, res) {
        const { loan_id } = req.params;
        const { price, receipt, maturity_date, is_paid, paid_at } = req.body;

        const loan = await Loan.findByPk(loan_id);

        if ( !loan ) {
            return res.send("Não existe empréstimos");
        }

        const installment = await Installment.create({
            loan_id,
            price, 
            receipt,
            maturity_date,
            is_paid,
            paid_at,
        });

        return res.json(installment);
    },

    async listInstallment(req, res) {
        const { client_id } = req.params;

        const client = await Client.findByPk(client_id, {
            include: { association: 'loans' }
        });

        return res.json(client);
    },

    async delete(req, res) {
        const { installment_id } = req.params;
        const installment = await Installment.findByPk(installment_id);
        if (!installment) {
            return res.status(404).json({ error: 'Parcela não encontrada' });
        }
        await installment.destroy();
        return res.json({ message: 'Parcela deletada com sucesso' });
    },

    async update(req, res) {
        const { installment_id } = req.params;
        const {
            price,
            receipt,
            maturity_date,
            is_paid,
            paid_at
        } = req.body;

        const installment = await Installment.findByPk(installment_id);
        if (!installment) {
            return res.status(404).json({ error: 'Parcela não encontrada' });
        }

        installment.price = price;
        installment.receipt = receipt;
        installment.maturity_date = maturity_date;
        installment.is_paid = is_paid;
        installment.paid_at = paid_at;

        await installment.save();

        return res.json(installment);
    }
};
