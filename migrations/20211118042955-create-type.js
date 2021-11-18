"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TYPE", {
      ITEM_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "ITEM",
          key: "ID",
        },
      },
      TYPE: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TYPE");
  },
};
