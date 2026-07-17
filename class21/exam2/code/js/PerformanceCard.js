export class PerformanceCard extends HTMLElement {
  connectedCallback() {
    // this._performance = null;

    const shadow = this.attachShadow({
      mode: "open",
    });

    const template = document.getElementById("performance-card-template"); // correct template name

    shadow.appendChild(template.content.cloneNode(true)); // .content missing
    this.render(); //moved here
  }

  set performance(value) {
    this.__performance = value;
  }

  get performance() {
    return this.__performance;
  }

  render() {
    if (!this.performance) {
      return;
    }
    const article = this.shadowRoot.querySelector(".performance-card"); //selecting within custom element

    article.className = "performance-card";

    if (this.performance.featured) {
      article.classList.add("featured"); //wrong class
    }

    if (!this.performance.hasTickets) {
      article.classList.add("sold-out"); // wrong class
    }

    this.shadowRoot.querySelector(".title").textContent =
      this.performance.title;

    this.shadowRoot.querySelector(".artist").textContent =
      this.performance.artist.displayLabel; //property

    this.shadowRoot.querySelector(".country").textContent =
      this.performance.artist.country; // wrong property

    this.shadowRoot.querySelector(".genre").textContent =
      this.performance.artist.genre; // artist.genre

    this.shadowRoot.querySelector(".stage").textContent = `Stage: ${
      this.performance.stage //
    }`;

    this.shadowRoot.querySelector(".time").textContent = `Time: ${
      this.performance.time //
    }`;

    this.shadowRoot.querySelector(".price").textContent =
      this.performance.formattedPrice;

    this.shadowRoot.querySelector(".tickets").textContent =
      this.performance.ticketLabel;

    this.shadowRoot.querySelector(".lineup-label").textContent =
      this.performance.lineupLabel;
  }
}

customElements.define("performance-card", PerformanceCard); // remove () on the constructor, correct custom element name (should contain hyphen)
