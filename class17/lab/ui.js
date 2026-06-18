import { TeamCard } from "./team-card";
customElements.define("team-card", TeamCard);

export function renderTeams(teams, container) {
  container.innerHTML = "";
  for (const team of teams) {
    const teamCard = document.createElement("team-card");
    // card.setAttributes();
    for (const [key, value] of Object.entries(team)) {
      teamCard.setAttribute(key, value);
    }
    // Object.entries() - converts Object into an array [ [key, value]..], the loop converts [key, value] into attributes.
    container.appendChild(teamCard);
  }
}
