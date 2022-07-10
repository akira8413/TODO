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

  }

}


//   空の状態でエンターを押してもliが追加されない様にしたい条件分岐　　　　　//
//もしformが空だったらliタグを追加しないとしたい=formに値が入力された時だけliadd関数の処理をしたい
//その前にinput1.valueを変数（let)宣言するtodoText変数、これによりliがとってくるtextも変数化する
//let todoText = input1.value
//li.innerText = todoText;
//  if (todoText.length > 0)
//この答えはtrue falseで帰ってくる
//if (todoText)これでもいいらしい→詳しくは暗黙的型変換
