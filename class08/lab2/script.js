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
});
