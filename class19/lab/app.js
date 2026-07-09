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
  statusMessage.textContent = "Loading Artists...";
  fetchArtists()
    .then((artists) => {
      const artistsList = artists.map((a) => Artist.fromObject(a));
      //console.log(typeof artists);
      //console.log(artistsList);
      renderArtists(artistsList, container);
      statusMessage.textContent = "Artists data successfully loaded.";
    })
    .catch((error) => {
      statusMessage.textContent = `Couldn't load data: ${error}`;
    });
});

clearBtn.addEventListener("click", () => {
  statusMessage.textContent = "Press load button to load artists";
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
