"use strict";
module.exports = (sequelize, DataTypes) => {
  const car = sequelize.define(
    "car",
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isElectric: DataTypes.BOOLEAN,
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      modelYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isUsed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      km: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      inStock: DataTypes.BOOLEAN,
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {}
  );
  car.associate = function (models) {
    // associations can be defined here
    car.belongsToMany(models.order, {
      through: "orderLines",
      foreignKey: "carId",
    });
  };
  return car;
};
