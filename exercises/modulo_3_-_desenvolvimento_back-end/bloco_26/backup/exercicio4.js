const fs = require('fs/promises');

const myFile = 'simpsons.json';

// 4 - Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

//  Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const readSimpsonsFile = () => {
  fs.readFile(myFile, 'utf8')
    .then((response) => JSON.parse(response))
    .then((data) => {
      data.map( ({id, name}) => console.log(`${id} - ${name}`));
    })
    .catch((err) => {
      console.error(`Erro: ${err.message}`);
    })
};

// readSimpsonsFile();

//  Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const searchById = async (myId) => {

  const simpsonsArray = await fs.readFile(myFile)
    .then((data) => JSON.parse(data))
    .catch((err) => console.error(err.message));

  return new Promise((resolve, reject) => {

    const chosenSimpson = simpsonsArray.find(({ id }) => id == myId);

    if (!chosenSimpson)  reject(Error("Id não encontrado"));

    resolve(`${chosenSimpson.name}`)
  })
    .then(data => console.log(`O nome do personagem é ${data}`))
    .catch((err) => console.error(err.message));
}

// searchById(2);


  //  Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
  const alteraById = async () => {
    let simpsonsArray = await fs.readFile(myFile)
      .then((data) => JSON.parse(data))
      .catch((err) => console.error(err.message));
      
    simpsonsArray = simpsonsArray.filter((simpson) => simpson.id != 6 && simpson.id != 10);
    simpsonsArray = JSON.stringify(simpsonsArray);

    fs.writeFile('simpsonsModified.json', simpsonsArray);
  }

  // alteraById();


//  Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

const createFamily = async () => {
  let simpsonsArray = await fs.readFile(myFile)
  .then((data) => JSON.parse(data))
  .catch((err) => console.error(err.message));

  simpsonsArray = simpsonsArray.filter(({ id }) => id <= 4);
  
  fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsonsArray));
}

// createFamily();

//  Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

const addNelson = async () => {
  const simpsonsArray = await fs.readFile(myFile)
    .then((data) => JSON.parse(data))
    .catch((err) => console.error(err.message));

  const nelson = simpsonsArray.find(({ name }) => name === "Nelson Muntz");

  const familyArray = await fs.readFile("simpsonsFamily.json")
    .then((data) => JSON.parse(data))
    .catch((err) => console.error(err.message));

  familyArray.push(nelson);

  fs.writeFile("simpsonsFamily.json", JSON.stringify(familyArray));
}

// addNelson();

//  Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
//

const replaceNelson = async () => {
  const simpsonsArray = await fs.readFile(myFile)
    .then((data) => JSON.parse(data))
    .catch((err) => console.error(err.message));

  const maggie = simpsonsArray.find(({ name }) => name === "Maggie Simpson");

  const familyArray = await fs.readFile("simpsonsFamily.json")
    .then((data) => JSON.parse(data))
    .catch((err) => console.error(err.message));

  const index = familyArray.findIndex(({ name }) => name === "Nelson Muntz");
  familyArray[index] = maggie;

  fs.writeFile("simpsonsFamily.json", JSON.stringify(familyArray));
}

replaceNelson();