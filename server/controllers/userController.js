'use strict';
const jwt = require('jsonwebtoken');
const userData = require("../data/user");
const {SECRET} = process.env;
const bcrypt = require('bcryptjs')

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
    const hashpassword = bcrypt.hashSync(data.Password, 4);
    const created = await userData.createUser({Surname: data.Surname, Name: data.Name, Patronymic: data.Patronymic, Photo: data.Photo, Login: data.Login, Password: hashpassword, IdRole: data.IdRole});
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const hashpassword = bcrypt.hashSync(data.Password, 4);
    const updated = await userData.updateUser(userId, {Surname: data.Surname, Name: data.Name, Patronymic: data.Patronymic, Photo: data.Photo, Login: data.Login, Password: hashpassword, IdRole: data.IdRole});
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

    const validpassword = bcrypt.compareSync(password, user[0]['Password'])
    if (!validpassword) {
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
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updated = await userData.deleteUser(userId);
    res.send(updated);
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
  login,
  deleteUser
};
