/*
https://github.com/tiago-yoneda

6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

// Jeito porco de fazer, é mais na tentativa e erro.
// Foi melhor usar function só pra ficar mais facil de testar depois


function verifica_primo(number){
    let resultado = "";
    let raizDoNumber = Math.floor(Math.sqrt(number));

    if ( number <= 3 || number == 5){
        return true;
    }
    else{
        if ( number%2 == 0 || number%3 == 0 || number%5 == 0 ) {

            return false;
        }
        else if (raizDoNumber < 7 ){
            return true;
        }
        else {
            for (idx = 7; idx <= raizDoNumber ; idx+=2){
                if (number%idx == 0) {
                    return false;
                }
            }
        return true;
        }
    }
}

// Area de teste 

// teste individual
let numeroDesejado = 13;
let answer = verifica_primo(numeroDesejado);
console.log(numeroDesejado+' -> '+answer);


// Teste em Massa
// De acordo com https://www.dcode.fr/prime-number-pi-count, entre 1 e 1 000 000 temos 78498 numeros primos

/*
let numeros = 1000000;
let arrayDeNums = [];
let counter = 0 ;


for ( let num = 1 ; num <= numeros ; num+=1){
    resposta = verifica_primo(num);
    if (resposta == true) {
        counter +=1;
    }
}

console.log(counter-1);
*/