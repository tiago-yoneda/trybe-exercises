// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 13;
let b = 20;
let c = 200;

let maior;

if (a >= b){
    maior = a;
} 
else {
    maior = b;
}

if (maior >= c) {
    console.log("O maior número é: "+maior);
}
else{
    maior = c;
    console.log("O maior número é: "+maior);
}
