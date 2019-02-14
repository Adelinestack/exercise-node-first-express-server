const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello');
});

app.get('/bye', (req, res) => {
  res.send('Bye bye');
});

app.listen(5000);
