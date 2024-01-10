let buttons = document.querySelectorAll(".fa-solid");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let answer = e.target.parentElement.parentElement.nextElementSibling;
    answer.classList.toggle("show-answer");

    let plus = e.target.parentElement.querySelector(".fa-plus");
    let minus = e.target.parentElement.querySelector(".fa-minus");

    if (plus.style.display === "none") {
      plus.style.display = "block";
      minus.style.display = "none";
    } else {
      plus.style.display = "none";
      minus.style.display = "block";
    }
  });
});
