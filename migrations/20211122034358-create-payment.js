"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PAYMENT", {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "ORDERS",
          key: "ID",
        },
      },
      METHOD: {
        type: Sequelize.STRING,
      },
      TIME: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PAYMENT");
  },
};
