'use strict';

const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

const {getClient, addClient, updateClient, sendMail, getByLogin, login, getLastClient, getById} = clientController;

router.get('/client', getClient);
router.post('/client', addClient);
router.put('/client/:id', updateClient);
router.post('/client/sendmail', sendMail);
router.get('/client/:mail', getByLogin);
router.post('/client/login', login);
router.get('/client/getlast/last', getLastClient)
router.get('/client/byid/:id', getById);


module.exports = {
    routes: router
}