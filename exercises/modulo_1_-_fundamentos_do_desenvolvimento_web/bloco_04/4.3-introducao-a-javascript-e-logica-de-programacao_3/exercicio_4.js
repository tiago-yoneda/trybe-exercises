/* 
https://github.com/tiago-yoneda

4- Depois, faça uma pirâmide com n asteriscos de base:
*/

let n = 5;

for ( let num = 0 ; num < n ; num+=1){
    if ( (num+1)%2 == 1 ) {
        console.log(' '.repeat(Math.floor((n-num)/2))+'*'.repeat(num+1));
    }
}