const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o caminho do arquivo que deseja ler: ', (answer) => {
  fs.readFile(path.resolve(__dirname, answer), (err, file) => {
    if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);

    console.log(file.toString('utf8'));
    console.log('---------------------');
    console.log(
      `Arquivo de ${file.byteLength} bytes, lido em ${process.hrtime()} ms`,
    );

    rl.close();
  });
});
