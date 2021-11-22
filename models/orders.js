"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ORDERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ORDER_ITEM, { foreignKey: "ID" });
      this.hasMany(models.PAYMENT, { foreignKey: "ID" });
      this.belongsTo(models.CUSTOMER, { foreignKey: "CUSTOMER_ID" });
    }
  }
  ORDERS.init(
    {
      TIME: DataTypes.DATE,
      TOTAL: DataTypes.FLOAT,
      STATUS: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ORDERS",
      timestamps: false,
    }
  );
  return ORDERS;
};
