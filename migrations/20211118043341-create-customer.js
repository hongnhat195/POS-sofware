"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CUSTOMER", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      USERNAME: {
        type: Sequelize.STRING,
      },
      PASSWORD: {
        type: Sequelize.STRING,
      },
      EMAIL: {
        type: Sequelize.STRING,
      },
      PHONE: {
        type: Sequelize.STRING,
      },
      ADDRESS: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CUSTOMER");
  },
};
