let h1 = document.querySelector('h1');

h1.textContent = 'Моя обновленная первая страница с DOM';
h1.id = 'main-title';

let p = document.querySelector('p');
p.classList.add('text');

let ul = document.querySelector('ul');

for(let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = 'Пункт ' + i
    ul.append(li);
}

let button = document.createElement('button');
button.textContent = 'Скрыть текст';
document.querySelector('body').append(button);
button.onclick = () => {
    p.hidden = true;
}

let liList = document.querySelectorAll('li');
liList.forEach(li => {
    li.classList.add('list-item');
})

let listItems = document.querySelectorAll('.list-item');
listItems.forEach(listItem => {
    listItem.textContent = 'Элемент списка';
})

console.log(listItems[0]);

let pTag = document.querySelector('.text');
pTag.setAttribute('data-description', 'Это абзац на моей первой странице с DOM');

let deleteButton = document.createElement('button');
deleteButton.textContent = 'Удалить последний элемент списка';
document.querySelector('body').append(deleteButton);
let ulTag = document.querySelector('ul');

deleteButton.onclick = () => {
    if (ulTag.lastElementChild) {
        ul.lastElementChild.remove();
    } 

    if (!ulTag.lastElementChild) {
        deleteButton.disabled = true;
    }
}

let logListContent = () => console.log(ulTag.innerHTML);

let consoleButton = document.createElement('button');
consoleButton.textContent = 'Вывести в консоль';
document.querySelector('body').append(consoleButton);
consoleButton.onclick = logListContent;

