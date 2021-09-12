'use strict';

const quizForm = document.querySelector('.quiz-form');
const btnSubmit = document.querySelector('#btn-submit');
const btnReset = document.querySelector('#btn-reset');
const outputMessage = document.querySelector('.output');

const correctAnswers = [
  'Right',
  '36',
  'Equilateral Triangle',
  'Corresponding angles are congurent',
  'Hypotenuse',
];

const displayMessage = message => {
  outputMessage.innerText = message;
};

quizForm.addEventListener('submit', event => {
  event.preventDefault();
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (const value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  if (score > 0) {
    displayMessage(`Yay! Your score is ${score}`);
  } else {
    displayMessage('Please Try Again!');
  }
});

quizForm.addEventListener('reset', () => {
  displayMessage('');
});
