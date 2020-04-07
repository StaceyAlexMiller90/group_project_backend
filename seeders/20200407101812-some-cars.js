"use strict";

const Car = require("../models").car;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cars = await Promise.all([
      Car.upsert({
        type: "Cabrio",
        brand: "Audi",
        model: "A5",
        imageUrl: "https://i.ytimg.com/vi/VAe6XCCYGlE/maxresdefault.jpg",
        price: 50000,
        isElectric: false,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: true,
        views: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "SUV",
        brand: "Audi",
        model: "Q7",
        imageUrl:
          "https://www.otokokpit.com/wp-content/uploads/2019/06/makyajli-2020-yeni-audi-q7-1.jpg",
        price: 76000,
        isElectric: false,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: true,
        views: 49,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "Sedan",
        brand: "BMW",
        model: "530i",
        imageUrl:
          "https://images.carscoops.com/2019/07/c7d5684d-bmw-5-series-facelift-rendering-2.jpg",
        price: 53500,
        isElectric: false,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: true,
        views: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "Sedan",
        brand: "Mercedes",
        model: "E200",
        imageUrl:
          "https://media.caradvice.com.au/image/private/s--AaQnW7bl--/v1536101191/db0d48618961100b7ec2caf780e0c047.jpg",
        price: 56500,
        isElectric: false,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: true,
        views: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "Sedan",
        brand: "Tesla",
        model: "S",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-s-1563301327.jpg?crop=0.627xw:1.00xh;0.0929xw,0&resize=640:*",
        price: 90000,
        isElectric: true,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: true,
        views: 89,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "Hatchback",
        brand: "BMW",
        model: "120i",
        imageUrl:
          "https://www.carscoops.com/wp-content/uploads/2019/07/a447cc2e-2020-bmw-1-series-m135-00-1024x555.jpg",
        price: 37000,
        isElectric: false,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: true,
        views: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "Hatchback",
        brand: "Audi",
        model: "A3",
        imageUrl:
          "https://autofans.be/sites/default/files/media/2020/Audi/anderefotos/audi-a3-sportback-2020_01.jpg",
        price: 385000,
        isElectric: false,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: true,
        views: 213,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "Cabrio",
        brand: "Mercedes",
        model: "C200",
        imageUrl:
          "https://img.drivemag.net/media/default/0001/78/2019-Mercedes-Benz-C-Class-Cabriolet-0-2119-default-large.jpeg",
        price: 55000,
        isElectric: false,
        modelYear: 2020,
        isUsed: false,
        km: 0,
        inStock: false,
        views: 153,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Car.upsert({
        type: "SUV",
        brand: "Mercedes",
        model: "GLE",
        imageUrl:
          "https://i.blogs.es/c1d497/mercedes-benz-gle-coupe-2020-precios-008/450_1000.jpg",
        price: 75000,
        isElectric: false,
        modelYear: 2020,
        isUsed: true,
        km: 12000,
        inStock: true,
        views: 153,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);

    console.log(`SEEDED: ${cars.length} cars`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cars", null, {});
  },
};
