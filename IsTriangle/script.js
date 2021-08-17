const inputs = document.querySelectorAll(".angle-input");
const output = document.querySelector("#output");

document.addEventListener("submit", checkResult);

function calculateSum(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function checkResult(e) {
  e.preventDefault();
  output.style.display = "inline";
  const sumOfAngles = calculateSum(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (sumOfAngles === 180) {
    output.innerText = "Yayy! These angles form a triangle.";
  } else {
    output.innerText = "Oh no! These angles do not form a triangle";
  }
}
