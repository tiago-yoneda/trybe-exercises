module.exports = () => {
  const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const token = [];

  for (let i = 0; i < 16; i++) {
    const randomNumber = Math.floor(Math.random() * 15 + 1);
    token.push(myArray[randomNumber]);
  };

  return token.join("");
};
