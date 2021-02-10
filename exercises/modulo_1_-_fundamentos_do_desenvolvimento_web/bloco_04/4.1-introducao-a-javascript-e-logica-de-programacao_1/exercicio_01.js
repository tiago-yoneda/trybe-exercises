// https://github.com/tiago-yoneda

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição
// Subtração
// Multiplicação
// Divisão
// Módulo

let a = -5 ;
let b = 7 ;

console.log('Levando em consideração que a = '+a+' e b = '+b+' temos que:\n')
// Adição
console.log('A soma é : '+(a+b));

// Subtração
console.log('A diferença é : '+(a-b));

// Multiplicação
console.log('O produto é : '+(a*b));

// Divisão
console.log('O resultado da divisão é : '+(a/b).toFixed(2));

// Modulo
console.log('O modulo de a é '+Math.abs(a)+' e o módulo de b é '+Math.abs(b));
