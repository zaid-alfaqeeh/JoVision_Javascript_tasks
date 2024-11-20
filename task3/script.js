function print() {
  let numbers = [];
  let sum = 0;
  for (let i = 1; i < 101; i++) {
if(!(i%2)){
    numbers.push(i);
    sum += i;
  }}
  console.log(`The sum of even numbers from 0 to 100 is = ${sum} `);
}
