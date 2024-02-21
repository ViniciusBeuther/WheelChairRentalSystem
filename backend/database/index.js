const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//Models
const Client = require('../models/Client');
const Loan = require('../models/Loan');
const Installment = require('../models/Installment');

const connection = new Sequelize(dbConfig);

Client.init(connection);
Loan.init(connection);
Installment.init(connection);

Client.associate(connection.models);
Loan.associate(connection.models);
Installment.associate(connection.models);

module.exports = connection;