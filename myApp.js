require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const path = `${__dirname}/views/index.html`;
  res.sendFile(path);
});

app.get('/json', (req, res) => {
  const cond = process.env.MESSAGE_STYLE;
  const text = cond ? 'HELLO JSON' : 'Hello json';
  res.json({
    message: text,
  });
});

app.use('/public', express.static(`${__dirname}/public`));

module.exports = app;
