// Dada uma matriz de matrizes, transforme em uma única matriz.


const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
return arrays.reduce((returnArray, currentValue) => returnArray.concat(currentValue),[]);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
