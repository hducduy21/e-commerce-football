'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserOrder.init({
    id: DataTypes.UUID,
    user: DataTypes.STRING(25),
    payment: DataTypes.INTEGER,
    orderState: DataTypes.INTEGER,
    phone: DataTypes.INTEGER(10),
    address: DataTypes.TEXT('long'),
  }, {
    sequelize,
    modelName: 'UserOrder',
  });
  return UserOrder;
};ss