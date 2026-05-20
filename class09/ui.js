export function renderUsers(users, container) {
  container.innerHTML = "";
  container.classList.add("grid");

  users.slice(0, 5).forEach((user) => {
    const article = createUserCard(user);
    container.appendChild(article);
  });
}

export function clearUsers(container) {
  container.innerHTML = "";
}

export function createUserCard(user) {
  const article = document.createElement("article");
  article.classList.add("card");
  article.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;
  return article;
  // return a DOM element
}
