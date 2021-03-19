//creating four functions: add, subtract, multiply, divide

function add(a, b){
    return a + b;
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

for(let number of myNumbers){
    number.addEventListener('click', function(){
        document.getElementById("display").innerText += number.innerText
    })
}

clearBtn.addEventListener('click', function(){
    document.getElementById("display").innerText = '';
})


