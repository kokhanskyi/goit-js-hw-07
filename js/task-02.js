'use strict'

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

const liElements = ingredients.map(itemLi => {
   const liElem = document.createElement('li');
  liElem.textContent = itemLi;
  return liElem;
})
console.log(liElements)
ulRef.append(...liElements)
