'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      stock_listing.belongsTo(models.stock_master,{
        foreignKey:'stock_id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      });
      stock_listing.belongsTo(models.stock_exchange,{
        foreignKey:'exchange_id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      });
    }
  }
  stock_listing.init({
    stock_id: DataTypes.INTEGER,
    exchange_id: DataTypes.INTEGER,
    ticker: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    timestamps:true,
    paranoid:true,
    modelName: 'stock_listing',
  });
  return stock_listing;
};