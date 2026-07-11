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

export function createControls(container) {
  container.textContent = "";

  const controls = document.createElement("div");
  controls.classList.add("controls");

  controls.innerHTML = `
    <button class="stage-btn" data-stage="All">All Stages</button>
    <button class="stage-btn" data-stage="Main Stage">Main Stage</button>
    <button class="stage-btn" data-stage="River Stage">River Stage</button>
    <button class="stage-btn" data-stage="Night Stage">Night Stage</button>
    <button class="stage-btn" data-stage="Garden Stage">Garden Stage</button>
  `;

  container.appendChild(controls);
}
