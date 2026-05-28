// add the basic fetch flow
const loadPostBtn = document.getElementById("load-post-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");
const inputId = document.getElementById("post-id-input");

loadPostBtn.addEventListener("click", () => {
  status.textContent = "Loading post...";
  output.innerHTML = "";
  const id = Number(inputId.value);
  console.log(id);

  try {
    validatePostId(id);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((post) => {
        output.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `;
        status.textContent = "Post loaded successfully.";
      })
      .catch((error) => {
        status.textContent = `Failed to load post: ${error.message}`;
      })
      .finally(() => {
        status.textContent += " Request finished.";
      });
  } catch (error) {
    status.textContent = `Failed to load post: ${error.message}`;
  }
});

// Add synchronous validation

function validatePostId(id) {
  // throw an error if invalid
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Post ID must be a positive number");
  }
}
// testing it with try/catch
// try {
//   validatePostId(-1);
// } catch (error) {
//   console.log(error.message);
// }

clearBtn.addEventListener("click", () => {
  status.textContent = "Click the button to load a post";
  output.textContent = "";
  inputId.value = "";
});
