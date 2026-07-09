export class ArtistCard extends HTMLElement {
  connectedCallBack() {
    this.render(this.artist);
  }

  render(artist) {
    const shadowCard = this.attachShadow({ mode: "open" });
    const template = document.getElementById("artists");
    const clone = template.content.cloneNode(true);
    shadowCard.appendChild(clone); //attach template to the custom element

    this.shadowCard.querySelector(".artist-name").textContent = artist.name;
    this.shadowCard.querySelector(".genre").textContent =
      `Genre: ${artist.genre}`;
    this.shadowCard.querySelector(".stage").textContent =
      `Stage: ${artist.stage}`;
    this.shadowCard.querySelector(".time").textContent = `Time: ${artist.time}`;
    this.shadowCard.querySelector(".country").textContent =
      `Country: ${artist.country}`;

    this.shadowRoot
      .querySelector(".details-btn")
      .addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("artist-selected", {
            detail: artist,
            bubbles: true,
          }),
        );
      });
  }
}

customElements.define("artist-card", ArtistCard);
