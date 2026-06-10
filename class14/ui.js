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

    viewBtn.addEventListener("click", () => {
      console.log("button clicked");
      const regStatus = document.getElementById("status-reg");
      regStatus.textContent = "Loading registrations...";
      const detailsDiv = document.getElementById("details");
      detailsDiv.textContent = "";
    });
  });
}
