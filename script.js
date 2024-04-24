// Elements:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');


// Function declarations:
function drawKeys() {
    const keys = [
        'C', '%', '√', '⌫', 1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, 'x', '.', 0, '=', '/'
    ];
    const bindings = [
        clearDisplay, printKey, printKey, printKey,
        showNum, showNum, showNum,  printKey,
        showNum, showNum, showNum,  printKey,
        showNum, showNum, showNum,  printKey,
        printKey, showNum,  printKey,  printKey
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

function printKey(event) {
    const key = event.target.textContent;
    display.textContent += key
}

function showNum(event) {
    printKey(event);
}

function clearDisplay() {
    display.textContent = "";
}

drawKeys();