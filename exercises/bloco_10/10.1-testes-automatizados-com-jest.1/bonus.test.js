const { searchEmployee} = require('./bonus')

describe('Testes para a função searchEmployee', () => {
  it('Teste para ver se a função existe', () => {
    expect(searchEmployee).not.toBeUndefined();
  });

  it('Teste para saber se a função joga um erro quando não colocamos os parametros' , () => {
    expect(() => { searchEmployee() }).toThrow(new Error('Por favor fornecer um ID ou informação valida'))
  });

  it('Teste para saber se retorna um erro quando não colocamos um ID valido', () => {
    expect(() => { searchEmployee ('123456', 'Frontend') }).toThrow(new Error('ID não Identificado'));
  });

  it('Teste para saber se retorna um erro quando o funcionario não possui a habilidade', () => {
    expect(() => { searchEmployee('9852-2-2', 'Hooks') }).toThrow(new Error('Informação Indisponível'));
  });

  it('Teste para saber se retorno está correto', () => {
    const expectedReply = ('Linda Bezos manja de Tailwind CSS');
    expect(expectedReply).toEqual(searchEmployee('1256-4','Tailwind CSS'));
  });
});