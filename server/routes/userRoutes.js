'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const {getUser, addUser, updateUser, getByIdUser, getByLoginUser, login, deleteUser} = userController;

router.get('/user', getUser);
router.post('/user', authMiddleware, addUser);
router.put('/user/:id', authMiddleware, updateUser);
router.get('/user/byidu/:id', authMiddleware, getByIdUser);
router.get('/user/bylogu/:login', authMiddleware, getByLoginUser);
router.post('/user/login', login)
router.put('/user/del/:id', authMiddleware, deleteUser)

module.exports = {
    routes: router
}