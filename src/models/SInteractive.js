'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SInteractive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SInteractive.init({
    SID: DataTypes.UUID,
    user: DataTypes.STRING(25),
    numberReport: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    content: DataTypes.String('long')
  }, {
    sequelize,
    modelName: 'SInteractive',
  });
  return SInteractive;
};ss