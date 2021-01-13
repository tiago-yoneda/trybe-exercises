/*
https://github.com/tiago-yoneda

Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be") ;
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan") ;
Retorno esperado: false

*/

function verificaFimPalavra(word, ending){
    let index = word.length - ending.length;
    
    word = word.toLowerCase();
    ending = ending.toLowerCase();
    
    let substring = word.substring(index);
    
    if (substring === ending){
        return true;
    }
    else {
        return false
    }
}


teste1 = verificaFimPalavra("trybe", "be");
console.log(teste1);

teste2 = verificaFimPalavra("joaofernando", "fernan");
console.log(teste2);