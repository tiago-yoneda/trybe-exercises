

const myFunctions = require('./exercicio_2')

jest.mock('./exercicio_2');


// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
describe('New implementation of all functions', () => {
  it('should change everything to lower case', () => {
    myFunctions.changeToUpperCase
    .mockImplementation(string => string.toLowerCase());

    expect(myFunctions.changeToUpperCase('TESTANDO')).toBe('testando');
    expect(myFunctions.changeToUpperCase).toHaveBeenCalled();
  });

  it('should only return the last letter of the string', () => {
    myFunctions.returnFirstLetter.mockImplementation(string => string[string.length - 1]);

    expect(myFunctions.returnFirstLetter('Ai caramba!')).toBe('!');
    expect(myFunctions.returnFirstLetter).toHaveBeenCalled();
  });

  it('should concatenate three strings instead of two', () => {
    myFunctions.concatStrings.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    expect(myFunctions.concatStrings('Oh ','My ','God!')).toBe('Oh My God!');
  });
});

//  Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

describe('Using the new implementation of the first function and changing it back to normal', () => {
  it('should use the same implementation then the restored one.', () => {

    expect(myFunctions.changeToUpperCase('TestanDO, novaMenTe!')).toBe('testando, novamente!');

    myFunctions.changeToUpperCase.mockReset();
    expect(myFunctions.changeToUpperCase('teste')).toBe(undefined);

  })
})