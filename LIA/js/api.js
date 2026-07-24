import { WEATHER_URL, WEATHER_PARAMETERS } from "./config.js";

export function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      // success function
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },

      // error function
      (error) => {
        reject(new Error(`Unable to get location: ${error.message}`));
      },
    );
  });
}

export async function getCurrentWeather(location) {
  const latitude = location.latitude;
  const longitude = location.longitude;

  let CURRENT_WEATHER_URL =
    WEATHER_URL +
    `?latitude=${latitude}&longitude=${longitude}` +
    WEATHER_PARAMETERS;
  const response = await fetch(CURRENT_WEATHER_URL);
  console.log(CURRENT_WEATHER_URL);

  if (!response.ok) {
    console.log(response.status);
    let message = "";
    if (response.status === 400) {
      message = "Invalid location coordinates";
    }
    throw new Error(`Unable to load weather. ${message}`);
  }

  const data = await response.json();
  return data;
}
