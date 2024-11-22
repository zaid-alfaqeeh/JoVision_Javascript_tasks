function enter() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  const data = { name, age, time: new Date() };
  alert(`Your name is: ${data.name} Your age is: ${data.age}  ${data.time.getHours()}:${data.time.getMinutes()}`)
}
