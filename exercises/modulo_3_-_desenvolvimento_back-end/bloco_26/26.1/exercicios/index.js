const readline = require("readline-sync");
// console.log("Hello world! Esse é meu primeiro exercicio de script em nodeJS");

const myScripts = [
  { name: "Calcular IMC", path: "./imc.js" },
  { name: "Calcular Velocidade média", path: "./velocidade.js"},
  { name: "Jogo de Adivinhação", path: "./sorteio.js"},
  { name: "Calcular Fatorial", path: "./fatorial.js" },
  { name: "n-ésima posição de Fibonacci\n", path: "./fibonacci.js" }
];

let texto = myScripts
  .map((script, index) => `${index + 1} - ${script.name}`);


texto.unshift("Escolha o número do script que você quer rodar");

texto = texto.join("\n");

const numeroEscolhido = readline.questionInt(texto) - 1;

const scriptEscolhido = myScripts[numeroEscolhido];

if(!scriptEscolhido) return console.log("ERRO! Número invalido. ");

require(scriptEscolhido.path);