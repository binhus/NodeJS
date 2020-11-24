const express = require('express');
const userModel = require('./model/userModel');
const parser = require('body-parser')
const middewares = require('./middlewares/index')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());

app.get('/', (req, res) => {
  return res.status(200).send({message: "deu certo!"})
})

app.post('/user', middewares.dataValidator ,async (req, res) => {
  const user = await userModel.addUser(req.body);

  return res.status(201).send(user);
});

app.listen(PORT, () => {
  console.log(`O Pai tá ON na porta: ${PORT}`);
});
