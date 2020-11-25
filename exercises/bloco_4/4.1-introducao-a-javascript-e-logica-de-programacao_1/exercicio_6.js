//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop -> diagonals

let nomeDaPeca= 'knIGht';

nomeDaPeca = nomeDaPeca.toLowerCase();

switch (nomeDaPeca) {
    case 'king':
        console.log(nomeDaPeca+' -> 1 cell, 8 directions');
        break;
    case 'queen':
        console.log(nomeDaPeca+' -> n cells, 8 directions');
        break;
    case 'rook':
        console.log(nomeDaPeca+' -> n cells, horizontal or vertical');
        break;
    case 'bishop':
        console.log(nomeDaPeca+' -> n cells, diagonals'); 
        break;
    case 'knight':
        console.log(nomeDaPeca+' -> L shape only');
        break;
    case 'pawn':
        console.log(nomeDaPeca+" -> 1 forward, 2 if it is it's first time moving, 1 diagonal when attacking");
        break;
    default:
        console.log("That's not a valid chess piece name")
}
