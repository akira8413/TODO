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
  console.log(lists);

}



///   ローカルストレージ（ブラウザにデータを保存しておく仕組み）
//saveDate();を呼び出す
//saveDate();関数を作成
//画面に表示されたデータ＝HTML=document
//画面に表示されたデータを取る＝documentをとるdocument.querySelectorAll("li")※ミス>最初getElementByIDを指定してしまったがliはidタグではないのでquerySelectorAllらしい。特徴は配列になる
//それを定数listsに入れる
//検証ツールのconsolにてconst lists = document.querySelectorAll("li");
//配列を取り出して見るlists[0]
//lists[0].innerTextをすると配列のテキスト情報が取れる
//配列のテキスト情報を全て取得するには？
