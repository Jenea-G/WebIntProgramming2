const btn = document.getElementById("load-btn");
const statusMsg = document.getElementById("status-msg");
const contentDiv = document.getElementById("content-div");

btn.addEventListener("click", () => {
  statusMsg.textContent = "User information is loading...";
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/users/1");
  fetchRequest
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user.name);
    });
});
