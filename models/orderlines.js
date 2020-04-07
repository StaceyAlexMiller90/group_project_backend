"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderLines = sequelize.define(
    "orderLines",
    {
      orderId: DataTypes.INTEGER,
      carId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {}
  );
  orderLines.associate = function (models) {
    // associations can be defined here
    orderLines.belongsTo(models.car);
    orderLines.belongsTo(models.order);
  };
  return orderLines;
};
