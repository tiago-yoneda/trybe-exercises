// 2 Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
//    Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
// 3 Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
// 4 Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// 5 Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const myAnswer = myNumber => {
  const answer = [];
  const numbers = [2,3,5,10];

  numbers.forEach((number)=>{
    answer.push(myNumber/number);
  });

  return answer;
}

const promise = new Promise ((resolve, reject) => {
  const myArray = [0,1,2,3,4,5,6,7,8,9];
  myArray.forEach((number,index) => {
    myArray[index] = Math.ceil(Math.random() * 50)**2;
  })
  const result = myArray.reduce((acc,curr) => acc + curr,0);

  if (result < 8000){
    return resolve (myAnswer(result));
  }
  reject (result);
})
  .then(numbers => numbers.reduce((acc,curr)=>acc+curr,0))
  .then(number=> console.log(Math.round(number*100)/100))
  .catch(number=>console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));

