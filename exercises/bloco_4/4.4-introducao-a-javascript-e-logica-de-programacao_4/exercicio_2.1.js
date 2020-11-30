/*
https://github.com/tiago-yoneda

Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false

*/

// Existe um método para separar uma string em array,
// split separa a string e coloca o '' como separador, se em branco, separa por letra.
let resultado;

function verificaPalindrome(palavra){
    palavra = palavra.toLowerCase();
    palavraReversa = palavra.split('').reverse().join('');
    return (palavra === palavraReversa);
}

resultado = verificaPalindrome("arara");
console.log('arara:',resultado);

resultado = verificaPalindrome('desenvolvimento');
console.log('desenvolvimento:', resultado);