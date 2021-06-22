// 2 - Escreva um código para consumir a função construída no exercício anterior.
//  Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
//  Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
//  Utilize then e catch para manipular a Promise retornada pela função:
//    i.Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
//    ii. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const calcula = require('./exercicio1.js');

const generateNumber = () => {
  return Math.floor(Math.random() * 100 +1);
}

const generateParameterArray = () => {
  return Array.from({ length: 3 }).map(generateNumber);
};

const callCalcula = () => {

  const myArray = generateParameterArray();
  
  calcula(...myArray)
  .then((resultado) => console.log(resultado))
  .catch((err) => console.error(err.message));
}

callCalcula();