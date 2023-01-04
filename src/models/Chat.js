'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chat.init({
    id: DataTypes.INTEGER,
    user: DataTypes.STRING(25),
    SID: DataTypes.UUID,
    type: DataTypes.BOOLEAN,
    content: DataTypes.String('long')
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};ss