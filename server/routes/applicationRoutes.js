'use strict';

const express = require('express');
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const {getApplication, addApplication, updateApplication, getApplicationByClient, getApplicationByUser, updateStatusApplication, updateStatusPaymentApplication} = applicationController;

router.get('/application', authMiddleware, getApplication);
router.post('/application', addApplication);
router.put('/application/:id', authMiddleware, updateApplication);
router.get('/application/getapplic/:id', authMiddleware, getApplicationByClient);
router.get('/application/getapplicbyuser/:id', authMiddleware, getApplicationByUser);
router.put('/application/applicationstatus/:id', authMiddleware, updateStatusApplication);
router.put('/application/applicationstatuspayment/:id', authMiddleware, updateStatusPaymentApplication);


module.exports = {
    routes: router
}