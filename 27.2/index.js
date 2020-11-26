const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`O Pai tá ON na porta: ${PORT}`);
});