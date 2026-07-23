// ​response:
//
// current: Object { time: "2026-07-23T19:45", interval: 900, temperature_2m: 24.4, … }​
// apparent_temperature: 22.6​
// interval: 900​
// is_day: 1​
// precipitation: 0​
// rain: 0​
// relative_humidity_2m: 43
// ​showers: 0​
// temperature_2m: 24.4​
// time: "2026-07-23T19:45"​
// wind_gusts_10m: 33.8​
// wind_speed_10m: 20.9​
//      <prototype>: Object { … }​
// current_units: Object { time: "iso8601", interval: "seconds", temperature_2m: "°C", … }​
// apparent_temperature: "°C"​
// interval: "seconds"​
// is_day: ""​
// precipitation: "mm"​
// rain: "mm"
// ​relative_humidity_2m: "%"
// ​showers: "mm"
// ​temperature_2m: "°C"
// ​time: "iso8601"
// ​wind_gusts_10m: "km/h"
// wind_speed_10m: "km/h"
export class CurrentWeather {
  constructor(
    temperature,
    humidity,
    apparentTemperature,
    precipitation,
    wind,
    windGusts,
    isDay,
    rain,
    showers,
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.apparentTemperature = apparentTemperature;
    this.precipitation = precipitation;
    this.wind = wind;
    this.windGusts = windGusts;
    this.isDay = isDay;
    this.rain = rain;
    this.showers = showers;
  }

  get formattedTemperature() {
    return `${this.temperature} °C`;
  }

  get formattedHumidity() {
    return `${this.humidity} %`;
  }

  get formattedApparentTemperature() {
    return `${this.apparentTemperature} °C`;
  }

  get formattedPrecipitation() {
    return `${this.precipitation} mm`;
  }

  get formattedWind() {
    return `${this.wind} km/h`;
  }

  get formattedWindGusts() {
    return `${this.windGusts} km/h`;
  }

  get formattedRain() {
    return `${this.rain} mm`;
  }

  get formattedShowers() {
    return `${this.showers} mm`;
  }

  get dayPeriod() {
    return this.isDay ? "Day" : "Night";
  }
}
