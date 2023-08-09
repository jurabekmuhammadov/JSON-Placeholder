const todosBlock = document.querySelector(".todos__container");
const userId = localStorage.getItem("userId");

function getTodosCard({ title, completed }) {
  return `
    <div class="todos-card">
      <p>${title}</p>
      <div class="complated">${completed === true ? `<img width="30px" src="assets/img/checked.png" alt="" />` : `<img width="30px" src="assets/img/notchecked.png" alt="" />`}</div>
    </div>
  `;
}

const getTodos = async () => {
  try {
    let todos = await getData(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    todos.map((user) => {
      todosBlock.innerHTML += getTodosCard(user)
    })
  } catch (err) {
    console.log(err);
  }
};
getTodos()