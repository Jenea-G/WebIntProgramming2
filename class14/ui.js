import { fetchRegistrations } from "./api.js";
import { Tournament } from "./tournament.js";

export function renderTournaments(tournaments, container) {
  container.innerHTML = "";
  //   container.classList.add("gap-2");

  tournaments.forEach((data) => {
    const tournament = Tournament.fromObject(data);
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

    viewBtn.addEventListener("click", () => {
      console.log("button clicked");
      const regStatus = document.getElementById("status-reg");

      fetchRegistrations()
        .then((registrations) => {
          console.log(registrations[1].playerName);

          regStatus.textContent = "Loading registrations...";
          const detailsDiv = document.getElementById("details");
          detailsDiv.textContent = "";
          renderRegistrations(registrations, detailsDiv, tournament);

          regStatus.textContent = "Registrations loaded";
        })
        .catch((error) => {
          regStatus.textContent = `Failed to load registrations: ${error.message}`;
        });
    });
  });
}

function renderRegistrations(registrations, detailsDiv, tournament) {
  const id = tournament.id;
  const spotsLeft = tournament.spotsLeft;
  const fee = tournament.entryFee;
  const nOfRegistrations = tournament.registeredPlayers;
  let confPlayers = 0;

  const summary = document.getElementById("summary");
  summary.textContent = "";

  const theRegistrations = registrations.filter(
    (item) => item.tournamentId === id,
  );

  theRegistrations.forEach((registration) => {
    if (registration.status === "confirmed") {
      confPlayers += 1;
    }

    const article = document.createElement("article");
    const div = document.createElement("div");

    article.classList.add("col-12", "col-md-4");
    div.classList.add(
      "border",
      "border-primary-subtle",
      "rounded",
      "p-3",
      "mb-3",
    );

    div.innerHTML = `
      <h5 class="text-primary">${registration.playerName}</h5>
      <p><strong>Gamer Tag:</strong> ${registration.gamerTag}</p>
      <p><strong>Ticket Type:</strong> ${registration.ticketType}</p>
      <p><strong>Registration Status:</strong> ${registration.status}</p>
    `;

    article.appendChild(div);
    detailsDiv.appendChild(article);
  });

  summary.innerHTML = `
  <h4>Summary Information</h4>
  <p><strong>Total number of registrations: </strong>${nOfRegistrations}</p>
  <p><strong>Confirmed players: </strong>${confPlayers}</p>
  <p><strong>Expected revenue: </strong>${confPlayers * fee}</p>
  <p><strong>Spots Left: </strong>${spotsLeft}</p>
  `;
}
