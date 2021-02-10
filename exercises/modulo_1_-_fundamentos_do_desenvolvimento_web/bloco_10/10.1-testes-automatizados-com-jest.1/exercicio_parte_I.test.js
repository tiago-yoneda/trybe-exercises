const sum = require('./exercicio_parte_I');

describe('Exercícios da Parte 1', () => {

  it('Verifica se a funçao sum retorna o valor de soma de a e b', () => {
    expect(7).toBe(sum(3, 4));
  });
  it('Verifica se a soma de 4 e 5 retorna o valor 9', () => {
    expect(9).toBe(sum(4, 5));
  });
  it('Verifica se a soma de zeros também da zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Verifica se a função da throw em um erro quando colocamos um elemento com string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Verifica se a mensagem de erro é "Parameters must be Numbers"', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('Parameters must be Numbers'));
  });
});