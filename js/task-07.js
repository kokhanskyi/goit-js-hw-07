'use strict';

const ref = {
  inputSize: document.querySelector('#font-size-control'),
  textSize: document.querySelector('#text'),
};

console.log(ref.textSize.textContent);
ref.inputSize.addEventListener('input', event => {
  ref.textSize.style.fontSize = ref.inputSize.value + 'px';
  //   console.log(ref.textSize.styles.fontSizeref = inputSize.value);
});
