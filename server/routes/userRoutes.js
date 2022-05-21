'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

const {getUser, addUser} = userController;

router.get('/user', getUser);
router.post('/user', addUser);


module.exports = {
    routes: router
}