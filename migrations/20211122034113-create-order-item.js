"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ORDER_ITEM", {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "ORDERS",
          key: "ID",
        },
      },
      ITEM_ID: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "ITEMS",
          key: "ID",
        },
      },
      QUANTITY: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ORDER_ITEM");
  },
};
