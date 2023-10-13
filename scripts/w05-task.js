/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElem= document.createElement("article");

        const h3Elem = document.createElement("h3");
        h3Elem.textContent = temple.templeName;

        const imgElem = document.createElement("img");
        imgElem.src = temple.imageUrl;
        imgElem.alt = temple.location;
        
        articleElem.appendChild(h3Elem);
        articleElem.appendChild(imgElem);

        templeElement.appendChild(articleElem);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
function reset(elementID) {
    document.getElementById(elementID).innerHTML = "";
}


/* sortBy Function */
function sortBy(temples){
    reset("temples");
    let filter = document.getElementById("sortBy").value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            const older = new Date(1950, 0, 1);
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < older));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            break;
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();