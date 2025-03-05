// Check if this file works and is linked to the html page
console.log("Yes the file is linked");


// Get the references to the DOM elements

const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");
const factsArea = document.querySelector("#facts-area");


// add event listener 
regionDD.addEventListener('change', handleRegionChange);

// write the function to handle the change event

function handleRegionChange(e) {
    factsArea.innerHTML += `<h1>${e.target.value}</h1>`;
}