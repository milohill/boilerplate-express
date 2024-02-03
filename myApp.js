require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const log = `${req.method} ${req.path} - ${req.ip}`;
  console.log(log);
  next();
});

app.route('/name').get((req, res) => {
  res.json({
    name: `${req.query.first} ${req.query.last}`,
  });
}).post((req, res) => {
  res.json({
    name: `${req.body.first} ${req.body.last}`,
  });
});

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    time: req.time,
  });
});

app.get('/', (req, res) => {
  const path = `${__dirname}/views/index.html`;
  res.sendFile(path);
});

app.get('/json', (req, res) => {
  const cond = process.env.MESSAGE_STYLE === 'uppercase';
  const text = cond ? 'Hello json'.toUpperCase() : 'Hello json';
  res.json({
    message: text,
  });
});

app.use('/public', express.static(`${__dirname}/public`));

module.exports = app;
