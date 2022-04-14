let users;
const table = document.querySelector("#users");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
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
  tr.appendChild(createBtn(id, name));
}

function createBtn(id, name) {
  let btn = document.createElement("button");
  btn.className = `GetPosts`;
  btn.addEventListener("click", () => {
    getPosts(id);
  });
  btn.textContent = "Show Posts of " + name;
  return btn;
}
function getPosts(id) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((result) => {
      let container = document.querySelector("#container");
      container.innerHTML = "";
      container.style.display = "flex";
      let R = result.filter((post) => post.userId === id);
      console.log(R);
      R.forEach((post) => {
        let postCont = document.createElement("div");
        let title = document.createElement("h3");
        title.textContent = post.title;
        postCont.appendChild(title);
        let body = document.createElement("p");
        body.textContent = post.body;
        postCont.appendChild(body);
        container.appendChild(postCont);
      });
      let btn = document.createElement("button");
      btn.textContent = "Close Posts";
      btn.addEventListener("click", function () {
        container.style.display = "none";
      });
      container.appendChild(btn);
    });
}
function makeContainer() {}
