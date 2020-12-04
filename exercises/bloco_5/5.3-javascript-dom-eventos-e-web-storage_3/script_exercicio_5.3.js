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
  fridayButton.id = 'btn-fiday';
  document.querySelector('.buttons-container').appendChild(fridayButton);
}

criaHolidayButton('Sexta-feira')
