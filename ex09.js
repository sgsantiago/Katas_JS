const numbers = [1, 2, 3, 5, 45, 37, 58, 87, 99];

function sumAll(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    sum += element;
  }
  return sum;
}

console.log(sumAll(numbers));
