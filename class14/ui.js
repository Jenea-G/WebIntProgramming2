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
    viewBtn.id = `${tournament.id}`;
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
  });
}

export function renderRegistrations(registrations, detailsDiv, tournament) {
  const id = tournament.id;
  //const id = 7; // - for testing "No registrations" error.
  const spotsLeft = tournament.spotsLeft;
  const fee = tournament.entryFee;
  const nOfRegistrations = tournament.registeredPlayers;
  let confPlayers = 0;

  const summary = document.getElementById("summary");
  summary.textContent = "";

  const theRegistrations = registrations.filter(
    (item) => item.tournamentId === id,
  );

  if (Object.keys(theRegistrations).length === 0) {
    throw new Error("No registrations for the selected tournament were found");
  }

  theRegistrations.forEach((registration) => {
    if (registration.status === "confirmed") {
      confPlayers += 1;
    }

    const article = document.createElement("article");
    const div = document.createElement("div");

    article.classList.add("col-12", "col-md-4");
    div.classList.add(
      "border",
      "border-success-subtle",
      "rounded",
      "p-3",
      "mb-3",
    );

    div.innerHTML = `
      <h5 class="text-success">${registration.playerName}</h5>
      <p><strong>Gamer Tag:</strong> ${registration.gamerTag}</p>
      <p><strong>Ticket Type:</strong> ${registration.ticketType}</p>
      <p><strong>Registration Status:</strong> ${registration.status}</p>
    `;

    article.appendChild(div);
    detailsDiv.appendChild(article);
  });

  summary.innerHTML = `
  <h4 class="fw-bold mb-2 text-secondary">Summary for '${tournament.name}':</h4>
  <p><strong>Total number of registrations: </strong>${nOfRegistrations}</p>
  <p><strong>Confirmed players: </strong>${confPlayers}</p>
  <p><strong>Expected revenue: </strong>${confPlayers * fee} $</p>
  <p><strong>Spots Left: </strong>${spotsLeft}</p>
  `;
}

export function styleStatus(element, status) {
  element.classList.remove("alert-success", "alert-secondary", "alert-danger");
  if (status === "success") {
    element.classList.add("alert-success");
  } else if (status === "loading") {
    element.classList.add("alert-secondary");
  } else if (status === "error") {
    element.classList.add("alert-danger");
  } else {
    element.classList.add("alert-secondary");
  }
}
