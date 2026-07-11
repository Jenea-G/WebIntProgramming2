import { fetchArtists } from "./api.js";
import { renderArtists } from "./ui.js";
import { Artist } from "./artist.js";

// const data = fetchArtists();
// console.log(data);
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const statusMessage = document.getElementById("status-message");
const container = document.getElementById("artists-container");
const detailsBlock = document.getElementById("details-block");

loadBtn.addEventListener("click", () => {
  statusMessage.textContent = "Loading lineup...";
  fetchArtists()
    .then((artists) => {
      const artistsList = artists.map((a) => Artist.fromObject(a));
      //console.log(typeof artists);
      //console.log(artistsList);
      renderArtists(artistsList, container);
      statusMessage.textContent = "Lineup loaded successfully.";
    })
    .catch((error) => {
      statusMessage.textContent = `Failed to load lineup: ${error}`;
    });
});

clearBtn.addEventListener("click", () => {
  statusMessage.textContent = "Lineup cleared.";
  container.textContent = "";
  detailsBlock.textContent = "";
});

container.addEventListener("artist-selected", (event) => {
  detailsBlock.innerHTML = `
    <h4>Details for: ${event.detail.name}</h4>
    <ul>
        <li>Genre: ${event.detail.genre}</li>
        <li>Stage: ${event.detail.stage}</li>
        <li>Time: ${event.detail.time}</li>
        <li>Country: ${event.detail.country}</li>
    </ul>
    
    `;
  //console.log("details created");
});
