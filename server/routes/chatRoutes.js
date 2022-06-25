'use strict';

const express = require('express');
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const {getChat, addChat, updateChat, getChatByClient, getChatByUser} = chatController;

router.get('/chat', authMiddleware, getChat);
router.post('/chat', authMiddleware, addChat);
router.put('/chat/:id', authMiddleware, updateChat);
router.get('/chat/getchat/:id', authMiddleware, getChatByClient);
router.get('/chat/getchatuser/:id', authMiddleware, getChatByUser);


module.exports = {
    routes: router
}