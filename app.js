//creating four functions: add, subtract, multiply, divide

function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide(a , b){
    return a / b;
}

//create function operate that takes in two nums and an operator
//then calls one of the above functions on the numbers 
function operate(num1, num2, operator){
    if(operator === '+') return add(num1, num2)
    if(operator === '-') return subtract(num1, num2)
    if(operator === '*') return multiply(num1, num2)
    if(operator === '/') return divide(num1, num2)
}

const myNumbers = document.getElementsByClassName("number")
const clearBtn = document.getElementById("clearBtn")
const equalBtn = document.getElementById("equalBtn")
const myOperators = document.getElementsByClassName("operator")
const decimalBtn = document.getElementById("decimal")
const plusMinusBtn = document.getElementById("plusMinus")

let num1 = undefined;
let num2 = undefined;
let currentOperator = undefined;
let result = undefined;
let operated = false;
let decimalClick = false;
let firstNumClick = false;

for(let number of myNumbers){
    number.addEventListener('click', function(){
        //don't let user click multiple zeros before a decimal
        if(document.getElementById("display").innerText != 'Err'){

            if(firstNumClick === false && document.getElementById("display").innerText === '0' || firstNumClick === false && document.getElementById("display").innerText === '-0'){
                firstNumClick = true;
            }

            if(num1 != undefined && num2 === undefined){
                if((document.getElementById("display").innerText !== '-') && (document.getElementById("display").innerText !== '-0.')){
                    document.getElementById("display").innerText = ''
                } 

                if(firstNumClick === true && document.getElementById("display").innerText === '0' || firstNumClick === true && document.getElementById("display").innerText === '-0'){
                    return;
                } else {
                    document.getElementById("display").innerText += number.innerText
                    num2 = number.innerText
                    operated = false;
                }
            } else if (num1 != undefined && num2 != undefined){
                if(firstNumClick === true && document.getElementById("display").innerText === '0' || firstNumClick === true && document.getElementById("display").innerText === '-0'){
                    return;
                } else{
                    document.getElementById("display").innerText += number.innerText
                }
            } else if(num1 === undefined){
                if(firstNumClick === true && document.getElementById("display").innerText === '0' || firstNumClick === true && document.getElementById("display").innerText === '-0'){
                    return;
                } else{
                    document.getElementById("display").innerText += number.innerText
                }
            }
        }
    })
}

clearBtn.addEventListener('click', function(){
    document.getElementById("display").innerText = '';
    num1 = undefined;
    num2 = undefined;
    currentOperator = undefined;
    decimalClick = false;
})

equalBtn.addEventListener('click', function(){
    num2 = document.getElementById("display").innerText;
    if(num2 === '-' || num2 === '0.' || num2 === '-0.'){
        num2 = NaN
    }
    if(Number(Math.abs(num2)) === 0 && currentOperator === '/'){
        document.getElementById("display").innerText = 'Err';
        num1 = undefined;
        num2 = undefined;
        currentOperator = undefined;
    } else if(num1 !=undefined && !isNaN(num2) && currentOperator != undefined){
        result = operate(num1, num2, currentOperator)
        document.getElementById("display").innerText = Math.round(result * 100) / 100;
        num1 = undefined;
        num2 = undefined;
        currentOperator = undefined;
    }
})

decimalBtn.addEventListener('click', function(){
    if(document.getElementById("display").innerText != 'Err'){
        if(decimalClick === false && document.getElementById("display").innerText == ''){
            decimalClick = true;
            document.getElementById("display").innerText += '0.'
        }else if(decimalClick === false && document.getElementById("display").innerText == '-'){
            decimalClick = true;
            document.getElementById("display").innerText += '0.'
        } else if(decimalClick === false && document.getElementById("display").innerText !== ''){
            decimalClick = true;
            document.getElementById("display").innerText += '.'
        }
    }
})

plusMinusBtn.addEventListener('click', function(){
    if(document.getElementById("display").innerText !== '' && document.getElementById("display").innerText !== '-' ){
        if(document.getElementById("display").innerText[0] == '-'){
            document.getElementById("display").innerText = document.getElementById("display").innerText.slice(1);
        } else if(document.getElementById("display").innerText[0] !== '-'){
            const minusSign = '-'
            let currentNum = document.getElementById("display").innerText
            document.getElementById("display").innerText = minusSign.concat(currentNum);
        }
    } else if(document.getElementById("display").innerText === ''){
        document.getElementById("display").innerText = '-'; 
    } else if (document.getElementById("display").innerText === '-'){
        document.getElementById("display").innerText = ''; 
    }
})

for(let operator of myOperators){
    operator.addEventListener('click', function(){
        if(document.getElementById("display").innerText != 'Err'){
            if(currentOperator != undefined && operated === false){
                if(document.getElementById("display").innerText == ''){
                    num2 = undefined
                } else if (document.getElementById("display").innerText !== ''){
                    num2 = document.getElementById("display").innerText;
                }
                if(!isNaN(num2)){
                    if(Number(Math.abs(num2)) === 0 && currentOperator === '/'){
                        document.getElementById("display").innerText = 'Err';
                        num1 = undefined;
                        num2 = undefined;
                        currentOperator = undefined;
                    } else {
                        result = operate(num1, num2, currentOperator)
                        document.getElementById("display").innerText = Math.round(result * 100) / 100;
                        decimalClick = false;
                        num1 = Math.round(result * 100) / 100;
                        num2 = undefined;
                        operated = true;
                        currentOperator = operator.innerText;
                    }
                } else if(isNaN(num2)){
                    currentOperator = operator.innerText;
                }
            } else if(currentOperator != undefined && operated === true){
                currentOperator = operator.innerText;
            } else if(currentOperator === undefined){
                currentOperator = operator.innerText
                num1 = document.getElementById("display").innerText;
                document.getElementById("display").innerText = '';
                decimalClick = false;
            } 
        }
        })
    }



