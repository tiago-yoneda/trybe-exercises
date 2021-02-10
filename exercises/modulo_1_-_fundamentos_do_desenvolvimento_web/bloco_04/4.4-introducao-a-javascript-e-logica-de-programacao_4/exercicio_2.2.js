/*
https://github.com/tiago-yoneda

Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .

*/
arrayDeTeste = [2, 3, 6, 7, 10, 1];

function retornaMax(array){
    let maximo = array[0];
    for (let num of array){
        if (num >= maximo){
            maximo = num;
        }
    }
    return array.indexOf(maximo);
}

let resultado = retornaMax(arrayDeTeste);
console.log('O índice do maior valor é',resultado);
