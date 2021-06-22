const readline = require("readline-sync");

const fibonacci = () => {
  const n = readline.questionInt("Escolha a n-ésima posição da sequência de fibonnaci: ");

  if( n <= 0) {
    console.log("Por favor escolha um número maior que zero");
    return;
  };

  return console.log(`O número na posição ${n} da sequência de fibonacci é ${calculaFibonacci(n)}.`);

}

const calculaFibonacci = (n) => {
  if (n === 1 || n === 2) return 1 ;

  return (calculaFibonacci(n -1)+calculaFibonacci(n-2));
}

fibonacci();