import { Performance } from "./Performance.js";

const performanceContainer = document.getElementById("performance-list"); // id correction

const statusOutput = document.getElementById("status");

const performanceCount = document.getElementById("performance-count");

const ticketCount = document.getElementById("ticket-count"); // id correction

const averagePrice = document.getElementById("average-price");

export function renderLoading() {
  statusOutput.textContent = "Festival lineup loaded successfully.";

  performanceContainer.innerHTML = "";

  performanceCount.textContent = "0";
  ticketCount.textContent = "0";
  averagePrice.textContent = "$0.00";
}

export function renderError(error) {
  statusOutput.textContent = `Error: ${error}`;

  performanceCount.textContent = "0";
}

export function renderPerformances(performances) {
  // rename to match the function called in app.js
  performanceContainer.innerHTML = "";

  if (performances.length === 0) {
    // we create an empty array performances in app.js so it will always exist but could be empty
    statusOutput.textContent =
      "No performances match " + "the current filters.";

    return;
  }

  performances.forEach((item) => {
    const card = document.createElement("performance-card"); //correct custom element name

    card.data = item;

    performanceContainer.appendChild(card);
  });

  statusOutput.textContent = "Festival lineup loaded successfully.";

  performanceCount.textContent = performances.length;

  ticketCount.textContent = Performance.totalAvailableTickets(performances);

  averagePrice.textContent = Performance.averagePrice(performances); //requires an argument
}
