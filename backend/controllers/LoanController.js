const Installment = require('../models/Installment');
const Loan = require('../models/Loan');
const Client = require('../models/Client');

module.exports = {
    async store(req, res) {
        const { client_id } = req.params;
        const { total_to_pay, installments_number, rental_item_description, return_date } = req.body;

        try {
            const loan = await Loan.create({
                client_id,
                total_to_pay,
                installments_number,
                rental_item_description,
                return_date
            });

            return res.status(201).json(loan);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar empréstimo' });
        }
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
        const { loan_id } = req.params;
        const {
            total_to_pay,
            installments_number,
            rental_item_description,
            return_date
        } = req.body;
    
        try {
            let loan = await Loan.findByPk(loan_id);
            if (!loan) {
                return res.status(404).json({ error: 'Empréstimo não encontrado' });
            }
    
            loan.total_to_pay = total_to_pay;
            loan.installments_number = installments_number;
            loan.rental_item_description = rental_item_description;
            loan.return_date = return_date;
    
            await loan.save();
    
            return res.json(loan);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao atualizar empréstimo' });
        }
    }
    };
