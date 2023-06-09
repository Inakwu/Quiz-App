const quizData = [
  {
    id: "a",
    question: "What is the capital city of Portugal?",
    a: "Nazare",
    b: "lisbon",
    c: "Tomar",
    d: "Braga",
    correct: "b",
  },
  {
    id: "b",
    question: "which language runs in a web browser?",
    a: "Java",
    b: "c++",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    id: "c",
    question: "What is the lifespan of a dragonfly?",
    a: "Six(6) months",
    b: "Two(2) years",
    c: "Five(5) weeks",
    d: "Twenty-four(24) hours",
    correct: "d",
  },
  {
    id: "d",
    question: "What is the chemical symbol for silver?",
    a: "C2o",
    b: "H2o",
    c: "Ag",
    d: "Xau",
    correct: "c",
  },
];

const answers = ["lisbon", "Javascript", "Twenty-four(24) hours", "Ag"];

const container = document.getElementById("quiz");
const quizContainer = document.querySelector(".quiz-container");
const banner = document.querySelector(".banner");
const questionText = document.querySelector(".question");
const options = document.querySelectorAll(".answer");
const submitBtn = document.querySelector(".submit-btn");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const introOverlay = document.querySelector(".intro-overlay");
const startBtn = document.querySelector(".start-btn");

let currentItem = 0;
let score = 0;

// load event
window.addEventListener("DOMContentLoaded", function () {
  introOverlay.classList.toggle("open-quiz");
});

// Start Button
startBtn.addEventListener("click", function () {
  loadQuestions();
  quizContainer.classList.remove("hide");
  submitBtn.classList.remove("hide");
  introOverlay.classList.add("hide");
});

function loadQuestions() {
  const item = quizData[currentItem];
  questionText.textContent = item.question;
  a_text.textContent = item.a;
  b_text.textContent = item.b;
  c_text.textContent = item.c;
  d_text.textContent = item.d;
}

submitBtn.addEventListener("click", function () {
  options.forEach(function (option) {
    if (option.checked === true && currentItem < quizData.length) {
      // console.log(option.nextElementSibling.textContent);
      if (option.nextElementSibling.textContent === answers[currentItem]) {
        currentItem++;

        if (currentItem > quizData.length - 1) {
          currentItem = 0;
          score++;
          banner.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
      
          <button onclick="location.reload()" class="submit-btn">
            Reload
          </button>
          `;
          return;
        }
        score++;
        option.checked = false;
        loadQuestions();
      } else {
        currentItem++;
        if (currentItem > quizData.length - 1) {
          currentItem = 0;
          banner.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
      
          <button onclick="location.reload()" class="submit-btn">
            Reload
          </button>
          `;
          return;
        }
        option.checked = false;
        loadQuestions();
      }
    }
  });
});
