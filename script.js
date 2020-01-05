var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var css = document.querySelector("textarea");
var copy = document.querySelector("button");

css.value = "linear-gradient(to right, red, pink);";
function changeBackground() {
  text = body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.value = text + ";";
}

function copyText() {
  css.select();
  document.execCommand("copy");
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

copy.addEventListener("click", copyText);
