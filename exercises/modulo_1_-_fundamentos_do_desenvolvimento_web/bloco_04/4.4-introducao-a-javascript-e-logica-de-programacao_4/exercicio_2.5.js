/*
https://github.com/tiago-yoneda

Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
*/

let arrayDeTeste = [2, 3, 2, 5, 8, 2, 3]

function returnMostRepetitions (array){
    let currentTop;
    let topCandidate = 0;

    for ( let idx in array){
        repetitionCounter = 0;

        for (let idx_2 in array){
            if (array[idx] === array[idx_2]){
                repetitionCounter += 1;
            }
        }

        if (repetitionCounter >= topCandidate){
            currentTop = array[idx];
            topCandidate = repetitionCounter;
        }
    }
    return currentTop;
}

let result = returnMostRepetitions(arrayDeTeste);

console.log(result);