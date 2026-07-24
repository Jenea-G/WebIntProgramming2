export class CurrentWeatherElement extends HTMLElement {
  constructor() {
    super();

    this.__CurrentWeather = null; // reset the currentWeather instance

    const shadow = this.attachShadow({ mode: "open" });

    const template = document.getElementById("weather-template");
    const clone = template.content.cloneNode(true);

    shadow.appendChild(clone);
  }

  set currentWeather(value) {
    // setter to assign currentWeather instance to the custom element
    this.__currentWeather = value;
    this.render();
  }

  get currentWeather() {
    return this.__currentWeather;
  }

  render() {
    const card = this.shadowRoot.querySelector(".weather-card");

    card.className = "weather-card"; // resets the classes of the card to "weather-card"
    document.body.className = "";

    if (this.currentWeather.dayPeriod === "Night") {
      document.body.classList.add("night");
    } else {
      document.body.classList.add("day");
    }
    //console.log(`current day period = ${this.currentWeather.dayPeriod}`);

    this.shadowRoot.querySelector(".temperature").textContent =
      this.currentWeather.formattedTemperature;

    this.shadowRoot.querySelector(".apparent-temperature").textContent =
      this.currentWeather.formattedApparentTemperature;

    this.shadowRoot.querySelector(".humidity").textContent =
      this.currentWeather.formattedHumidity;

    this.shadowRoot.querySelector(".precipitation").textContent =
      this.currentWeather.formattedPrecipitation;

    this.shadowRoot.querySelector(".wind").textContent =
      this.currentWeather.formattedWind;

    this.shadowRoot.querySelector(".wind-gusts").textContent =
      this.currentWeather.formattedWindGusts;

    this.shadowRoot.querySelector(".rain").textContent =
      this.currentWeather.formattedRain;

    this.shadowRoot.querySelector(".showers").textContent =
      this.currentWeather.formattedShowers;
  }
}

customElements.define("weather-element", CurrentWeatherElement);
