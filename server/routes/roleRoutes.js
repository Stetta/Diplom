'use strict';

const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();

const {getRole} = roleController;

router.get('/role', getRole);

module.exports = {
    routes: router
}