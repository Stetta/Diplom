'use strict';

const statuspaymentData = require("../data/statuspayment");

const getStatusPayment = async (req, res, next) => {
  try {
    const statuspayment = await statuspaymentData.getStatusPayment();
    res.send(statuspayment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getStatusPayment
};