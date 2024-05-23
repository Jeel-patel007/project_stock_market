'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_exchanges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      stock_exchanges.hasMany(models.stock_listing);
    }
  }
  stock_exchanges.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    timestamps:true,
    paranoid:true,
    modelName: 'stock_exchanges',
  });
  return stock_exchanges;
};