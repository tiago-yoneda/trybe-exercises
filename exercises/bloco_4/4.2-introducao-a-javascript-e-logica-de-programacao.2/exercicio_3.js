/* 
https://github.com/tiago-yoneda/trybe-exercises

Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for ( let idx in numbers ){
    soma += numbers[idx];
}

let mediaAritmetica = soma/numbers.length;

console.log('A media aritmetica dos elementos do array é :'+mediaAritmetica);
