const moment = require('moment');
const { body } = require('express-validator/check');

const validateRegistrationBody = () => {
  return [
    body('name')
      .exists()
      .withMessage('name field is required')
      .isLength({ min: 5, max: 15 })
      .withMessage('password must be in between 8 to 15 characters long'),
    body('email')
      .exists()
      .withMessage('email field is required')
      .isEmail()
      .withMessage('Email is invalid'),
    body('password')
      .exists()
      .withMessage('password field is required')
      .isLength({ min: 8, max: 30 })
      .withMessage('password must be in between 8 to 30 characters long')
  ];
};

const validateLoginBody = () => {
  return [
    body('email')
      .exists()
      .withMessage('email field is required')
      .isEmail()
      .withMessage('Email is invalid'),
    body('password')
      .exists()
      .withMessage('password field is required')
      .isLength({ min: 8, max: 30 })
      .withMessage('password must be in between 8 to 30 characters long')
  ];
};

const yesterday = moment()
  .subtract(1, 'day')
  .format('L');

const validateOfferBody = () => {
  return [
    body('start_destination')
      .exists()
      .withMessage('Start destinatination lat and long is required'),
    body('finish_destination')
      .exists()
      .withMessage('Finish destinatination lat and long is required'),
    body('distance')
      .exists()
      .withMessage('Distance is required')
      .isFloat()
      .withMessage('Distance must be a float number'),
    body('price')
      .exists()
      .withMessage('Price field is required')
      .isDecimal()
      .withMessage('Price must be a number'),
    body('est_delivery_date')
      .exists()
      .withMessage('Estimated delivery date is required')
      .isAfter(yesterday)
      .withMessage("Estimated delivery date can't be in past"),
    body('description')
      .isLength({ max: 255 })
      .withMessage('description must be max 255 characters long')
  ];
};

module.exports = {
  validateRegistrationBody: validateRegistrationBody,
  validateLoginBody: validateLoginBody,
  validateOfferBody: validateOfferBody
};
