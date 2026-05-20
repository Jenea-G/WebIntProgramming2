import { fetchPosts, fetchUsers } from "./api.js";
import { renderUsers, renderPosts } from "./ui.js";
import { clearUsers } from "./ui.js";

const loadUsersBtn = document.getElementById("load-users-btn");
const status = document.getElementById("status");
const usersContainer = document.getElementById("users-container");
const postsContainer = document.getElementById("posts-container");
const clearUsersBtn = document.getElementById("clear-btn");

loadUsersBtn.addEventListener("click", () => {
  status.textContent = "Loading users...";

  fetchUsers()
    .then((users) => {
      renderUsers(users, usersContainer);
      status.textContent = "Users loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load users: ${error.message}`;
    });

  fetchPosts()
    .then((posts) => {
      renderPosts(posts, postsContainer);
      status.textContent = "Data loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load posts: ${error.message}`;
    });
});

clearUsersBtn.addEventListener("click", () => {
  status.textContent = "Click the button to load data.";
  clearUsers(usersContainer);
});
