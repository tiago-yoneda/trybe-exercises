/*
https://github.com/tiago-yoneda

Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

*/

function somaNumeros(num){
    let somaDeN = (1+num)*num/2;
    return somaDeN;
}

let result = somaNumeros(5);
console.log(result)