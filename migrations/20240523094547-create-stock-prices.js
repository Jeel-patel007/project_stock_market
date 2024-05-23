'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock_prices', {
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
      price: {
        type: Sequelize.DECIMAL,
        allowNull:false,
        defaultValue:0
      },
      asoftime: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      indexes:[
        {
          fields:['stock_id'],
          name:'stock_id_index'
        }
      ]
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stock_prices');
  }
};