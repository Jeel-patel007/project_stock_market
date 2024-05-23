'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock_listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stock_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'stock_master',
          key:'id',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }
      },
      exchange_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'stock_exchanges',
          key:'id',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }
      },
      ticker: {
        type: Sequelize.STRING,
        allowNull:false
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
  {
   indexes:[
    {
      unique:true,
      fields:['ticker'],
      name:'ticker_unique_index'
    },
  {
    fields:['exchange_id'],
    name:'exchange_id_index'
  },
  {
    fields:['stock_id'],
    name:'stock_id_index'
  }
   ] 
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stock_listings');
  }
};