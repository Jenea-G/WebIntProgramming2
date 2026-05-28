// add the basic fetch flow
const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

loadPostBtn.addEventListener("click", () => {
  status.textContent = "Loading post...";
  output.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts/10")
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
      status.textContent = `Failed to load post: ${error.messag}`;
    });
});
