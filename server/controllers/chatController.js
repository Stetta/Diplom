'use strict';

const chatData = require("../data/chat");

const getChat = async (req, res, next) => {
  try {
    const chat = await chatData.getChat();
    res.send(chat);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addChat = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await chatData.createChat(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateChat = async (req, res, next) => {
  try {
    const chatId = req.params.id;
    const data = req.body;
    const updated = await chatData.updateChat(chatId, data);
    res.send(updated)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getChatByClient = async (req, res, next) => {
  try {
    const chat = await chatData.getChatByClient(req.params.id);
    res.send(chat);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getChat,
  addChat,
  updateChat,
  getChatByClient
};