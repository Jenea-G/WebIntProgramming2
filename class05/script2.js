// let's load all DOM

const loadUserBtn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

loadUserBtn.addEventListener("click", () => {
  // first status update
  status.textContent = "Loading user...";
  output.innerHTML = "";

  const userFetch = fetch("https://jsonplaceholder.typicode.com/users/300");

  userFetch
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      output.textContent = `${data.username}`;
      status.textContent = "User loaded successfully.";
    })
    .cathc((error) => {
      status.textContent = "Failed to load user";
      console.log(error);
    });
});
