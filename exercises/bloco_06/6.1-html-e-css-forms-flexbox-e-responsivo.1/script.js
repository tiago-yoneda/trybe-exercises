const estados = ['', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO']

function addEstadosBox(array) {

  for (let index = 0; index < array.length ; index += 1){
    const estado = document.createElement('option')
    estado.value = array[index];
    estado.innerText = array[index];
    document.querySelector('#estado').appendChild(estado);
  }

}

addEstadosBox(estados);

// // teste de data max
// function setTodayMax() {
// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth()+1; //January is 0!
// let yyyy = today.getFullYear();
//  if(dd<10){
//         dd='0'+dd
//     } 
//     if(mm<10){
//         mm='0'+mm
//     } 

// today = yyyy+'-'+mm+'-'+dd;
// document.querySelector('#date').setAttribute('max', today);
// }

// setTodayMax()