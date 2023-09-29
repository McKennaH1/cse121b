/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
    return number1 * number2;
}    

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let yearSety = currentDate.getFullYear();



/* Output Year to footer */
const YearPush = document.getElementById('year');
console.log(yearSety);

YearPush.textContent = yearSety;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numberelement = document.getElementById('array');
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
numberelement.textContent = numbersArray;

//document.getElementById('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
const oddNumbers = document.getElementById('odds');
const odds = numbersArray.filter((num) => num % 2 === 1);
console.log(odds);

oddNumbers.textContent = odds;

/* Output Evens Only Array */
const evenNumbers = document.getElementById('evens');
const evens = numbersArray.filter((number) => number % 2 === 0);
console.log(evens);

evenNumbers.textContent = evens;


/* Output Sum of Org. Array */
const sumOfArray = document.getElementById('sumOfArray');
const initialValue = 0;
const sumWithInitial = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);

sumOfArray.textContent = sumWithInitial;


/* Output Multiplied by 2 Array */
const sumofSourceArray = document.getElementById('multiplied');
const multipliedArray = numbersArray.map(number => number * 2);
console.log(multipliedArray);

sumofSourceArray.textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumofMultipliedArray = document.getElementById('sumOfMultiplied');

const sumAddedOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

const sumMultiplied = sumAddedOfArray * 2;

console.log(sumMultiplied);

sumofMultipliedArray.textContent = sumMultiplied;