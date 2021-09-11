'use strict';

const sidesOne = document.querySelectorAll('.input-side-1');
const sidesTwo = document.querySelectorAll('.input-side-2');
const btnCalcOne = document.querySelector('#btn-calc-area-method-1');
const btnCalcTwo = document.querySelector('#btn-calc-area-method-2');
const btnMethodOne = document.querySelector('#area-calc-one');
const btnMethodTwo = document.querySelector('#area-calc-two');
const divMethodOne = document.querySelector('.methods-one');
const divMethodTwo = document.querySelector('.methods-two');
const outputMessage = document.querySelector('.output');

divMethodOne.style.display = 'none';
divMethodTwo.style.display = 'none';

const displayMessage = message => {
  outputMessage.innerText = message;
};

const validateFn = elements => {
  for (const element of elements) {
    if (element.value === '') {
      displayMessage('Please enter values for all fields');
      return false;
    }
  }
  for (const element of elements) {
    if (Number(element.value) <= 0) {
      displayMessage('Sides should be greater than 0');
      return false;
    }
  }
  return true;
};

btnMethodOne.addEventListener('click', () => {
  displayMessage('');
  divMethodOne.style.display = 'block';
  divMethodTwo.style.display = 'none';
});

btnMethodTwo.addEventListener('click', () => {
  displayMessage('');
  divMethodOne.style.display = 'none';
  divMethodTwo.style.display = 'block';
});

btnCalcOne.addEventListener('click', () => {
  displayMessage('');
  if (validateFn(sidesOne)) {
    let area = 0.5;
    for (const side of sidesOne) {
      area *= Number(side.value);
    }
    displayMessage(`The area of triangle is ${area.toPrecision(3)}`);
  }
});

btnCalcTwo.addEventListener('click', () => {
  displayMessage('');
  if (validateFn(sidesTwo)) {
    let semiPerimeter = 0;
    for (const side of sidesTwo) {
      semiPerimeter += Number(side.value);
    }
    semiPerimeter /= 2;
    let area = semiPerimeter;
    for (const side of sidesTwo) {
      area *= semiPerimeter - Number(side.value);
    }
    area = Math.sqrt(area);
    displayMessage(`The area of triangle is ${area.toPrecision(3)}`);
  }
});
