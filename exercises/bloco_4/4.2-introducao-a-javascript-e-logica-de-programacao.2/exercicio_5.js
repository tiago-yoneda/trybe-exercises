/* 
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

for ( let idx in numbers) {
    if (numbers[idx] >= maior) {
        maior = numbers[idx];
    }
    else {
        continue;
    }
}
console.log('O maior número do array é :'+maior);