// Progressive Enhancement

// Is a design approach for building web interfaces.

// the promise i to build a website at a basic level first, then make it reacher when CSS and JavaScript are available.

// Design Question:
//      Should a web page only work when JS runs?
//      or,
//      Should JS improve something that already works?

// In a nutshell: Progressive Enhancment means starting
//          with a usable base and then adding improvements.

/**
 * That base is usually:
 * 1. Meaningful HTML
 * 2. Core Content
 * 3. Basic navigation or Interaction
 */

/**
 * Enhancements may include:
 * 1. Styling
 * 2. Dynamic Behaviour
 * 3. Async loading
 * 4. Nicer feedback
 * 5. Richer Layout
 */

// Comparison and Contrast

/**
 * == Progressive Enhncement ==
 *
 * base page works first
 * content is meaningful without JS
 * JS only improves the experience
 */

/**
 * == JS dependent design ==
 *
 * page is empty until script runs
 * all content appears only through JS
 * Failure in JS may break everything!
 */

// HTML = structure and meaning
// CSS = presentation
// JavaScript = enhancement and behaviour

/**
 * HTML Semantics
 * main
 * section
 * heading
 * paragraphs
 * buttons
 */

// Let's enhance the page with JS now:

// DOM
const loadUserBtn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const userProfile = document.getElementById("user-profile");

// add event listener
loadUserBtn.addEventListener("click", () => {
  status.textContent = "Loading user ...";

  fetch("https://jsonplaceholder.typicode.com/users/8")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
      userProfile.innerHTML = `
        <h2>Profile Information :</h2>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
    `;
      status.textContent = "User profile loaded";
    })
    .catch((error) => {
      console.log(error);
      status.textContent = "Failed to load user";
    });
});
