/*
https://github.com/tiago-yoneda

(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

*/

function romanoParaNumeral (numRomano){

  const listaNumRom = ['CM','M','CD','D','XC','C','XL','L','IX','X','IV','V','I'];
  const correspRom = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index = 0;
  let num = 0;
  // faz uma varredura no string fornecido para cada combinacao de numero romano
  for (let romNum in listaNumRom){

    // reponsavel por encontrar o a combinacao da lista no numero fornecido
    index = numRomano.indexOf(listaNumRom[romNum]);

    // sai do loop quando não tiver mais nenhum match
    while (index != -1){

      // faz a soma para sabermos o resultado final
      num += correspRom[romNum];
  
      // substitui o a combinação encontrada por '-' para evitar contar duas vezes
      numRomano = numRomano.replace(listaNumRom[romNum],"-");
      
      // procura pela proxima combinação
      index = numRomano.indexOf(listaNumRom[romNum]);

    }
  }
  return num;
}

stringTest = 'MCMLXXXIV';
console.log(romanoParaNumeral(stringTest));