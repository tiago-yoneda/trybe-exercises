/*
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let arrayResultado = [];

for ( let i = 0 ; i < 25; i+=1) {
    arrayResultado.push(i+1);
}

console.log('o resto da divisão dos itens do array por 2 é:');
for ( let item in arrayResultado) {
    console.log(arrayResultado[item]+' -> '+arrayResultado[item]%2);
}