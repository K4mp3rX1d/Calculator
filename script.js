// Elements:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');


// Function declarations:
function drawKeys() {
    keys = ['C', '%', '√', '⌫', 1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, 'x', '.', 0, '=', '/'];
    for (const key of keys) {
        const button = document.createElement('button');
        button.textContent = key;
        button.classList.add('key');    
        button.addEventListener('click', printKey);
        keypad.appendChild(button);
    }
}

function printKey(event) {
    const key = event.target.textContent;
    display.textContent += key
}

drawKeys();