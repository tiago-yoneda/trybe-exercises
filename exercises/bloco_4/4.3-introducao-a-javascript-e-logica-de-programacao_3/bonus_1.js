/*
https://github.com/tiago-yoneda

5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Copiar
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/

// Como no enunciado podemos empre esperar que n será ímpar

let n = 33;

for ( let num = 0 ; num < n ; num+=1){
    if ( (num+1)%2 == 1 ){
        if (num == n-1) {
            console.log('*'.repeat(n));
        }
        else if (num != 0) {
            console.log(' '.repeat((n-num)/2)+'*'+' '.repeat(num-1)+'*');
        }
        else {
            console.log(' '.repeat((n-num)/2)+'*');
        }
    }
}

// funciona mas está bem feio.