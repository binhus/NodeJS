const inquirer = require('inquirer');

const obesidade = [
  'Obesidade grau I',
  'Obesidade grau II',
  'Obesidade graus III e IV',
];

function validate(input) {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(input) ? true : 'Digite um número válido';
}
//function validate(input) {
//  if (parseFloat(input) === NaN) return false;
//  return true;
//}
inquirer
  .prompt([
    {
      name: 'peso',
      type: 'input',
      message: 'Digite seu peso: ',
      validate,
    },
    {
      name: 'altura',
      type: 'input',
      message: 'Digite sua altura: ',
      validate,
    },
  ])
  .then(({ peso, altura }) => {
    const imc = (peso / Math.pow(altura, 2)).toFixed(2);
    switch (true) {
      case imc >= 40:
        return console.log(`Seu IMC é : ${imc}, você possui: ${obesidade[2]}`);
      case imc >= 35:
        return console.log(`Seu IMC é : ${imc}, você possui: ${obesidade[1]}`);
      case imc >= 30:
        return console.log(`Seu IMC é : ${imc}, você possui: ${obesidade[0]}`);
      default:
        return console.log(`Seu IMC é : ${imc}`);
    }
  })
  .catch((err) => {
    console.log(`Algum erro desconhecido ocorreu: ${err}`);
  });

// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9    	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV
