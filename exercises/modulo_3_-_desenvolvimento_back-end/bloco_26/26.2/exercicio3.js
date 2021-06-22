// 3 - Reescreva o código do exercício anterior para que utilize async/await .

const calcula = require('./exercicio1.js');

const generateNumber = () => {
  return Math.floor(Math.random() * 100 +1);
}

const generateParameterArray = () => {
  return Array.from({ length: 3 }).map(generateNumber);
};

const callCalculaAsync = async () => {

  const myArray = generateParameterArray();
  
  try {
    const result = await calcula(...myArray);
    console.log(`O resultado é ${result}`);
  } catch (e) {
    console.error(e.message);
  }
}

callCalculaAsync();