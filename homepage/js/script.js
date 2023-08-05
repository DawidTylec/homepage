let buttonTrivia = document.querySelector(".js-aside__buttonTrivia");
let buttonStatus = 0;

buttonTrivia.addEventListener("click", () => {
  if (buttonStatus === 0) {
    document.querySelector(".js-aside__trivia").style.visibility = "visible";
    document.querySelector(".js-aside__trivia").style.fontSize = "medium";
    buttonTrivia.textContent = "Ukryj ciekawostkę";
    buttonStatus = 1;
  } else {
    document.querySelector(".js-aside__trivia").style.visibility = "hidden";
    document.querySelector(".js-aside__trivia").style.fontSize = "0%";
    buttonTrivia.textContent = "Chcesz zobaczyć ciekawostkę?";
    buttonStatus = 0;
  }
});
