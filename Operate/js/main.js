(function() {
  'use strict';

  var myHpRest = 0;
  var enemyHpRest = 0;

//ーーーーーーーーーーーーーー相手の攻撃ターン１ーーーーーーーーーーーーーーーーーー

  var next = document.getElementById("next");

    next.addEventListener("click", function() {
    var enemyAttack = Math.floor(Math.random() * 50);
    myHp.textContent = 100 - enemyAttack;
    text.textContent = "自分は" + enemyAttack + "のダメージをくらった！";
    myHpRest = 100 - enemyAttack;
    // nextElement.id = "next1";
    // next1.addEventListener("click", function() {
    // text.textContent ="攻撃のパターンを選んでください。"
});


//ーーーーーーーーーーーーーー相手の攻撃ターン２ーーーーーーーーーーーーーーーーーー



var next4 = document.getElementById("next4");

next4.addEventListener("click", function() {
var enemyAttack = Math.floor(Math.random() * 50);
myHpRest = myHpRest - enemyAttack;
if(myHpRest < 1) {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！あなたの負けです。"
  myHp.textContent = "0 【GameOver】"

  var next5Element = document.getElementById("next5");
  next5Element.className = "finish"; //クラスネームfinish
  var next6Element = document.getElementById("next6");
  next6Element.className = "finish"; //クラスネームfinish
  var next7Element = document.getElementById("next7");
  next7Element.className = "finish"; //クラスネームfinish

}else {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！";
  myHp.textContent = myHpRest
}

});


//ーーーーーーーーーーーーーー相手の攻撃ターン３ーーーーーーーーーーーーーーーーーー


var next8 = document.getElementById("next8");

next8.addEventListener("click", function() {
var enemyAttack = Math.floor(Math.random() * 50);
myHpRest = myHpRest - enemyAttack;
if(myHpRest < 1) {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！あなたの負けです。"
  myHp.textContent = "0 【GameOver】"

  var next9Element = document.getElementById("next9");
  next9Element.className = "finish"; //クラスネームfinish
  var next10Element = document.getElementById("next10");
  next10Element.className = "finish"; //クラスネームfinish
  var next11Element = document.getElementById("next11");
  next11Element.className = "finish"; //クラスネームfinish


}else {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！";
  myHp.textContent = myHpRest
}

});


//ーーーーーーーーーーーーーー相手の攻撃ターン４ーーーーーーーーーーーーーーーーーー

var next12 = document.getElementById("next12");

next12.addEventListener("click", function() {
var enemyAttack = Math.floor(Math.random() * 50);
myHpRest = myHpRest - enemyAttack;
if(myHpRest < 1) {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！あなたの負けです。"
  myHp.textContent = "0 【GameOver】"

  var next13Element = document.getElementById("next13");
  next13Element.className = "finish"; //クラスネームfinish
  var next14Element = document.getElementById("next14");
  next14Element.className = "finish"; //クラスネームfinish
  var next15Element = document.getElementById("next15");
  next15Element.className = "finish"; //クラスネームfinish


}else {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！";
  myHp.textContent = myHpRest
}

});



//ーーーーーーーーーーーーーー相手の攻撃ターン5ーーーーーーーーーーーーーーーーーー

var next16 = document.getElementById("next16");

next16.addEventListener("click", function() {
var enemyAttack = Math.floor(Math.random() * 50);
myHpRest = myHpRest - enemyAttack;
if(myHpRest < 1) {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！あなたの負けです。"
  myHp.textContent = "0 【GameOver】"

  var next17Element = document.getElementById("next17");
  next17Element.className = "finish"; //クラスネームfinish
  var next18Element = document.getElementById("next1");
  next18Element.className = "finish"; //クラスネームfinish
  var next19Element = document.getElementById("next19");
  next19Element.className = "finish"; //クラスネームfinish


}else {
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！";
  myHp.textContent = myHpRest
}

});










//ーーーーーーーーーーーーー自分の攻撃ターン１ーーーーーーーーーーーーーーーーーーー

  //バランス攻撃
  var next1 = document.getElementById("next1");

  next1.addEventListener("click", function() {
  var myAttack = Math.floor(Math.random() * 60);
  enemyHp.textContent = 100 - myAttack;
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
  enemyHpRest = 100 - myAttack;
});

//普通攻撃
var next2 = document.getElementById("next2");

next2.addEventListener("click", function() {
var myAttack = 30;
enemyHp.textContent = 100 - myAttack;
text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
enemyHpRest = 100 - myAttack;
});

//強攻撃
var next3 = document.getElementById("next3");

next3.addEventListener("click", function() {
var a = Math.random() * 100;
if(a > 70) {
  var myAttack = 100
  text.textContent = "強攻撃が成功した！相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next4Element = document.getElementById("next4");
  next4Element.className = "finish";

}else {
  myAttack = Math.floor(Math.random() * 10);
  text.textContent = "強攻撃が失敗した。相手に" + myAttack + "のダメージをくらわせた！"
  enemyHp.textContent = 100 - myAttack;
}
enemyHpRest = 100 - myAttack;
});

//ーーーーーーーーーーーーー自分の攻撃ターン２ーーーーーーーーーーーーーーーーーーー

//バランス攻撃
var next5 = document.getElementById("next5");

next5.addEventListener("click", function() {
var myAttack = Math.floor(Math.random() * 60);
enemyHp.textContent = enemyHpRest - myAttack;
enemyHpRest = enemyHpRest - myAttack;
if(enemyHpRest < 1) {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next8Element = document.getElementById("next8");
  next8Element.className = "finish";

}else {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
}
});

//普通攻撃
var next6 = document.getElementById("next6");

next6.addEventListener("click", function() {
var myAttack = 30;
enemyHp.textContent = enemyHpRest - myAttack;
enemyHpRest = enemyHpRest - myAttack;
if(enemyHpRest < 1) {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next8Element = document.getElementById("next8");
  next8Element.className = "finish";

}else {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
}
});

//強攻撃
var next7 = document.getElementById("next7");

next7.addEventListener("click", function() {
var a = Math.random() * 100;
if(a > 70) {
  var myAttack = 100
  text.textContent = "強攻撃が成功した！相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next8Element = document.getElementById("next8");
  next4Element.className = "finish";

}else {
  myAttack = Math.floor(Math.random() * 10);
  text.textContent = "強攻撃が失敗した。相手に" + myAttack + "のダメージをくらわせた！"
  enemyHp.textContent = enemyHpRest - myAttack;
}
enemyHpRest = 100 - myAttack;
});



//ーーーーーーーーーーーーー自分の攻撃ターン３ーーーーーーーーーーーーーーーーーーー


//バランス攻撃
var next9 = document.getElementById("next9");

next9.addEventListener("click", function() {
var myAttack = Math.floor(Math.random() * 60);
enemyHp.textContent = enemyHpRest - myAttack;
enemyHpRest = enemyHpRest - myAttack;
if(enemyHpRest < 1) {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next12Element = document.getElementById("next12");
  next12Element.className = "finish";

}else {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
}
});

//普通攻撃
var next10 = document.getElementById("next10");

next10.addEventListener("click", function() {
var myAttack = 30;
enemyHp.textContent = enemyHpRest - myAttack;
enemyHpRest = enemyHpRest - myAttack;
if(enemyHpRest < 1) {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next12Element = document.getElementById("next12");
  next12Element.className = "finish";

}else {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
}
});

//強攻撃
var next11 = document.getElementById("next11");

next11.addEventListener("click", function() {
var a = Math.random() * 100;
if(a > 70) {
  var myAttack = 100
  text.textContent = "強攻撃が成功した！相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next12Element = document.getElementById("next12");
  next12Element.className = "finish";

}else {
  myAttack = Math.floor(Math.random() * 10);
  text.textContent = "強攻撃が失敗した。相手に" + myAttack + "のダメージをくらわせた！"
  enemyHp.textContent = enemyHpRest - myAttack;
}
enemyHpRest = 100 - myAttack;
});






//ーーーーーーーーーーーーー自分の攻撃ターン４ーーーーーーーーーーーーーーーーーーー


//バランス攻撃
var next13 = document.getElementById("next13");

next13.addEventListener("click", function() {
var myAttack = Math.floor(Math.random() * 60);
enemyHp.textContent = enemyHpRest - myAttack;
enemyHpRest = enemyHpRest - myAttack;
if(enemyHpRest < 1) {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next16Element = document.getElementById("next16");
  next16Element.className = "finish";

}else {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
}
});

//普通攻撃
var next14 = document.getElementById("next14");

next14.addEventListener("click", function() {
var myAttack = 30;
enemyHp.textContent = enemyHpRest - myAttack;
enemyHpRest = enemyHpRest - myAttack;
if(enemyHpRest < 1) {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next16Element = document.getElementById("next16");
  next16Element.className = "finish";

}else {
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
}
});

//強攻撃
var next15 = document.getElementById("next15");

next15.addEventListener("click", function() {
var a = Math.random() * 100;
if(a > 70) {
  var myAttack = 100
  text.textContent = "強攻撃が成功した！相手に" + myAttack + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";

  var next16Element = document.getElementById("next16");
  next16Element.className = "finish";

}else {
  myAttack = Math.floor(Math.random() * 10);
  text.textContent = "強攻撃が失敗した。相手に" + myAttack + "のダメージをくらわせた！"
  enemyHp.textContent = enemyHpRest - myAttack;
}
enemyHpRest = 100 - myAttack;
});





})();
