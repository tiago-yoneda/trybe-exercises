function hydrate(string) {
  // extrai todos os digitos com o match / \d /g
  // transforma eles de string para numero com map(Number)

  let numbers = string.match(/\d+/g).map(Number);
  let soma = 0;
  for (let item of numbers) {
    soma += item;
  }
  if (soma > 1) {
    return (`${soma} copos de água`);
  }
  return (`${soma} copo de água`);
};

module.exports = hydrate;