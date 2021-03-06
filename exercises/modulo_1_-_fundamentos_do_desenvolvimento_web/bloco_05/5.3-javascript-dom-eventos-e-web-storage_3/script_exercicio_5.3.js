function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;

      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();

  /* Exercicio 1
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let holidayList = [24,25,31];
let sextouList = [4,11,18,25];

function adicionaDias(daysArray){
  for ( let item of daysArray){
    let day = document.createElement('li');
    day.className = 'day';
    day.innerText = item;

    if (holidayList.includes(item)) {
      day.classList.add('holiday');
    }

    if (sextouList.includes(item)){
     day.classList.add('friday');
    }
    document.querySelector('#days').appendChild(day);
  }
}

adicionaDias(dezDaysList)

/* Exercicio 2

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

*/
function criaHolidayButton(string){
  let holidayButton = document.createElement('button')
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(holidayButton);
}

criaHolidayButton('Feriados')

/* Exercicio 3

Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

*/
let holidayFlag = false;

function clickHoliday(){
  let color = '';
  if (!holidayFlag){
    bgColor = '#48cae4';
    txtColor = 'red';
  } else {
    bgColor = 'rgb(238,238,238)';
    txtColor = '#777';
  }
  let array = document.querySelectorAll('.holiday');

  for ( let item of array){
    item.style.backgroundColor = bgColor;
    item.style.color = txtColor;
  }
  holidayFlag = !holidayFlag;
}

document.querySelector('#btn-holiday').addEventListener('click',clickHoliday);

/* Exercicio 4

Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

*/

function criaFridayButton(string){
  let fridayButton = document.createElement('button')
  fridayButton.innerText = string;
  fridayButton.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(fridayButton);
}

criaFridayButton('Sexta-feira')

/* Exercicio 5

Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

*/

let fridayFlag = false;

function clickFriday(){
  let color = '';
  if (!fridayFlag){
    bgColor = '#48cae4';
    txtColor = 'red';
  } else {
    bgColor = 'rgb(238,238,238)';
    txtColor = '#777';
  }
  let array = document.querySelectorAll('.friday');

  for ( let item of array){
    item.style.backgroundColor = bgColor;
    item.style.color = txtColor;
  }
  fridayFlag = !fridayFlag;
}

document.querySelector('#btn-friday').addEventListener('click',clickFriday);

/* Exercicio 6

Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

*/

function zoomNoNumero(selfEvent){
selfEvent.target.style.fontSize='30px';
selfEvent.target.style.textShadow = '2px 2px 5px #48cae4';
}

function zoomOutNoNumero(selfEvent){
  selfEvent.target.style.fontSize='';
  selfEvent.target.style.textShadow = '';
}

function adicionaEventNosDias(){
  let days = document.querySelectorAll('.day')
  for ( let item of days){
    item.addEventListener('mouseover', zoomNoNumero);
    item.addEventListener('mouseout', zoomOutNoNumero);
  }
}

adicionaEventNosDias();

/* Exercicio 7

Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

*/

function createTask (string){
  let myTask = document.createElement('span');
  myTask.innerText = string;
  document.querySelector('.my-tasks').appendChild(myTask);
}

createTask('Cozinhar');

/* Exercicio 8

Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

*/

function adicionaLagenda (corString){
  let legenda = document.createElement('div');
  legenda.className = 'task';
  legenda.style.backgroundColor = corString;
  document.querySelector('.my-tasks').appendChild(legenda);
}

adicionaLagenda('#cbc0d3');

/* Exercicio 9

Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

let taskSelected = false;

function selecionaTarefa(self){
  if (!taskSelected){
    self.target.className = 'task-selected';
    self.target.innerText = '*';
  } else {
    self.target.className = 'task';
    self.target.innerText = '';
  }
  taskSelected = !taskSelected;
}

document.querySelector('.task').addEventListener('click',selecionaTarefa);

/* Exercicio 10

Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

*/

function markDay(self){
  let bgColor = document.querySelector('.task-selected').style.backgroundColor;
  let classList = self.target.classList;
  if (!classList.contains('marked_day')){
    self.target.classList.toggle('marked_day');
    self.target.style.backgroundColor = bgColor;
  } else {
    self.target.classList.toggle('marked_day')
    self.target.style.backgroundColor = '';
  }

}

function adicionaEventNosDias2(){
  let days = document.querySelectorAll('.day')
  for ( let item of days){
    item.addEventListener('click', markDay);
  }
}

adicionaEventNosDias2();

/* BONUS

Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
. keyCode Dica - Propriedade:

*/

document.querySelector('#task-input').value

function adicionaCompromisso(){
  let texto = document.querySelector('#task-input').value;
  if (texto !== ''){
    let compromisso = document.createElement('li')
    compromisso.innerText = texto;
    document.querySelector('.task-list').appendChild(compromisso);
  } else {
    alert('ERRO - não deixe o campo em branco');
  }
  document.querySelector('#task-input').value = '';
}

function enterCompromisso(self){
  let key = self.keyCode;
  if ( key === 13){
    let texto = document.querySelector('#task-input').value;
    if (texto !== ''){
      let compromisso = document.createElement('li')
      compromisso.innerText = texto;
      document.querySelector('.task-list').appendChild(compromisso);
    } else {
      alert('ERRO - não deixe o campo em branco');
    }
  document.querySelector('#task-input').value = '';
  }
}
// Enter NumpadEnter keycode = 13
document.querySelector('#btn-add').addEventListener('click',adicionaCompromisso);
document.querySelector('#task-input').addEventListener('keydown', enterCompromisso);