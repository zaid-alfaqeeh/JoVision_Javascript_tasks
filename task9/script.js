function getinfo() {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json()) 
      .then((data) => console.log(data)) 
      .catch((error) => console.error("Error:", error)); 
<<<<<<< HEAD:task9/script.js
  }
=======
  }
>>>>>>> a35aa5f5fc67b51890c2959c131da8839556c79b:task6/script.js
