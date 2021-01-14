const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
console.log(`
Exercicio 1
`)

const addParameter = (object, key, value) => {
  object[key] = value;
  return object;
}

addParameter(lesson2, 'turno', 'manhã');

console.table(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log(`
Exercicio 2
`)

const listObjectKeys = object => {
  const list = Object.keys(object);

  return list;
}

console.log(listObjectKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.
console.log(`
Exercicio 3
`)
const objectSize = object => {
  const objSize = Object.keys(object).length;

  return objSize;
}

console.log (`
O tamanho do objeto é ${objectSize(lesson3)}
`)

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log(`
Exercicio 4
`)

const listObjectValues = object => {
  const list = Object.values(object);

  return list;
}

console.log(listObjectValues(lesson2));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
console.log(`
Exercicio 5
`)

const returnAllLessons = _ => {
  const allLessons = {}
  allLessons['lesson1'] = Object.assign({}, lesson1)
  allLessons['lesson2'] = Object.assign({}, lesson2)
  allLessons['lesson3'] = Object.assign({}, lesson3)

  return allLessons;
}

const allLessons = returnAllLessons();

console.log(allLessons);
/*
{
lesson1:
  { materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã' },
lesson2:
  { materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite' },
lesson3:
  { materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite' }
};
*/
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
console.log(`
Exercicio 6
`)

const numberOfStudents = (object) => {
  const objectKeys = Object.keys(object);

  let numberOfStudents = 0;

  for (item of objectKeys) {
    numberOfStudents += object[item].numeroEstudantes;
  }
  return numberOfStudents;
}

console.log(`O número total de estudantes é ${numberOfStudents(allLessons)}.`);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
console.log(`
Exercicio 7
`)

const getValueByNumber = (object, position) => {
  const objectKeys = Object.keys(object);

  return object[objectKeys[position]];
}

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
console.log(`
Exercicio 8
`)

const verifyPair = (object, key, value) => {
  const objectKeys = Object.keys(object);

  if (!objectKeys.includes(key)){
    return false;
  } else {
    return object[key] === value;
  }
}


console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
console.log(`
Exercicio Bonus 1
`)

console.table(allLessons)

const contaAlunosDaMateria = (object, materia) => {
  const objectKeys = Object.keys(object);
  let countStudents = 0;

  for ( item of objectKeys) {
    if (object[item].materia === materia) {
      countStudents += object[item].numeroEstudantes
    }
  }
  // console.log(`${countStudents} alunos assistiram às aulas de ${materia}.`)
  return countStudents;
}
const subject = 'Matemática'
console.log(`${contaAlunosDaMateria(allLessons, subject)} alunos assistiram às aulas de ${subject}`);

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
console.log(`
Exercicio Bonus 2
`)


const createReport = (object, proffessor) => {
  const objectKeys = Object.keys(object);
  let materias = [];

  for (item of objectKeys) {
    if ( object[item].professor === proffessor){
      if (!materias.includes(object[item].materia)){
        materias.push(object[item].materia);
      }

    }
  }
  const report = [];
  report.push(proffessor);
  report.push(materias);
  report.push(contaAlunosDaMateria(allLessons, materias[0]));

  console.log (`  professor: ${report[0]}
  aulas: ${report[1]}
  estudantes: ${report[2]}
`);
}

createReport(allLessons, 'Maria Clara')
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */