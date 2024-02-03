require('dotenv').config();

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  const log = `${req.method} ${req.path} ${req.ip}`;
  console.log(log);
  next();
});

app.get('/', (req, res) => {
  const path = `${__dirname}/views/index.html`;
  res.sendFile(path);
});

app.get('/json', (req, res) => {
  const cond = process.env.MESSAGE_STYLE == 'uppercase';
  const text = cond ? 'Hello json'.toUpperCase() : 'Hello json';
  res.json({
    message: text,
  });
});

app.use('/public', express.static(`${__dirname}/public`));

module.exports = app;
