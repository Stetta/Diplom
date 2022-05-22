'use strict';

const userData = require("../data/user");

const getUser = async (req, res, next) => {
  try {
    const user = await userData.getUsers();
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await userData.createUser(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const updated = await userData.updateUser(userId, data);
    res.send(updated)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  getUser,
  addUser,
  updateUser
};
