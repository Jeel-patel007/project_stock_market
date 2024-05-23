'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_prices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stock_prices.init({
    stock_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    asoftime: DataTypes.DATE
  }, {
    sequelize,
    timestamps:true,
    modelName: 'stock_prices',
  });
  return stock_prices;
};