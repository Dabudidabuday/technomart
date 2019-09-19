'use strict';

require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname + '')));
app.set('view engine', 'njk');
nunjucks.configure({
  autoescape: true,
  express: app
});

app.get('/', (request, response) => response.redirect('/home'));

// ------------------
require('./src/controller/index.js')(app, router);
// ------------------

app.listen(port, function () {
  console.log ('we are on ' + port);
});
