import { fetchTeams } from "./api.js";
import { Team } from "./team.js";
import { renderTeams } from "./ui.js";

function main() {
  const loadBtn = document.getElementById("load-btn");
  const clearBtn = document.getElementById("clear-btn");
  const teamsContainer = document.getElementById("teams-container");
  const loadStatus = document.getElementById("status");
  const detailStatus = document.getElementById("detail-status");
  const detailContainer = document.getElementById("details-container");

  loadBtn.addEventListener("click", () => {
    loadStatus.textContent = "Loading teams data ...";
    console.log("button clicked");
    fetchTeams()
      .then((result) => {
        try {
          const teams = result.map((item) => Team.fromObject(item)); // change each team into Team object
          renderTeams(teams, teamsContainer);
          loadStatus.textContent = "Data loaded successfully.";
          // console.log(teams[0]);
          // console.log(teams[0].name);
          // console.log(teams[0].__name);
        } catch (error) {
          loadStatus.textContent = `Couldn't convert teams data: ${error}`;
        }
      })
      .catch((error) => {
        loadStatus.textContent = `Couldn't load teams data: ${error}`;
      });
  });

  clearBtn.addEventListener("click", () => {
    loadStatus.textContent = "Dashboard cleared";
    detailStatus.textContent = "No team selected yet.";

    teamsContainer.innerHTML = "";
    detailContainer.innerHTML = "";
  });

  teamsContainer.addEventListener("team-selected", (e) => {
    detailStatus.textContent = "Team details loaded successfully.";
    // as detailsContainer is not a shadow element its styles leak into the rest of the document and load button took details-btn styles untill I specified the id for styling the button.
    detailContainer.innerHTML = `
            ${e.detail.styles} 
            <div class="team-card">
                <div class="title">
                    <p>⚽️ ⚽️ ⚽️</p>
                    <h2>${e.detail.name} details: </h2>
                </div>
                <p>Group ${e.detail.group}</p>
                <p>Points: ${e.detail.points}</p>
                <p>Matches played: ${e.detail.played}</p>
                <p>Goal difference: ${e.detail.goalDifference}</p>
            </div>
        `;
    console.log("details created");
  });
}

main();
