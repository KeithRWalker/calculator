import calc from '../components/calculator.js';

//BUTTON SELECTORS
const divideButton   = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const subtractButton = document.getElementById('subtractButton');
const addButton      = document.getElementById('addButton');
const equalsButton   = document.getElementById('equalsButton');
const oneButton      = document.getElementById('oneButton');
const twoButton      = document.getElementById('twoButton');
const threeButton    = document.getElementById('threeButton');
const fourButton     = document.getElementById('fourButton');
const fiveButton     = document.getElementById('fiveButton');
const sixButton      = document.getElementById('sixButton');
const sevenButton    = document.getElementById('sevenButton');
const eightButton    = document.getElementById('eightButton');
const nineButton     = document.getElementById('nineButton');
const zeroButton     = document.getElementById('zeroButton');

const addNumber = (e) => {
    e.preventDefault();
    calc.addNumber(e.target.innerHTML);
}

const attachEvents = () => {//EVENT LISTENER FUNCTION FOR BUTTONS//
    
    oneButton.addEventListener('click', addNumber);
    twoButton.addEventListener('click', addNumber);
    threeButton.addEventListener('click', addNumber);
    fourButton.addEventListener('click', addNumber);
    fiveButton.addEventListener('click', addNumber);
    sixButton.addEventListener('click', addNumber);
    sevenButton.addEventListener('click', addNumber);
    eightButton.addEventListener('click', addNumber);
    nineButton.addEventListener('click', addNumber);
    zeroButton.addEventListener('click', addNumber);

    addButton.addEventListener('click', (e) => {
        e.target.className += " selectedButton";
        calc.setMathType('add');
    });

    subtractButton.addEventListener('click', (e) => {
        e.target.className += " selectedButton";
        calc.setMathType('subtract');
    });

    multiplyButton.addEventListener('click', (e) => {
        e.target.className += " selectedButton";
        calc.setMathType('multiply');
    });

    divideButton.addEventListener('click', (e) => {
        e.target.className += " selectedButton";
        calc.setMathType('divide');
    });

        equalsButton.addEventListener('click', () => {
        calc.calculate();
    });
};
export default { attachEvents };