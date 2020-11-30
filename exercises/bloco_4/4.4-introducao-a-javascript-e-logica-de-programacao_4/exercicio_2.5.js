/*
https://github.com/tiago-yoneda

Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
*/



// funcao emprestada do exercicio 2.2
function retornaMax(array){
    let maximo = array[0];
    for (let num of array){
        if (num >= maximo){
            maximo = num;
        }
    }
    return array.indexOf(maximo);
}
// fim da funcao emprestada

let arrayDeTeste = [2, 3, 2, 5, 8, 2, 3];

// faz o array do teste virar um array unico para poder fazer a contagem
function returnUniqueArray (givenArray){
    
    let newArray = [];
    for (let item of givenArray){
        if (newArray.includes(item)){
        continue;
        }
        else {
        newArray.push(item);
        }
    }
    return newArray;
}

// conta o numero de vezes que um numero aparece em um array, retorna o contador
function countNumberRepetitions (number , array){
    let counter = 0;
    for ( let item of array){
        if (number == item){
            counter += 1;
        }
    }
    return counter;
}


// retorna um array do mesmo tamanho que o array de numeros unicos e contém o número de repetições de cada um dos numeros.
function countRepetitionsInArray (arrayToCount , sourceArray){
    let resultArray = []
    for ( let item of arrayToCount){
        result = countNumberRepetitions(item, sourceArray);
        resultArray.push(result);
    }
    return (resultArray);
}


// concatena as funções anteriores e com a função de maximo do outro exercicio, devolve o index de mais repetições que pode ser usado para identificar qual o numero repetiu mais vezes.
function returnMostRepetitions (mainArray){

    let uniqueArray = returnUniqueArray(mainArray);

    let uniqueCount = countRepetitionsInArray(uniqueArray, mainArray);

    let index = retornaMax(uniqueCount);

    return ([uniqueArray[index], uniqueCount[index]])
}

let resposta = returnMostRepetitions (arrayDeTeste);

console.log('O número que mais se repete é o', resposta[0],'e ele se repete',resposta[1],'vezes');
