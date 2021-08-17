const inputs = document.querySelectorAll(".input");
const output = document.querySelector("#output");

document.addEventListener("submit", calculateArea);

function calculateArea(e) {
  e.preventDefault();
  output.style.display = "inline";
  const area = multiplySides(Number(inputs[0].value), Number(inputs[1].value));
  output.innerText = "The area of the triangle is : " + area + " ㎠";
}

function multiplySides(a, b) {
  const result = 0.5 * a * b;
  return result;
}
