(function() {
  'use strict';

  var myHpRest = 0;
  var enemyHpRest = 0;
  var next = document.getElementById("next");

    next.addEventListener("click", function() {
    var enemyAttack = Math.floor(Math.random() * 100);
    myHp.textContent = 100 - enemyAttack;
    text.textContent = "自分は" + enemyAttack + "のダメージをくらった！";
    myHpRest = 100 - enemyAttack;
    // nextElement.id = "next1";
    // next1.addEventListener("click", function() {
    // text.textContent ="攻撃のパターンを選んでください。"
});



  var next1 = document.getElementById("next1");

  next1.addEventListener("click", function() {
  var myAttack = Math.floor(Math.random() * 100);
  enemyHp.textContent = 100 - myAttack;
  text.textContent = "相手に" + myAttack + "のダメージをくらわせた！"
  enemyHpRest = 100 - myAttack;
});

  var next2 = document.getElementById("next2");

  next2.addEventListener("click", function() {
  var enemyAttack2 = Math.floor(Math.random() * 100);
  myHp.textContent = myHpRest - enemyAttack2;
  myHpRest = myHpRest - enemyAttack2;
  if(myHpRest < 1) {
    text.textContent = "自分は" + enemyAttack2 + "のダメージをくらった！あなたの負けです。"
    myHp.textContent = "0 【GameOver】"
  }else {
    text.textContent = "自分は" + enemyAttack2 + "のダメージをくらった！";
  }

});

var next3 = document.getElementById("next3");

next3.addEventListener("click", function() {
var myAttack2 = Math.floor(Math.random() * 100);
enemyHp.textContent = enemyHpRest - myAttack2;
enemyHpRest = enemyHpRest - myAttack2;
if(enemyHpRest < 1) {
  text.textContent = "相手に" + myAttack2 + "のダメージをくらわせた！敵を倒しました！あなたの勝ちです。"
  enemyHp.textContent = "0 【You Win】";
}
});







})();
