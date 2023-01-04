'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PType', {
    //     id: DataTypes.INTEGER,
    // PID: DataTypes.UUID,
    // TID: DataTypes.INTEGER
        id: {
        allowNull: false,
        autoIncrementIdentity: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PID: {
        allowNull: false,
        type: Sequelize.UUID
      },
      TID: {
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
    await queryInterface.dropTable('PType');
  }
};