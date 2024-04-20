const api = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs')

api.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'),'utf-8'))
    console.log(notes)
    res.json(notes)
  });

  api.post('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'),'utf-8'))
    // req.body.id = uuidv4()
    console.log(req.body)
    notes.push({...req.body, id: uuidv4()})
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes))
    res.json(notes)
  });




  module.exports = api;