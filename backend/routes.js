const express = require('express');
const ClientController = require('./controllers/ClientController');
const LoanController = require('./controllers/LoanController');
const InstallmentController = require('./controllers/InstallmentController');

const routes = express.Router();

// Clients Methods: GET/POST/DELETE/UPDATE
routes.get('/clients/:id', ClientController.listById);
routes.get('/clients/', ClientController.listAll);
routes.post('/clients', ClientController.store);
routes.delete('/clients/:id', ClientController.delete);
routes.put('/clients/:id', ClientController.update);

// Loans Methods: GET/POST/DELETE/UPDATE
routes.post('/clients/:client_id/loans', LoanController.store);
routes.get('/clients/:client_id/loans', LoanController.index);
routes.put('/clients/:client_id/loans', LoanController.update);
routes.delete('/clients/:client_id/loans', LoanController.delete);


routes.get('/loans/:loan_id/installments/:installment_id', InstallmentController.listInstallment);
routes.post('/loans/:loan_id/installments/:installment_id', InstallmentController.storeInstallment);
routes.put('/loans/:loan_id/installments/:installment_id', InstallmentController.update);
routes.delete('/loans/:loan_id/installments/:installment_id', InstallmentController.delete);

module.exports = routes;
