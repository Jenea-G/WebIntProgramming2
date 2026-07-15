const button = document.getElementById("load-events");
const container = document.getElementById("events");
button.addEventListener("click", async () => {
  const response = await fetch("events.json");
  const events = await response.json();
  container.innerHTML = "";

  events.forEach((event) => {
    const article = document.createElement("article");

    article.innerHTML = `
    <h2>${event.title}</h2>
    <p>${event.artist}</p>
    `;
    container.appendChild(article);
  });
});
