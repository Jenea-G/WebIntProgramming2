import { TeamCard } from "./team-card.js";
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

    // const detailBtn = document.getElementById(`${team.id}`);
    // if (!detailBtn) return;
    // detailBtn.addEventListener("click", () => {
    //   console.log("Details button clicked");
    //   const detailStatus = document.getElementById("detail-status");
    //   detailStatus.textContent = `Loading team ${team.id} details...`;

    //   const event = new CustomEvent("team-selected", {
    //     detail: {
    //       name: `${team.id}`,
    //       group: `${team.group}`,
    //       points: `${team.points}`,
    //       played: `${team.played}`,
    //       goalDifference: `${team.goalDifference}`,
    //     },
    //   });

    //   console.log(event);
    // });
  }
}
