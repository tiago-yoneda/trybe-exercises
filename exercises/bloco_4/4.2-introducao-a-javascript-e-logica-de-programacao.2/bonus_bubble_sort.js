/*
Ordene o array numbers em ordem crescente e imprima seus valores;
Ordene o array numbers em ordem decrescente e imprima seus valores;
Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ordenar em ordem crescente

let auxiliar;
console.log("Crescente")
for ( let i = 1; i < numbers.length; i++){
    for ( let j = 0 ; j < i ; j++){
        if (numbers[j] > numbers[i]){
            auxiliar = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = auxiliar;
        }
    }
}

console.log(numbers);


// ordernar de forma decrescente

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("\nDecrescente")
for ( let i = 1; i < numbers.length; i++){
    for ( let j = 0 ; j < i ; j++){
        if (numbers[j] < numbers[i]){
            auxiliar = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = auxiliar;
        }
    }
}
console.log(numbers);

// fazendo novo array
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

console.log("\nCriando o novo array")
for ( let idx = 0 ; idx < numbers.length ; idx++){
    if (idx == numbers.length-1){
        newArray.push(numbers[idx]*2)
    }
    else{
        newArray.push(numbers[idx]*numbers[idx+1]);
    }
}
console.log(newArray);
