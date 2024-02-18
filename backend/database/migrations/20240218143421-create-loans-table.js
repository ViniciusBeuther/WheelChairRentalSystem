'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
      return queryInterface.createTable('loans', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },

        client_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'clients', key: 'id'},
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },

        total_to_pay: {
          type: Sequelize.REAL,
          allowNull: false,
        },

        installments_number: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        rental_item_description: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        return_date: {
          type: Sequelize.DATE,
          allowNull: false
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
    return queryInterface.dropTable('loans');
  }
};
