'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_has_stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_has_stock.init({
    user_id: DataTypes.INTEGER,
    price_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    timestamps:true,
    paranoid:true,
    modelName: 'user_has_stock',
  });
  return user_has_stock;
};