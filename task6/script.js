function buttonA() {
  let numbers = [];
  for (let i = 0; i < 101; i++) {
    numbers.push(i);
  }
  let filterArray = numbers.filter((num) => num % 3 !== 0);
  console.log(filterArray);
}
function buttonB() {
  let array = [];
  for (let i = 0; i < 101; i++) {
    array.push(i);
  }
  for (let i = 101; i < 151; i++) {
    array.push(i);
  }
  console.log(array);
}
function buttonC() {
  let array = [];
  for (let i = 0; i < 101; i++) {
    array.push(i);
  }
  let newArray = array.map((e) => e + 3);
  console.log(newArray);
}
function buttonD() {
  let array = [];
  for (let i = 0; i < 101; i++) {
    array.push(i);
  }
  let newArray = array.slice(20, 41);
  console.log(newArray);
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function buttonE() {
  let numbers = [];
  for (let i = 0; i <= 100; i++) {
    numbers.push(i);
  }
  shuffleArray(numbers);

  console.log("Shuffled array:", numbers);

  numbers.sort((a, b) => b - a);

  console.log("Sorted  array:", numbers);
}
