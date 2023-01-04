'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Store.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    desc: DataTypes.STRING('long'),
    address: DataTypes.STRING,
    type: DataTypes.TINYINT,
    balance: DataTypes.INTEGER,
    follows: DataTypes.INTEGER,
    products: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};