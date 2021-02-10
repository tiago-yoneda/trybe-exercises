// Praticando TDD
// Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, você escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos passo a passo!
// Escrevendo código para testes
// Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código :
// Copie os testes já implementadas e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.

// Exercicio 1 - Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');

const addOne = array => {
  const myArray = [];

  for (index in array){
    myArray.push(array[index]+1);
  }

  return myArray
}

const myArray = [31, 57, 12, 5];
let unchanged = [31, 57, 12, 5];
let expected = [32, 58, 13, 6];
let output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// Exercício 2 - Escreva a função wordLengths para passar nos testes já implementados.

const wordLengths = (array) =>{
  const myArray = [];

  for (item of array) {
    myArray.push(item.length);
  }
  return myArray;
}

let words = ['sun', 'potato', 'roundabout', 'pizza'];
expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// Exercício 3 - Escreva a função sumAllNumbers para passar nos testes já implementados.

const sumAllNumbers = (array) => {
  let sum = 0

  for (item of array) {
    sum += item;
  }

  return sum;
}


const numbers = [9, 23, 10, 3, 8];
expected = 53;
output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// Exercício 4 - Escreva a função findTheNeedle para passar nos testes já implementados.

const findTheNeedle = (array, word) => {
  return array.indexOf(word);
}

words = ['house', 'train', 'slide', 'needle', 'book'];
expected = 3;
output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);

// Reescrevendo funções utilizando TDD
// Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!

// Exercicio 1 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greetPeople = (people) => {
  let greeting = [];

  for (const person of people) {
    greeting.push(`Hello ${person}`)
  }
  return greeting;
};

let parameter = ['Irina', 'Ashleigh', 'Elsa']
result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

actual = greetPeople(parameter)

assert.deepStrictEqual(actual, result)

// Exercício2 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const removeVowels = (word) => {
  const results = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 1;

  for (item of word) {
    if (vowels.includes(item)){
      word = word.replace(item, counter);
      counter += 1;
    }
  }
  return word;
}

parameter = 'Dayane';
result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result);

// Exercício 3 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greaterThanTen = (array) => {
  let results = [];

  for (item of array) {
    if (item > 10) {
      results.push(item) ;
    }
  }
  return results;
};

parameter = [4, 10, 32, 9, 21];
result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);

// Exercício 4 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

function secondThirdSmallest(array) {
  const orderedArray = array.sort(function(a,b){return a-b})
  
  const answer = [];

  answer.push(orderedArray[1]);
  answer.push(orderedArray[2]);
  return answer;
};

parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result)