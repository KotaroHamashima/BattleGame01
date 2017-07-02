(function() {
  'use strict';


  function visiable()
{
  teki.textContent = "Yeah!";
}

  var next = document.getElementById("next");

  next.addEventListener("click", function() {
    var enemyAttack = Math.floor(Math.random() * 100);
    myHp.textContent = 100 - enemyAttack;
    text.textContent = "自分は" + enemyAttack + "のダメージをくらった！";

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

})();
