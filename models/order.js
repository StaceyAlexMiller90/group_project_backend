"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      orderNumber: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      delivery: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {}
  );
  order.associate = function (models) {
    // associations can be defined here
    order.hasMany(models.car);
    order.belongsTo(models.user);
    order.belongsToMany(models.car, {
      through: "orderLines",
      foreignKey: "orderId",
    });
  };
  return order;
};
