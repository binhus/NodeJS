const express = require('express');

const app = express();
app.get('/', (_req, res) => {
  res.send({ message: 'pong' });
});

app.listen(3000, () => {
  console.log('O pai tá ON');
});
