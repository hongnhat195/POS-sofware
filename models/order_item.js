"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ORDER_ITEM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ORDERS, {
        foreignKey: "ID",
        primaryKey: true,
      });
      this.belongsTo(models.ITEM, { foreignKey: "ITEM_ID" });
    }
  }
  ORDER_ITEM.init(
    {
      QUANTITY: DataTypes.INTEGER,
      // ID: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      // },
      ITEM_ID: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      sequelize,
      modelName: "ORDER_ITEM",
      timestamps: false,
    }
  );
  return ORDER_ITEM;
};
