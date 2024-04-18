const api = require('express').Router();
const uuid = require('../helpers/uuid');

const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

api.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/api.json').then((data) => res.json(JSON.parse(data)));
  });





  module.exports = api;