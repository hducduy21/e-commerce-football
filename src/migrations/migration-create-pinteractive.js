'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PInteractive', {
        // id: DataTypes.INTEGER,
        // user: DataTypes.STRING(25),
        // SID: DataTypes.UUID,
        // type: DataTypes.BOOLEAN,
        // content: DataTypes.String('long')
      id: {
        allowNull: false,
        autoIncrementIdentity: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      SID: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      type: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      content: {
        allowNull: true,
        type: Sequelize.String('long')
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
    await queryInterface.dropTable('PInteractive');
  }
};