console.log("Скрипт запущен");
alert("Скрипт запущен");

let name = '';
let description = '';
let frequency = 0;
let count = 0;
let sum = 0;

const nameInput = document.querySelector('#habit-name');
const descriptionInput = document.querySelector('#description');
const frequencySelect = document.querySelector('#frequency');
const countInput = document.querySelector('#count');
const sumElement = document.querySelector('#sum');

console.log(nameInput, descriptionInput, frequencySelect, countInput, sumElement);

function nameInputHandler(ev) {
    name = ev.target.value;
    console.log(name);
}
nameInput.addEventListener('input', nameInputHandler);

function frequencyChange(ev) {
    const value = ev.target.value;
    frequency = value ? parseInt(value) : 0;
    setSum();
    console.log(frequency);
}
frequencySelect.addEventListener('change', frequencyChange);

function countInputHandler(ev) {
    const value = ev.target.value;
    count = value ? parseInt(value) : 0;
    setSum();
    console.log(count);
}
countInput.addEventListener('input', countInputHandler);

function setSum() {
    sum = frequency * count;
    sumElement.textContent = sum;
    console.log("Сумма обновлена:", sum);
}

const formElement = document.querySelector('form');
formElement.addEventListener('submit', (ev) => {
    ev.preventDefault();
    description = descriptionInput.value;
    console.log(name, description, frequency, count, sum);
    alert(`Навык сохранён!\nИмя: ${name}\nОписание: ${description}\nЧастота: ${frequency}\nКоличество: ${count}\nИтого: ${sum}`);
});