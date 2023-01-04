'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PType.init({
    id: DataTypes.INTEGER,
    PID: DataTypes.UUID,
    TID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PType',
  });
  return PType;
};