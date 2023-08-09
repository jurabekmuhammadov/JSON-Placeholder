const postsBlock = document.querySelector(".posts__container");
const userId = localStorage.getItem("userId");

function getPostsCard({ id, title, body }) {
  return `
    <div class="posts-card">
      <h4>${title}</h4>
      <p>${body}</p>
      <a href="comments.html" onClick="getPostId(${id})">Comments</a>
    </div>
  `;
}

const getPosts = async () => {
  try {
    let posts = await getData(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    posts.map((post) => {
      postsBlock.innerHTML += getPostsCard(post);
    });
  } catch (err) {
    console.log(err);
  }
};
getPosts();

function getPostId(id) {
  localStorage.setItem("postId", id)
}
getPostId();