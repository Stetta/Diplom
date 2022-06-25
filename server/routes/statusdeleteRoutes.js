'use strict';

const express = require('express');
const statusdeleteController = require('../controllers/statusdeleteController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const {getStatusDelete} = statusdeleteController;

router.get('/statusdelete', authMiddleware, getStatusDelete);

module.exports = {
    routes: router
}