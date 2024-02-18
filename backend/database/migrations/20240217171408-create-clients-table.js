'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
      return queryInterface.createTable('clients', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        cpf: {
          type: Sequelize.STRING(11),
          allowNull: false,
        },

        date_of_birth: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        house_number: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        neighborhood: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        
        zipcode: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        phone_number: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        email_address: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('clients');
  }
};
