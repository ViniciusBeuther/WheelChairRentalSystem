'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('installments', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        loan_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'loans', key: 'id' }, //{model: 'tabelaPai', key: 'PrimaryKey do Pai'}, vai criar uma chave estrangeira
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        price: {
          type: Sequelize.REAL,
          allowNull: false,
        },

        receipt: {
          type: Sequelize.BLOB,
          allowNull: true,
        },

        maturity_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },

        is_paid: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },

        paid_at: {
          type: Sequelize.DATE,
          allowNull: true
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        }, 

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down (queryInterface, Sequelize) {
      return queryInterface.dropTable('installments');
  }
};
