import { getFestivalData } from "./api.js"; // curly brackets for importing

import { Artist } from "./Artist.js";

import { Performance } from "./Performance.js"; // we have Performace class in the file not Performances class

import { FeaturedPerformance } from "./FeaturedPerformance.js";

import { PerformanceCard } from "./PerformanceCard.js"; // correct file name

import { renderLoading, renderError, renderPerformance } from "./ui.js"; //SyntaxError: The requested module './ui.js' does not provide an export named 'renderErrors' (at app.js:11:25)

const loadButton = document.getElementById("load-lineup"); // correct button id

const searchInput = document.getElementById("search-input"); // correct input id

const stageFilter = document.getElementById("stage-filter");

const ticketsFilter = document.getElementById("tickets-filter"); // correct checkbox id

const featuredFilter = document.getElementById("featured-filter"); // correct checkbox id

const sortSelect = document.getElementById("sort-select"); // correct id

const resetButton = document.getElementById("reset-filters"); // correct id

let performances;

async function loadLineup() {
  renderLoading;

  loadButton.disabled = true;

  try {
    const data = getFestivalData();

    const artists = data.artists.map(
      (item) => new Artist(item.id, item.name, item.country, item.genre),
    );

    performances = data.performances.map((item) => {
      const artist = artists.filter((artist) => artist.id === item.artistId);

      if (item.featured) {
        return new FeaturedPerformance(
          item.id,
          item.title,
          artist,
          item.stage,
          item.time,
          item.ticketPrice,
          item.ticketsRemaining,
          item.featured,
        );
      }

      return new Performance( // to match the imported class name
        item.id,
        item.title,
        artist,
        item.stage,
        item.time,
        item.ticketPrice,
        item.ticketsRemaining,
      );
    });

    renderPerformance(performances);

    searchInput.disabled = false;
    stageFilter.disabled = false;
    ticketsFilter.disabled = false;
    featuredFilter.disabled = false;
    sortSelect.disabled = false;
    resetButton.disabled = false;
  } catch (error) {
    console.log("Lineup loaded:", error);

    renderError(error.message); // match imported function name
  }

  loadButton.disabled = true;
}

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const stage = stageFilter.value;

  const availableOnly = ticketsFilter.checked;

  const featuredOnly = featuredFilter.checked;

  const sort = sortSelect.value;

  let visiblePerformances = performances.filter((performance) => {
    const matchesSearch =
      searchTerm === "" ||
      performance.title.toLowerCase().includes(searchTerm) ||
      performance.artist.name.toLowerCase().includes(searchTerm);

    const matchesStage = stage === "" || performance.stage === stage;

    const matchesTickets = !availableOnly || performance.hasTickets;

    const matchesFeatured = !featuredOnly || performance.featured;

    return matchesSearch && matchesStage && matchesTickets && matchesFeatured;
  });

  visiblePerformances = [...visiblePerformances];

  if (sort === "time-asc") {
    visiblePerformances.sort((a, b) => a.time.localeCompare(b.time));
  }

  if (sort === "price-asc") {
    visiblePerformances.sort((a, b) => a.ticketPrice - b.ticketPrice);
  }

  if (sort === "price-desc") {
    visiblePerformances.sort((a, b) => b.ticketPrice - a.ticketPrice);
  }

  if (sort === "artist-asc") {
    visiblePerformances.sort((a, b) =>
      a.artist.name.localeCompare(b.artist.name),
    );
  }

  renderPerformances(visiblePerformances);
}

function resetFilters() {
  searchInput.value = "";
  stageFilter.value = "";
  ticketsFilter.value = false;
  featuredFilter.value = false;
  sortSelect.value = "time-asc";

  applyFilters();
}

loadButton.addEventListener("click", loadLineup); //Cannot read properties of null (reading 'addEventListener' at app.js:144:12

searchInput.addEventListener("change", applyFilters); //Cannot read properties of null (reading 'addEventListener') at app.js:146

stageFilter.addEventListener("input", applyFilters);

ticketsFilter.addEventListener("change", applyFilters); //TypeError: Cannot read properties of null

featuredFilter.addEventListener("change", applyFilters); //TypeError: Cannot read properties of null

sortSelect.addEventListener("change", applyFilters); //TypeError: Cannot read properties of null

resetButton.addEventListener("click", resetFilters);
