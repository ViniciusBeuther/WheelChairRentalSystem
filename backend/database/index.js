const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//Models
const Client = require('../models/Client');

const connection = new Sequelize(dbConfig);

Client.init(connection);

module.exports = connection;