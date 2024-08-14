const MAX_NUM = 150;

const MIN_NUM = 0;


let currentNumber = 0;

let history = [];

let redoStack = [];


// Initialize the display

function updateDisplay() {

document.getElementById('numberDisplay').innerText = currentNumber;
const progressBar = document.getElementById('progressBar');
const percentage = (currentNumber / MAX_NUM) * 100;
progressBar.style.width = percentage + '%';

}


// Perform an operation

function performOperation(operation){
if(operation === 'add') {
   if (currentNumber < MAX_NUM) {
     history.push(currentNumber);
      redoStack = []; // Clear redo stack
       currentNumber++;

}
} else if (operation === 'subtract') {
if (currentNumber > MIN_NUM) {
history.push(currentNumber);
redoStack = []; // Clear redo stack
currentNumber--;
}
}
updateDisplay();

}


// Undo the last operation

function undo() {

if (history.length > 0) {
    redoStack.push(currentNumber);
     currentNumber = history.pop();
     updateDisplay();
}

}


// Redo the last undone operation

function redo() {

if (redoStack.length > 0) {
    history.push(currentNumber);
    currentNumber = redoStack.pop();
    updateDisplay();
}

}


document.getElementById('add').addEventListener('click', () => performOperation('add'));

document.getElementById('subtract').addEventListener('click', () => performOperation('subtract'));

document.getElementById('undo').addEventListener('click', undo);

document.getElementById('redo').addEventListener('click', redo);


// Initial update

updateDisplay();