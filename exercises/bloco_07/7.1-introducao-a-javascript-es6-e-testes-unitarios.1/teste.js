const fatorial = inputFatorial => {
  let calcFatorial = 1;
  for (let i = inputFatorial; i != 0; i -= 1 ){
      calcFatorial = calcFatorial * i;
  }
  console.log(calcFatorial);
}

fatorial(4);