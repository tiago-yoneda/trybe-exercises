const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();
  const newArray = [];

  array.forEach(element => {
    const newObject = {};
    newObject.tech = element;
    newObject.name = name;
    newArray.push(newObject);
  });
  return newArray;
}

module.exports = techList;