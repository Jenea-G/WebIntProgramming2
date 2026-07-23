import { CurrentWeatherElement } from "./currentWeatherElement.js";

customElements.define("weather-element", CurrentWeatherElement);
const content = document.getElementById("content");

export function renderWeather(weather) {
  const card = document.createElement("weather-element");
  card.currentWeather = weather;

  content.appendChild(card);
}
