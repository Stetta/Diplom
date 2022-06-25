'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const {getUser, addUser, updateUser, getByIdUser, getByLoginUser, login} = userController;

router.get('/user', getUser);
router.post('/user', authMiddleware, addUser);
router.put('/user/:id', authMiddleware, updateUser);
router.get('/user/byidu/:id', authMiddleware, getByIdUser);
router.get('/user/bylogu/:login', authMiddleware, getByLoginUser);
router.post('/user/login', login)

module.exports = {
    routes: router
}