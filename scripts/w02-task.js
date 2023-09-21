/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const Fullname = 'McKenna Harker';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/mckennaharker.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const imageElement = document.getElementById('image').src = profilePicture;
const yearElement = document.querySelector('#year');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${Fullname}</strong>`;
yearElement.textContent = currentYear;

/* Step 5 - Array */
let foodArray = ["Chicken Strips", "Strawberry Shortcake", "Apple Pie", "Steak", "Chicken Salad Sandwiches", "Ramen", "Sushi", "Cafe Rio Salads"];

foodElement.textContent = foodArray;

foodArray.push('Grapes');

foodElement.innerHTML += `<br>${foodArray}`

foodArray.shift()

foodElement.innerHTML += `<br>${foodArray}`

foodArray.pop();

foodElement.innerHTML += `<br>${foodArray}`


