(function() {
  'use strict';

  var next = document.getElementById("next");

  next.addEventListener("click", function() {
    var enemyAttack = Math.floor(Math.random() * 100);
    myHp.textContent = 100 - enemyAttack;
    text.textContent = "自分は" + enemyAttack + "のダメージをくらった！"

    nextElement.id = "next1";
    next1.addEventListener("click", function() {
    text.textContent ="攻撃のパターンを選んでください。"
});



    // var nextElement = document.getElementById("next")
    // nextElement.id = "next1";
    // next1.addEventListener("click", function() {
    // text.textContent ="攻撃のパターンを選んでください。"
});

var next1 = document.getElementById("next1");

next1.addEventListener("click", function() {
  var myAttack = Math.floor(Math.random() * 100);
  enemyHp.textContent = 100 - myAttack;
  text.textContent = "相手は" + myAttack + "のダメージをくらった！"
});

var next2 = document.getElementById("next2");

next2.addEventListener("click", function() {
  var enemyAttack1 = Math.floor(Math.random() * 100);
  myHp = enemyAttack1 + enemtAttack;
  myHp.textContent = 100 - enemyAttack;
  text.textContent = "自分は" + enemyAttack + "のダメージをくらった！"

});


})();
