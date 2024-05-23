'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction.init({
    user_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    transaction_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};