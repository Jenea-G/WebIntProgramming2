import { ArtistCard } from "./artist-card.js";
customElements.define("artist-card", ArtistCard);

export function renderArtists(artists, container) {
  container.textContent = "";
  for (const artist of artists) {
    const card = document.createElement("artist-card");
    card.artist = artist;
    container.appendChild(card);
  }
}
