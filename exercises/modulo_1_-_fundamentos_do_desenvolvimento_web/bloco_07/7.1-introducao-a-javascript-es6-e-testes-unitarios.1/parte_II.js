// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.

const fatorialDoNum = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num *fatorialDoNum(num-1)
}

console.log()
console.log('fatorial reformulado')
const meuFatorial = num => num === 0 || num === 1 ? 1 : num * meuFatorial(num-1);
console.log()

const myArray = [1,2,3,4,5,6,7,8,9,10,12,13,14,15]

for (let index = 0 ; index < myArray.length; index += 1){
  console.log(`O fatorial do número ${myArray[index]} é ${fatorialDoNum(myArray[index])}`);
}

console.log('');

// Crie uma função que receba uma frase e retorne qual a maior palavra.
function longestWord (sentence){
  const wordArray = sentence.split(' ');
  let position = 0;
  let longest = 0;

  for (let index = 0; index < wordArray.length; index += 1 ){
    if ( wordArray[index].length >= longest) {
      longest = wordArray[index].length;
      position = index;
    }
  }
  return `A maior palavra da frase é '${wordArray[position]}'`
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
