"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ITEM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.TYPE);
    }
  }
  ITEM.init(
    {
      NAME: { type: DataTypes.STRING, allowNull: false },
      DESCRIPTION: DataTypes.STRING,
      IMG: DataTypes.STRING,
      PRICE: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "ITEM",
      timestamps: false,
    }
  );
  return ITEM;
};
