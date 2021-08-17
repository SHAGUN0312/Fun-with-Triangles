const sides = document.querySelectorAll(".side-input");
const output = document.querySelector("#output");

function calculateHypotenuse(e) {
  e.preventDefault();
  output.style.display = "inline";
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse;
}

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

document.addEventListener("submit", calculateHypotenuse);
