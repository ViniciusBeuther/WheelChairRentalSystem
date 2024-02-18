const Client = require('../models/Client');

module.exports = {
    async store(req, res) {
        const { 
            name,
            cpf,
            date_of_birth,
            street,
            house_number,
            neighborhood,
            city,
            state,
            zipcode,
            phone_number,
            email_address
         } = req.body; 
        
        const client = await Client.create({ 
            name,
            cpf,
            date_of_birth,
            street,
            house_number,
            neighborhood,
            city,
            state,
            zipcode,
            phone_number,
            email_address
        }); 

        return res.json(client);
    },

    async listById(req, res) {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if ( !client ) {
            return res.send('O ID não existe!')
        }

        return res.json(client);
    },

    async listAll(req, res) {
        const clients = await Client.findAll();
        return res.json(clients)
    }
};