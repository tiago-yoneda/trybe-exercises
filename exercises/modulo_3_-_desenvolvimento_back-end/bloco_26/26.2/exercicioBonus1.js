const fs = require('fs/promises');
const readline = require('readline-sync');

// 1 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
//  Pergunte à pessoa usuária qual arquivo ela deseja ler.
//  Leia o arquivo indicado.
//  Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
//  Caso o arquivo exista, escreva seu conteúdo na tela.

const choseFile = async () => {
  const chosenName = readline.question("Escolha o nome do arquivo: ");

  await fs.readFile(`${chosenName}.txt`, 'utf8')
    .then((content) => console.log(`Conteúdo do arquivo ${chosenName}.txt\n\n${content}`))
    .catch(() => {
      console.error("Arquivo inexistente");
      process.exit(1);
    });
};

choseFile();