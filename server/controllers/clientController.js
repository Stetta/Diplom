'use strict';

const clientData = require("../data/client");

const getClient = async (req, res, next) => {
  try {
    const client = await clientData.getClient();
    res.send(client);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addClient = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await clientData.createClient(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateClient = async (req, res, next) => {
  try {
    const clientId = req.params.id;
    const data = req.body;
    const updated = await clientData.updateClient(clientId, data);
    res.send(updated)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  getClient,
  addClient,
  updateClient
};