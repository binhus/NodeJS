const readline = require('readline-sync');

const altura = readline.questionFloat('Digite sua altura: ');
const peso = readline.questionFloat('Digite seu peso: ');

const imc = (peso / Math.pow(altura, 2)).toFixed(2);

console.log(`Seu IMC é : ${imc}`);
