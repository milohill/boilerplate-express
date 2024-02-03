const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const path = `${__dirname}/views/index.html`;
  res.sendFile(path);
});

app.get('/json', (req, res) => {
  res.json({
    message: 'Hello json',
  });
});

app.use('/public', express.static(`${__dirname}/public`));

module.exports = app;
