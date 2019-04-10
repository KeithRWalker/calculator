import util from '../helpers/util.js';
import maths from '../helpers/maths.js'

let calc = {
    firstNumber      : '', //entered number
    secondNumber     : '',//given number
    mathType         : '',//after 
    display          : ''//end result
};

const setDisplay = (numToPrint) => {
    calc.display=numToPrint;
    util.printToDom('result', calc.display);
};

const addNumber = (num) => {
    if(calc.mathType === ''){        //  First Num          //  '3' + '4' = '34' (string still)
        calc.firstNumber += num;
        setDisplay(calc.firstNumber);//displays result
    } else{                          //  Second Num         //  '3' + '4' = '34' (string still)
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
    };
};

const setMathType = (newType) => {
    calc.mathType = newType;
};

const calculate = () => {
    let answer = 0;
    switch(calc.mathType) {
        case 'add':
            answer = maths.add(calc.firstNumber, calc.secondNumber);
            break;

        case 'subtract':
            answer = maths.subtract(calc.firstNumber, calc.secondNumber)
            break;

        case 'multiply':
            answer = maths.multiply(calc.firstNumber, calc.secondNumber)
            break;

        case 'divide':
            answer = maths.divide(calc.firstNumber, calc.secondNumber)
            break;

        default:
            answer='you broke it';
    }
    setDisplay(answer);
};

export default {addNumber, setMathType, calculate}