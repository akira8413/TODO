const form1 = document.getElementById("form");
const input1 = document.getElementById("input");


form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(input1.value)
})



























//documentについて
//document
//document.getElementById("form")
//document.getElementById("form").value


//     No1.form入力された値をjsで取得する　　　　　////
//id formをform1に入れる
//const form1 = document.getElementById("form");
//
//form.addEventListener('submit',function(){})
//id inputをinput1に入れる
//const input1 = document.getElementById("input");

//(input1.value)をfunctionに追加=input1の中身のvalueだけ表示
//form.addEventListener('submit', function () {console.log(input1.value);})

//デフォルトのイベントを発生しないようにするためfunctionの引数にevent。そしてevent.preventDefault();追加
//form.addEventListener('submit', function (event) {event.preventDefault();console.log('input1.value')})
