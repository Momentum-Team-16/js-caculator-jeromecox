let buttons = document.querySelectorAll(".button");
let display = document.querySelector("#result");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equals");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    display.innerText += `${event.target.innerText}`;
  });
}

// clear button works
clear.addEventListener("click", function (event) {
  display.innerText = "";
});

equal.addEventListener("click", function (event) {
  // doing this now to make EQUAL click not display equal character
  let equation = display.innerText;
  let answer = eval(equation);
  display.innerText = "";
  display.innerText = answer;
});
