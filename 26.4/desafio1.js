/*
Inicie os exercícios criando uma aplicação NodeJS, com os comandos já aprendidos.
*/

const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('O pai tá ON');
});
