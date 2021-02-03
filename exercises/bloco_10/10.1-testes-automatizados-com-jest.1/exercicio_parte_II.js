const correspondencia = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

const replaceAll = (string, busca, troca) => {
  let newString = string.split(busca).join(troca);
  return newString;
}

// Desafio 9
const encode = (string) => {
  for (let item in correspondencia) {
    string = replaceAll(string, item, correspondencia[item]);
  }
  return string;
}

const decode = (string) => {
  for (let item in correspondencia) {
    string = replaceAll(string, correspondencia[item], item);
  }
  return string;
}

module.exports = {replaceAll, encode, decode};