const form1 = document.getElementById("form");
const input1 = document.getElementById("input");
const ul1 = document.getElementById("ul");
const todo1 = JSON.parse(localStorage.getItem("todo_key"));

if (todo1) {
  todo1.forEach(todo => {
    li_add(todo);
  })
}

form1.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(input1.value);
  li_add();
});

function li_add(todo1) {
  let todoText = input1.value
  if (todo1) {
    todoText = todo1;
  }
  if (todoText.length > 0) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul1.appendChild(li);
    input1.value = "";
    saveDate();

  }
}


function saveDate() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(list => {
    todos.push(list.innerText);
  });
  localStorage.setItem('todo_key', JSON.stringify(todos));
}


//今まではリロードを押すとデータが初期化されていたのでプラウザにデータを保存する仕組み（ローカルストレージ）を活用したい.JSON形式で
//検証アプリのapplicationのlocalstrageに変数todosをtodos keyに保管する
//localStorage.setItem("todos key", JSON.stringify(todos));
//           データの保存             //
// localStorage.setItem(’key名’,'値');

//           データの取得             //
// localStorage.getItem(’key名’);
//localStorageを取得して定数化
//const todos1 = JSON.parse(localStorage.getItem(todoskey));
//todos1が空じゃなかったら liタグを追加
//if (todos1) {todos1.forEach(todo => {liadd(todo);})}
//liadd()に引数を入れる
//todoがあった時は変数todoTextにtodoを入れる

//ここでタイポconst todo1 = JSON.parse(localStorage.getItem("todo_key"));>""がなかった
//そして関数li_addの引数にtodosがはいってなかった
