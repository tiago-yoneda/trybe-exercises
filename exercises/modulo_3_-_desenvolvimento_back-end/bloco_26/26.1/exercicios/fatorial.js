const readline = require("readline-sync");

const fatorial = () => {
  const n = readline.questionInt("Escolha um número: ");

  if( n < 0) {
    console.log("Por favor escolha um número positivo");
    return;
  }

  return console.log(`O fatorial de ${n} é ${calculaFatorial(n)}.`);
}

const calculaFatorial = (n) => n <= 1 ? 1 : calculaFatorial(n-1) * n;

fatorial();
