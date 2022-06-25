'use strict';

const express = require('express');
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const {getRole} = roleController;

router.get('/role', authMiddleware, getRole);

module.exports = {
    routes: router
}