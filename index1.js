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
    li.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      li.remove();
      saveDate();
    });
    li.addEventListener("click", function () {
      li.classList.toggle("text-decoration-line-through");
    });
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


//TODOを削除できる機能
//liを右クリックのされたらfunctionを実行でふぉるといべんとを発生させない様にして、li.removeで削除する。関数saveDate();でlocalstrageの方も削除
//li.addEventListener("contextmenu",function
//(event){
//  event.preventDefault();
//  li.remove();
//  saveDate();
//});
//  event.preventDefault();は発生させたくないイベントがある時だけ

//  li.classList.toggle("text-decoration-line-through");
//toggle=liにtext-decoration-line-throughというclassがついてなかったらクラスをつけるし、ついていたらなにもしない。という風に分岐できる。若干ifに似てる感じ
