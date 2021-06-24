// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

const numberType = (num) => {
  if(typeof num !== 'number') return "O valor deve ser um número";

  switch (true) {
    case (num > 0):
      return "Positivo";
    case (num < 0):
      return "Negativo";
    case (num == 0):
      return "Neutro";
    default:
      return;
  };
};

module.exports = numberType;

numberType("xablau");