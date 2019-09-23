const userController = require('../../controllers/apis/v1/users');
const authController = require('../../controllers/apis/v1/auth');
const offersController = require('../../controllers/apis/v1/offers');

const express = require('express');
let router = express.Router();
router.use('/users', userController);
router.use('/auth', authController);
router.use('/offers', offersController);
module.exports = router;
