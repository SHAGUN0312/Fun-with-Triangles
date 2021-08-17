const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector("#output");
const reset = document.querySelector("#reset-btn");

const correctAnswers = [
  "Acute",
  "Equilateral",
  "2 congruent sides",
  "90º",
  "Right",
  "180 degrees",
];
document.addEventListener("submit", calculateScore);
reset.addEventListener("click", tryAgain);

function calculateScore(e) {
  e.preventDefault();
  output.style.display = "inline-block";
  quizForm.style.display = "none";
  reset.style.display = "block";

  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  output.innerHTML = "Your Score is: " + score;
}

function tryAgain() {
  quizForm.style.display = "block";
  output.style.display = "none";
  reset.style.display = "none";
}
