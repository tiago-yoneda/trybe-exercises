/*
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contador = 0;

for ( let idx in numbers) {
    if (numbers[idx]%2 == 1){
        contador++;
    }
    else{
        continue;
    }
}
if (contador != 0){
    console.log('Temos '+contador+' números ímpares no array');
}
else {
    console.log('nenhum valor ímpar encontrado');
}