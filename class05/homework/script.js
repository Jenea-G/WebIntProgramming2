// fetch a list of 5 users
const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

loadPostBtn.addEventListener("click", () => {
  // first status update
  status.textContent = "Loading post...";
  output.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setTimeout(() => {
        output.textContent = json.title;
        console.log(json);
        status.textContent = "The post has been loaded successfully.";
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
      status.textContent = "Couldn't load post.";
    });
});
