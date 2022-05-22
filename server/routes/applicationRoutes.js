'use strict';

const express = require('express');
const applicationController = require('../controllers/applicationController');
const router = express.Router();

const {getApplication, addApplication, updateApplication} = applicationController;

router.get('/application', getApplication);
router.post('/application', addApplication);
router.put('/application/:id', updateApplication);


module.exports = {
    routes: router
}