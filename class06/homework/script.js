const btn = document.getElementById("load-btn");
const statusMsg = document.getElementById("status-msg");
const contentDiv = document.getElementById("content-div");

btn.addEventListener("click", () => {
  statusMsg.textContent = "User information is loading...";
  contentDiv.innerHTML = "";

  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/users/1001");
  fetchRequest
    .then((response) => {
      if (response.ok === false) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
      setTimeout(() => {
        statusMsg.textContent = "User information loaded successfully.";
        statusMsg.classList += " text-success";
        console.log(user);

        const card = document.createElement("div");
        card.classList = "card";
        const divBody = document.createElement("div");
        divBody.classList = "card-body";
        const title = document.createElement("h5");
        title.classList = "card-title";
        const text = document.createElement("p");
        text.classList = "card-text";
        const ul = document.createElement("ul");

        title.textContent = user.name;
        ul.innerHTML = `<li>Username: ${user.username}</li><li>Email: ${user.email}</li><li>Phone number: ${user.phone}</li><li>Website: ${user.website}</li><li>City: ${user.address.city}</li>`;

        contentDiv.append(card);
        card.append(divBody);
        text.append(ul);
        divBody.append(title, text);
      }, 2000);
    })
    .catch((error) => {
      setTimeout(() => {
        statusMsg.classList.remove("text-success");
        statusMsg.classList += " text-danger";
        statusMsg.textContent = "Failed to load user.";
        console.log(error);
      }, 2000);
    });
});
