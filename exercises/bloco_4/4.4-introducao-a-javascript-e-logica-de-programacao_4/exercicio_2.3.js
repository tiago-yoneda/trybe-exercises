/*
https://github.com/tiago-yoneda

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .

*/

arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];

function retornaMax(array){
    let minimo = array[0];
    for (let num of array){
        if (num <= minimo){
            minimo = num;
        }
    }
    return array.indexOf(minimo);
}

let resultado = retornaMax(arrayDeTeste);
console.log('O índice do menor valor é',resultado);
