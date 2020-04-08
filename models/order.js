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
      countryCode: {
        type: DataTypes.INTEGER,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
      },
      street: {
        type: DataTypes.STRING,
      },
      houseNumber: {
        type: DataTypes.STRING,
      },
      aptsuite: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      }
    },
    {}
  );
  order.associate = function (models) {
    // associations can be defined here
    order.belongsTo(models.user);
    order.belongsToMany(models.car, {
      through: "orderLines",
      foreignKey: "orderId",
    });
  };
  return order;
};
