const express = require('express');
const userModel = require('./model/userModel');
const parser = require('body-parser');
const middewares = require('./middlewares/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'deu certo!' });
});

/* 1.POST /user - Cria um usuário no banco com os seguintes dados:
id: Id única gerada automaticamente pelo banco;
first_name: Nome do usuário (string obrigatória);
last_name: Sobrenome do usuário (string obrigatória);
email: Email do usuário (string obrigatória);
password: Senha do usuário (string com pelos menos 6 caracteres obrigatória);
O endpoint deve retornar um JSON com a mensagem Usuário criado com sucesso, juntamente com o status 201;
Caso os dados não estejam de acordo com as regras de negócio o endpoint deve retornar um objeto com a mensagem Dados inválidos juntamente com o status 200. */

app.post('/user', middewares.dataValidator, async (req, res) => {
  const user = await userModel.addUser(req.body);

  return res.status(201).send(user);
});

/*2.GET /user - Retorna um array com todos os usuários cadastrados no banco de dados, 
sendo cada usuário um objeto diferente. Além disso o endpoint deve retornar também o status 200. */

app.get('/user', async (req, res) => {
  const users = await userModel.getAllUsers();
  return res.status(200).send(users);
});

/* 3.GET /user/:id - Retorna o objeto do usuário cujo id seja igual ao parâmetro 
id informado na URL. Além disso o endpoint deve retornar também o status 200.
Caso não exista um usuário com id informado o endpoint deve retornar um JSON 
com mensagem Usuário não encontrado, juntamente com o status 404.
*/

app.get('/user/:id', async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  if (!user) res.status(404).send({ message: 'Usuário não encontrado' });

  return res.status(200).send(user);
});

app.listen(PORT, () => {
  console.log(`O Pai tá ON na porta: ${PORT}`);
});
