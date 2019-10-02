'use strict';

require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const port = process.env.PORT || 8000;
const router = express.Router();
const app = express();

app.use(express.text({ type: 'text/plain' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: 'application/*+json' }));

app.use(express.static(path.join(__dirname + '')));
app.set('view engine', 'njk');
nunjucks.configure({
  autoescape: true,
  express: app
});

app.get('/', (request, response) => response.redirect('/home'));

// ------------------ controller
require('./src/controller/index.js')(app, router);
// ------------------

app.listen(port, function () {
  console.log ('we are on ' + port);
});
