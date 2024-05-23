'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      stock_master.hasMany(models.stock_listing);
      stock_master.hasMany(models.stock_prices);
    }
  }
  stock_master.init({
    company_name: DataTypes.STRING,
    sector: DataTypes.STRING,
    industry: DataTypes.STRING,
    high_52_week: DataTypes.DECIMAL,
    low_52_week: DataTypes.DECIMAL,
    volumen: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    open_price: DataTypes.DECIMAL,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    timestamps:true,
    paranoid:true,
    modelName: 'stock_master',
  });
  return stock_master;
};