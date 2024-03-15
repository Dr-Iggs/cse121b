/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(number1,number2);
}
document.querySelector('#addNumbers').addEventListener(type='click',listener=addNumbers);
/*tie the addNumbers html id to the addNumbers JS function*/

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1-number2;
}
const subtractNumbers = function() {
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(number1,number2);
}
document.querySelector('#subtractNumbers').addEventListener(type='click',listener=subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2
}
const multiplyNumbers = () => {
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(number1,number2);
}
document.querySelector('#multiplyNumbers').addEventListener(type='click',listener=multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => {
    return dividend / divisor
}
const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend,divisor);
}
document.querySelector('#divideNumbers').addEventListener(type='click',listener=divideNumbers);


const getTotal = function() {
    let mynumber = Number(document.querySelector('#subtotal').value);
    if(document.querySelector('#member').checked) {
        mynumber = mynumber * .8;
    }
    myNumber = String(myNumber)
    if(length(myNumber))
    document.querySelector('#total').textContent = `$ ${Math.round(mynumber*100)/100}`;
}
/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = array;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = array.filter(number => number % 2 == 1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = array.filter(number => number % 2 == 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = array.reduce((sum,number) => sum+number)
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = array.map((number) => number * 2)
/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').textContent = array.map((number) => number * 2).reduce((sum,number) => sum+number)
