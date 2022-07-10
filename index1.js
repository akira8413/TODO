const form1 = document.getElementById("form");
const input1 = document.getElementById("input");
const ul1 = document.getElementById("ul");


form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(input1.value);
  liadd();
});

function liadd() {
  const li = document.createElement("li");
  li.innerText = input1.value;
  li.classList.add("list-group-item");
  ul1.appendChild(li);
  input.value = "";

}



//  ulタグにliタグを追加　　　　　/////
//formをsubmitしたタイミングでliタグを作るのでaddEventListenerの中にadd();を呼び出す
//その呼び出すadd();関数を作る
//function add(){}
//     liタグを作る　　　///
// const li = document.createElement("li");
//   liタグにいれる　textにinput1.value;を指定
//li.innerText = input1.value;
//liタグにデザインを当てるためにクラスを指定
//li.classList.add("list-group-item");
//  ulタグの子供として（子要素として）liタグを追加　　
//その為にulタグにアクセス
//const ul1 = document.getElementById("ul");
//取ってきたul1の子要素とするul1.appendChild(li);
//入力したら空にする
//input.value="";

//↑ここまでの処理をaddEventListenerにいれる、つまりformがsubmitされたら上記の処理をするということ
