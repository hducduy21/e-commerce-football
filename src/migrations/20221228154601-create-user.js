'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      // id: DataTypes.UUID,
      // username:DataTypes.STRING(25),
      // fullname: DataTypes.STRING(30),
      // password: DataTypes.STRING,
      // email: DataTypes.STRING(30),
      // token: DataTypes.INTEGER,
      // f_token: DataTypes.INTEGER,
      // type: DataTypes.TINYINT,
      // balance: DataTypes.INTEGER,
      // birthday: DataTypes.DATEONLY,
      // phone: DataTypes.INTEGER(10),
      // address: DataTypes.TEXT('long'),
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(25)
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      email: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING(30),
      },
      token: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      f_token: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        type: Sequelize.TINYINT,
      },
      balance: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      phone: {
        
        unique: true,
        type: Sequelize.INTEGER(10),
      },
      address: {
        allowNull: true,
        type: Sequelize.DataTypes.TEXT('long'),
      },



      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};