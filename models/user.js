'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.stock_prices, {
        through: models.user_has_stock,
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      user.hasMany(models.transaction, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })

      user.belongsToMany(models.stock_master, {
        through: models.user_watchlist,
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });



    }
  }
  user.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: true,
    modelName: 'user',
  });
  return user;
};