function alertMessage() {
  alert("Loading weather report...");
}

function removeCookie() {
  var item = document.querySelector(".cookie");
  item.remove();
}

function convertTemperature() {
  var unit = document.getElementById("show-temperature").value;
  var temps = document.querySelectorAll(".temp");

  for (let i = 0; i < temps.length; i++) {
    let temp = parseInt(temps[i].textContent),
      newTemp = temp;

    switch (unit) {
      case "degree":
        newTemp = ((temp - 32) * 5) / 9;
        break;
      case "fahrenheit":
        newTemp = (temp * 9) / 5 + 32;
        break;
    }

    temps[i].textContent = Math.round(newTemp);
  }
}
