const readline = require("readline-sync");

const sorteio = () => {
  const numeroSorteado = Math.round(Math.random() * 10);

  const numeroEscolhido = readline.questionInt("Escolha um número inteiro de 0 e 10: ");

  if (numeroSorteado === numeroEscolhido) {
    console.log("Parabéns, número correto!!");
  } else {
    console.log(`Opa não foi dessa vez. O número era ${numeroSorteado}.`);
  }
};

sorteio();
