document.getElementById("button").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  if(name){
  fetch(`https://api.agify.io?name=${name}`)
    .then((response) => response.json())
    .then((data) => alert(`Your name is: ${name} Your age is: ${data.age}`));
  }
  else 
  alert("enter your name")
});
