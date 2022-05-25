'use strict';

const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

const {getClient, addClient, updateClient, sendMail, getByLogin, login} = clientController;

router.get('/client', getClient);
router.post('/client', addClient);
router.put('/client/:id', updateClient);
router.post('/client/sendmail', sendMail);
router.get('/client/:mail', getByLogin);
router.post('/client/login', login);


module.exports = {
    routes: router
}