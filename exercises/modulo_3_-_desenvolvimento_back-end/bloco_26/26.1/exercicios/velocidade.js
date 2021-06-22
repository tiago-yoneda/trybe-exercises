const readline = require("readline-sync");

const velocidadeMedia = () => {
  const distancia = readline.questionInt("Qual a distancia percorrida em metros? ");
  const tempo = readline.questionFloat("Qual o tempo gasto em segundos? ");

  const vMedia = distancia / tempo;
  const vMedia2 = vMedia * 3.6;

  console.log(`A velocidade media foi de ${Math.round( vMedia * 100) / 100}m/s ou ${Math.round(vMedia2 * 100) / 100}km/h`);
};

velocidadeMedia();
