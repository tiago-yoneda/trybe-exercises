const math = require('./math');
jest.mock('./math');

const {somar, subtrair, divir , multiplicar} = math;

describe('Mock da função subtrair', () =>{

  it('should test the substract function', () => {

    subtrair.mockImplementation((a, b) => a - b);

    subtrair(7, 5);

    expect(subtrair).toHaveBeenCalled();
    expect(subtrair).toHaveBeenCalledTimes(1);
  });
});

describe('Testes da função multiplicar' , () => {
  it('should make math.multiplicar return 10', ()=> {

    multiplicar(2,6);
    expect(multiplicar).toHaveBeenCalled();
    expect(multiplicar).toHaveBeenCalledTimes(1);

    multiplicar.mockReturnValueOnce(10);
    expect(multiplicar()).toBe(10);
    expect(multiplicar).toHaveBeenCalledTimes(2)
  })
});

describe('Testes da função somar', () => {
  it('test toHaveBeenCalled, toHaveBeenCalledWith e toBe', () => {

    somar.mockImplementation((a,b) => a +b);

    expect(somar(2,9)).toBe(11);
    expect(somar).toHaveBeenCalled();
    expect(somar).toHaveBeenCalledTimes(1);
  });
});


describe('Testes da função dividir', () => {
  it('should test the function "math dividir"', () => {
    math.dividir
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5)
    expect(math.dividir).toHaveBeenCalledTimes(0);
    expect(math.dividir()).toBe(2);
    expect(math.dividir()).toBe(5);
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
  });
});

