'use strict';

const express = require('express');
const statusController = require('../controllers/statusController');
const router = express.Router();

const {getStatus} = statusController;

router.get('/status', getStatus);

module.exports = {
    routes: router
}