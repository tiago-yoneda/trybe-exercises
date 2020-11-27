/*
https://github.com/tiago-yoneda

1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
*****

*/
let n = 5;

console.log('O número dado foi :'+n);
for ( let num = 0 ; num < n ; num+=1){
    console.log('*'.repeat(n));
}