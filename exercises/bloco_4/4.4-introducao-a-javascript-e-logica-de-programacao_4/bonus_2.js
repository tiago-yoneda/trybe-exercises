/*
https://github.com/tiago-yoneda

Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
Desafio - 16 + 8 = 214 ;
Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora .

*/

function sillyMath(num1, num2){

    //separa os numeros em strings para poder fazer a soma se 'carregar'
    num1 = num1.toString().split('').reverse() 
    num2 = num2.toString().split('').reverse()

    // garante que o num1 vai ser o ser o mais longo
    if (num2.length >= num1.length){
        tempNumber = num1;
        num1 = num2;
        num2 = tempNumber;
    }  

    //faz nota do tamanho para poder usar no metodo seguinte
    let tamanho = [Math.min(num1.length,num2.length), Math.max(num1.length,num2.length)]

    let newNum = [];

    //os proximos dois metodos fazem a soma dos numeros, sendo que o segundo somente acontece quando os numeros tem tamanhos diferentes.
    for ( let idx = 0; idx < tamanho[0]; idx+=1){
        newNum.push((parseInt(num1[idx],10)+parseInt(num2[idx],10)).toString())
    }

    for ( let idx = tamanho[0]; idx < tamanho[1]; idx+=1){
        newNum.push((parseInt(num1[idx],10).toString()));
    }

    // junta reverte e volta a ser int
    result = parseInt(newNum.reverse().join(''))
    return result;
}

// resultado "esperado" 4414
console.log(sillyMath(248,208));
