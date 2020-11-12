/*
Exercício 2: Agora, pegue a função do exercício 1 e refatore ela para async/await.
Sua função tem que funcionar exatamente igual a do exercício 1, mas você não pode utilizar nenhum .then em seu código.
*/

const handlingNumber = (param1, param2, param3) => {
  if (
    typeof param1 !== 'number' ||
    typeof param2 != 'number' ||
    typeof param3 != 'number'
  ) {
    return Promise.reject(new Error('Digite apenas números'));
  }
  const sum = param1 + param2;
  const mult = sum * param3;
  if (mult < 50) {
    return Promise.reject(new Error('Valor muito baixo'));
  }
  return console.log(mult);
};

handlingNumber(1, 2, 3);
