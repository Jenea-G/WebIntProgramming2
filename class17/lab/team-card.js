export class TeamCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  getName() {
    return this.getAttribute("name");
  }

  getGroup() {
    return this.getAttribute("group");
  }
  getPoints() {
    return this.getAttribute("points");
  }
  getPlayed() {
    return this.getAttribute("played");
  }
  getGoalDifference() {
    return this.getAttribute("goalDifference");
  }

  getStyles() {
    return `
        <style>
            .team-card {
                padding: 20px;
                border-radius: 15px;
                background: #333533ff;
                color: white;
            }
            .title {
                margin-bottom: 10px;
                border-bottom: 1px solid #ffffffb3;
                text-align: center;
            }
            .title h2 {
                font-weight: 800;
            }
            #details-btn {
                padding: 10px 20px;
                min-width: 80%;
                border: none;
                border-radius: 5px;
                background: white;
                display: block;
                margin: 0 auto;
                transition: 0.3s;
            }
            button:hover {
                opacity: 0.8;}
        </style>
        `;
  }

  createEvent() {
    return new CustomEvent("team-selected", {
      detail: {
        name: this.getName(),
        group: this.getGroup(),
        points: this.getPoints(),
        played: this.getPlayed(),
        goalDifference: this.getGoalDifference(),
        styles: this.getStyles(),
      },
      bubbles: true,
      // composed: true,
    });
  }

  render() {
    const shadowCard = this.attachShadow({ mode: "open" });

    shadowCard.innerHTML = `
        ${this.getStyles()}
            <div class="team-card">
                <div class="title">
                    <h2>⚽️ ${this.getName()}</h2>
                </div>
                <p>Group ${this.getGroup()}</p>
                <p>Points: ${this.getPoints()}</p>
                <p>Matches played: ${this.getPlayed()}</p>
                <p>Goal difference: ${this.getGoalDifference()}</p>
                <button id="details-btn">View Details</button>
            </div>
        `;

    const detailBtn = this.shadowRoot.getElementById(`details-btn`);

    detailBtn.addEventListener("click", () => {
      console.log("Details button clicked");
      const detailStatus = document.getElementById("detail-status");
      detailStatus.textContent = `Loading team ${this.id} details...`;
      const event = this.createEvent();

      this.dispatchEvent(event);
      console.log("The event dispatched: ", event);
    });
  }
}
