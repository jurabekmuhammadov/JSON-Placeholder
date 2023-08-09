const commentsBlock = document.querySelector(".comments__container");
const postId = localStorage.getItem("postId");

function getCommentsCard({ email, name, body }) {
  return `
    <div class="comment-card">
      <h4>${email}</h4>
      <h5>${name}</h5>
      <p>${body}</p>
    </div>
  `;
}

const getComments = async () => {
  try {
    let comment = await getData(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    comment.map((comment) => {
      commentsBlock.innerHTML += getCommentsCard(comment);
    });
  } catch (err) {
    console.log(err);
  }
};
getComments();
