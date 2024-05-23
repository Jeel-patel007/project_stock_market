'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_has_stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id',
          onDelete:'CASCADE'
        }
      },
      price_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'stock_prices',
          key:'id',
          onDelete:'CASCADE'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_has_stocks');
  }
};