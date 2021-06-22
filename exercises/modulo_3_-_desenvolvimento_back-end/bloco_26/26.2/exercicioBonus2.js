const fs = require('fs/promises');
const readline = require('readline-sync');

// 2 - Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
  // Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
  // Leia o arquivo.
  // Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
  // Caso o arquivo exista, solicite a palavra a ser substituída.
  // Solicite a nova palavra, que substituirá a palavra anterior.
  // Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
  // Pergunte o nome do arquivo de destino.
  // Salve o novo arquivo no caminho de destino.

const replaceText = async () => {
  const chosenName = readline.question("Escolha o nome do arquivo: ");

  const fileContent = await fs.readFile(`${chosenName}.txt`, 'utf8')
    .catch(() => {
      console.error("Arquivo inexistente");
      process.exit(1);
    });

  const newWord = readline.question("Qual palavra deseja usar? ");
  const oldWord = readline.question("Qual palavra deseja substituir? ");

  const newFileContent = fileContent.replace(new RegExp(oldWord, 'g'), newWord);

  console.log(`Substituindo ${oldWord} por ${newWord} temos: \n${newFileContent}`);

  const outputFile = readline.question("Escolha o nome do arquivo de saída: ");
  await fs.writeFile(`${outputFile}.txt`, newFileContent);
};

replaceText();