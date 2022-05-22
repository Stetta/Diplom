'use strict';

const roleData = require("../data/role");

const getRole = async (req, res, next) => {
  try {
    const role = await roleData.getRole();
    res.send(role);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getRole
};