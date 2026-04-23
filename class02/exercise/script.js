/**
 * Exercise
 */

// 1. load the DOM elements

const nameInput = document.getElementById("name-input")
const greetBtn = document.getElementById("greet-button")
const output = document.getElementById("output")

// 2. add an event listener to the button
greetBtn.addEventListener("click", () => {
    const content = nameInput.value.trim()
    if (content === "") {
        output.textContent = "Please enter something";
    } else {
        setTimeout(() => {
            output.textContent = `Hello ${content} !`;
        }, 1000);
    }
})