'use strict';

const express = require('express');
const statusdeleteController = require('../controllers/statusdeleteController');
const router = express.Router();

const {getStatusDelete} = statusdeleteController;

router.get('/statusdelete', getStatusDelete);

module.exports = {
    routes: router
}