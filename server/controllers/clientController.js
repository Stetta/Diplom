'use strict';
const jwt = require('jsonwebtoken');
const clientData = require("../data/client");
const {SECRET} = process.env;
const bcrypt = require('bcryptjs')

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
    const hashpassword = bcrypt.hashSync(data.Password, 4);
    const created = await clientData.createClient({Name: data.Name, Surname: data.Surname, Patronymic: data.Patronymic, Mail: data.Mail, Photo: data.Photo, Password: hashpassword});
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateClient = async (req, res, next) => {
  try {
    const clientId = req.params.id;
    const data = req.body;
    const hashpassword = bcrypt.hashSync(data.Password, 4);
    const updated = await clientData.updateClient(clientId, {Name: data.Name, Surname: data.Surname, Patronymic: data.Patronymic, Mail: data.Mail, Photo: data.Photo, Password: hashpassword});
    res.send(updated)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const sendMail = async(req, res, next) => {
  try {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    let transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 587,
      secure: false,
      auth: {
        user: 'ip.kashapov.r.a@yandex.ru',
        pass: 'D1864433'
      }
    })
    let mailOptions = {
      from: 'ip.kashapov.r.a@yandex.ru',
      to: req.body.mail,
      
      subject: 'Данные для авторизации',
      text: 'Ваш логин: ' + req.body.mail + '; '+ 'Ваш пароль: ' + req.body.password

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

    const validpassword = bcrypt.compareSync(password, user[0]['Password'])
    if (!validpassword) {
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