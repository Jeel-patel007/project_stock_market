'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dividends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dividends.init({
    stock_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    declaration_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'dividends',
  });
  return dividends;
};