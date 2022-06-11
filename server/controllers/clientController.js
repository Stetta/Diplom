'use strict';

const jwt = require('jsonwebtoken');
const clientData = require("../data/client");
const {SECRET} = process.env;

const getClient = async (req, res, next) => {
  try {
    const client = await clientData.getClient();
    res.send(client);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLastClient = async (req, res, next) => {
  try {
    const client = await clientData.getLastClient();
    res.send(client);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addClient = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await clientData.createClient(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateClient = async (req, res, next) => {
  try {
    const clientId = req.params.id;
    const data = req.body;
    const updated = await clientData.updateClient(clientId, data);
    res.send(updated)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const sendMail = async(req, res, next) => {
  try {
    require('dotenv').config()
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      // host: 'smtp.mail.ru',
      // port: 465,
      // secure: true,
      // auth: {
      //   user: 'ipkashapovra@mail.ru',
      //   pass: 'AJpRT7YtHIqDZlK7jMxm'
      // }
      service: 'gmail',
      auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
      }
    })
    const mailOptions = {
      from: 'ipkashapovra@mail.ru',
      to: req.body.email,
      subject: 'Данные для авторизации',
      text: 'Ваш логин: ' + req.body.email + '; '+ 'Ваш пароль: ' + req.body.password
    }
    transporter.sendMail(mailOptions)
    res.send("sucess")
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const generateAccessToken = (mail) => {
  const payload = {
    mail
  }
  return jwt.sign(payload, SECRET, {expiresIn: "24h"})
}

const login = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await clientData.getByLogin(username);
    if (!user[0]) {
      return res.status(400).json({message: 'Пользователь с таким логином не найден'})
    }
    if (user[0]['Password'] != password) {
      return res.status(400).json({message: 'Неправильный пароль'})
    }

    const token = generateAccessToken(user[0]['IdClient'])
    res.json({token: token, clientId: user[0]['IdClient']});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getByLogin = async (req, res, next) => {
  try {
    const Mail = req.params.mail;
    const oneMail = await clientData.getByLogin(Mail);
    res.send(oneMail);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getById = async (req, res, next) => {
  try {
    const IdClient = req.params.id;
    const oneId = await clientData.getById(IdClient);
    res.send(oneId);
  } catch (error) {
    res.status(400).send(error.message);
  }
}


module.exports = {
  getClient,
  addClient,
  updateClient,
  sendMail,
  login,
  getByLogin,
  getLastClient,
  getById
};