'use strict';

const express = require('express');
const statusController = require('../controllers/statusController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const {getStatus} = statusController;

router.get('/status', authMiddleware, getStatus);

module.exports = {
    routes: router
}