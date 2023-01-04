'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailOrder', {
        // id: DataTypes.UUID,
        // PID: DataTypes.UUID,
        // payment: DataTypes.INTEGER,
        // orderState: DataTypes.INTEGER,
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OID: {
        allowNull: false,
        type: Sequelize.UUID
      },
      PID: {
        allowNull: false,
        type: Sequelize.UUID
      },
      payment: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      orderState: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('DetailOrder');
  }
};