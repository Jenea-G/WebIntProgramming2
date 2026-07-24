import { getLocation, getCurrentWeather } from "./api.js";
import { renderWeather } from "./ui.js";
import { CurrentWeather } from "./currentWeather.js";
import { renderLocationForm } from "./ui.js";

const btn = document.getElementById("load-weather");
const resetBtn = document.getElementById("reset");
const statusMessage = document.getElementById("status");
const locationFormDiv = document.getElementById("location-form-div");
const content = document.getElementById("content");

/* get the weather data with provided location and display it on the page */
async function getData(location) {
  try {
    statusMessage.textContent = "Loading the weather data.";

    const weatherData = await getCurrentWeather(location);

    console.log(weatherData);

    // create a CurrentWeather instance with required properties from received current weather data
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
    // call rendering function to display weather
    renderWeather(weather, content);

    statusMessage.textContent = "Weather loaded.";
  } catch (error) {
    statusMessage.textContent = error.message;
  }
}

/* Initialize weather loading */
btn.addEventListener("click", async () => {
  try {
    document.body.className = "";
    locationFormDiv.innerHTML = "";
    content.innerHTML = "";
    statusMessage.textContent = "Getting your location...";

    // get location from the browser
    const location = await getLocation();
    console.log(location);

    // get and display the weather data
    await getData(location);

    // in case of error or denied location display manual location coordinates input
  } catch (error) {
    statusMessage.textContent = `Your location could not be detected. Enter it manually.`;

    renderLocationForm(locationFormDiv);
  }
});

/* Catch the dispatched custom event and load weather from received location data */
locationFormDiv.addEventListener("location-provided", async (event) => {
  try {
    console.log("location details created");
    // get and display the weather data with provided location coordinates
    await getData(event.detail);
  } catch (error) {
    statusMessage.textContent =
      "Your location could not be detected. Enter valid data.";
  }
});

/* Clear the page */
resetBtn.addEventListener("click", () => {
  document.body.className = "";
  locationFormDiv.innerHTML = "";
  content.innerHTML = "";
  statusMessage.textContent = "";
});
