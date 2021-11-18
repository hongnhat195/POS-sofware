"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TYPE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ITEM);
    }
  }
  TYPE.init(
    {
      ITEMId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      TYPE: {
        type: DataTypes.STRING,
        allowNullprimaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TYPE",
      timestamps: false,
    }
  );
  return TYPE;
};
