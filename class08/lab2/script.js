// connect DOM
const loadBtn = document.getElementById("load-users");
const clearBtn = document.getElementById("clear-data");
const cardsHolder = document.getElementById("cards-holder");
const statusMsg = document.getElementById("status-msg");

function setStatus(element, status) {
  element.classList.remove("alert-success", "alert-secondary", "alert-danger");
  if (status === "success") {
    element.textContent = "Data is loaded successfully!";
    element.classList.add("alert-success");
  } else if (status === "loading") {
    element.textContent = "Data is loading ...";
    element.classList.add("alert-secondary");
  } else if (status === "error") {
    element.textContent = "Data loading failed.";
    element.classList.add("alert-danger");
  } else {
    element.textContent = "Ready to load data.";
    element.classList.add("alert-secondary");
  }
}

loadBtn.addEventListener("click", () => {
  setStatus(statusMsg, "loading");
  cardsHolder.innerHTML = "";
  loadUsers(5, cardsHolder);
});

clearBtn.addEventListener("click", () => {
  setStatus(statusMsg, "");
  cardsHolder.innerHTML = "";
});

function loadUsers(n, container) {
  for (let i = 0; i <= n; i++) {
    fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((user) => {
        console.log(user);
        renderUserCard(user, container);
        setStatus(statusMsg, "success");
      })
      .catch((error) => {
        console.log(error);
        setStatus(statusMsg, "error");
      });
  }
}

function renderUserCard(user, container) {
  const cardContainer = document.createElement("div");
  cardContainer.classList = "col col-md-6 m-0 p-2";
  const card = document.createElement("div");
  card.classList = "card";
  const body = document.createElement("div");
  body.classList = "card-body";
  const title = document.createElement("h5");
  title.classList = "card-title";
  const text = document.createElement("p");
  text.classList = "card-text";
  const postsBtn = document.createElement("a");
  postsBtn.classList = "btn btn-secondary";
  const postsBody = document.createElement("div");
  postsBody.classList = "card-body";
  const postsContainer = document.createElement("ul");
  postsContainer.classList = "list-group list-group-flush";
  const postStatus = document.createElement("p");
  postStatus.classList = "alert";

  postsBody.append(postStatus, postsContainer);
  body.append(title, text, postsBtn);
  card.append(body, postsBody);
  cardContainer.append(card);
  container.append(cardContainer);

  postsBtn.textContent = "Load Posts";
  postsBtn.id = `postsBtn-${user.id}`;
  title.textContent = user.name;
  text.innerHTML = `Email: ${user.email} <br>
                Phone: ${user.phone} <br>
                City: ${user.address.city} <br>
                Company name: ${user.company.name} <br>
                `;

  postsBtn.addEventListener(
    "click",
    () => {
      loadPostsForUser(user, postsContainer, postStatus);
    },
    { once: true },
  );
}

function loadPostsForUser(user, postsContainer, postStatus) {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((posts) => {
      console.log(posts);
      setStatus(postStatus, "success");
      renderPosts(posts, postsContainer, user);
    })
    .catch((error) => {
      console.log(error);
      setStatus(postStatus, "error");
    });
}

function renderPosts(posts, postsContainer, user) {
  let userPosts = [];
  for (const post of posts) {
    if (post.userId === user.id) userPosts.push(post);
  }
  console.log(userPosts);

  for (let i = 0; i < 3; i++) {
    const thePost = userPosts[i];

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const title = document.createElement("h6");
    title.classList.add("text-primary", "text-capitalize");
    const p = document.createElement("p");

    li.append(title, p);
    title.textContent = thePost.title;
    p.textContent = thePost.body;
    postsContainer.append(li);
  }
}
// setStatus(message, type)
// clearDashboard()
// loadUsers()
// renderUserCard(user)
// loadPostsForUser(user, postsContainer)
// renderPosts(posts, container)
