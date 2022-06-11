'use strict';

const jwt = require('jsonwebtoken');
const userData = require("../data/user");
const {SECRET} = process.env;

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


const generateAccessToken = (login) => {
  const payload = {
    login
  }
  return jwt.sign(payload, SECRET, {expiresIn: "24h"})
}
const login = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await userData.getByLoginUser(username);
    if (!user[0]) {
      return res.status(400).json({message: 'Пользователь с таким логином не найден'})
    }
    if (user[0]['Password'] != password) {
      return res.status(400).json({message: 'Неправильный пароль'})
    }

    const token = generateAccessToken(user[0]['IdUser'])
    res.json({token: token, IdRole: user[0]['IdRole'], userId: user[0]['IdUser']});
  } catch (error) {
    res.status(400).send(error.message);
  }
}
const getByLoginUser = async (req, res, next) => {
  try {
    const Login = req.params.login;
    const oneLogin = await userData.getByLoginUser(Login);
    res.send(oneLogin);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
const getByIdUser = async (req, res, next) => {
  try {
    const IdUser = req.params.id;
    const oneId = await userData.getByIdUser(IdUser);
    res.send(oneId);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
module.exports = {
  getUser,
  addUser,
  updateUser,
  getByIdUser,
  getByLoginUser,
  login
};
