'use strict';

const typeData = require("../data/type");

const getType = async (req, res, next) => {
  try {
    const type = await typeData.getType();
    res.send(type);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getType
};