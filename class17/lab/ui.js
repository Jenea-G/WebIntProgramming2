import { TeamCard } from "./team-card.js";
customElements.define("team-card", TeamCard);

export function renderTeams(teams, container) {
  container.innerHTML = "";
  for (const team of teams) {
    const teamCard = document.createElement("team-card");
    // card.setAttributes();

    // ==== this loop doesnt create correct attributes after protecting Team class atttributes, as the keys become "__name" so the custom element attribute also becomes __name="" __points="" and page displays "null" =======
    // for (const [key, value] of Object.entries(team)) {
    //   teamCard.setAttribute(key, value);
    // }
    // console.log(Object.entries(teams[0]));
    // ==== Object.entries() - converts Object into an array [ [key, value]..], the loop converts [key, value] into attributes.

    teamCard.setAttribute("id", team.id);
    teamCard.setAttribute("name", team.name);
    teamCard.setAttribute("group", team.group);
    teamCard.setAttribute("points", team.points);
    teamCard.setAttribute("played", team.played);
    teamCard.setAttribute("goalDifference", team.goalDifference);

    container.appendChild(teamCard);
  }
}
