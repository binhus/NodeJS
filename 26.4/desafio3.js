/* Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>" } 
e retorne um JSON { "message": "Hello, <nome do usuário>!" }; */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  console.log('qualquer coisa');
  console.log(req.body);
  const { name } = req.body;
  res.send({ message: `Hello, ${name}!` });
});

app.get('/', (_req, res) => {
  res.send({ message: 'pong' });
});

app.listen(3000, () => {
  console.log('O pai tá ON');
});
