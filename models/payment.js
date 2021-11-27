"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PAYMENT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ORDERS, {  foreignKey: "ID" });
    }
  }
  PAYMENT.init(
    {
      METHOD: DataTypes.STRING,
      TIME: DataTypes.DATE,
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "PAYMENT",
      timestamps: false,
    }
  );
  return PAYMENT;
};
