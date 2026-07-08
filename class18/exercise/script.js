const playersContainer = document.getElementById("players-container");

const players = [
  { name: "Messi", country: "Argentina", number: 10 },
  { name: "Mbappé", country: "France", number: 10 },
  { name: "Endo", country: "Japan", number: 6 },
];

function createPlayerCard(player) {
  const template = document.getElementById("player");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".player-name").textContent = player.name;
  clone.querySelector(".country-name").innerHTML =
    `<b>Country:</b> ${player.country}`;
  clone.querySelector(".player-number").innerHTML =
    `<b>Number:</b> ${player.number}`;

  return clone;
}

players.forEach((player) => {
  const playerCard = createPlayerCard(player);
  playersContainer.appendChild(playerCard);
});
