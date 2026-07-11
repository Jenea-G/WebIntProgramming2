import { fetchArtists } from "./api.js";
import { createControls, renderArtists } from "./ui.js";
import { Artist } from "./artist.js";

// const data = fetchArtists();
// console.log(data);
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const statusMessage = document.getElementById("status-message");
const container = document.getElementById("artists-container");
const controlsContainer = document.getElementById("controls-container");
const detailsBlock = document.getElementById("details-block");

let artistsList = [];

loadBtn.addEventListener("click", () => {
  statusMessage.textContent = "Loading lineup...";
  fetchArtists()
    .then((artists) => {
      artistsList = artists.map((a) => Artist.fromObject(a));
      //console.log(typeof artists);
      //console.log(artistsList);
      createControls(controlsContainer);
      renderArtists(artistsList, container);
      statusMessage.textContent = "Lineup loaded successfully.";
    })
    .catch((error) => {
      statusMessage.textContent = `Failed to load lineup: ${error}`;
    });
});

controlsContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("stage-btn")) return;

  const selectedStage = event.target.dataset.stage;

  let filteredArtists;

  if (selectedStage === "All") {
    filteredArtists = artistsList;
  } else {
    filteredArtists = artistsList.filter(
      (artist) => artist.stage === selectedStage,
    );
  }
  // console.log("controls clicked");
  renderArtists(filteredArtists, container);
});

clearBtn.addEventListener("click", () => {
  statusMessage.textContent = "Lineup cleared.";
  container.textContent = "";
  controlsContainer.textContent = "";
  detailsBlock.textContent = "";
});

container.addEventListener("artist-selected", (event) => {
  detailsBlock.innerHTML = `
    <h4>Details for: ${event.detail.name}</h4>
    ${event.detail.headliner ? "<p>Headliner</p>" : ""}
    <ul>
        <li>Genre: ${event.detail.genre}</li>
        <li>Stage: ${event.detail.stage}</li>
        <li>Time: ${event.detail.time}</li>
        <li>Country: ${event.detail.country}</li>
    </ul>
    
    `;
  //console.log("details created");
});
