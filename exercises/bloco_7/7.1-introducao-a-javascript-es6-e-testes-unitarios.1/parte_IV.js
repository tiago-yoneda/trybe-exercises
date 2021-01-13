// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
function replaceX (myString) {
  let mySentence = 'Tryber x aqui!'
  let index = mySentence.indexOf('x')

  if (index != -1) {
    mySentence = mySentence.replace('x', myString);
  }

  return mySentence;
}



console.log(replaceX('Tiago'))
console.log('');

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const mySkills = ['HTML', 'CSS', 'Javascript', 'Python', 'Calculus']

function joinStrings (name, stringDeSkills) {
  string1 = replaceX(name);

  skills = stringDeSkills.sort();

  console.log(`${string1} Minhas cinco principais habilidades são:
`)

  for (let index = 0 ; index < skills.length ; index += 1) {
    console.log(`${skills[index]};
`);
  }
}

joinStrings('Tiago', mySkills);