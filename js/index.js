const usersRow = document.querySelector(".users-container");

function getUserCard({
  id,
  name,
  username,
  address,
  company,
  email,
  phone,
  website,
}) {
  return `
  <div class="card">
  <div class="names">
    <h3>${name}</h3>
    <h4>${username}</h4>
  </div>
  <p class="user-address">
  Address: <a href="address">${address.city}, ${address.street}</a>
  </p>
  <div class="user-email">
    <span>Email: </span>
    <a href="mailto: ${email}" class="card-text">${email}</a>
  </div>
  <div class="user-phone">
    <span>Phone: </span>
    <a href="tel: ${phone}" class="card-text">${phone}</a>
  </div>
  <div class="user-website">
    <span>Website: </span>
    <a href="${website}" class="card-text">${website}</a>
  </div>
  <div class="bottom">
    <a href="todos.html" onClick="getId(${id})">Todos</a>
    <a href="posts.html" onClick="getId(${id})">Posts</a>
    <a href="album.html" onClick="getId(${id})">Album</a>
  </div>
</div>
  `;
}

const getUser = async () => {
  try {
    let users = await getData("https://jsonplaceholder.typicode.com/users");
    users.map((user) => {
      usersRow.innerHTML += getUserCard(user);
    });
  } catch (err) {
    console.log(err);
  }
};

getUser();

function getId(id) {
  localStorage.setItem("userId", id);
}
getId();
