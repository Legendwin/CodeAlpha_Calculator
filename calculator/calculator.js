const previousOp = document.getElementById('previous-operand');
const currentOp = document.getElementById('current-operand');

let current = '0';
let previous = '';
let operation = null;

// Function to Handle Operations
function compute() {
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) {
        return;
    };
    let result;
    switch (operation) {
        case 'add':
            result = prev + curr;
            break;
        case 'subtract':
            result = prev - curr;
            break;
        case 'multiply':
            result = prev * curr;
            break;
        case 'divide':
            if (curr === 0) {
                result = 'Error';
                break;
            } else {
                result = prev / curr;
                break;
            };
        default:
            return;
    };
    if (result === 'Error') {
        current = 'Error';
        previous = '';
        operation = null;
        updateDisplay();
        return;
    } else {
        current = parseFloat(result.toFixed(10)).toString();
        previous = '';
        operation = null;
        updateDisplay();
    };
};

// Function to handle Operator Symbols
function opSymbol(op) {
    switch (op) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return '×';
        case 'divide':
            return '÷';
        default:
            return '';
    };
};

// Function to Update Calculator Values
function chooseOperation(op) {
    if (current === '') {
        return;
    };
    if (previous !== '') {
        compute();
    } else {
        operation = op;
        previous = current;
        current = '0';
        updateDisplay();
    };
};

// Function to handle input
function appendNumber(num) {
    if (current === 'Error') {
        current = '0';
    };
    if (num === '.' && current.includes('.')) {
        return;
    };
    if (current === '0' && num !== '.') {
        current = num;
    } else {
        current = current + num;
    };
    updateDisplay();
};

// Function to Clear All
function clearAll() {
    current = '0';
    previous = '';
    operation = null;
    updateDisplay();
};

// Function to Clear Current Entry
function clearEntry () {
    current = '0';
    updateDisplay();
};

// Function to Delete Single Digit
function deleteDigit() {
    if (current === 'Error') {
        clearAll();
        return;
    };
    if (current.length <= 1) {
        current = '0';
    } else {
        current = current.slice(0, -1);
    };
    updateDisplay();
};

// Function to Access Each Button Number
document.querySelectorAll('.btn.number').forEach(btn => {
    btn.addEventListener('click', (e) => appendNumber(e.target.dataset.number));
});

// Function to handle Calculator Actions
document.querySelectorAll('.btn.operator').forEach(btn => {
    const action = btn.dataset.action;
    if (action === 'clear') {
        btn.addEventListener('click', clearAll);
    } else if (action === 'clear-entry') {
        btn.addEventListener('click', clearEntry);
    } else if (action === 'delete') {
        btn.addEventListener('click', deleteDigit);
    } else if (action === 'equals') {
        btn.addEventListener('click', compute);
    } else {
        btn.addEventListener('click', () => chooseOperation(action));
    };
});

// Function to handle Keyboard Input
function handleKeyboardInput(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.') {
        event.preventDefault();
        appendNumber(key);
        return;
    }

    const operatorMap = {
        '+': 'add',
        '-': 'subtract',
        '*': 'multiply',
        '/': 'divide',
    };

    if (Object.prototype.hasOwnProperty.call(operatorMap, key)) {
        event.preventDefault();
        chooseOperation(operatorMap[key]);
        return;
    }

    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        compute();
        return;
    }

    if (key === 'Backspace') {
        event.preventDefault();
        deleteDigit();
        return;
    }

    if (key === 'Delete') {
        event.preventDefault();
        clearEntry();
        return;
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        event.preventDefault();
        clearAll();
    }
}

document.addEventListener('keydown', handleKeyboardInput);

// Function to Update Calculator Display
function updateDisplay() {
    currentOp.textContent = current;
    previousOp.textContent = operation && previous ? `${previous} ${opSymbol(operation)}` : '';
};

updateDisplay();