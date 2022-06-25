'use strict';

const express = require('express');
const statuspaymentController = require('../controllers/statuspaymentController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const {getStatusPayment} = statuspaymentController;

router.get('/statuspayment', authMiddleware, getStatusPayment);

module.exports = {
    routes: router
}
