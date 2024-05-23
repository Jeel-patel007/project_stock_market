'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock_master', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      sector: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      high_52_week: {
        type: Sequelize.DECIMAL,
        defaultValue:0
      },
      low_52_week: {
        type: Sequelize.DECIMAL,
        defaultValue:0
      },
      volumen: {
        type: Sequelize.INTEGER,
        defaultValue:1
      },
      currency: {
        type: Sequelize.STRING,
        allowNull:false
      },
      open_price: {
        type: Sequelize.DECIMAL,
        allowNull:false
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
    await queryInterface.dropTable('stock_master');
  }
};