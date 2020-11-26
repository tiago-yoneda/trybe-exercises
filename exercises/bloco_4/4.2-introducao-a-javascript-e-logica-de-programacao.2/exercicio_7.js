/*
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0];

for ( let idx in numbers) {
    if (numbers[idx] <= menor) {
        menor = numbers[idx];
    }
    else {
        continue;
    }
}
console.log('O menor número do array é :'+menor);