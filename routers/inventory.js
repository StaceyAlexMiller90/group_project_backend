const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Car = require("../models").car;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.findAll();
    res.status(200).send(cars);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const car = await Car.findByPk(id);
    res.status(200).send(car);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
