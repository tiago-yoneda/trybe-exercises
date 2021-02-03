const {replaceAll, encode, decode} = require('./exercicio_parte_II');

const correspondencia = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

describe('Testes da função Encode', () => {
  it('Testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('Testa se as vogais estão sendo encodadas corretamente', () => {
    expect('12345').toEqual(encode('aeiou'));
  });
  it('Testa para ver se as outras letras não estão sendo convertidas', () => {
    const expected = '1bcd2fgh3jklmn4pqrst5vwxyz';
    const myTestString = 'abcdefghijklmnopqrstuvwxyz';
    expect(expected).toEqual(encode(myTestString));
  });
  it('Testa se o length do parametro é o mesmo do retornado', () => {
    const myString = 'banana caramelada com mais chocolate';
    expect(myString.length).toEqual(encode(myString).length);
  });
});

describe('Testes da função Decode', () => {
  it('Testa se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('Testa se as vogais estão sendo decodadas corretamente', () => {
    expect('aeiou').toEqual(decode('12345'));
  });
  it('Testa para ver se as outras letras não estão sendo convertidas', () => {
    const expected = 'abcdefghijklmnopqrstuvwxyz';
    const myTestString = '1bcd2fgh3jklmn4pqrst5vwxyz';
    expect(expected).toEqual(decode(myTestString));
  });
  it('Testa se o length do parametro é o mesmo do retornado', () => {
    const myString = 'b1n1n1 c1r1m2l1d1 c4m m13s ch4c4l1t2';
    expect(myString.length).toEqual(decode(myString).length);
  });
});