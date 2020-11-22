"use strict";

require("./styles.css");

var counter = document.getElementById("counter");
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("sub");
var asyncBtn = document.getElementById("async");
var themeBtn = document.getElementById("theme");
var state = 0;

function render() {
  counter.textContent = state.toString();
}

addBtn.addEventListener("click", function () {
  state++;
  render();
});
subBtn.addEventListener("click", function () {
  state--;
  render();
});
asyncBtn.addEventListener("click", function () {
  setTimeout(function () {
    state++;
    render();
  }, 2000);
});
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
render();