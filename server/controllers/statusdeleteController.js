'use strict';

const statusdeleteData = require("../data/statusdelete");

const getStatusDelete = async (req, res, next) => {
  try {
    const statusdelete = await statusdeleteData.getStatusDelete();
    res.send(statusdelete);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getStatusDelete
};