'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.UUID,
    username: DataTypes.STRING(25),
    fullname: DataTypes.STRING(30),
    password: DataTypes.STRING,
    email: DataTypes.STRING(30),
    token: DataTypes.INTEGER,
    f_token: DataTypes.INTEGER,
    type: DataTypes.TINYINT,
    balance: DataTypes.INTEGER,
    birthday: DataTypes.DATEONLY,
    phone: DataTypes.INTEGER(10),
    address: DataTypes.TEXT('long'),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};