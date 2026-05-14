// connect DOM
const loadBtn = document.getElementById("load-users");
const clearBtn = document.getElementById("clear-data");
const cardsHolder = document.getElementById("cards-holder");
const statusMsg = document.getElementById("status-msg");

function setStatus(element, status) {
  if (status === "success") {
    element.textContent = "Data is loaded successfully!";
    element.classList += " alert-success";
    // element.classList.remove("alert-danger", "alert-secondary");
  } else if (status === "loading") {
    element.textContent = "Data is loading ...";
    element.classList += " alert-secondary";
    // element.classList.remove("alert-danger", "alert-success");
  } else {
    element.textContent = "Data loading failed.";
    element.classList += " alert-danger";
    // element.classList.remove("alert-success", "alert-secondary");
  }
}

loadBtn.addEventListener("click", () => {
  setStatus(statusMsg, "loading");
  loadUsers(5);
});

function loadUsers(n) {
  for (let i = 100; i <= 105; i++) {
    fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setStatus(statusMsg, "error");
      });
  }
}
