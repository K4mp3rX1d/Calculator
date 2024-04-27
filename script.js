// DOM Elements:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');

// Global Variables:
const operators = {
    '+': add,
    '-': substract,
    'x': multiply,
    '/': divide,
};
const operands = [];
let currentOperator = '';

// Function Declarations:
function drawKeys() {
    const keys = [
        'C', '%', '√', '⌫',1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, 'x', '.', 0, '=', '/'
    ];
    const bindings = [
        clearDisplay, printKey, printKey, printKey,
        operate, operate, operate,  handleOperator,
        operate, operate, operate,  handleOperator,
        operate, operate, operate,  handleOperator,
        printKey, operate,  displayResult,  handleOperator
    ];
    for (let i = 0; i < keys.length; i++) {
        const button = document.createElement('button');
        const callback = bindings[i];
        button.textContent = keys[i];
        button.classList.add('key');  
        button.addEventListener('click', callback);
        keypad.appendChild(button);
    }
}


// Test-codes:
drawKeys();