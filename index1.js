const form1 = document.getElementById("form");
const input1 = document.getElementById("input");
const ul1 = document.getElementById("ul");


form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(input1.value);
  liadd();
});

function liadd() {
  let todoText = input1.value
  if (todoText.length > 0) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul1.appendChild(li);
    input.value = "";
    saveDate();

  }
}


function saveDate() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(list => {
    todos.push(list.innerText);
  })


}



///    ループ　　　　　　　　////
//配列arrayを定義
//const array =[1,3,5];

//配列arrayの値をvalueに入れる
//array.forEach(value => {
//value * 2の値を出力
// console.log(value * 2);});
//2,6,10

//console.log(list.innerText);この処理を配列にまとめる  let todos = [];
//todosにlist.innerText（formからsubmitされliタグが作られブラウザに表示されている値）を追加していく
