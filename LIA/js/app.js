const btn = document.getElementById("load-weather");
const statusMessage = document.getElementById("status");

btn.addEventListener("click", () => {
  statusMessage.textContent = "Loading the weather data.";
});

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
