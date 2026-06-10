import { fetchRegistrations } from "./api.js";

export function renderTournaments(tournaments, container) {
  container.innerHTML = "";
  //   container.classList.add("gap-2");

  tournaments.forEach((tournament) => {
    const article = document.createElement("article");
    const div = document.createElement("div");
    const viewBtn = document.createElement("button");

    article.classList.add("col-12", "col-md-4");
    div.classList.add(
      "border",
      "border-primary-subtle",
      "rounded",
      "p-3",
      "mb-3",
    );
    viewBtn.classList.add("btn", "btn-primary", "btn-small");
    div.innerHTML = `
      <h5 class="text-primary">${tournament.name}</h5>
      <p><strong>Game title:</strong> ${tournament.game}</p>
      <p><strong>Entry fee:</strong> ${tournament.entryFee}</p>
      <p><strong>Max Players:</strong> ${tournament.maxPlayers}</p>
      <p><strong>Registered Players:</strong> ${tournament.registeredPlayers}</p>
      <p><strong>Status:</strong> ${tournament.status}</p>
    `;

    viewBtn.textContent = "View Registrations";

    div.appendChild(viewBtn);
    article.appendChild(div);
    container.appendChild(article);

    const id = tournament.id;

    viewBtn.addEventListener("click", () => {
      console.log("button clicked");

      fetchRegistrations()
        .then((registrations) => {
          console.log(registrations[1].playerName);
          regStatus.textContent = "Registrations loaded";
        })
        .catch((error) => {
          regStatus.textContent = `Failed to load registrations: ${error.message}`;
        });

      const regStatus = document.getElementById("status-reg");
      regStatus.textContent = "Loading registrations...";
      const detailsDiv = document.getElementById("details");
      detailsDiv.textContent = "";
      //   renderRegistrations(registrations, detailsDiv, regStatus, id)
    });
  });
}

// function renderRegistrations(registrations, detailsDiv, regStatus, id){
//     const registrations =
// }
