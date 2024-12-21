const express = require("express");
const router = express.Router();
const {body,query} = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");


router.post('/create',
  authMiddleware.authUser,
  // body('userId').isString().isLength({ min: 24,max:24 }).withMessage('Invalid user Id'),
  body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
  body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
  body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type'),
  rideController.createRide
)

router.get('/get-fare',
  authMiddleware.authUser,
  query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid Pickup'),
  query('destination').isString().isLength({ min: 3 }).withMessage('Invalid Destination'),
  rideController.getFare
)

router.post('/confirm',
  authMiddleware.authCaptain,
  body('rideId').isMongoId().withMessage('Invalid ride id'),
  rideController.confirmRide
)

router.get('/start-ride',
  authMiddleware.authCaptain,
  query('rideId').isMongoId().withMessage('Invalid ride id'),
  query('otp').isString().isLength({min:6,max:6}).withMessage('Invalid OTP'),
  rideController.startRide
)

router.post('/end-ride',authMiddleware.authCaptain,
  body('rideId').isMongoId().withMessage('Invalid ride id'),
  rideController.endRide
)

module.exports = router;