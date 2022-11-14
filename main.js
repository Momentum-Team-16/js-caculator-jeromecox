let buttons = document.querySelectorAll(".button");
let display = document.querySelector("#result");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equals");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    display.innerText += `${event.target.innerText}`;
  });
}

clear.addEventListener("click", function (event) {
  display.innerText = "";
});

equal.addEventListener("click", function (event) {
  display.innerText = eval(display.innerText);
});
