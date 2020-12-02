        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

// exercicio 1
function changePText(){
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerText = 'Daqui a dois anos eu me vejo trabalhando em uma grande empresa ganhando pelo menos R$4.5k';
}
changePText();

// exercicio 2
function changeSquareColor(){
  let quadrado = document.getElementsByClassName('main-content')[0];
  quadrado.style.backgroundColor = 'rgb(76,164,109)';
}
changeSquareColor();

// exercicio 3
function changeCenterSquareColor(){
  let quadrado = document.getElementsByClassName('center-content')[0];
  quadrado.style.backgroundColor = 'white';
}
changeCenterSquareColor();

// exercicio 4
function correctTagH1(){
  let textoh1 = document.getElementsByTagName('h1')[0];
  textoh1.innerText = 'Sua carreira de sucesso em programação começa aqui. Agora.';
}
correctTagH1();