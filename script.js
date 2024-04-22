// Elements:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');


// Function declarations:
function drawKeys() {
    keys = ['C', '%', 'rt', '<', 1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, 'x', '.', 0, '=', '/'];
    for (const key of keys) {
        const button = document.createElement('button');
        button.textContent = key;
        button.classList.add('key')
        keypad.appendChild(button);
    }
}

drawKeys();