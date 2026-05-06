// fetch a list of 5 users
const loadUserBtn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

loadUserBtn.addEventListener("click", () => {
  // first status update
  status.textContent = "Loading user...";
  output.innerHTML = "";

  const ol = document.createElement("ol");
  output.append(ol);

  for (let i = 1; i <= 5; i += 1) {
    let userFetch = fetch(`https://jsonplaceholder.typicode.com/users/${i}`);

    userFetch
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const li = document.createElement("li");
        li.textContent = `${data.username}`;
        ol.append(li);
        status.textContent = "Users loaded successfully.";
      })
      .catch((error) => {
        status.textContent = "Failed to load user";
        console.log(error);
      });
  }
});
