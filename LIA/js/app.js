import { getLocation, getCurrentWeather } from "./api.js";

const btn = document.getElementById("load-weather");
const statusMessage = document.getElementById("status");

async function getData() {
  try {
    statusMessage.textContent = "Loading the weather data.";

    const location = await getLocation();
    console.log(location);
    const weatherData = await getCurrentWeather(
      location.latitude,
      location.longitude,
    );

    console.log(weatherData);

    statusMessage.textContent = "Weather loaded.";
  } catch (error) {
    statusMessage.textContent = error.message;
  }
}

btn.addEventListener("click", () => {
  getData();
});
