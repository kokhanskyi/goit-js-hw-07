'use strict'

console.log(document);
console.log(categories);
const listCategories = categories.querySelectorAll('.item');
console.log(listCategories);
console.log(`'В списке ${listCategories.length} категории.'`);


const firstItemCategoriy = categories.querySelector('.item');
console.log(firstItemCategoriy);
console.log(firstItemCategoriy.textContent);

