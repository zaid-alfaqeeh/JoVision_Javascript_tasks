let button = document.getElementById("button");
function getinfo() {
  fetch("https://api.ipify.org")
    .then((response) => response.json())
    .then((data) =>button.innerHTML=data["ip"])
    .catch((error) =>alert(error));
}
