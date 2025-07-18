const questions = [
  {
    question: "Quelle est la capital de la France ?",
    answers: ["Paris", "Londres", "Madrid"],
    correctIndex: 0,
  },
  {
    question: "Combien de pattes à une araignée ?",
    answers: ["6", "8", "10"],
    correctIndex: 1,
  },
  {
    question: "Combien de pattes à une araignée ?",
    answers: ["6", "8", "10"],
    correctIndex: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-text").textContent =
    currentQuestion.question;

  const buttons = document.querySelectorAll(".answer-button"); // correction ici
  buttons.forEach((button, index) => {
    // correction de 'Foreach' => 'forEach'
    button.textContent = currentQuestion.answers[index]; // correction de 'answer' => 'answers'
    button.disabled = false;
    button.style.backgroundColor = "";
  });
}

const buttons = document.querySelectorAll(".answer-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedIndex = parseInt(button.dataset.index); // correction de 'selecteddIndex' => 'selectedIndex'
    const correctIndex = questions[currentQuestionIndex].correctIndex;

    if (selectedIndex === correctIndex) {
      document.getElementById("feedback-text").textContent = "Bonne réponse !";
      score++;
      button.style.backgroundImage =
        "linear-gradient(135deg,rgb(21, 114, 0) 0%,rgb(36, 182, 0) 100%)";
    } else {
      document.getElementById("feedback-text").textContent =
        "Mauvaise réponse !";
      button.style.backgroundImage =
        "linear-gradient(135deg,rgb(199, 43, 0) 0%,rgb(255, 104, 54) 100%)";
    }

    buttons.forEach((b) => (b.disabled = true));
    document.getElementById("next-button").style.display = "inline-block";

    document.getElementById("progress-bar").style.width = `${
      ((currentQuestionIndex + 1) / questions.length) * 100
    }%`;
  });
});

document.getElementById("next-button").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    document.getElementById("feedback-text").textContent = "";
    document.getElementById("next-button").style.display = "none";
  } else {
    //document.getElementById("question-container").innerHTML = "Quiz terminé ! Score : " + score + " / " + questions.length; // correction 'lenght' => 'length'

    document.getElementById("question-container").innerHTML = `
  <p>Quiz terminé ! Score : ${score} / ${questions.length}</p>`;

    document.getElementById("feedback-text").textContent = "";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("restart-button").style.display = "inline-block";
  }
});

document.getElementById("restart-button").addEventListener("click", () => {
  location.reload();
});

// Démarre le quiz
showQuestion();

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-text").textContent =
    currentQuestion.question;

  const buttons = document.querySelectorAll(".answer-button");
  buttons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.disabled = false;
    button.style.backgroundImage = "";
  });






  document.getElementById("feedback-text").textContent = "";
  document.getElementById("next-button").style.display = "none";

  document.getElementById("progress-bar").style.width = `${
    (currentQuestionIndex / questions.length) * 100
  }%`;
}
