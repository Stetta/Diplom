'use strict';

const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

const {getClient, addClient, updateClient} = clientController;

router.get('/client', getClient);
router.post('/client', addClient);
router.put('/client/:id', updateClient);


module.exports = {
    routes: router
}