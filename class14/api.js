const TOURNAMENTS_SRC = "tournaments.json";

export function fetchTournaments() {
  return fetch(TOURNAMENTS_SRC).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  });
}
