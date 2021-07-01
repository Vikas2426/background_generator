const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.querySelector("body");
const css = document.querySelector("textarea");
const copy = document.querySelector("#copy-button");
const direction = document.querySelector('#direction');
const shape = document.querySelector('#shape');

const dirContainer = document.querySelector('#direction-container')
const shapeContainer = document.querySelector('#shape-container')
const linear = document.querySelector("#linear");
const radial = document.querySelector("#radial");


css.value = "background: linear-gradient(to right, red, blue) no-repeat;";
let gradientType = 'linear';
let directionValue = 'to right, ';

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
linear.addEventListener("click", ()=>{
  dirContainer.style.display = 'block';
  shapeContainer.style.display = 'none';
  gradientType = 'linear';
  directionValue = 'to right, ';
  changeBackground()}
  );
radial.addEventListener("click", ()=>{
  dirContainer.style.display = 'none';
  shapeContainer.style.display = 'block';
  gradientType = 'radial';
  directionValue = 'ellipse, ';

  changeBackground()});

direction.addEventListener('change', ()=>{
  directionValue = direction.value+',';
  changeBackground()
});
shape.addEventListener('change', ()=>{
  directionValue = shape.value+',';
  changeBackground()
});

function changeBackground() {
  text = body.style.background =
    `${gradientType}-gradient(${directionValue} ${color1.value}, ${color2.value}) no-repeat`;
  css.value = 'background: ' + text + ";";
}

function copyText() {
  css.select();
  document.execCommand("copy");
  alert('Code copied!');
}


copy.addEventListener("click", copyText);
