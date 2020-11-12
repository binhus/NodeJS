/*
Exercício 1: Crie uma função que retorna uma promise.
Essa função deve receber três parâmetros, fazendo o tratamento de erro caso algum dos parâmetros não seja um número.
Caso algum dos parâmetros não seja do tipo Number, rejeite a promise e imprima na tela a frase "Digite apenas números".
Caso todos os parâmetros sejam do tipo Number, você deve somar os dois primeiros.
Depois, pegue o resultado da soma e multiplique pelo terceiro parâmetro, e caso seja menor que 50, rejeite a promise com a mensagem "Valor muito baixo".
Caso contrário, aceite a promise, imprimindo o resultado da multiplicação na tela. 
*/

const handlingNumber = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof param1 !== 'number' ||
      typeof param2 != 'number' ||
      typeof param3 != 'number'
    ) {
      return reject(new Error('Digite apenas números'));
    }
    resolve(param1 + param2);
  }).then((result) => {
    if (result * param3 < 50) {
      return Promise.reject(new Error('Valor muito baixo'));
    }
    return Promise.resolve(console.log(result * param3));
  });
};

handlingNumber(1, 2, 3);
