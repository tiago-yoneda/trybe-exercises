/*
https://github.com/tiago-yoneda

3- Agora inverta o lado do triângulo. 
*/

let n = 5;

console.log('O número dado foi :'+n);
for ( let num = 0 ; num < n ; num+=1){
    console.log(' '.repeat(n-num-1)+'*'.repeat(num+1));
}
