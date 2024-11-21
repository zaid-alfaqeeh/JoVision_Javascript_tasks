let button = document.getElementById("button");
function getinfo() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) =>button.innerHTML=data["ip"])
    .catch((error) => console.error("Error:", error));
}
