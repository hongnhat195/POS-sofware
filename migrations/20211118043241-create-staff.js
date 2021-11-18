"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("STAFF", {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      USERNAME: {
        type: Sequelize.STRING,
      },
      PASSWORD: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EMAIL: {
        type: Sequelize.STRING,
      },
      PHONE: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Staffs");
  },
};
