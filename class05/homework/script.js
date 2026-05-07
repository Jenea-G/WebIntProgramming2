// fetch a post
const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

loadPostBtn.addEventListener("click", () => {
  // first status update
  status.textContent = "Loading post...";
  output.innerHTML = "";

  const randomInt = Math.floor(Math.random() * 100) + 1;

  fetch(`https://jsonplaceholder.typicode.com/posts/${randomInt}`)
    .then((response) => {
      console.log(response); // to check what i am getting

      if (response.ok === false) {
        throw new Error(`HTTP error: ${response.status}`); // will go to the .catch
      }

      return response.json();
    })
    .then((json) => {
      setTimeout(() => {
        console.log(json);

        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h2.textContent = json.title;
        h3.textContent = "Post #" + json.id;
        h3.classList = "text-lowercase";
        h2.classList.add("text-capitalize", "text-info-emphasis");
        p.textContent = json.body;

        output.append(h3, h2, p);

        status.textContent = "The post has been loaded successfully.";
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
      setTimeout(() => {
        status.textContent = "Couldn't load post.";
      }, 1500);
    });
});
