"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ITEM", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NAME: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DESCRIPTION: {
        type: Sequelize.STRING,
      },
      IMG: {
        type: Sequelize.STRING,
      },
      PRICE: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ITEM");
  },
};
