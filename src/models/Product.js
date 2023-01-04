'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    desc: DataTypes.STRING('long'),
    price: DataTypes.INTEGER,
    reduction: DataTypes.INTEGER,
    vote: DataTypes.INTEGER,
    saled: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};