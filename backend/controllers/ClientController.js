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
        if (!client) {
            return res.send('O ID não existe!')
        }

        return res.json(client);
    },

    async listAll(req, res) {
        const clients = await Client.findAll({
            include: { association: 'loans' }
        });
        
        return res.json(clients)
    },

    async delete(req, res) {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        await client.destroy();
        return res.json({ message: 'Cliente deletado com sucesso' });
    },

    async update(req, res) {
        const { id } = req.params;
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

        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }

        client.name = name;
        client.cpf = cpf;
        client.date_of_birth = date_of_birth;
        client.street = street;
        client.house_number = house_number;
        client.neighborhood = neighborhood;
        client.city = city;
        client.state = state;
        client.zipcode = zipcode;
        client.phone_number = phone_number;
        client.email_address = email_address;

        await client.save();

        return res.json(client);
    }
};
