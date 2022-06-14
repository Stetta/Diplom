'use strict';

const express = require('express');
const chatController = require('../controllers/chatController');
const router = express.Router();

const {getChat, addChat, updateChat, getChatByClient, getChatByUser} = chatController;

router.get('/chat', getChat);
router.post('/chat', addChat);
router.put('/chat/:id', updateChat);
router.get('/chat/getchat/:id', getChatByClient);
router.get('/chat/getchatuser/:id', getChatByUser);


module.exports = {
    routes: router
}