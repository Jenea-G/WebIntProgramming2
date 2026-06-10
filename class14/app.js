import { fetchTournaments } from "./api.js";

const loadBtn = document.getElementById("load");
const status = document.getElementById("status");

loadBtn.addEventListener("click", () => {
  status.textContent = "Loading posts";

  fetchTournaments().then((tournaments) => {
    console.log(tournaments[0].name);
  });
});
