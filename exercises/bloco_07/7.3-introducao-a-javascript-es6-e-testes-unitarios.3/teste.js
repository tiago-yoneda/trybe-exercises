const somatorio = (number) => (number === 1) ? 1 : number + somatorio(number-1);

console.log(somatorio(905));