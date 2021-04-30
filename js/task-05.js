'use strict';
const ref = {
  inputName: document.querySelector('#name-input'),
  spanName: document.querySelector('#name-output'),
};

ref.inputName.addEventListener('input', event => {
  if (ref.inputName.value === '') {
    ref.spanName.textContent = 'незнакомец';
  } else {
    ref.spanName.textContent = ref.inputName.value;
  }
});
