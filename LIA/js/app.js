import { getLocation, getCurrentWeather } from "./api.js";
import { renderWeather } from "./ui.js";
import { CurrentWeather } from "./currentWeather.js";

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
    const weather = new CurrentWeather(
      weatherData.current.temperature_2m,
      weatherData.current.relative_humidity_2m,
      weatherData.current.apparent_temperature,
      weatherData.current.precipitation,
      weatherData.current.wind_speed_10m,
      weatherData.current.wind_gusts_10m,
      weatherData.is_day,
      weatherData.rain,
      weatherData.showers,
    );
    renderWeather(weather);

    statusMessage.textContent = "Weather loaded.";
  } catch (error) {
    statusMessage.textContent = error.message;
  }
}

btn.addEventListener("click", () => {
  getData();
});
