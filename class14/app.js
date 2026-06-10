import { fetchTournaments, fetchRegistrations } from "./api.js";
import { renderTournaments, styleStatus } from "./ui.js";

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
