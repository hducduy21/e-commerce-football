'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GType', {
    //      id: DataTypes.INTEGER,
    //      PID: DataTypes.UUID,
    //      GID: DataTypes.INTEGER
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
      GID: {
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
    await queryInterface.dropTable('GType');
  }
};