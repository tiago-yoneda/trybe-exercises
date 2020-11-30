/*
https://github.com/tiago-yoneda

Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .

*/

const arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornaMaisCaracteres (array){
    maisCaracteres = array[0];
    
    for ( let name of arrayDeTeste){
        if (name.length >= maisCaracteres.length){
            maisCaracteres = name;
        }
    }
    return maisCaracteres;
}

let resultado = retornaMaisCaracteres(arrayDeTeste);
console.log('O nome com mais caracteres é:',resultado);