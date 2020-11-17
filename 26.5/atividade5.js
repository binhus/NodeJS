const express = require('express');
const middleware = require('./middleware');

const app = express();

app.get(
  '/:operacao/:numero1/:numero2',
  middleware.validator,
  middleware.adicao,
  middleware.subtracao,
  middleware.multiplicacao,
  middleware.divisao,
  (req, res) => {
    res.status(200).send({ resultado: req.total });
  },
);

app.use(middleware.erro);

app.listen(3000, function () {
  console.log('ouvindo a porta 3000');
});
