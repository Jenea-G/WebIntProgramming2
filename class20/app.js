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

// this code is messy

// ==== 4 application layers are:  ===

//  1 - smth that retrieves data (api.js)
//  2 - smth that represents one event (event.js)
//  3 - smth that displays data and messages (ui.js)
//  4 - smth that coordinates the application (app.js)
