'use strict';

const statusData = require("../data/status");

const getStatus = async (req, res, next) => {
  try {
    const status = await statusData.getStatus();
    res.send(status);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getStatus
};