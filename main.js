let buttons = document.querySelectorAll(".for-display");
let display = document.querySelector("#result");
let clear = document.querySelector("#clear");

// for (let for-display of buttons) {
//   buttons.addEventListener("click", function (event) {
//     display.innerText += event.target.innerText;
//   })
// }
clear.addEventListener("click", function (event) {
  display.innerText = "";
});
