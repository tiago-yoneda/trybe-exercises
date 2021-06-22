// 1 - Crie uma função que recebe três parâmetros retorna uma Promise .
//  Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
//  Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const exercicio1 = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    // Esse método aceita colocar um número como string
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      return reject(new Error("Por favor, coloque apenas números"));
    };

    // outro método de verificar os parametros, mas não aceita strings que da pra converter pra número
    // const typeOfParameters = [num1, num2, num3].map((parameter) => typeof parameter);

    // if ( typeOfParameters.some((type) => type != "number")) {
    //   return reject(new Error("Por favor, coloque apenas números"));
    // }

    // Continuando
    const resultado = ( num1 + num2 ) * num3;

    if (resultado < 5000) {
      return reject(new Error("Valor muito baixo"));
    };

    return resolve(resultado);
  });
};

// teste
// exercicio1(1, 12, 10)
//   .then((result) => console.log(`O resultado é ${result}`))
//   .catch((err) => {
//     console.log(err.message);
//   });

module.exports = exercicio1;