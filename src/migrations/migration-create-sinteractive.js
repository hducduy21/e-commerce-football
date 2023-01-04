'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SInteractive', {
        // SID: DataTypes.UUID,
        // user: DataTypes.STRING(25),
        // numberReport: DataTypes.INTEGER,
        // type: DataTypes.INTEGER,
        // content: DataTypes.String('long')
      SID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(25),
      },
      numberReport: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      content: {
        allowNull: true,
        type: Sequelize.String('long'),
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
    await queryInterface.dropTable('SInteractive');
  }
};