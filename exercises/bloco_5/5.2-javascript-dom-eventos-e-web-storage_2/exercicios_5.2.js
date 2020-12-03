/* 
https://github.com/tiago-yoneda

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
*/

// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let newH1 = document.createElement('h1');
newH1.innerText = 'Exercício 5.2';

let body = document.querySelector('body');
body.appendChild(newH1);

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
