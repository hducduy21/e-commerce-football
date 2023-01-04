'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductInventory', {
    //     PID: DataTypes.UUID,
    // IID: DataTypes.INTEGER,
    // quantity: DataTypes.INTEGER,
      PID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      IID: {
        allowNull: false,
        
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ProductInventory');
  }
};