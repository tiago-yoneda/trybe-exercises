const { expect } = require("chai");

const numberType = require("./exercicio1.js");
const saveToFile = require("./exercicio5.js");

// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

describe("Testes para a função de verificar o número", () => {
  describe("Leu o input como número", () => {
    it("Should return 'Positivo'", () => {
      const result = numberType(7);

      expect(result).to.be.equals("Positivo");
    });

    it("Should return 'Negativo'", () => {
      const result = numberType(-8);

      expect(result).to.be.equals("Negativo");
    });

    it("Should return 'Neutro'", () => {
      const result = numberType(0);

      expect(result).to.be.equals("Neutro");
    });
  });

  // Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
  // Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
  // Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
  // Implemente em sua função tal validação para que o teste passe.

  describe("Leu o input como string", () => {
    it("Should be a number", () => {
      const result = numberType("xablau");

      expect(result).to.be.equals('O valor deve ser um número');
    });
  })
});

// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.
const fs = require("fs");
const sinon = require("sinon");

describe("Testes para a funcao de escrever em um arquivo", () => {
  const fileName = "meuArquivoParaTeste";
  const fileContent = "And than she shouted: Exploooosion~!!!";

  before(() => {
    sinon.stub(fs, 'writeFileSync').returns("OK");
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe("Arquivo criado com sucesso", () => {
    it("the result should be a string", () => {
      const result = saveToFile(fileName, fileContent);

      expect(result).to.be.a("string");
    });

    it("should return 'OK'", () => {
      const result = saveToFile(fileName, fileContent);

      expect(result).to.be.equals("OK");
    });
  });
});
