const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Test app</h1>');
});

app.listen(8080);
