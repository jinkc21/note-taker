const html = require('express').Router();
// const uuid = require('../helpers/uuid');

// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


html.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
   res.sendFile('./public/index.html')
  });




module.exports = html;