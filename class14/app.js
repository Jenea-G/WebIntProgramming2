import { fetchTournaments, fetchRegistrations } from "./api.js";
import { renderTournaments } from "./ui.js";

const loadBtn = document.getElementById("load");
const status = document.getElementById("status");
const content = document.getElementById("content");

loadBtn.addEventListener("click", () => {
  status.textContent = "Loading posts";

  fetchTournaments()
    .then((tournaments) => {
      //   console.log(tournaments[0].name);
      renderTournaments(tournaments, content);
      status.textContent = "Tournaments loaded";
    })
    .catch((error) => {
      status.textContent = `Failed to load tournaments: ${error.message}`;
    });
});
