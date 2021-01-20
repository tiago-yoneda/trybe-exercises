// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');
const { count } = require('console');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];
const countLetterA = word => {
  let counter = 0;

  word.toLowerCase().split('').forEach((letter) => (letter === 'a') ? counter +=1 : counter += 0);

  return counter;
}

const containsA = _ => {
  // escreva seu código aqui
  return names.reduce((currentValue, nextString) => {
    currentValue += countLetterA(nextString);
    return currentValue;
  },0);
}

assert.deepStrictEqual(containsA(), 20);