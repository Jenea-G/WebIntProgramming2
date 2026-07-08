/**
 * Templates
 * storing reusable HTML structure and cloning when needed
 */

// We build UI with:
//  innerHTML
//  createElement()
//  modules
//  Custom Elements
//  Shadow DOM

// What is a template?

// A <template> is a chunk of HTML stored in the page, but not rendered immediately.

//      it exists in the document
//      but it does not show on the page BY DEFAULT.
//          it is up to JS to clone and insert it afterwards.

// DOM

const template = document.getElementById("message-template");
const output = document.getElementById("output");

const clone = template.content.cloneNode(true);
output.appendChild(clone);
output.appendChild(clone);
output.appendChild(clone);

/**
 * for multiple times
 * **/

for (let i = 0; i < 2; i++) {
  const clone = template.content.cloneNode(true);
  output.appendChild(clone);
}

// templates are designed for reusability!

/**
 * Dynamic template population
 */

// DATA
const teams = [
  { name: "Argentina", group: "A", points: 6 },
  { name: "France", group: "B", points: 4 },
  { name: "Japan", group: "D", points: 5 },
];

// DOM

const teamsContainer = document.getElementById("teams-container");

// Helper function
function createTeamCard(team) {
  const teamTemplate = document.getElementById("team-template");
  const clone = teamTemplate.content.cloneNode(true);

  clone.querySelector(".team-name").textContent = team.name;
  clone.querySelector(".team-group").textContent = `Group: ${team.group}`;
  clone.querySelector(".team-points").textContent = `Points: ${team.points}`;

  return clone;
}

// rendering data in html
teams.forEach((team) => {
  const newTeam = createTeamCard(team);
  teamsContainer.appendChild(newTeam);
});
