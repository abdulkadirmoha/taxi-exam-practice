const testSize = 50;

let currentDeck = [];
let currentIndex = 0;
let answers = [];
let testComplete = false;

const progressText = document.querySelector("#progressText");
const correctCount = document.querySelector("#correctCount");
const missedCount = document.querySelector("#missedCount");
const answeredCount = document.querySelector("#answeredCount");
const emptyState = document.querySelector("#emptyState");
const completeState = document.querySelector("#completeState");
const completeSummary = document.querySelector("#completeSummary");
const completeRestartButton = document.querySelector("#completeRestartButton");
const flashcard = document.querySelector("#flashcard");
const sourceText = document.querySelector("#sourceText");
const modeText = document.querySelector("#modeText");
const questionText = document.querySelector("#questionText");
const questionImageWrap = document.querySelector("#questionImageWrap");
const questionImage = document.querySelector("#questionImage");
const choiceList = document.querySelector("#choiceList");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const reportSection = document.querySelector("#reportSection");
const reportBody = document.querySelector("#reportBody");

function shuffleQuestions(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function buildChoices(question) {
  const choices = [question.correctAnswer];

  if (question.userAnswer && question.userAnswer !== question.correctAnswer) {
    choices.push(question.userAnswer);
  }

  return shuffleQuestions(choices);
}

function startTest() {
  currentDeck = shuffleQuestions(questions).slice(0, Math.min(testSize, questions.length));
  currentIndex = 0;
  answers = currentDeck.map(() => null);
  testComplete = false;
  render();
}

function render() {
  const hasQuestions = currentDeck.length > 0;

  updateStats();
  emptyState.classList.toggle("hidden", hasQuestions);
  completeState.classList.toggle("hidden", !testComplete);
  reportSection.classList.toggle("hidden", !testComplete);
  flashcard.classList.toggle("hidden", !hasQuestions || testComplete);
  previousButton.disabled = !hasQuestions || testComplete || currentIndex === 0;
  nextButton.disabled = !hasQuestions || testComplete || !answers[currentIndex];
  nextButton.textContent = currentIndex === currentDeck.length - 1 ? "Finish test" : "Next question";

  if (!hasQuestions) {
    progressText.textContent = "Question 0 / 0";
    return;
  }

  if (testComplete) {
    renderReport();
    return;
  }

  const currentQuestion = currentDeck[currentIndex];

  progressText.textContent = `Question ${currentIndex + 1} / ${currentDeck.length}`;
  sourceText.textContent = `${currentQuestion.source} - Question ${currentQuestion.originalNumber}`;
  modeText.textContent = "50 question test";
  questionText.textContent = currentQuestion.question;

  questionImageWrap.classList.toggle("hidden", !currentQuestion.image);
  questionImage.src = currentQuestion.image || "";
  questionImage.alt = currentQuestion.image
    ? `Image for ${currentQuestion.source} question ${currentQuestion.originalNumber}`
    : "";

  renderChoices(currentQuestion);
}

function renderChoices(question) {
  choiceList.innerHTML = "";
  const selectedAnswer = answers[currentIndex];
  const choices = question.choices || buildChoices(question);
  question.choices = choices;

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice;

    if (selectedAnswer === choice) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      answers[currentIndex] = choice;
      render();
    });

    choiceList.appendChild(button);
  });
}

function updateStats() {
  const answered = answers.filter(Boolean).length;
  const correct = answers.filter((answer, index) => {
    return answer && currentDeck[index] && answer === currentDeck[index].correctAnswer;
  }).length;
  const missed = answered - correct;

  correctCount.textContent = correct;
  missedCount.textContent = missed;
  answeredCount.textContent = answered;
}

function goToNextQuestion() {
  if (!answers[currentIndex]) {
    return;
  }

  if (currentIndex === currentDeck.length - 1) {
    testComplete = true;
    render();
    return;
  }

  currentIndex += 1;
  render();
}

function goToPreviousQuestion() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
}

function renderReport() {
  const correct = answers.filter((answer, index) => answer === currentDeck[index].correctAnswer).length;
  const missed = currentDeck.length - correct;

  progressText.textContent = `Question ${currentDeck.length} / ${currentDeck.length}`;
  completeSummary.textContent = `Correct: ${correct}. Missed: ${missed}. Total: ${currentDeck.length}.`;
  reportBody.innerHTML = "";

  currentDeck.forEach((question, index) => {
    const selectedAnswer = answers[index] || "No answer";
    const isCorrect = selectedAnswer === question.correctAnswer;
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${escapeHtml(question.question)}</td>
      <td>${escapeHtml(selectedAnswer)}</td>
      <td>${escapeHtml(question.correctAnswer)}</td>
      <td><span class="result-pill ${isCorrect ? "correct" : "wrong"}">${isCorrect ? "Oikein" : "Virheellinen"}</span></td>
    `;

    reportBody.appendChild(row);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

nextButton.addEventListener("click", goToNextQuestion);
previousButton.addEventListener("click", goToPreviousQuestion);
restartButton.addEventListener("click", startTest);
completeRestartButton.addEventListener("click", startTest);

startTest();
