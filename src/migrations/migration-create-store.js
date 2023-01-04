'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Store', {
        // id: DataTypes.UUID,
        // name: DataTypes.STRING,
        // desc: DataTypes.STRING('long'),
        // address: DataTypes.STRING,
        // type: DataTypes.TINYINT,
        // balance: DataTypes.INTEGER,
        // follows: DataTypes.INTEGER,
        // products: DataTypes.INTEGER,
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      desc: {
        allowNull: false,
        type: Sequelize.STRING('long'),
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.TINYINT,
      },
      balance: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      follows: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      products: {
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
    await queryInterface.dropTable('Store');
  }
};