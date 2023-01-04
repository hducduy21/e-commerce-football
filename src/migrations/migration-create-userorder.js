'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserOrder', {
        // id: DataTypes.UUID,
        // user: DataTypes.STRING(25),
        // payment: DataTypes.INTEGER,
        // orderState: DataTypes.INTEGER,
        // phone: DataTypes.INTEGER(10),
        // address: DataTypes.TEXT('long'),
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      payment: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      orderState: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      phone: {
        allowNull: false,
        type: Sequelize.INTEGER(10),
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT('long'),
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
    await queryInterface.dropTable('UserOrder');
  }
};