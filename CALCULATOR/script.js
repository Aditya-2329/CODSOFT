let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (currentInput === '' && char === '.') {
        currentInput = '0.';
    } else {
        currentInput += char;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.textContent = '0';
    } else {
        display.textContent = currentInput;
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
