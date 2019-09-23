const express = require('express');
const offerService = require('../../../services/v1/offers/offers');
const authClientRequest = require('../../../middlewares/authGaurd');
const validation = require('../../../middlewares/validation');
let router = express.Router();

router.post(
  '/offers',
  validation.validateOfferBody(),
  offerService.newOffer,
  authClientRequest.authClientToken
);

router.get(
  '/offers',
  offerService.getAllOffers,
  authClientRequest.authClientToken
);

module.exports = router;
