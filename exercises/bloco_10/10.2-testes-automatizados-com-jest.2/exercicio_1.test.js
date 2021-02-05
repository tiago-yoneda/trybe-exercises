const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('test to verify if the function uppercase is working as intended', () => {

  it('should return all letters as uppercase even if with spaces', done => {
    uppercase ( 'this is my test sentence', (callback) => {
      expect(callback).toEqual('THIS IS MY TEST SENTENCE');
      done();
    });
  });

  it('should let upper case letters unchanged', done => {
    uppercase ('The first letter should still be an uppercase "t"', (callback) => {
      expect(callback).toEqual('THE FIRST LETTER SHOULD STILL BE AN UPPERCASE "T"');
      done();
    });
  });
});