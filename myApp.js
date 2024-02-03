const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public/style.css`));

app.get('/', (req, res) => {
  const path = `${__dirname}/views/index.html`;
  res.sendFile(path);
});

module.exports = app;
