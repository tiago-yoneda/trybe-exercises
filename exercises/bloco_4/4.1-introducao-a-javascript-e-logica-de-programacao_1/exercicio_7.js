// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaDada = 89;

if ( notaDada < 0 || notaDada >100) {
    console.log(notaDada+' não é uma nota válida.')
}

else if (notaDada >= 90) {
    console.log(notaDada+' -> A');
}
else if (notaDada >= 80) {
    console.log(notaDada+' -> B');
}
else if (notaDada >= 70) {
    console.log(notaDada+' -> C');
}
else if (notaDada >= 60) {
    console.log(notaDada+' -> D');
}
else if (notaDada >= 50) {
    console.log(notaDada+' -> E');
}
else if (notaDada < 50) {
    console.log(notaDada+' -> F');
}