'use strict';

const express = require('express');
const statuspaymentController = require('../controllers/statuspaymentController');
const router = express.Router();

const {getStatusPayment} = statuspaymentController;

router.get('/statuspayment', getStatusPayment);

module.exports = {
    routes: router
}
