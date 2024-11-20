function print() {
  let numbers = [];
  let sum = 0;
  for (let i = 1; i < 101; i++) {
    numbers.push(i);
    sum += i;
  }
  console.log(`the sum from 1 to 100 equal = ${sum} `);
}
