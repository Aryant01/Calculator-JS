let display = document.getElementById('display');
let currentValue = '';

function appendNumber(number) {
    currentValue += number;
    display.value = currentValue;
}

function appendOperator(operator) {
    if (currentValue === '') return;
    currentValue += operator;
    display.value = currentValue;
}

function appendDot() {
    if (currentValue.includes('.')) return;
    currentValue += '.';
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function calculate() {
    try {
        currentValue = eval(currentValue);
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
        currentValue = '';
    }
}
