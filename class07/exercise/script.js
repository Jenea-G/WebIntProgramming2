// bind DOM

const loadBtn = document.getElementById("load-post");
const statusMsg = document.querySelector(".status");
const placeholder = document.querySelector(".placeholder");

loadBtn.addEventListener("click", () => {
  statusMsg.textContent = "The post is loading...";

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => {
      setTimeout(() => {
        placeholder.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
        statusMsg.textContent = "The post is loaded successfully";
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
      statusMsg.textContent = "Post loading failed.";
    });
});
