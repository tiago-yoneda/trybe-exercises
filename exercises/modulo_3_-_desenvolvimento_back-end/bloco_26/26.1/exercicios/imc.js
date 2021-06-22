const readline = require("readline-sync");

const calculoDeIMC = () => {
  const altura = readline.questionInt("Qual é a sua altura(cm)? ");
  const peso = readline.questionFloat("Qual é o seu peso(kg)? ");

  const IMC = peso / Math.pow( altura/100 , 2);

  console.log(`Seu IMC é ${Math.round(IMC*100)/100}`);
  switch (true) {
    case (IMC < 18.5):
      console.log("Abaixo do peso (magreza)");
      break;
    case (IMC < 24.9):
      console.log("Peso Normal");
      break;
    case (IMC < 29.9):
      console.log("Acima do Peso (sobrepeso)");
      break;
    case (IMC < 34.9):
      console.log("Obesidade Grau I");
      break;
    case (IMC < 39.9):
      console.log("Obesidade Grau II");
      break;
    case (IMC >= 40):
      console.log("Obesidade Graus III e IV");
      break;
    default:
      console.log("Nada a Declarar");
  }
}

calculoDeIMC();