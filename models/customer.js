"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CUSTOMER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ORDERS, { foreignKey: "CUSTOMER_ID" });
    }
  }
  CUSTOMER.init(
    {
      USERNAME: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      EMAIL: DataTypes.STRING,
      PHONE: DataTypes.STRING,
      ADDRESS: DataTypes.STRING,
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },

    {
      sequelize,
      modelName: "CUSTOMER",
      timestamps: false,
    }
  );
  return CUSTOMER;
};
