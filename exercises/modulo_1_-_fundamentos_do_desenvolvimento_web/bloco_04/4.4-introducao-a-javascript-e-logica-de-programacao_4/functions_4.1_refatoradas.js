let a ;
let b ;

// função soma
function soma(num1, num2) {
    return (num1+num2);
}

// funcao subtração
function subtracao(num1, num2) {
    return (num1-num2);
}

// funcao multiplicacao
function multiplicacao(num1, num2) {
    return (num1*num2);
}

// funcao divisao
function divisao(num1, num2) {
    return (num1/num2);
}
console.log('Soma')
a = Math.ceil(Math.random()*25);
b = Math.ceil(Math.random()*25);
console.log('a:', a ,' e b:', b );
console.log('Resultado:',soma(a,b));

console.log('\nSubtração')
a = Math.ceil(Math.random()*25);
b = Math.ceil(Math.random()*25);
console.log('a:', a ,' e b:', b );
console.log('Resultado:',subtracao(a,b));

console.log('\nMultiplicação')
a = Math.ceil(Math.random()*25);
b = Math.ceil(Math.random()*25);
console.log('a:', a ,' e b:', b );
console.log('Resultado:', multiplicacao(a,b));

console.log('\nDivisão')
a = Math.ceil(Math.random()*25);
b = Math.ceil(Math.random()*25);
console.log('a:', a ,' e b:', b );
console.log('Resultado:', divisao(a,b));
