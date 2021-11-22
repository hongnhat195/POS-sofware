"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ORDERS", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CUSTOMER_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "CUSTOMER",
          key: "ID",
        },
      },
      TIME: {
        type: Sequelize.DATE,
      },
      TOTAL: {
        type: Sequelize.FLOAT,
      },
      STATUS: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ORDERs");
  },
};
