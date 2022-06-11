'use strict';

const express = require('express');
const applicationController = require('../controllers/applicationController');
const router = express.Router();

const {getApplication, addApplication, updateApplication, getApplicationByClient} = applicationController;

router.get('/application', getApplication);
router.post('/application', addApplication);
router.put('/application/:id', updateApplication);
router.get('/application/getapplic/:id', getApplicationByClient);


module.exports = {
    routes: router
}