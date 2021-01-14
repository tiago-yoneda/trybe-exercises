const myFatorial = number => (number === 1 || number === 0) ? 1 : number * myFatorial(number - 1);

console.log(myFatorial(5))