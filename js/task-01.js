'use strict'

const listCategories = document.querySelectorAll('.item');
console.log(listCategories);
console.log(`'В списке ${listCategories.length} категории.'`);

listCategories.forEach(item => {
    const h2 = item.children[0].textContent;
    const ul = item.querySelector('ul').children.length;
    console.log(`Категория: ${h2}
    Количество элементов: ${ul}`)
})