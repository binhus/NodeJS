const validator = (req, _res, next) => {
  const operacoesValidas = ['divisao', 'multiplicacao', 'subtracao', 'adicao'];
  const { operacao, numero1, numero2 } = req.params;
  console.log(operacao);
  if (operacao === 'divisao' && parseInt(numero2) === 0) {
    next('numero 2 não pode ser zero!');
  } else if (
    typeof parseInt(numero1) !== 'number' ||
    typeof parseInt(numero2) !== 'number'
  ) {
    next('somente números inteiros são permitidos.');
  } else if (isNaN(parseInt(parseInt(numero1))) || isNaN(parseInt(numero2))) {
    next('somente números inteiros são permitidos.');
  } else if (operacoesValidas.includes(operacao) === false) {
    next('operacao inválida');
  }
  next();
};

const adicao = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;
  if (operacao === 'adicao') {
    req.total = parseInt(numero1) + parseInt(numero2);
    next();
  }
  next();
};

const subtracao = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;

  if (operacao === 'subtracao') {
    req.total = parseInt(numero1) - parseInt(numero2);
    next();
  }
  next();
};
const multiplicacao = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;

  if (operacao === 'multiplicacao') {
    req.total = parseInt(numero1) * parseInt(numero2);
    next();
  }
  next();
};
const divisao = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;

  if (operacao === 'divisao') {
    req.total = parseInt(numero1) / parseInt(numero2);
    next();
  }
  next();
};

const erro = (err, _req, res, _next) => {
  res.status(500).send(err);
};
module.exports = { erro, validator, adicao, subtracao, multiplicacao, divisao };
