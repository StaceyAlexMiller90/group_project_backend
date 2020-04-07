"use strict";

const Order = require("../models").order;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = await Promise.all([
      Order.upsert({
        orderNumber: 100,
        paid: true,
        delivery: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Order.upsert({
        orderNumber: 101,
        paid: false,
        delivery: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Order.upsert({
        orderNumber: 102,
        paid: true,
        delivery: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Order.upsert({
        orderNumber: 103,
        paid: false,
        delivery: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);

    console.log(`SEEDED: ${orders.length} orders`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};
