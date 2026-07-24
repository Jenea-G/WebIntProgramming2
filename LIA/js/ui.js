import { CurrentWeatherElement } from "./currentWeatherElement.js";

customElements.define("weather-element", CurrentWeatherElement);

export function renderWeather(weather) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const card = document.createElement("weather-element");
  card.currentWeather = weather;

  content.appendChild(card);
}

export function renderLocationForm(locationFormDiv) {
  locationFormDiv.innerHTML = ""; // to prevent forms adding up
  const form = document.createElement("form");

  form.innerHTML = `
    <p>
        <label>Latitude <input type="number" name="latitude" id="latitude-input" required></label>
    </p>
    <p>
        <label>Longitude <input type="number" name="longitude" id="longitude-input" required></label>
    </p>

    <button type="submit" id="location-btn">submit</button>
    `;

  locationFormDiv.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const latitudeInput = document.getElementById("latitude-input");
    const longitudeInput = document.getElementById("longitude-input");
    const location = {
      latitude: latitudeInput.value,
      longitude: longitudeInput.value,
    };
    form.dispatchEvent(
      new CustomEvent("location-provided", {
        detail: location,
        bubbles: true,
      }),
    );
    console.log("location submitted");
  });
}
