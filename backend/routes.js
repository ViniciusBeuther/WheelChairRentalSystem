const express = require('express');
const ClientController = require('./controllers/ClientController');
const LoanController = require('./controllers/LoanController');

const routes = express.Router();

// Clients Methods: GET/POST/DELETE/UPDATE
routes.get('/clients/:id', ClientController.listById);
routes.get('/clients/', ClientController.listAll);
routes.post('/clients', ClientController.store);

// Loans Methods
routes.post('/clients/:client_id/loans', LoanController.store);

module.exports = routes;