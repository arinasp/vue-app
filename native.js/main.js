const { handleError } = require("vue");

console.log("Скрипт запущен");
alert("Скрипт запущен");
const habit={
    name:'',
    description:'',
    frequency:0,
    count:0,
    sum:0,

};

const nameMeta={
    selector:document.querySelector('#habit-name'),
    handler:(ev)=>{
        habit.name=ev.target.value;
        console.log(name);
    }
}

const descriptionMeta = {
    selector: document.querySelector('#description'),
    handler: (ev) => {
        habit.description = ev.target.value;
        console.log('habit.description:', habit.description);
    }
};

const frequencyMeta = {
    selector: document.querySelector('#frequency'),
    handler: (ev) => {
        const value = ev.target.value;
        habit.frequency = value ? parseInt(value) : 0;
        console.log('habit.frequency:', habit.frequency);
        setSum();
    }
};

const countMeta = {
    selector: document.querySelector('#count'),
    handler: (ev) => {
        const value = ev.target.value;
        habit.count = value ? parseInt(value) : 0;
        console.log('habit.count:', habit.count);
        setSum();
    }
}
const metaData=[nameMeta];
for (const {selector, handler} of metaData){
    if(selector.tagName.toLowerCase()== 'select'){
        selector.addEventListener('change', handler)
    }
    else
        selector.addEventListener('input', handler)
}
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

const formElement=
