'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

const {getUser, addUser, updateUser, getByIdUser, getByLoginUser, login} = userController;

router.get('/user', getUser);
router.post('/user', addUser);
router.put('/user/:id', updateUser);
router.get('/user/byidu/:id', getByIdUser);
router.get('/user/bylogu/:login', getByLoginUser);
router.post('/user/login', login)

module.exports = {
    routes: router
}