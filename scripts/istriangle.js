'use strict';

const angles = document.querySelectorAll('.input-angle');
const btnCheck = document.querySelector('#btn-is-triangle');
const outputMessage = document.querySelector('.output');

const displayMessage = message => {
  outputMessage.innerText = message;
};

const validAngles = () => {
  for (const angle of angles) {
    if (angle.value === '') {
      displayMessage('Please enter values for all fields');
      return false;
    }
  }
  for (const angle of angles) {
    if (Number(angle.value) <= 0) {
      displayMessage('Angles should be greater than 0');
      return false;
    }
  }
  return true;
};

const isTriangle = () => {
  let sum = 0;
  for (const angle of angles) {
    sum += Number(angle.value);
  }
  return sum === 180;
};

btnCheck.addEventListener('click', () => {
  displayMessage('');
  if (validAngles()) {
    if (isTriangle()) {
      displayMessage('Yay! This is a triangle');
    } else {
      displayMessage('Oh No! This is not a triangle');
    }
  }
});
