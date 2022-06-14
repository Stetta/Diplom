'use strict';

const express = require('express');
const typeController = require('../controllers/typeController');
const router = express.Router();

const {getType} = typeController;

router.get('/type', getType);

module.exports = {
    routes: router
}