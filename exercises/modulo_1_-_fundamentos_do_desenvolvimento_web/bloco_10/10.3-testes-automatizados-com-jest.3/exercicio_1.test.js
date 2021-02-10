const myFunction = require('./exercicio_1');


// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

describe('Testing randomIn100 function', () => {
  it('tests if the function randomIn100 have been called',() => {
    myFunction.randomIn100 = jest
      .fn()
      .mockReturnValue(10);

    myFunction.randomIn100();
    expect(myFunction.randomIn100).toHaveBeenCalled();
    expect(myFunction.randomIn100).toHaveBeenCalledTimes(1);
    expect(myFunction.randomIn100()).toBe(10);
    expect(myFunction.randomIn100).toHaveBeenCalledTimes(2);
  });
});

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
describe('Testing another implementation of randomIn100 function', () => {

  it('tests a new implementation', () => {
    myFunction.randomIn100
      .mockReset()
      .mockImplementation((a, b) => a / b);

    expect(myFunction.randomIn100).not.toHaveBeenCalled();
    expect(myFunction.randomIn100(10,2)).toBe(5);
    expect(myFunction.randomIn100).toHaveBeenCalledTimes(1);
  });
});

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
describe('Testing yet another implementation of randomIn100 function', () => {
  it('tests another new implementation', () => {
    myFunction.randomIn100
      .mockReset()
      .mockImplementation((a, b, c) => a * b * c);

      expect(myFunction.randomIn100).not.toHaveBeenCalled();
      expect(myFunction.randomIn100(2, 3, 4)).toBe(24);
      expect(myFunction.randomIn100).toHaveBeenCalledTimes(1);
  });

  it('should mess up and do another implementation', () => {
    myFunction.randomIn100
    .mockReset()
    .mockImplementation((a) => a * 2);

    expect(myFunction.randomIn100).not.toHaveBeenCalled();
    expect(myFunction.randomIn100(114)).toBe(228);
    expect(myFunction.randomIn100).toHaveBeenCalledTimes(1);
  });
});