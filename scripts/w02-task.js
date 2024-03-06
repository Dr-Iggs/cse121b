/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName='Spencer Driggs';
let currentYear = 2024;
let profilePicture = 'images/profile.jpg';


 
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name'); //collect from the html
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year'); //# required with querySelector to get element IDs
const imageElement = document.querySelector('img'); //PROB DOESN'T WORK



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`; // backticks to make literal string, ${} to add variables
yearElement.textContent = currentYear;
imageElement.setAttribute('alt',`Profile image of ${fullName}`);
imageElement.setAttribute('src',profilePicture);


/* Step 5 - Array */
let favFoods = ['Sushi','Pavlova','Balsamic Sandwiches','Kiwis'];
foodElement.innerHTML = favFoods;
let moreFood = 'Cheeto burrito';
favFoods.push(moreFood);
foodElement.innerHTML += `<br>${favFoods}`
favFoods.splice(0,1)
foodElement.innerHTML += `<br>${favFoods}`
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`
//for (let i = 0; i < favFoods.length; i++) {
//    foodElement.innerHTML(+)
//  }




