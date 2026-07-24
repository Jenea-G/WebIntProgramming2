import { getLocation, getCurrentWeather } from "./api.js";
import { renderWeather } from "./ui.js";
import { CurrentWeather } from "./currentWeather.js";
import { renderLocationForm } from "./ui.js";

const btn = document.getElementById("load-weather");
const resetBtn = document.getElementById("reset");
const statusMessage = document.getElementById("status");
const locationFormDiv = document.getElementById("location-form-div");
const content = document.getElementById("content");

async function getData(location) {
  try {
    statusMessage.textContent = "Loading the weather data.";

    const weatherData = await getCurrentWeather(location);

    console.log(weatherData);

    const weather = new CurrentWeather(
      weatherData.current.temperature_2m,
      weatherData.current.relative_humidity_2m,
      weatherData.current.apparent_temperature,
      weatherData.current.precipitation,
      weatherData.current.wind_speed_10m,
      weatherData.current.wind_gusts_10m,
      weatherData.current.is_day, // error: weatherData.is_day gives undefined
      weatherData.current.rain,
      weatherData.current.showers,
    );
    renderWeather(weather, content);

    statusMessage.textContent = "Weather loaded.";
  } catch (error) {
    statusMessage.textContent = error.message;
  }
}

btn.addEventListener("click", async () => {
  try {
    document.body.className = "";
    locationFormDiv.innerHTML = "";
    content.innerHTML = "";
    statusMessage.textContent = "Getting your location...";

    const location = await getLocation();
    console.log(location);

    await getData(location);
  } catch (error) {
    statusMessage.textContent = `Your location could not be detected. Enter it manually.`;

    renderLocationForm(locationFormDiv);
  }
});

locationFormDiv.addEventListener("location-provided", async (event) => {
  try {
    console.log("location details created");
    await getData(event.detail);
  } catch (error) {
    statusMessage.textContent =
      "Your location could not be detected. Enter valid data.";
  }
});

resetBtn.addEventListener("click", () => {
  document.body.className = "";
  locationFormDiv.innerHTML = "";
  content.innerHTML = "";
  statusMessage.textContent = "";
});
