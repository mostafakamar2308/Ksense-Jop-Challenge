let users;
const table = document.querySelector("#users");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    console.log(users);
    users = result;
    for (let i = 0; i < users.length; i++) {
      CreateTable(users[i].name, i + 1);
    }
  });

function CreateTable(name, id) {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let userName = document.createElement("td");
  userName.textContent = name;
  tr.appendChild(userName);
  tr.appendChild(createBtn(id));
}

function createBtn(id) {
  let btn = document.createElement("button");
  btn.id = `GetPosts-${id}`;
  btn.addEventListener("click", () => {
    getPosts(id);
  });
  btn.textContent = "Show Posts";
  return btn;
}
function getPosts(id) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((result) => {
      console.log(result.filter((post) => post.userId === id));
    });
}
