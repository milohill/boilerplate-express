const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const path = `${__dirname}/views/index.html`;
  console.log(path);
  res.sendFile('/', path);
});

module.exports = app;
