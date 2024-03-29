/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = {};

/* async displayTemples Function */
const displaytemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let templeName = document.createElement('h3')
        templeName.textContent = temple.templeName;
        let templeImage = document.createElement('img')
        templeImage.setAttribute('src',temple.imageUrl)
        templeImage.setAttribute('alt',temple.location);
        article.appendChild(templeName).append(templeImage);
        templesElement.appendChild(article)
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displaytemples(templeList);
}

/* reset Function */

const reset = function() {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) => {    
    reset();
    const filter = document.getElementById('filtered').value;
  
    switch (filter) {
      case 'utah':
        displaytemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'notutah':
        displaytemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        displaytemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displaytemples(temples);
        break;
    }
  };
  
document.getElementById('filtered').addEventListener("change", () => {filterTemples(templeList)})
getTemples();

/* Event Listener */
 