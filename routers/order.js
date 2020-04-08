const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Car = require("../models").car;
const Order = require("../models").order;
const OrderLine = require("../models").orderLines;

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  const userId = req.user.id
  const {
    countryCode,
    phoneNumber,
    street,
    houseNumber,
    aptsuite,
    city,
    postalCode,
    country,
    cart
  } = req.body
  try {
    const order = await Order.create({
      paid: true,
      delivery: true,
      countryCode,
      phoneNumber,
      street,
      houseNumber,
      aptsuite,
      city,
      postalCode,
      country,
      userId
    })
    const orderId = order.id
    await cart.map(item => OrderLine.create({
        orderId, 
        carId: item.id, 
        quantity: item.quantity
      }))
  } catch(e) {
    next(e)
  }
});


module.exports = router;