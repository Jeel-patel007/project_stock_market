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
      stock_master.hasMany(models.stock_listing, {
        foreignKey: 'stock_id',
        onDelete: 'CASCADE'
      });
      stock_master.hasMany(models.stock_prices, {
        foreignKey: 'stock_id',
        onDelete: 'CASCADE'
      });
      stock_master.hasMany(models.transaction, {
        foreignKey: 'stock_id',
        onDelete: 'CASCADE'
      });
      stock_master.belongsToMany(models.user, {
        through: models.user_watchlist,
        foreignKey: 'stock_id',
        onDelete: 'CASCADE'
      });
      stock_master.hasMany(models.dividends, {
        foreignKey: 'stock_id',
        onDelete: 'CASCADE',
      });

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
    timestamps: true,
    freezeTableName: true,
    paranoid: true,
    modelName: 'stock_master',
  });
  return stock_master;
};