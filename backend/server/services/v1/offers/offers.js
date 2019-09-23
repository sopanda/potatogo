const express = require('express');
const { validationResult } = require('express-validator/check');

const offerModel = require('../../../models/offer');

const newOffer = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let {
    start_destination,
    finish_destination,
    price,
    distance,
    description,
    est_delivery_date
  } = req.body;

  console.log('Cookies: ', req.cookies);

  try {
    let offer = await offerModel.create({
      start_destination: start_destination,
      finish_destination: finish_destination,
      price: price,
      distance: distance,
      description: description,
      est_delivery_date: est_delivery_date
    });

    if (!offer) {
      throw new error();
    }

    return res.status(201).json({
      success: [
        {
          msg: 'offer successfully created'
        }
      ]
    });
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          msg: 'there was a problem creating an offer'
        }
      ]
    });
  }
};

const getAllOffers = async (req, res, next) => {
  console.log('Cookies: ', req.cookies);

  let offers = await offerModel.find({});

  if (!offers) {
    return res.status(404).json({
      errors: [
        {
          msg: 'no offers found'
        }
      ]
    });
  }

  return res.status(200).json({
    success: [
      {
        msg: 'offers fetched successfully',
        data: offers
      }
    ]
  });
};

module.exports = {
  newOffer: newOffer,
  getAllOffers: getAllOffers
};
