const displayVal = document.querySelector('.screen');
const operations = document.querySelectorAll('.operation')
const buttons = document.querySelectorAll('.nums')
const evaluate = document.querySelector('.equals');
const clr = document.querySelector('.clear');
let oldVal = null;
let actionOp = null;


function add(a, b) {
    a = +a;
    b = +b;
    return a+b;
}

function subtract(a, b) {
    a = +a;
    b = +b;
    return a-b;
}

function multiply(a, b) {
    a = +a;
    b = +b;
    return a*b;
}

function divide(a, b) {
    a = +a;
    b = +b;
    if(b == 0) {
        alert("Divide by zero!!!!!!!!!!");
        return;
    }
    return a/b;
}



function operate(operator, a, b) {
    if(operator == '+') {
        return add(a, b);
    }else if(operator == '-') {
        return subtract(a, b);
    }else if(operator == '*') {
        return multiply(a, b);
    }else if(operator == '/') {
        return divide(a, b);
    }
    return 'OOPS';
}



function calculate() {
    let result = null;
    if(actionOp == "+"){
        result=add(oldVal, displayVal.innerText)
    }else if(actionOp == "-"){
        result= subtract(oldVal, displayVal.innerText)
    }else if(actionOp == "*") {
        result= multiply(oldVal, displayVal.innerText)
    }else if(actionOp == "/") {
        result= divide(oldVal, displayVal.innerText)
    }
    return result;
}



function eval() {
    let result = calculate();
    // oldVal = result;
    displayVal.innerText = result;   
    actionOp = null;

}



function clearScreen() {
    displayVal.innerText = "";
    oldVal = null;
    actionOp = null;
}



function populate() {
    let buttonValue = this.innerText;
    displayVal.innerText = displayVal.innerText + buttonValue;
}



function action() {
    if(actionOp !== null) {
        eval();
    }
    actionOp = this.innerText;
    oldVal = displayVal.innerText;
    displayVal.innerText= "";
    
}


evaluate.addEventListener('click', eval);

clr.addEventListener('click', clearScreen);

buttons.forEach((button)=> {
    button.addEventListener('click', populate);
})

operations.forEach((operator)=>{
    operator.addEventListener('click', action);
})