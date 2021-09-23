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

const initialLoad = () => {
  divMethodOne.style.display = 'none';
  divMethodTwo.style.display = 'none';
  btnMethodOne.style.color = '#5b21b6';
  btnMethodOne.style.backgroundColor = 'white';
  btnMethodTwo.style.color = '#5b21b6';
  btnMethodTwo.style.backgroundColor = 'white';
};

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

initialLoad();

btnMethodOne.addEventListener('click', () => {
  displayMessage('');
  divMethodOne.style.display = 'block';
  divMethodTwo.style.display = 'none';
  btnMethodOne.style.color = 'white';
  btnMethodOne.style.backgroundColor = '#5b21b6';
  btnMethodTwo.style.color = '#5b21b6';
  btnMethodTwo.style.backgroundColor = 'white';
  for (const side of sidesTwo) {
    side.value = '';
  }
});

btnMethodTwo.addEventListener('click', () => {
  displayMessage('');
  divMethodOne.style.display = 'none';
  divMethodTwo.style.display = 'block';
  btnMethodOne.style.color = '#5b21b6';
  btnMethodOne.style.backgroundColor = 'white';
  btnMethodTwo.style.color = 'white';
  btnMethodTwo.style.backgroundColor = '#5b21b6';
  for (const side of sidesOne) {
    side.value = '';
  }
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
    const sideOne = Number(sidesTwo[0].value);
    const sideTwo = Number(sidesTwo[1].value);
    const sideThree = Number(sidesTwo[2].value);
    if (
      sideOne + sideTwo > sideThree &&
      sideTwo + sideThree > sideOne &&
      sideOne + sideThree > sideTwo
    ) {
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
    } else {
      displayMessage(
        "The sides won't create a triangle. For a triangle, the sum of two sides should be greater than the third side."
      );
    }
  }
});
