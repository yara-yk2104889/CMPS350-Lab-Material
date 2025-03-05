// Check if this file works and is linked to the html page
// console.log("Yes the file is linked");

// end points
const regionsEndPoint = "https://restcountries.com/v3.1/region/";
const countryEndPoint = "https://restcountries.com/v3.1/name/";

// Get the references to the DOM elements

const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");
const factsArea = document.querySelector("#facts-area");


// add event listener 
regionDD.addEventListener('change', handleRegionChange);

// write the function to handle the change event

async function handleRegionChange(e) {
    // get the countries of the selected region from an API end point
    const url = `${regionsEndPoint}${e.target.value}`;
    const response = await fetch(url)
    const data = await response.json();
    const countryOptions = data
        .map(country => country.name.common)
        .map(name => `<option value="${name}">${name}</option>`)
        .join('');

    countryDD.innerHTML = countryOptions;


}