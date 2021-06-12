"use strict";
const number = Math.floor(Math.random() * 20) + 1;
document.querySelector(".check").addEventListener("click", function () {
  const check = Number(document.querySelector(".guess").value);
  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };
  if (!check) displayMessage("❌ No Number Input");
  else if (number === check) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    document.querySelector(".highscore").textContent = Math.max(
      document.querySelector(".highscore").textContent,
      document.querySelector(".score").textContent
    );
    displayMessage("🎉 Correct Number");
  } else if (number != check) {
    if (Number(document.querySelector(".score").textContent) > 1) {
      document.querySelector(".score").textContent -= 1;
      displayMessage(
        number > check ? "Sorry ⬇ Low guess" : "Sorry ⬆ high guess"
      );
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
      displayMessage("Sorry! Game Over");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
