/*
https://github.com/tiago-yoneda

2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****

*/

let n = 5;

console.log('O número dado foi :'+n);
for ( let num = 0 ; num < n ; num+=1){
    console.log('*'.repeat(num+1));
}