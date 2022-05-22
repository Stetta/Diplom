'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

const {getUser, addUser, updateUser} = userController;

router.get('/user', getUser);
router.post('/user', addUser);
router.put('/user/:id', updateUser);


module.exports = {
    routes: router
}