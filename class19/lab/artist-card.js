export class ArtistCard extends HTMLElement {
  connectedCallback() {
    this.render(this.artist);
  }

  render(artist) {
    const shadowCard = this.attachShadow({ mode: "open" });
    const template = document.getElementById("artist");
    const clone = template.content.cloneNode(true);
    shadowCard.appendChild(clone); //attach template to the custom element

    shadowCard.querySelector(".artist-name").textContent = artist.name;
    shadowCard.querySelector(".genre").textContent = `Genre: ${artist.genre}`;
    shadowCard.querySelector(".stage").textContent = `Stage: ${artist.stage}`;
    shadowCard.querySelector(".time").textContent = `Time: ${artist.time}`;
    shadowCard.querySelector(".country").textContent =
      `Country: ${artist.country}`;

    if (artist.headliner)
      shadowCard.querySelector(".artist-card").classList.add("headliner");

    shadowCard.querySelector(".details-btn").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("artist-selected", {
          detail: artist,
          bubbles: true,
        }),
      );
      //console.log("details button clicked");
    });
  }
}
