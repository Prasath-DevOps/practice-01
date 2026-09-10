let count = 0;

const button = document.getElementById("count-button");
const display = document.getElementById("count-display");

button.addEventListener("click", function () {
  count++;
  display.textContent = count;
});