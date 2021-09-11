'use strict';

const sides = document.querySelectorAll('.input-side');
const btnCheck = document.querySelector('#btn-calc-hypotenuse');
const outputMessage = document.querySelector('.output');

const displayMessage = message => {
  outputMessage.innerText = message;
};

const validSides = () => {
  for (const side of sides) {
    if (side.value === '') {
      displayMessage('Please enter values for all fields');
      return false;
    }
  }
  for (const side of sides) {
    if (Number(side.value) <= 0) {
      displayMessage('Sides should be greater than 0');
      return false;
    }
  }
  return true;
};

btnCheck.addEventListener('click', () => {
  displayMessage('');
  if (validSides()) {
    let hypotenuseValue = 0;
    for (const side of sides) {
      hypotenuseValue += Math.pow(Number(side.value), 2);
    }
    hypotenuseValue = Math.sqrt(hypotenuseValue);
    displayMessage(
      `The length of hypotenuse is ${hypotenuseValue.toPrecision(3)}`
    );
  }
});
