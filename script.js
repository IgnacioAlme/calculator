const btnNumbers = document.querySelectorAll('.number');
const display = document.getElementById('display');
const btnClear = document.getElementById('clear');
const btnDel = document.getElementById('delete');
const btnOperators = document.querySelectorAll('.operator');
const btnEqual = document.querySelector('.equal');

let queue = "";
let saved = "";
let op;

function getNumber() {
    queue += this.id;
    console.log(queue);
    display.innerHTML += this.id;
}
function delDisplay() {
    display.innerHTML = "";
    saved = "";
    queue = "";
    op = "";
}
function separateQueue() {
    saved = queue;
    display.innerHTML = "";
    queue = "";
    op = this.id;
}
function showOnDisplay() {
    let result = operator(op, saved, queue);
    queue = result;
    display.innerHTML = result;
}
function delNumber() {
    queue = queue.slice(0, -1);
    display.innerHTML = queue;
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operator(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            if (num2 === 0) return null;
            else return divide(num1, num2);
        default:
            return null;
    }
}


btnNumbers.forEach(btnNumber => btnNumber.addEventListener('click', getNumber));
btnOperators.forEach(btnOperator => btnOperator.addEventListener('click', separateQueue));
btnEqual.addEventListener('click', showOnDisplay);
btnClear.addEventListener('click', delDisplay);
btnDel.addEventListener('click', delNumber);