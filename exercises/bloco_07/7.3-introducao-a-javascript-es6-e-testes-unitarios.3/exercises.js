// Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
// Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

// Exercicio 1  A função sum(a, b) retorna a soma do parâmetro a com o b

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b ;
}

// 1.1 - Teste se o retorno de sum(4, 5) é 9

let actual = sum(4, 5);

assert.strictEqual(actual, 9, 'O resultado deveria ser 9');

// 1.2 - Teste se o retorno de sum(0, 0) é 0

actual = sum(0, 0);

assert.strictEqual(actual, 0, 'O resultado deveria ser 0');

// 1.3 - Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)

// actual = sum(4, '5');

// 1.4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/);

// Exercicio 2  - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let myArray = [1, 2, 3, 4];
// 2.1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
let expectedArray = [ 1, 2, 4 ];
let actualArray = myRemove(myArray, 3);

assert.deepStrictEqual(actualArray, expectedArray);

// 2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(actualArray, [1, 2, 3, 4]);

// 2.3 - Verifique se o array passado por parâmetro não sofreu alterações

assert.deepStrictEqual(myArray, [1, 2, 3, 4]);

// 2.4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

actualArray = myRemove(myArray, 5);

assert.deepStrictEqual(actualArray, [1, 2, 3, 4]);

// Exercício 3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 3.1 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
expectedArray = [ 1, 2, 4 ];
actual = myRemoveWithoutCopy([1, 2, 3, 4], 3);

assert.deepStrictEqual(actual, expectedArray);

// 3.2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
let notExpectedArray = [ 1, 2, 3, 4 ];

assert.notDeepStrictEqual(actual, notExpectedArray);

// 3.3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações

myArray = [1, 2, 3, 4]

actual = myRemoveWithoutCopy(myArray, 3);

assert.notDeepStrictEqual(myArray, [1, 2, 3, 4])
// Isso quer dizer que o array inicial foi modificado pela função

// 3.4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
actual = myRemoveWithoutCopy([1, 2, 3, 4], 5);

assert.deepStrictEqual(actual , [1, 2, 3, 4]);

// Exercício 4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 4.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz(30), 'fizzbuzz');

// 4.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz(9), 'fizz');

// 4.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz(20), 'buzz');

// 4.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz(17), 17);

// 4.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz('xablau!'), false);

// 5.5 - Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual (obj1,obj2);

assert.notDeepStrictEqual (obj1,obj3);

assert.notDeepStrictEqual (obj2,obj3);