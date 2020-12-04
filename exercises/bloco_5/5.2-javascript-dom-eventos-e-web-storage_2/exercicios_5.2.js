/*
https://github.com/tiago-yoneda

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
*/

// Parte 1
// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let primeiraH1 = document.createElement('h1');
primeiraH1.innerText = 'Exercício 5.2';

let body = document.querySelector('body');
body.appendChild(primeiraH1);

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement('div');
mainContent.className = 'main-content';
body.appendChild(mainContent);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2 ;
let centerContent = document.createElement('div');
centerContent.className = 'center-content';
document.querySelector('.main-content').appendChild(centerContent);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let pFilhaDaCenterContent = document.createElement('p');
pFilhaDaCenterContent.innerText = 'Exercicio 4, esse <p> é filho do center-content.'
document.querySelector('.center-content').appendChild(pFilhaDaCenterContent);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
leftContent.className = 'left-content';
document.querySelector('.main-content').appendChild(leftContent);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
rightContent.className = 'right-content';
document.querySelector('.main-content').appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let smallImage = document.createElement('img');
smallImage.className = 'small-image';
smallImage.setAttribute('src','https://picsum.photos/200');
document.querySelector('.left-content').append(smallImage);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let arrayDeNumeros = ['um' , 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
let unorderedList = document.createElement('ul');

document.querySelector('.right-content').appendChild(unorderedList);

for (let item of arrayDeNumeros){
  let listItem = document.createElement('li');
  listItem.innerText = item;
  document.querySelector('ul').appendChild(listItem);
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for ( let index = 0; index < 3; index += 1){
  let newH3 = document.createElement('h3');
  document.querySelector('.main-content').appendChild(newH3);
}


// Parte 2
// 1 - Adicione a classe title na tag h1 criada;
primeiraH1.className = 'title';

// - Adicione a classe description nas 3 tags h3 criadas;
let arrayDeH3 = document.getElementsByTagName('h3');
for ( let item of arrayDeH3){
  item.className = 'description';
}

// 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
document.querySelector('.main-content').removeChild(document.querySelector('.main-content .left-content'))