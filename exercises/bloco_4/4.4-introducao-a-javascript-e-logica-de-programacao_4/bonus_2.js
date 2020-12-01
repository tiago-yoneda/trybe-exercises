function sillyMath(num1, num2){

  num1 = num1.toString().split('').reverse() 
  num2 = num2.toString().split('').reverse()

  if (num2.length >= num1.length){
    tempNumber = num1;
    num1 = num2;
    num2 = tempNumber;
  }  

  let tamanho = [Math.min(num1.length,num2.length), Math.max(num1.length,num2.length)]

  let newNum = [];

  for ( let idx = 0; idx < tamanho[0]; idx+=1){
    newNum.push((parseInt(num1[idx],10)+parseInt(num2[idx],10)).toString())
  }

  for ( let idx = tamanho[0]; idx < tamanho[1]; idx+=1){
    newNum.push((parseInt(num1[idx],10).toString()));
  }

  result = parseInt(newNum.reverse().join(''))
  return result;
}


console.log(sillyMath(248,208));