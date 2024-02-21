const Installment = require('../models/Installment');
const Loan = require('../models/Loan');
const Client = require('../models/Client');

module.exports = {
    async store(req, res) {
        const { loan_id } = req.params;
        const { price, receipt, maturity_date, is_paid, paid_at } = req.body;

        const loan = await Loan.findByPk(loan_id);

        if (!loan) {
            return res.send("Não existe empréstimo com esse ID");
        }

        // Corrija o formato da data para "YYYY-MM-DD"
        const correctedMaturityDate = new Date(maturity_date).toISOString().split('T')[0];

        const installment = await Installment.create({
            loan_id,
            price,
            receipt,
            maturity_date: correctedMaturityDate, // Use a data corrigida
            is_paid,
            paid_at,
        });

        return res.json(installment);
    },

    async index(req, res) {
        const { client_id } = req.params;

        try {
            // Busca o cliente pelo ID e inclui os empréstimos e as parcelas associados
            const client = await Client.findByPk(client_id, { 
                include: { 
                    model: Loan, 
                    as: 'loans', 
                    include: { 
                        model: Installment, 
                        as: 'installments' 
                    } 
                } 
            });

            if (!client) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }

            // Retorna os empréstimos do cliente, incluindo as parcelas de cada empréstimo
            return res.json(client.loans);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar empréstimos do cliente' });
        }
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
