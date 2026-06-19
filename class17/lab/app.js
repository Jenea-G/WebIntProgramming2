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
        renderTeams(result, teamsContainer);
        loadStatus.textContent = "Data loaded successfully.";
      })
      .catch((error) => {
        loadStatus.textContent = `Couldn't load teams data: ${error}`;
      });
  });

  clearBtn.addEventListener("click", () => {
    loadStatus.textContent = "Click the button to load teams.";
    detailStatus.textContent = "No team selected yet.";

    teamsContainer.innerHTML = "";
    detailContainer.innerHTML = "";
  });

  teamsContainer.addEventListener("team-selected", (e) => {
    detailStatus.textContent = "Team details loaded successfully.";
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
