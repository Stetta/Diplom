'use strict';

const express = require('express');
const applicationController = require('../controllers/applicationController');
const router = express.Router();

const {getApplication, addApplication, updateApplication, getApplicationByClient, getApplicationByUser, updateStatusApplication, updateStatusPaymentApplication} = applicationController;

router.get('/application', getApplication);
router.post('/application', addApplication);
router.put('/application/:id', updateApplication);
router.get('/application/getapplic/:id', getApplicationByClient);
router.get('/application/getapplicbyuser/:id', getApplicationByUser);
router.put('/application/applicationstatus/:id', updateStatusApplication);
router.put('/application/applicationstatuspayment/:id', updateStatusPaymentApplication);


module.exports = {
    routes: router
}