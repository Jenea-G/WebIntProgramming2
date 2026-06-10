const TOURNAMENTS_SRC = "tournaments.json";
const REGISTRATIONS_SRC = "registrations.json";

export function fetchTournaments() {
  return fetch(TOURNAMENTS_SRC).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  });
}

export function fetchRegistrations() {
  return fetch(REGISTRATIONS_SRC).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  });
}
