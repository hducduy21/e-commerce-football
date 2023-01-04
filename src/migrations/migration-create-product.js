'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product', {
        // id: DataTypes.UUID,
        // name: DataTypes.STRING,
        // desc: DataTypes.STRING('long'),
        // price: DataTypes.INTEGER,
        // reduction: DataTypes.INTEGER,
        // vote: DataTypes.INTEGER,
        // saled: DataTypes.INTEGER,
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      desc: {
        allowNull: false,
        type: Sequelize.STRING('long'),
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      reduction: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      vote: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      saled: {
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
    await queryInterface.dropTable('Product');
  }
};