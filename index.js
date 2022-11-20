/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
// eslint-disable-next-line import/extensions
import { getResistorOhms } from './resistor.js';

const bands = {
  color1: 'red',
  color2: 'green',
  color3: 'violet',
  color4: 'gold',
};

const calculator = document.querySelector('.calculator');
calculator.addEventListener('click', (targetted) => {
  const bandOne = document.querySelector('#b0');
  const bandTwo = document.querySelector('#b1');
  const bandThree = document.querySelector('#b2');
  const bandFour = document.querySelector('#b3');
  const targettedParent = targetted.target.parentElement.id;

  if (targettedParent === 'color0') {
    bands.color1 = targetted.target.classList[1];
    bandOne.setAttribute('class', `band ${bands.color1}`);
  } else if (targettedParent === 'color1') {
    bands.color2 = targetted.target.classList[1];
    bandTwo.setAttribute('class', `band ${bands.color2}`);
  } else if (targettedParent === 'color2') {
    bands.multiplier = targetted.target.classList[1];
    bandThree.setAttribute('class', `band ${bands.multiplier}`);
  } else if (targettedParent === 'color3') {
    bands.tolerance = targetted.target.classList[1];
    bandFour.setAttribute('class', `band ${bands.tolerance}`);
  }

  const calculateValue = getResistorOhms(bands);
  document.querySelector('.answer').innerText = calculateValue;
});
