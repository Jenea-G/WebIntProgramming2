import { fetchTournaments, fetchRegistrations } from "./api.js";
import { renderTournaments, renderRegistrations, styleStatus } from "./ui.js";

function main() {
  const loadBtn = document.getElementById("load");
  const status = document.getElementById("status");
  const content = document.getElementById("content");
  const clearBtn = document.getElementById("clear");
  const detailsDiv = document.getElementById("details");
  const regStatus = document.getElementById("status-reg");
  const summary = document.getElementById("summary");

  loadBtn.addEventListener("click", () => {
    status.textContent = "Loading posts";
    styleStatus(status, "loading");

    fetchTournaments()
      .then((tournaments) => {
        //   console.log(tournaments[0].name);
        renderTournaments(tournaments, content);
        status.textContent = "Tournaments loaded";
        styleStatus(status, "success");

        //=======================
        tournaments.forEach((tournament) => {
          let viewBtn = document.getElementById(`${tournament.id}`);
          if (!viewBtn) return;

          viewBtn.addEventListener("click", () => {
            console.log("button clicked");
            styleStatus(regStatus, "loading");

            fetchRegistrations()
              .then((registrations) => {
                console.log(registrations[1].playerName);

                regStatus.textContent = "Loading registrations...";
                const detailsDiv = document.getElementById("details");
                detailsDiv.textContent = "";
                renderRegistrations(registrations, detailsDiv, tournament);

                regStatus.textContent = "Registrations loaded";
                styleStatus(regStatus, "success");
              })
              .catch((error) => {
                styleStatus(regStatus, "error");
                regStatus.textContent = `Failed to load registrations: ${error.message}`;
              });
          });
        });
        //=========================
      })
      .catch((error) => {
        status.textContent = `Failed to load tournaments: ${error.message}`;
        styleStatus(status, "error");
      });
  });

  clearBtn.addEventListener("click", () => {
    status.textContent = "Press button to load tournaments";
    styleStatus(status, "");
    regStatus.textContent = "";
    styleStatus(regStatus, "");
    content.textContent = "";
    detailsDiv.textContent = "";
    summary.textContent = "";
  });
}

main();
