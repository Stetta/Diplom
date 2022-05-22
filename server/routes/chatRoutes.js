'use strict';

const express = require('express');
const chatController = require('../controllers/chatController');
const router = express.Router();

const {getChat, addChat, updateChat} = chatController;

router.get('/chat', getChat);
router.post('/chat', addChat);
router.put('/chat/:id', updateChat);


module.exports = {
    routes: router
}