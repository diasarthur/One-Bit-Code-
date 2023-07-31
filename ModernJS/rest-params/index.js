function sum(param, ...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(1, 5, 5, 10))