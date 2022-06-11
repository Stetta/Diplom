'use strict';

const applicationData = require("../data/application");

const getApplication = async (req, res, next) => {
  try {
    const application = await applicationData.getApplication();
    res.send(application);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addApplication = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await applicationData.createApplication(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateApplication = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const data = req.body;
    const updated = await applicationData.updateApplication(applicationId, data);
    res.send(updated)
  } catch (error) {
    res.status(400).send(error.message);
  }
}
const getApplicationByClient = async (req, res, next) => {
  try {
    const application = await applicationData.getApplicationByClient(req.params.id);
    res.send(application);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getApplication,
  addApplication,
  updateApplication,
  getApplicationByClient
};