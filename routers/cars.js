const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Car = require("../models/").car;

const router = new Router();

router.get('/', async (req,res,next) => {
  try {
    const cars = await Car.findAll()
    res.status(200).send( {message: 'ok', cars} )
  } catch(e) {
    next(e)
  }
})



module.exports = router;