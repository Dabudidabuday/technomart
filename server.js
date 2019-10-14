'use strict';

require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

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
app.get("*", (request, response) => {
  response.status(404).render('layouts/404page/index.njk');
});

// ------------------
require('./src/controller/index.js')(app, router);
// ------------------

app.listen(port, function () {
  console.log ('we are on ' + port);
});
