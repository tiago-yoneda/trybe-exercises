const fs = require('fs/promises');

// 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .

const createFiles = async () => {
  const myString = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  await myString.map((string, index) => {
    fs.writeFile(`file${index + 1}.txt`, string);
  });

  const myFiles = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
  ];

  const allText = await Promise.all(
    myFiles.map((file) => fs.readFile(file, 'utf8'))
  );

  const newText = allText.join(' ');

  await fs.writeFile('fileAll.txt', newText);
};

createFiles();
